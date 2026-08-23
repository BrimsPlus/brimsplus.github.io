import { defineConfig } from 'vitepress'
// @ts-ignore
import {teekConfig} from "./teek-config.mts";
import {setupPrizeContainer} from "./theme/prize-container";

// @ts-ignore
const icpName = process.env.ICP_NAME || null;

export default defineConfig({
  extends: teekConfig,
  title: 'BRIMS++',
//   description: '基于 VitePress 的文档站点',
  lang: 'zh-CN',
  cleanUrls: true,
  head: [
    ['meta', { name: 'author', content: '南华大学计算机学院区块链++协会, BRIMS++' }],
    ['meta', { name: 'keywords', content: '南华大学计算机学院区块链++协会, BRIMS++, Beyond the Edge., 南华大学, University of South China, USC' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  ],
  markdown: {
    image: {
      lazyLoading: true,
    },
    math: true,
    lineNumbers: true,
    config(md){
      setupPrizeContainer(md)
    }
  },
  themeConfig: {
    docFooter: {
      next: "下一篇",
      prev: "上一篇",
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '协会简介', link: '/intro' },
      { text: '师资团队', link: '/supervisors' },
      { text: '部门架构', link: '/structure' },
      { text: '科研成果', link: '/papers' },
      { text: '竞赛奖项', link: '/achievements' },
      // { text: '学习动态', link: '/' },
      // { text: '项目展示', link: '/' },
    ],
    sidebarMenuLabel: "目录",
    outline: {
      label: "本页导航"
    },
    notFound: {
        title: "哎呀！您访问的页面没找着呀！",
        quote: "点击下面的按钮回到首页",
        linkText: "返回首页"
    },
    darkModeSwitchLabel: "暗色主题",
    darkModeSwitchTitle: "切换暗色",
    lightModeSwitchTitle: "切换亮色",
    returnToTopLabel: "返回顶部",
  }
})
