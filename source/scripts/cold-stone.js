const themes = {
  dark: 'dark',
  light: 'light'
}

const documentHead = document.getElementsByTagName('head')[0]

const localTheme = localStorage.getItem('theme')
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
const darkThemeHref = 'https://cdn.bootcss.com/highlight.js/9.15.10/styles/atom-one-dark.min.css'

function insertThemeDarkLink() {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = darkThemeHref

  documentHead.appendChild(link)
}

function removeThemeDarkLink() {
  const links = document.querySelectorAll('link')

  for (let i = 0; i < links.length; i++) {
    const link = links[i]

    if (link.href === darkThemeHref) {
      documentHead.removeChild(link)
    }
  }
}

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
  navs.forEach(function (nav, index) {
    if (nav === path) {
      const item = navLinkList.find(function (item) {
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

tocLinkList.forEach(function (link) {
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
  const isDarkTheme = isDarkMode || localTheme === themes.dark
  if (isDarkTheme) {
    insertThemeDarkLink()
    uscript.setAttribute('theme', 'github-dark')
  } else {
    uscript.setAttribute('theme', 'github-light')
    removeThemeDarkLink()
  }
  utteranc.appendChild(uscript)

  // 假装在加载
  const timeout = setTimeout(function () {
    loader.remove()
    clearTimeout(timeout)
  }, 3000)
}

// back
const back = document.getElementById('back')

if (back) {
  back.addEventListener('click', function () {
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

  backTop.addEventListener('click', function () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })
}

// toggle theme
const toggle = document.querySelector('.footer-toggle')

const darkBtn = document.querySelector('.dark-btn')
const lightBtn = document.querySelector('.light-btn')



if (localTheme === themes.dark) {
  document.body.classList.add('dark')
  insertThemeDarkLink()
  if (darkBtn) {
    darkBtn.classList.remove('show')
    lightBtn.classList.add('show')
  }
} else {
  removeThemeDarkLink()
  if (darkBtn) {
    lightBtn.classList.remove('show')
    darkBtn.classList.add('show')
  }
}

function findTheme(target) {
  const theme = target.dataset.theme
  if (theme) {
    return theme
  }
  return findTheme(target.parentElement)
}

if (toggle) {

  toggle.addEventListener('click', event => {
    const theme = findTheme(event.target)
    localStorage.setItem('theme', theme)

    switch (theme) {
      case themes.dark:
        document.body.classList.add('dark')
        darkBtn.classList.remove('show')
        lightBtn.classList.add('show')
        break;
      case themes.light:
        removeThemeDarkLink()
        document.body.classList.remove('dark')
        lightBtn.classList.remove('show')
        darkBtn.classList.add('show')
        break;
    }
  })
}

// article
const article = document.querySelector('.article')

if (article) {
  const articleToc = document.querySelector('.article-toc')

  article.addEventListener('mouseenter', () => {
    // const timeout = setTimeout(() => {
    //   articleToc.classList.add('fade')
    //   clearTimeout(timeout)
    // }, 300)
    articleToc.classList.add('fade')
  })

  article.addEventListener('mouseleave', () => {
    articleToc.classList.remove('fade')
  })
}

// wave
// const wave = document.getElementById('wave')

// if (wave) {
//   const colors = ['#ffffff']
//   const random = colors[Math.floor(Math.random() * colors.length)]
//   const path = wave.getElementsByTagName('path')[0]
//   path.setAttribute('fill', random)
// }
