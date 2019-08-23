// service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}

// nav item
const path = location.pathname
const navLinkList = Array.from(document.querySelectorAll('.nav-link'))
const navs = ['/projects/', '/categories/', '/tags/', '/archives/', '/about/']

if (path === '/' || /page/.test(path)) {
  navLinkList[0].classList.add('active')
} else {
  navs.forEach(function(nav, index) {
    if (nav === path) {
      const item = navLinkList.find(function(item) {
        const link = item.dataset.link
        return link === nav
      })

      item.classList.add('active')
    }
  })
}

// code highlight
document.addEventListener('DOMContentLoaded', event => {
  document.querySelectorAll('figure.highlight').forEach(block => {
    hljs.highlightBlock(block)
  })
})

// toggle theme
const body = document.body
const head = document.getElementsByTagName('head')[0]
const toggle = document.getElementById('toggle')
const theme = localStorage.getItem('theme')

let link = document.createElement('link')
link.rel = 'stylesheet'
link.href =
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.9/styles/atom-one-light.min.css'

if (theme === 'dark') {
  link.href =
    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.9/styles/atom-one-dark.min.css'
  if (toggle) {
    toggle.checked = true
  }
  body.classList.add('dark')
}

head.append(link)

if (toggle) {
  toggle.addEventListener('change', event => {
    const target = event.target

    if (target.checked) {
      body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  })
}

// article toc
const tocLinkList = document.querySelectorAll('.toc-link')

tocLinkList.forEach(function(link) {
  const href = link.href
  const newHref = href.replace(location.origin + '/', location.href)
  link.setAttribute('href', newHref)
})

// comment
const loader = document.getElementById('loader')
const utteranc = document.getElementById('utteranc')

if (utteranc) {
  const uscript = document.createElement('script')

  uscript.async = true
  uscript.crossOrigin = 'anonymous'
  uscript.src = 'https://utteranc.es/client.js'
  uscript.setAttribute('repo', window.COLD_STONE.repo)
  uscript.setAttribute('issue-term', 'pathname')

  if (theme === 'dark') {
    uscript.setAttribute('theme', 'github-dark')
  } else {
    uscript.setAttribute('theme', 'github-light')
  }

  utteranc.appendChild(uscript)
  // 假装在加载
  const timeout = setTimeout(function() {
    loader.remove()
    clearTimeout(timeout)
  }, 2000)
}
