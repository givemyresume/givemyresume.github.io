/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","97eae09da6b0af7b37cc29bccc3a5e71"],["amaanalam/data.json","f7a0bee6516566f0b671b72dafef2129"],["amaanalam/index.html","763846dbd9986ec61ac8f787b616d9c3"],["amaanalam/resume.md","40a8961cd2ec4688a0b40428b1830aad"],["ankurbarai/data.json","32307434a875f97b4de900e1f5034ea5"],["ankurbarai/index.html","d5d571fcb27755258c440d40e4afdefb"],["ankurbarai/resume.md","3c82ed67f8694829f53e92ae9a6e9ce0"],["ankush/data.json","f556550e106868a448123875cddecddf"],["ankush/index.html","508bce76d4819a0ec10c5ba2be151327"],["ankush/resume.md","0a4642e27fb4c8b6e3d0cfe4191a6e58"],["anupam1999/data.json","3c1232d988d569856288613ad55c520a"],["anupam1999/index.html","b5cc61674c79474f72fd1803e2558cf4"],["anupam1999/resume.md","6634e75880a8fd3d4e3479a83d9c214b"],["arka/data.json","9add9aa72a13eb5cfd4a34dffaef5dc7"],["arka/index.html","08d84d027eb2b479bf03f796d3473b54"],["arka/resume.md","e57a7dec1b0dec23a1dc739423a079ca"],["avatar.png","f2701d3806983292c5ad5163aff8846f"],["dipayanmukherjee/data.json","bb676f4163754286874815ef0697d9be"],["dipayanmukherjee/index.html","eeb45d2994ec7cbf777a6beb9d943b45"],["dipayanmukherjee/resume.md","24ad0fde42d24b79074f81d3aee81b6d"],["djsahdaj/data.json","36786f45aec5faacbfe6b51a26914a27"],["djsahdaj/index.html","495c5cec099e979b442728c09a3f8937"],["djsahdaj/resume.md","89f74c6d8857a0aebd722de7046eae4d"],["favicons/android-icon-144x144.png","e5c21d6cf0f56584776508df5e4664fc"],["favicons/android-icon-192x192.png","62628123f6443459f2264030c1d64cae"],["favicons/android-icon-36x36.png","bc3ef72303b42ea085be6bbf8fc1de10"],["favicons/android-icon-48x48.png","a7ce30ca58f8feec03468779bf5ecef9"],["favicons/android-icon-72x72.png","3e7c943c6733c03c59e2901278dca80d"],["favicons/android-icon-96x96.png","beccc121cf33bf2698b55062cf0e72a3"],["favicons/apple-icon-114x114.png","50dbf58d3d97b526484cf763b571ae60"],["favicons/apple-icon-120x120.png","c5886133e727e4a6032953a9b7f6b650"],["favicons/apple-icon-144x144.png","e5c21d6cf0f56584776508df5e4664fc"],["favicons/apple-icon-152x152.png","8401c62b74c24393189ceae7e96654bb"],["favicons/apple-icon-180x180.png","f2d86a5bbd5068093eb0c9eec7494e5c"],["favicons/apple-icon-57x57.png","a9e890bbad81385125201f46b4fe907a"],["favicons/apple-icon-60x60.png","2c17ab9673bc34f1ffd608460b348a67"],["favicons/apple-icon-72x72.png","3e7c943c6733c03c59e2901278dca80d"],["favicons/apple-icon-76x76.png","793619f8042daee18c883d9f6e4d05a2"],["favicons/apple-icon-precomposed.png","045322df8abb2f1598e478e5949caddc"],["favicons/apple-icon.png","045322df8abb2f1598e478e5949caddc"],["favicons/browserconfig.xml","653d077300a12f09a69caeea7a8947f8"],["favicons/favicon-16x16.png","683a362bece47baa20dda7fba6408371"],["favicons/favicon-32x32.png","f2dfab1333d931cfd9b7205d08ae440e"],["favicons/favicon-96x96.png","beccc121cf33bf2698b55062cf0e72a3"],["favicons/favicon.ico","46ae4da0b1d8aaf206ee78200a75d8bd"],["favicons/ms-icon-144x144.png","e5c21d6cf0f56584776508df5e4664fc"],["favicons/ms-icon-150x150.png","b9175575c49f5debceef71f9762dc8dc"],["favicons/ms-icon-310x310.png","b0b035f221d939d43a74cf89b7e8a375"],["favicons/ms-icon-70x70.png","d134470473ccbd5d525e045eff1f95ba"],["favicons/screenshot-1.png","bbc22d5d34d54102963131b4fc385742"],["favicons/screenshot-2.png","eee9d8af6df7083afc84560d0d4754e6"],["index.html","fa599fdcc0ff7d29ce5d1155d7d13195"],["kartikey/data.json","f175261e2e9bb1df58a856a510a7db43"],["kartikey/index.html","182a598ea6efcc95db93de7e30d48c4b"],["kartikey/resume.md","681aa030ebc7e004afdbadc01f247623"],["mainak ghosh/data.json","9a1f0bb52101f8590722ea21fb888606"],["mainak ghosh/index.html","336fcf58c8e0a7d970c3e9a4c01328a8"],["mainak ghosh/resume.md","c3ca2f8adb00780f8c2391be1f45ec49"],["manifest.json","b331515f1ab9edef86c6a059305a1c6e"],["naruto99/data.json","6d3dcdcd8ca0d3c1a050a503fa70aff8"],["naruto99/index.html","267b95074311704fc81c708a2ff25d12"],["naruto99/resume.md","0ccf4edaa56cd4d2558dd06fb3393a62"],["raunak paul/data.json","de0809f8ac4219d4f100922666f66b08"],["raunak paul/index.html","dd6d4c77b11fc853ce73b3ddf74c8cef"],["raunak paul/resume.md","2d42eb3959394a95d370fdc9dc59ea9e"],["script.js","cbea7ea97c28376dea5e0e8338dc325f"],["sourav das/data.json","b721df49dad898296f1312726bf1b69f"],["sourav das/index.html","31d8ba4e02bf5b90706a8ff10ff78747"],["sourav das/resume.md","a003d12415333fd1eba5fc74c8bd87d5"],["style.css","267b3b711ed40261a4206afbca0ad932"],["subhayu99/data.json","bb2fec7836d8857db6da2bf69c2b9fcb"],["subhayu99/index.html","5a6064693f3041fd3de6d1c17353c264"],["subhayu99/resume.md","cac2c9d3565bb5ecee4435b48e5aa7a2"],["tan123/data.json","7fdd557d47d13fc0dbefbd49eefee804"],["tan123/index.html","bdb7266c45651c2b206bf50e963494b8"],["tan123/resume.md","31350420c9a069dd0c837b18ac2ac6b2"],["trinankur/data.json","3ac4d7683569767011bc0bf5dcf33f5e"],["trinankur/index.html","a30fc2260bb08bcda5d0e9eaf2dca133"],["trinankur/resume.md","8af3cd304a49eddb003067ec2e682cfc"],["userxyz/data.json","0e2d7323eff6e560f029e872b012894c"],["userxyz/index.html","d39071480e10bee9a3856250cb62400b"],["userxyz/resume.md","d90f952a5f9d0d0e6a18f35952121db8"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







