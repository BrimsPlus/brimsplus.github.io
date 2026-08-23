// @ts-ignore
import type MarkdownIt from 'markdown-it'
// @ts-ignore
import container from 'markdown-it-container'
import * as yaml from 'js-yaml'

interface PrizeItem {
  prize: string
  members: string
  details: string
  img?: string
  imgHint?: string
}

function renderPrizeItems(items: PrizeItem[]): string {
  let html = ''
  for (const item of items) {
    const prize = item.prize || ''
    const members = item.members || ''
    const details = item.details || ''
    const img = item.img || ''
    const imgHint = item.imgHint || ''

    html += `<div class="award-item">
<div class="award-title">${prize}</div>
<div class="award-detail">
<span class="members">${members}</span><br/>
${details}${img ? `
<details class="award-img-toggle">
<summary>查看证书</summary>
<div class="award-img-content">
<img src="${img}"  alt="${imgHint}"/>
</div>
</details>` : ''}
</div>
</div>
`
  }
  return html
}

export function setupPrizeContainer(md: MarkdownIt) {
  // 先用 markdown-it-container 注册容器（让它解析出 token），render 返回空
  // 然后用一个自定义 block 规则在容器内把 fence token 替换掉
  md.use(container, 'prize', {
    validate(params: string) {
      return params.trim() === 'prize'
    },
    render(tokens: any[], idx: number) {
      const token = tokens[idx]
      if (token.nesting === 1) {
        // 收集内部 fence 代码块的 YAML 内容
        let yamlContent = ''
        let i = idx + 1
        let depth = 1
        while (i < tokens.length && depth > 0) {
          if (tokens[i].type === 'container_prize_open') depth++
          if (tokens[i].type === 'container_prize_close') depth--
          if (depth > 0 && (tokens[i].type === 'fence' || tokens[i].type === 'code_block')) {
            yamlContent += tokens[i].content
          }
          i++
        }

        // 解析 YAML
        let items: PrizeItem[] = []
        try {
          const parsed = yaml.load(yamlContent)
          if (Array.isArray(parsed)) {
            items = parsed as PrizeItem[]
          }
        } catch (e) {
          console.warn('Failed to parse prize container YAML:', e)
        }

        return renderPrizeItems(items)
      }
      return ''
    }
  })

  // 隐藏 prize 容器内部的所有内容（让 render 阶段只输出 open tag 生成的 HTML）
  const originalRender = md.renderer.rules.fence
  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    // 检查这个 fence 是否在 prize 容器内
    let inPrize = false
    let depth = 0
    for (let k = 0; k < idx; k++) {
      if (tokens[k].type === 'container_prize_open') depth++
      if (tokens[k].type === 'container_prize_close') depth--
    }
    if (depth > 0) {
      return ''
    }
    return originalRender
      ? originalRender(tokens, idx, options, env, self)
      : self.renderToken(tokens, idx, options)
  }

  // 同样处理容器内的其他可能输出
  md.renderer.rules.container_prize_close = function () {
    return ''
  }
}
