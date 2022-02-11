self.addEventListener("install", (e) => {
	e.waitUntil(
		caches.open("static").then((cache) => {
			return cache.addAll([
				"./",
				"./levels.js",
				"./logo.png",
				"./style.css",
				"./app.js",
			])
		})
	)
})

self.addEventListener("fetch", (e) => {
	e.respondWith(
		caches.match(e.request).then((response) => {
			return response || fetch(e.request)
		})
	)
})
