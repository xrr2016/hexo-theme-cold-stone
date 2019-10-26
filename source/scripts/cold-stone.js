const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

// service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const path = window.COLD_STONE.root + 'sw.js'
    navigator.serviceWorker.register(path)
  })
}

// nav item
const path = location.pathname
const navLinkList = Array.from(document.querySelectorAll('.nav-list-item'))
const navs = [
  '/tags/',
  '/about/',
  '/friends/',
  '/projects/',
  '/archives/',
  '/categories/'
]

if (path === '/' || /page/.test(path)) {
  navLinkList[0].classList.add('active')
} else {
  navs.forEach(function(nav, index) {
    if (nav === path) {
      const item = navLinkList.find(function(item) {
        const link = item.dataset.link
        return link === nav
      })

      if (item) {
        item.classList.add('active')
      }
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
  if (isDarkMode) {
    uscript.setAttribute('theme', 'github-dark')
  } else {
    uscript.setAttribute('theme', 'github-light')
  }
  utteranc.appendChild(uscript)

  // 假装在加载
  const timeout = setTimeout(function() {
    loader.remove()
    clearTimeout(timeout)
  }, 3000)
}

// back
const back = document.getElementById('back')

if (back) {
  back.addEventListener('click', function() {
    history.back()
  })
}

// back-to-top
const backTop = document.getElementById('backTop')

if (backTop) {
  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.scrollingElement

    if (scrollTop + clientHeight >= scrollHeight) {
      backTop.classList.add('show')
    } else {
      backTop.classList.remove('show')
    }
  })

  backTop.addEventListener('click', function() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })
}
