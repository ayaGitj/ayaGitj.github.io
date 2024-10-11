// service-worker.js
// Cache name
const CACHE_NAME = "tap10-v1";
// Cache targets
const urlsToCache = ["./", "./tap10"];

self.addEventListener("install", function (e) {
  console.log("[ServiceWorker] Install");
});

self.addEventListener("activate", function (e) {
  console.log("[ServiceWorker] Activate");
});

// 現状では、この処理を書かないとService Workerが有効と判定されないようです
self.addEventListener("fetch", function (event) {});
