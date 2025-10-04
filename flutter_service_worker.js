'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "748a7b3fbbe7230eb504f058512a4fb2",
"assets/AssetManifest.bin.json": "78174cc40394ab8c8d75c53d1c2bedc4",
"assets/AssetManifest.json": "f8e15d07a01fa58fac41da7313e2dd36",
"assets/assets/config/app_config.json": "5b02d8b8ed2494e5d37d1c41fe4637c8",
"assets/assets/fonts/Roboto-Bold.ttf": "36b5bab58a18b9c924861a4ccbf1a790",
"assets/assets/fonts/Roboto-Italic.ttf": "93b13a58dedeebe519846555a543523b",
"assets/assets/fonts/Roboto-Regular.ttf": "5673da52c98bb6cb33ada5aaf649703e",
"assets/assets/images/journalists/alberto_gioffreda.jpg": "95ce828e57cd62d580be4cbd6a34a739",
"assets/assets/images/journalists/alberto_puoti.jpg": "f1dffbf9eb51b1c18d2dbbe6f6aebcb7",
"assets/assets/images/journalists/alessandra_de_stefano.jpg": "dd5ed5c654855e1fdbd08aebc798b0fc",
"assets/assets/images/journalists/alessandro_marchetti.jpg": "6162eaf86fdf60dcf268250941deb8f7",
"assets/assets/images/journalists/andrea_marotta.jpg": "458c686d89c7bf1a35bfd38c9a46f5b4",
"assets/assets/images/journalists/angela_caponnetto.jpg": "53145c04e5ee08e3cee94ef84e770f5b",
"assets/assets/images/journalists/annalisa_salsano.jpg": "5a969aca4554de0c4caad10657a8c461",
"assets/assets/images/journalists/azzurra_meringolo.jpg": "41803b8d8f45cece25feb2ba189c97bc",
"assets/assets/images/journalists/barbara_gruden.jpg": "e3111520bf16986f7152d2df3626f330",
"assets/assets/images/journalists/borsa_milano.jpg": "025464c9556cf29c23134a2b2b0ff793",
"assets/assets/images/journalists/carlotta_ricci.jpg": "9471f23fbc5671e166462ef4c9a5fda0",
"assets/assets/images/journalists/caterina_doglio.jpg": "9a014727c0cd4a993b4b24b6a347255f",
"assets/assets/images/journalists/claudio_pagliara.jpg": "a28c0d395d5fb2fff88571be66d538ec",
"assets/assets/images/journalists/daniele_lorenzetti.jpg": "e8e07bed030900d291b69e76d1b4c52c",
"assets/assets/images/journalists/donato_bendicenti.jpg": "e9c969f0cff79210223e568f6fd69701",
"assets/assets/images/journalists/elisa_dossi.jpg": "8859b063066b530053b2307bc53bd990",
"assets/assets/images/journalists/emanuela_bonchino.jpg": "b43f3cee8265ec7c4f59212008e37b15",
"assets/assets/images/journalists/emma_farne.jpg": "d8868c67d0ae086607d28e6a527322f9",
"assets/assets/images/journalists/enrica_agostini.jpg": "b7febb284970a1221ae6bfff91d9426d",
"assets/assets/images/journalists/enzo_perone.jpg": "e193b1bdf0c2ad6997875dfeeea85b40",
"assets/assets/images/journalists/federica_mango.jpg": "f86bef734e423852262a4c6776e76f23",
"assets/assets/images/journalists/francesca_biagiotti.jpg": "14278665f05a38df74070d4a80f5ee6e",
"assets/assets/images/journalists/francesca_coppola.jpg": "d31950c8ad8f986a0f7e717301b4f42b",
"assets/assets/images/journalists/francesca_elisei.jpg": "acac1e0023b47aba72b8a09ac79a7b66",
"assets/assets/images/journalists/francesca_ghidini.jpg": "ba4273f3301e1e8a88948f814b8c3d1c",
"assets/assets/images/journalists/francesca_romana_elisei.jpg": "5e89187b169f64c0a56e14b491b2f94a",
"assets/assets/images/journalists/francesco_gatti.jpg": "74357bb6fbc9c6c9e53988a0d4bafea2",
"assets/assets/images/journalists/francesco_palese.jpg": "bcd29aee27f7577502fee43fa843dc9e",
"assets/assets/images/journalists/gabriele_martelloni.jpg": "3ba8f0b0f620a71d33b7f74c45ad1fbd",
"assets/assets/images/journalists/gavino_moretti.jpg": "d2ddb6683b48a7d47d2a6df801e5db9b",
"assets/assets/images/journalists/gennaro_sangiuliano.jpg": "9c114c71d839bd9526250c17a0af981d",
"assets/assets/images/journalists/giovan_battista_brunori.jpg": "9594d148e3829c29d982b2c8c78db890",
"assets/assets/images/journalists/giuseppina_testoni.jpg": "5d65b6279a0d816a424662b2ceca2ab9",
"assets/assets/images/journalists/ilario_piagnerelli.jpg": "9461bc7e25ca7af3565a907b32e04c49",
"assets/assets/images/journalists/laura_pepe.jpg": "d0b54e273be6120c0f21692b7962f192",
"assets/assets/images/journalists/laura_squillaci.jpg": "f1f10627dd53fea15a28b8f2c92f17e4",
"assets/assets/images/journalists/laura_tangherlini.jpg": "93195d413e1e8615fde8f4305aaa2d62",
"assets/assets/images/journalists/liana_mistretta.jpg": "d1a0e39c99517766400aaa631734c83c",
"assets/assets/images/journalists/lorenzo_di_las_plassas.jpg": "37efc5ffbcf1fd8de200b6d5f1f39ff6",
"assets/assets/images/journalists/lucia_basso.jpg": "9d6b32fff77f233cb68f91ed6aee6b61",
"assets/assets/images/journalists/lucia_goracci.jpg": "334c23302eb6234fb19ea48ee32ff70c",
"assets/assets/images/journalists/lucia_sgueglia.jpg": "fde43fa28989c73b4a56031130b738f1",
"assets/assets/images/journalists/marco_clementi.jpg": "01be6bc0600d4a4f8261ad0b464fd8ef",
"assets/assets/images/journalists/maria_gianniti.jpg": "67302633fb84656f61369c43fecfbb65",
"assets/assets/images/journalists/maril%25C3%25B9_lucrezio.jpg": "b91575fcfa194836ad4fc3b3f68f604c",
"assets/assets/images/journalists/marina_lalovic.jpg": "6ba054a3acc7d32c451988e85b09b662",
"assets/assets/images/journalists/martina_cecchi_de_rossi.jpg": "8c01d237532b0da5c6974a2a031f6e90",
"assets/assets/images/journalists/marzia_de_giuli.jpg": "5a56bf386adee4802c343e3dbddee00c",
"assets/assets/images/journalists/massimo_mignanelli.jpg": "0227f2890c1d4082dbf65f6a1b1e3754",
"assets/assets/images/journalists/natalia_augias.jpg": "8934d236e0722a7cd1a00a32cdf7b38b",
"assets/assets/images/journalists/nello_rega.jpg": "903328d553ad5f56c79bb57bcf3ab060",
"assets/assets/images/journalists/nicola_accardo.jpg": "621decdaec2c354fcd9c469fc5d6d114",
"assets/assets/images/journalists/nico_piro.jpg": "28859ce8b3e256b1bd7a61690046fd50",
"assets/assets/images/journalists/novella_calligaris.jpg": "9c132892f8c7c72b7ba745b5b3cd91ef",
"assets/assets/images/journalists/paolo_maggioni.jpg": "bbafd1c4f4969703a777e10a7530523e",
"assets/assets/images/journalists/raffaella_cosentino.jpg": "f07c71b3266cca804802c44536f93030",
"assets/assets/images/journalists/riccardo_cavaliere.jpg": "9c2acd05182e44aa06eda59364ccc1b2",
"assets/assets/images/journalists/rino_pellino.jpg": "161b65c739a10804560995c4c8f234a4",
"assets/assets/images/journalists/roberta_castellano.jpg": "2120c93498886534db8cc15a4eda578a",
"assets/assets/images/journalists/sara_nesci.jpg": "6a09a972196d55a66dc0072d444158f7",
"assets/assets/images/journalists/sara_verta.jpg": "42817c177d08cea7786aa463bb1b525a",
"assets/assets/images/journalists/serena_scorzoni.jpg": "ff934595673dd6188f2e18f0d5f39e9c",
"assets/assets/images/journalists/sergio_paini.jpg": "16f3d86929bb8cd157a7a53df26151e4",
"assets/assets/images/journalists/silvia_zerilli.jpg": "f762eb63440461825dc724be73db73b8",
"assets/assets/images/journalists/simone_lupo_bagnacani.jpg": "12ae48851d83ec41768122c3b5d4fd27",
"assets/assets/images/journalists/stefano_corradino.jpg": "0dc044a864f293808885fd01615521a4",
"assets/assets/images/journalists/valentina_dello_russo.jpg": "4b25efa3fc6a47964609c5e05877aefc",
"assets/assets/images/journalists/veronica_fernandes.jpg": "91f9002b2f19c87e1d414c9501403fb6",
"assets/assets/images/logoapp.png": "169947ba2231d525cd0543b12b7e21df",
"assets/FontManifest.json": "cab59db45311a2d7ed52d5b6e196e626",
"assets/fonts/MaterialIcons-Regular.otf": "972fd6e2994d37c02ebe8e3ce7f46f96",
"assets/NOTICES": "7017da4539ab5af4bd80bd495c73a3d9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "169947ba2231d525cd0543b12b7e21df",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "de465882ea9704e2b07eb85077577cf5",
"icons/Icon-192.png": "169947ba2231d525cd0543b12b7e21df",
"icons/Icon-512.png": "169947ba2231d525cd0543b12b7e21df",
"icons/Icon-maskable-192.png": "169947ba2231d525cd0543b12b7e21df",
"icons/Icon-maskable-512.png": "169947ba2231d525cd0543b12b7e21df",
"index.html": "cb19a77171303581a2e9702fc86444ab",
"/": "cb19a77171303581a2e9702fc86444ab",
"main.dart.js": "4a8f8c4666e2e12f4a07433662c78ea7",
"manifest.json": "d5663c2342c120b5d16192c7b8150de5",
"version.json": "f14f0c2c346eac07bde7b32b3d09ba59"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
