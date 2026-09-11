/**
 * 奖项证书图片懒加载
 * 点击「查看证书」时才加载图片，节省流量
 * import 时自动初始化，无需手动调用
 */

if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (target.tagName !== 'SUMMARY') return

    const details = target.closest('details.award-img-toggle') as HTMLDetailsElement | null
    if (!details) return

    requestAnimationFrame(() => {
      if (!details.open) return
      const img = details.querySelector('img[data-src]') as HTMLImageElement
      if (img?.dataset.src) {
        img.src = img.dataset.src
        img.removeAttribute('data-src')
      }
    })
  })
}
