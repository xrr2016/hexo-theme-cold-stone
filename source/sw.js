importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js')

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`)

  workbox.routing.registerRoute(
    '/',
    new workbox.strategies.NetworkFirst({
      cacheName: 'index'
    })
  )

  workbox.routing.registerRoute(
    /\/post.|/,
    new workbox.strategies.NetworkFirst({
      cacheName: 'posts'
    })
  )

  workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static'
    })
  )

  workbox.routing.registerRoute(
    /\.(otf|woff)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'fonts'
    })
  )

  workbox.routing.registerRoute(
    /\.(png|jpg|jpeg|svg|gif|webp)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 20,
          maxAgeSeconds: 7 * 24 * 60 * 60
        })
      ]
    })
  )
} else {
  console.log(`Boo! Workbox didn't load 😬`)
}
