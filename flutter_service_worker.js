'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7adb8f872446081aa98674c1bf085b03",
"assets/AssetManifest.bin.json": "caf6a35508382600c86cac9a69708fad",
"assets/AssetManifest.json": "8f3d4b66d233e19c55c21d0a0f48e799",
"assets/assets/config/app_config.json": "2c017cc770728b5a5bb22a474fb01644",
"assets/assets/config/app_config.json.example": "d6f175697e688dde6a9510bba481085a",
"assets/assets/config/README.md": "c1a1d3c564953474fa6f1c6db4317f16",
"assets/assets/fonts/Roboto-Bold.ttf": "36b5bab58a18b9c924861a4ccbf1a790",
"assets/assets/fonts/Roboto-Italic.ttf": "93b13a58dedeebe519846555a543523b",
"assets/assets/fonts/Roboto-Regular.ttf": "5673da52c98bb6cb33ada5aaf649703e",
"assets/assets/images/journalists/alberto_gioffreda.jpg": "95ce828e57cd62d580be4cbd6a34a739",
"assets/assets/images/journalists/alberto_puoti.jpg": "f1dffbf9eb51b1c18d2dbbe6f6aebcb7",
"assets/assets/images/journalists/alessandra_de_stefano.jpg": "dd5ed5c654855e1fdbd08aebc798b0fc",
"assets/assets/images/journalists/alessandro_marchetti.jpg": "6162eaf86fdf60dcf268250941deb8f7",
"assets/assets/images/journalists/andrea_marotta.jpg": "458c686d89c7bf1a35bfd38c9a46f5b4",
"assets/assets/images/journalists/andrea_vaccarella.jpg": "9fdd47043e16d8378514dcecd9b9e01f",
"assets/assets/images/journalists/angela_caponnetto.jpg": "53145c04e5ee08e3cee94ef84e770f5b",
"assets/assets/images/journalists/annalisa_salsano.jpg": "5a969aca4554de0c4caad10657a8c461",
"assets/assets/images/journalists/azzurra_meringolo.jpg": "41803b8d8f45cece25feb2ba189c97bc",
"assets/assets/images/journalists/barbara_gruden.jpg": "e3111520bf16986f7152d2df3626f330",
"assets/assets/images/journalists/borsa_milano.jpg": "025464c9556cf29c23134a2b2b0ff793",
"assets/assets/images/journalists/carlotta_ricci.jpg": "9471f23fbc5671e166462ef4c9a5fda0",
"assets/assets/images/journalists/caterina_doglio.jpg": "9a014727c0cd4a993b4b24b6a347255f",
"assets/assets/images/journalists/claudio_pagliara.jpg": "a28c0d395d5fb2fff88571be66d538ec",
"assets/assets/images/journalists/daniele_lorenzetti.jpg": "e8e07bed030900d291b69e76d1b4c52c",
"assets/assets/images/journalists/davide_gangale.jpg": "713a92ad04dd3edba92442bb5ca69cee",
"assets/assets/images/journalists/donato_bendicenti.jpg": "e9c969f0cff79210223e568f6fd69701",
"assets/assets/images/journalists/elisa_dossi.jpg": "8859b063066b530053b2307bc53bd990",
"assets/assets/images/journalists/emanuela_bonchino.jpg": "b43f3cee8265ec7c4f59212008e37b15",
"assets/assets/images/journalists/emma_farne.jpg": "d8868c67d0ae086607d28e6a527322f9",
"assets/assets/images/journalists/enrica_agostini.jpg": "b7febb284970a1221ae6bfff91d9426d",
"assets/assets/images/journalists/enzo_perone.jpg": "e193b1bdf0c2ad6997875dfeeea85b40",
"assets/assets/images/journalists/eva_giovannini.jpg": "7d588b7e2d8fbc6a44e101fd1c05acaf",
"assets/assets/images/journalists/fabio_butera.jpg": "5fb1e67a18ff68bd9137826020bf8c0e",
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
"assets/assets/images/journalists/gherardo_vitali_rosati.jpg": "d1c88dac05f8c5616726a737fc6fc774",
"assets/assets/images/journalists/giovan_battista_brunori.jpg": "9594d148e3829c29d982b2c8c78db890",
"assets/assets/images/journalists/giulia_bosetti.jpg": "3b0c0e7971770ef4793b12d951b0e457",
"assets/assets/images/journalists/giuseppe_rizzo.jpg": "4070e390098c88a3344fe46cbdc88256",
"assets/assets/images/journalists/giuseppina_testoni.jpg": "5d65b6279a0d816a424662b2ceca2ab9",
"assets/assets/images/journalists/ilario_piagnerelli.jpg": "9461bc7e25ca7af3565a907b32e04c49",
"assets/assets/images/journalists/laura_pepe.jpg": "d0b54e273be6120c0f21692b7962f192",
"assets/assets/images/journalists/laura_squillaci.jpg": "f1f10627dd53fea15a28b8f2c92f17e4",
"assets/assets/images/journalists/laura_tangherlini.jpg": "93195d413e1e8615fde8f4305aaa2d62",
"assets/assets/images/journalists/leonardo_sgura.jpg": "bce5d55970d90f3574c58d3abdc1d895",
"assets/assets/images/journalists/liana_mistretta.jpg": "d1a0e39c99517766400aaa631734c83c",
"assets/assets/images/journalists/lorenzo_di_las_plassas.jpg": "37efc5ffbcf1fd8de200b6d5f1f39ff6",
"assets/assets/images/journalists/lucia_basso.jpg": "9d6b32fff77f233cb68f91ed6aee6b61",
"assets/assets/images/journalists/lucia_goracci.jpg": "334c23302eb6234fb19ea48ee32ff70c",
"assets/assets/images/journalists/lucia_sgueglia.jpg": "fde43fa28989c73b4a56031130b738f1",
"assets/assets/images/journalists/marco_bariletti.jpg": "bc37d6909f71c61b3ca20cf16f5912a7",
"assets/assets/images/journalists/marco_clementi.jpg": "01be6bc0600d4a4f8261ad0b464fd8ef",
"assets/assets/images/journalists/maria_gianniti.jpg": "67302633fb84656f61369c43fecfbb65",
"assets/assets/images/journalists/maril%25C3%25B9_lucrezio.jpg": "b91575fcfa194836ad4fc3b3f68f604c",
"assets/assets/images/journalists/marina_lalovic.jpg": "6ba054a3acc7d32c451988e85b09b662",
"assets/assets/images/journalists/martina_cecchi_de_rossi.jpg": "8c01d237532b0da5c6974a2a031f6e90",
"assets/assets/images/journalists/marzia_de_giuli.jpg": "5a56bf386adee4802c343e3dbddee00c",
"assets/assets/images/journalists/massimo_mignanelli.jpg": "0227f2890c1d4082dbf65f6a1b1e3754",
"assets/assets/images/journalists/matteo_alviti.jpg": "1836b9b7356170be44bb9c61501f8e94",
"assets/assets/images/journalists/nadia_de_mita.jpg": "d89b58c0928da8430ddf3c3131b4aabd",
"assets/assets/images/journalists/natalia_augias.jpg": "8934d236e0722a7cd1a00a32cdf7b38b",
"assets/assets/images/journalists/nello_rega.jpg": "903328d553ad5f56c79bb57bcf3ab060",
"assets/assets/images/journalists/nicola_accardo.jpg": "621decdaec2c354fcd9c469fc5d6d114",
"assets/assets/images/journalists/nico_piro.jpg": "28859ce8b3e256b1bd7a61690046fd50",
"assets/assets/images/journalists/novella_calligaris.jpg": "9c132892f8c7c72b7ba745b5b3cd91ef",
"assets/assets/images/journalists/pablo_rojas.jpg": "beaebd0ef2ff127dcc63640cd6402a0c",
"assets/assets/images/journalists/paolo_maggioni.jpg": "bbafd1c4f4969703a777e10a7530523e",
"assets/assets/images/journalists/raffaella_cosentino.jpg": "f07c71b3266cca804802c44536f93030",
"assets/assets/images/journalists/riccardo_cavaliere.jpg": "9c2acd05182e44aa06eda59364ccc1b2",
"assets/assets/images/journalists/rino_pellino.jpg": "161b65c739a10804560995c4c8f234a4",
"assets/assets/images/journalists/roberta_castellano.jpg": "2120c93498886534db8cc15a4eda578a",
"assets/assets/images/journalists/sara_grattoggi.jpg": "aad4a6c1376e0d3da14f6da8244e0455",
"assets/assets/images/journalists/sara_nesci.jpg": "6a09a972196d55a66dc0072d444158f7",
"assets/assets/images/journalists/sara_verta.jpg": "42817c177d08cea7786aa463bb1b525a",
"assets/assets/images/journalists/serena_scorzoni.jpg": "ff934595673dd6188f2e18f0d5f39e9c",
"assets/assets/images/journalists/sergio_paini.jpg": "16f3d86929bb8cd157a7a53df26151e4",
"assets/assets/images/journalists/silvia_zerilli.jpg": "f762eb63440461825dc724be73db73b8",
"assets/assets/images/journalists/simone_lupo_bagnacani.jpg": "12ae48851d83ec41768122c3b5d4fd27",
"assets/assets/images/journalists/stefano_corradino.jpg": "0dc044a864f293808885fd01615521a4",
"assets/assets/images/journalists/valentina_dello_russo.jpg": "4b25efa3fc6a47964609c5e05877aefc",
"assets/assets/images/journalists/valerio_lo_prete.jpg": "96b15ba4c94dda5536c94b7d8395d27b",
"assets/assets/images/journalists/veronica_fernandes.jpg": "91f9002b2f19c87e1d414c9501403fb6",
"assets/assets/images/logoapp.png": "169947ba2231d525cd0543b12b7e21df",
"assets/assets/loghitg/TG1.png": "fdecb688f29fc3388dfa512eac9859c7",
"assets/assets/loghitg/TG2.png": "a67b67c5b37612483afdfa63732fdecf",
"assets/assets/loghitg/TG3.png": "f764ce1de839df2703d4f9d4bdda5502",
"assets/assets/loghitg/TGR.png": "bf509661cbf8eebacd67fc97abc568a3",
"assets/FontManifest.json": "cab59db45311a2d7ed52d5b6e196e626",
"assets/fonts/MaterialIcons-Regular.otf": "a8adf1b1452aa3cf221dfd1a7db29c3b",
"assets/NOTICES": "23de96fe2c8891066e8f2d4af8c22f43",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "169947ba2231d525cd0543b12b7e21df",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "265e3e4322294348651d06b8e62a3544",
"icons/Icon-192.png": "169947ba2231d525cd0543b12b7e21df",
"icons/Icon-512.png": "169947ba2231d525cd0543b12b7e21df",
"icons/Icon-maskable-192.png": "169947ba2231d525cd0543b12b7e21df",
"icons/Icon-maskable-512.png": "169947ba2231d525cd0543b12b7e21df",
"index.html": "cb19a77171303581a2e9702fc86444ab",
"/": "cb19a77171303581a2e9702fc86444ab",
"main.dart.js": "27542ef50eb54e4b6f93741ca14f8138",
"main.dart.mjs": "c5b54e24c841071fcc066d822545581a",
"main.dart.wasm": "4bb70bb0adbb8c13d09c0e4280543ea8",
"manifest.json": "d5663c2342c120b5d16192c7b8150de5",
"version.json": "43302a630f4af7afcbe6b6fc0cb1409f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
