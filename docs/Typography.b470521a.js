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
})({"src/vue/views/Typography.vue":[function(require,module,exports) {
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
//
//
//
//
//
//
//
var _default = {
  name: 'typography',
  data: function data() {
    return {};
  }
};
/*
'xs': '.75rem',     // 12px
'sm': '.875rem',    // 14px
'base': '1rem',     // 16px
'lg': '1.125rem',   // 18px
'xl': '1.25rem',    // 20px
'2xl': '1.5rem',    // 24px
'3xl': '1.875rem',  // 30px
'4xl': '2.25rem',   // 36px
'5xl': '2.5rem',    // 40px
*/

exports.default = _default;
        var $2eed90 = exports.default || module.exports;
      
      if (typeof $2eed90 === 'function') {
        $2eed90 = $2eed90.options;
      }
    
        /* template */
        Object.assign($2eed90, (function () {
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
    return _c("section", { attrs: { id: "buttons" } }, [
      _c("h1", { staticClass: "mb-30" }, [_vm._v("Typography")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    Vitruvious uses the standard base font size of 16px which allows us to calculate font size in REM values from that point. If you're curious about conversions, you can look at this experiment here: "
        ),
        _c(
          "a",
          {
            attrs: {
              href: "https://daniellamb.com/experiments/px-to-rem-calc/",
              target: "_blank"
            }
          },
          [_vm._v("https://daniellamb.com/experiments/px-to-rem-calc/")]
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n    You might be asking, why REM values? Because REM allows for accessibility where PX do not. Think of an older user who's bumped up their computers base font size. 12px is 12px - but .75rem will adjust accordingly to help that user read content at their desired level.\n  "
        )
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "define" }, [
        _c("i", { staticClass: "icon-chat mr-20" }),
        _vm._v("Headings")
      ]),
      _vm._v(" "),
      _c("h1", [_vm._v("h1. Headline Large - 2.5rem // 40px")]),
      _vm._v(" "),
      _c("h2", [_vm._v("h2. Headline Medium - 1.5rem // 24px")]),
      _vm._v(" "),
      _c("h3", [_vm._v("h3. Headline Regular - 1.125rem // 18px")]),
      _vm._v(" "),
      _c("h4", [_vm._v("h4. Headline Small - 1rem // 16px")]),
      _vm._v(" "),
      _c("h5", [_vm._v('h5. Headline "heading" - .875rem // 14px')]),
      _vm._v(" "),
      _c("h2", { staticClass: "define" }, [
        _c("i", { staticClass: "icon-chat mr-20" }),
        _vm._v("Plain Text and Class Examples")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("We have 9 font sizes accessible by class shown here")]),
      _vm._v(" "),
      _c("pre", { staticClass: "prettyprint linenums lang-html" }, [
        _vm._v('<p class="text-xs">...</p>')
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-xs" }, [
        _vm._v(
          "This is an example of our extra small font size of 12px or .75rem."
        )
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "prettyprint linenums lang-html" }, [
        _vm._v('<p class="text-sm">...</p>')
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-sm" }, [
        _vm._v("This is an example of our small font size of 14px or .875rem.")
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "prettyprint linenums lang-html" }, [
        _vm._v("<p>...</p>")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "This is an example of plain text of our base font size of 16px or 1rem."
        )
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "prettyprint linenums lang-html" }, [
        _vm._v('<p class="text-lg">...</p>')
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-lg" }, [
        _vm._v("This is an example of our large font size of 18px or 1.125rem.")
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "prettyprint linenums lang-html" }, [
        _vm._v('<p class="text-xl">...</p>')
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-xl" }, [
        _vm._v("This is an example of our XL font size of 20px or 1.25rem.")
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "prettyprint linenums lang-html" }, [
        _vm._v('<p class="text-2xl">...</p>')
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-2xl" }, [
        _vm._v("This is an example of our 2xl font size of 20px or 1.5rem.")
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "prettyprint linenums lang-html" }, [
        _vm._v('<p class="text-3xl">...</p>')
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-3xl" }, [
        _vm._v("This is an example of our 2xl font size of 30px or 1.875rem.")
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "prettyprint linenums lang-html" }, [
        _vm._v('<p class="text-4xl">...</p>')
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-4xl" }, [
        _vm._v("This is an example of our 4xl font size of 36px or 2.25rem.")
      ]),
      _vm._v(" "),
      _c("pre", { staticClass: "prettyprint linenums lang-html" }, [
        _vm._v('<p class="text-5xl">...</p>')
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-5xl" }, [
        _vm._v("This is an example of our 5xl font size of 40px or 2.5rem.")
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
            api.createRecord('$2eed90', $2eed90);
          } else {
            api.reload('$2eed90', $2eed90);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56277" + '/');

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
//# sourceMappingURL=/Typography.b470521a.map