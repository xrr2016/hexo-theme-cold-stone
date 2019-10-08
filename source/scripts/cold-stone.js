// service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}

// nav item
const path = location.pathname
const navLinkList = Array.from(document.querySelectorAll('.nav-list-item'))
const navs = [
  '/projects/',
  '/categories/',
  '/tags/',
  '/archives/',
  '/about/',
  '/friends/'
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

// highlight
hljs.initHighlightingOnLoad()

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
  uscript.setAttribute('theme', 'github-light')
  utteranc.appendChild(uscript)

  // 假装在加载
  const timeout = setTimeout(function() {
    loader.remove()
    clearTimeout(timeout)
  }, 3000)
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

// leon
const canvas = document.getElementById('prelude')

if (canvas) {
  let leon

  const ANIMATE_TIME = 2 // seconds
  const THREE_MINUTE = 3 * 60 * 1000

  const sw = window.innerWidth
  const sh = window.innerHeight
  const pixelRatio = window.devicePixelRatio
  const ctx = canvas.getContext('2d')
  const animatedTime = localStorage.getItem('animatedTime')

  function init() {
    canvas.width = sw * pixelRatio
    canvas.height = sh * pixelRatio
    ctx.scale(pixelRatio, pixelRatio)

    leon = new LeonSans({
      text: 'Cold Stone',
      color: ['#000000'],
      size: 80,
      weight: 200
    })

    requestAnimationFrame(draw)
  }

  function draw(t) {
    requestAnimationFrame(draw)

    ctx.clearRect(0, 0, sw, sh)

    const x = (sw - leon.rect.w) / 2
    const y = (sh - leon.rect.h) / 2
    leon.position(x, y)

    leon.draw(ctx)
  }

  function animate() {
    const total = leon.drawing.length

    for (let i = 0; i < total; i++) {
      TweenMax.fromTo(
        leon.drawing[i],
        ANIMATE_TIME,
        { value: 0 },
        {
          delay: i * 0.05,
          value: 1,
          ease: Power4.easeOut
        }
      )
    }

    const timeout = setTimeout(function() {
      clearTimeout(timeout)
      document.body.removeChild(canvas)
      localStorage.setItem('animatedTime', Date.now())
    }, ANIMATE_TIME * 1000)
  }

  if (!animatedTime || Date.now() > parseInt(animatedTime) + THREE_MINUTE) {
    init()
    animate()
  } else {
    document.body.removeChild(canvas)
  }
}
