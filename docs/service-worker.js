self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("uKnowHere").then((t) => t.addAll([
      "/index.html"
    ]))
  );
});
self.addEventListener("fetch", (e) => {
  console.log(e.request.url), e.respondWith(
    caches.match(e.request).then((t) => t || fetch(e.request))
  );
});
