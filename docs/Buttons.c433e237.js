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
})({"src/components/button/button.js":[function(require,module,exports) {
"use strict";

var _skatejs = require("skatejs");

var _rendererPreact = _interopRequireDefault(require("@skatejs/renderer-preact"));

var _preact = require("preact");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Button =
/*#__PURE__*/
function (_withComponent) {
  _inherits(Button, _withComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "returnClass",
    value: function returnClass(type) {
      var tmp = type.split(',');
      var str = '';
      tmp.forEach(function (o) {
        str += "btn-".concat(o, " ");
      });
      return str;
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var type = _ref.type,
          icon = _ref.icon,
          onClick = _ref.onClick;
      return (0, _preact.h)("button", {
        className: 'btn ' + this.returnClass(type),
        onClick: onClick
      }, icon && (0, _preact.h)("i", {
        class: icon
      }), this.innerHTML);
    }
  }, {
    key: "renderRoot",
    get: function get() {
      return this;
    }
  }], [{
    key: "props",
    get: function get() {
      return {
        type: _skatejs.props.string,
        icon: _skatejs.props.string,
        onClick: _skatejs.props.string
      };
    }
  }]);

  return Button;
}((0, _skatejs.withComponent)((0, _rendererPreact.default)()));

customElements.define('vp-button', Button);
},{"skatejs":"node_modules/skatejs/dist/es/index.js","@skatejs/renderer-preact":"node_modules/@skatejs/renderer-preact/dist/es/index.js","preact":"node_modules/preact/dist/preact.mjs"}],"src/vue/views/Buttons.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _button = require("../../components/button/button");

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
  name: 'buttons',
  data: function data() {
    return {};
  },
  mounted: function mounted() {}
};
exports.default = _default;
        var $c734a2 = exports.default || module.exports;
      
      if (typeof $c734a2 === 'function') {
        $c734a2 = $c734a2.options;
      }
    
        /* template */
        Object.assign($c734a2, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { attrs: { id: "buttons" } }, [
    _c("h1", { staticClass: "mb-30" }, [_vm._v("Buttons")]),
    _vm._v(" "),
    _c("pre", { staticClass: "prettyprint linenums lang-html" }, [
      _vm._v(
        '  <button class="btn btn-flat"><i class="icon-location-pin-filled"></i> Flat</button>\n  <button class="btn btn-default"><i class="icon-location-pin-filled"></i> Default</button>\n  <button class="btn btn-primary"><i class="icon-location-pin-filled"></i> Primary</button>\n  <button class="btn btn-destructive"><i class="icon-location-pin-filled"></i> Destructive</button>'
      )
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "my-10" },
      [
        _c(
          "vp-button",
          { attrs: { type: "flat", onclick: "alert('Hello World!')" } },
          [_vm._v("Flat")]
        ),
        _vm._v(" "),
        _c(
          "vp-button",
          { attrs: { type: "default", onclick: "alert('Hello World!')" } },
          [_vm._v("Default")]
        ),
        _vm._v(" "),
        _c(
          "vp-button",
          { attrs: { type: "primary", onclick: "alert('Hello World!')" } },
          [_vm._v("Primary")]
        ),
        _vm._v(" "),
        _c(
          "vp-button",
          { attrs: { type: "destructive", onclick: "alert('Hello World!')" } },
          [_vm._v("Destructive")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "my-10" },
      [
        _c(
          "vp-button",
          {
            attrs: {
              type: "flat",
              icon: "icon-location-pin-filled",
              onclick: "alert('Hello World!')"
            }
          },
          [_vm._v("Flat")]
        ),
        _vm._v(" "),
        _c(
          "vp-button",
          {
            attrs: {
              type: "default",
              icon: "icon-location-pin-filled",
              onclick: "alert('Hello World!')"
            }
          },
          [_vm._v("Default")]
        ),
        _vm._v(" "),
        _c(
          "vp-button",
          {
            attrs: {
              type: "primary",
              icon: "icon-location-pin-filled",
              onclick: "alert('Hello World!')"
            }
          },
          [_vm._v("Primary")]
        ),
        _vm._v(" "),
        _c(
          "vp-button",
          {
            attrs: {
              type: "destructive",
              icon: "icon-location-pin-filled",
              onclick: "alert('Hello World!')"
            }
          },
          [_vm._v("Destructive")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "my-10" },
      [
        _c(
          "vp-button",
          { attrs: { type: "flat,dense", onclick: "alert('Hello World!')" } },
          [_vm._v("flat")]
        ),
        _vm._v(" "),
        _c(
          "vp-button",
          {
            attrs: { type: "default,dense", onclick: "alert('Hello World!')" }
          },
          [_vm._v("Default")]
        ),
        _vm._v(" "),
        _c(
          "vp-button",
          {
            attrs: { type: "primary,dense", onclick: "alert('Hello World!')" }
          },
          [_vm._v("Default")]
        ),
        _vm._v(" "),
        _c(
          "vp-button",
          {
            attrs: {
              type: "destructive,dense",
              onclick: "alert('Hello World!')"
            }
          },
          [_vm._v("Default")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "my-10" },
      [
        _c(
          "vp-button",
          {
            attrs: {
              type: "flat,dense",
              icon: "icon-location-pin-filled",
              onclick: "alert('Hello World!')"
            }
          },
          [_vm._v("flat")]
        ),
        _vm._v(" "),
        _c(
          "vp-button",
          {
            attrs: {
              type: "default,dense",
              icon: "icon-location-pin-filled",
              onclick: "alert('Hello World!')"
            }
          },
          [_vm._v("Default")]
        ),
        _vm._v(" "),
        _c(
          "vp-button",
          {
            attrs: {
              type: "primary,dense",
              icon: "icon-location-pin-filled",
              onclick: "alert('Hello World!')"
            }
          },
          [_vm._v("Default")]
        ),
        _vm._v(" "),
        _c(
          "vp-button",
          {
            attrs: {
              type: "destructive,dense",
              icon: "icon-location-pin-filled",
              onclick: "alert('Hello World!')"
            }
          },
          [_vm._v("Default")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("strong", [_vm._v("Basic Button Styles")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("strong", [_vm._v("Buttons with Icons")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("strong", [_vm._v("Dense Button Varient (smaller)")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("strong", [_vm._v("Buttons with Icons Dense (smaller)")])
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
            api.createRecord('$c734a2', $c734a2);
          } else {
            api.reload('$c734a2', $c734a2);
          }
        }

        
      }
    })();
},{"../../components/button/button":"src/components/button/button.js","vue-hot-reload-api":"node_modules/vue-hot-reload-api/dist/index.js","vue":"node_modules/vue/dist/vue.runtime.esm.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55298" + '/');

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
//# sourceMappingURL=/Buttons.c433e237.map