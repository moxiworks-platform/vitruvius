// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"src/site_views/Colors.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'colors',
  data: function data() {
    return {};
  }
};
exports.default = _default;
        var $0b59db = exports.default || module.exports;
      
      if (typeof $0b59db === 'function') {
        $0b59db = $0b59db.options;
      }
    
        /* template */
        Object.assign($0b59db, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { attrs: { id: "colors" } }, [
      _c("h1", { staticClass: "mb-30" }, [_vm._v("Colors")]),
      _vm._v(" "),
      _c("div", [_c("strong", [_vm._v("Moxi Core Colors (Blue)")])]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-moxi-blue-dark text-white" }, [
        _vm._v(".bg-moxi-blue-dark")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-moxi-blue text-white" }, [
        _vm._v(".bg-moxi-blue")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-moxi-blue-light text-white" }, [
        _vm._v(".bg-moxi-blue-light")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "p-20 my-10 bg-moxi-blue-lightest text-white" },
        [_vm._v(".bg-moxi-blue-lightest")]
      ),
      _vm._v(" "),
      _c("div", [_c("strong", [_vm._v("Moxi Core Colors (Green)")])]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-moxi-green-dark text-white" }, [
        _vm._v(".bg-moxi-green-dark")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-moxi-green text-white" }, [
        _vm._v(".bg-moxi-green")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-moxi-green-light text-white" }, [
        _vm._v(".bg-moxi-green-light")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "p-20 my-10 bg-moxi-green-lightest text-white" },
        [_vm._v(".bg-moxi-blue-lightest")]
      ),
      _vm._v(" "),
      _c("div", [_c("strong", [_vm._v("Neutrals")])]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-cn-100 text-white" }, [
        _vm._v(".bg-cn-100")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-cn-90 text-white" }, [
        _vm._v(".bg-cn-90")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-cn-80 text-white" }, [
        _vm._v(".bg-cn-80")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-cn-70 text-white" }, [
        _vm._v(".bg-cn-70")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-cn-60 text-white" }, [
        _vm._v(".bg-cn-60")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-cn-50 text-white" }, [
        _vm._v(".bg-cn-50")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-cn-40 text-black" }, [
        _vm._v(".bg-cn-40")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-cn-30 text-black" }, [
        _vm._v(".bg-cn-30")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-cn-20 text-black" }, [
        _vm._v(".bg-cn-20")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-cn-15 text-black" }, [
        _vm._v(".bg-cn-15")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-cn-10 text-black" }, [
        _vm._v(".bg-cn-10")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-cn-05 text-black" }, [
        _vm._v(".bg-cn-05")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-cn-0 text-black" }, [
        _vm._v(".bg-cn-0")
      ]),
      _vm._v(" "),
      _c("div", [_c("strong", [_vm._v("Alternatives")])]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-moxi-destructive text-white" }, [
        _vm._v(".bg-moxi-destructive")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "p-20 my-10 bg-moxi-destructive-light text-white" },
        [_vm._v(".bg-moxi-destructive-light")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-ca-heliotrop text-white" }, [
        _vm._v(".bg-ca-heliotrop")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-ca-mauve text-white" }, [
        _vm._v(".bg-ca-mauve")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-ca-mulberry text-white" }, [
        _vm._v(".bg-ca-mulberry")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "p-20 my-10 bg-ca-pale-violet-red text-white" },
        [_vm._v(".bg-ca-pale-violet-red")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-ca-viking text-white" }, [
        _vm._v(".bg-ca-viking")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-ca-riptide text-white" }, [
        _vm._v(".bg-ca-riptide")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "p-20 my-10 bg-ca-lightning-yellow text-white" },
        [_vm._v(".bg-ca-lightning-yellow")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-ca-texas-rose text-white" }, [
        _vm._v(".bg-ca-texas-rose")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-ca-flamenco text-white" }, [
        _vm._v(".bg-ca-flamenco")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "p-20 my-10 bg-ca-sandy-brown text-white" }, [
        _vm._v(".bg-ca-sandy-brown")
      ])
    ])
  }
]
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$0b59db', $0b59db);
          } else {
            api.reload('$0b59db', $0b59db);
          }
        }

        
      }
    })();
},{"vue-hot-reload-api":"node_modules/vue-hot-reload-api/dist/index.js","vue":"node_modules/vue/dist/vue.runtime.esm.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54568" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/Colors.cafe1a20.map