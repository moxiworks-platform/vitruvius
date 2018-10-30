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
})({"src/vue/views/Icons.vue":[function(require,module,exports) {
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
  }
};
exports.default = _default;
        var $93e363 = exports.default || module.exports;
      
      if (typeof $93e363 === 'function') {
        $93e363 = $93e363.options;
      }
    
        /* template */
        Object.assign($93e363, (function () {
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
    return _c("section", { attrs: { id: "icons" } }, [
      _c("h1", { staticClass: "mb-30" }, [_vm._v("Icons")]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-sort text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Sort")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-sort")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-down-arrow text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Down Arrow")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-down-arrow")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-down-chevron text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Down Chevron")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-down-chevron")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-left-arrow text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Left Arrow")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-left-arrow")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-left-chevron text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Left Chevron")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-left-chevron")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-right-arrow text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Right Arrow")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-right-arrow")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-right-chevron text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Right Chevron")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-right-chevron")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-up-arrow text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Up Arrow")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-up-arrow")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-up-chevron text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Up Chevron")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-up-chevron")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-draw text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Draw")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-draw")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-radius text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Radius")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-radius")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-location-services text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Location Services")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-location-services")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-location-pin text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Location Pin")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-location-pin")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-location-pin-filled text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Location Pin Filled")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-location-pin-filled")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-heart text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Heart")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-heart")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-heart-filled text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Heart Filled")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-heart-filled")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-heart-broken text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Heart Broken")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-heart-broken")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-check text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Check")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-check")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-check-circle text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Check with Circle")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-check-circle")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-close text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Close")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-close")])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-close-circle text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Close with Circle")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-close-circle")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-plus text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Plus")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-plus")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-add-circle text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Plus with Circle")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-add-circle")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-bell path1 text-3xl" }, [
              _c("i", { staticClass: "icon-bell path2" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Bell")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-bell")])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-calendar text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Calendar")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-calendar")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-chat text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Chat")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-chat")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-clock text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Clock")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-clock")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-clock-reverse text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Clock Reverse")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-clock-reverse")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-envelope text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Envelope")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-envelope")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-expand text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Expand")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-expand")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-external-link text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("External Link")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-external-link")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-gear text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Gear")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-gear")])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-house text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("House")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-house")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-info-circle text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Info with Circle")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-info-circle")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-layers text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Layers")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-layers")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-locked text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Locked")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-locked")])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-unlocked text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Unlocked")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-unlocked")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-magnifying-glass text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Magnifying Glass")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-magnifying-glass")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-money-circle text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Money with Circle")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-money-circle")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-more--vertical text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("More Virtical")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-more--vertical")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-no-show text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("No Show")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-no-show")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-page text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Page")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-page")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-pencil text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Pencil")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-pencil")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-person text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Person")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-person")])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-question-circle text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Question with Circle")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-question-circle")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-star text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Star")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-star")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-pencil text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Pencil")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-pencil")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-trash text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Trash")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-Trash")])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-video text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Video")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-video")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-attention-circle text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Attention")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-attention-circle")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-facebook text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Facebook")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-facebook")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-google text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Google")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-google")])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-pinterest text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Pinterest")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-pinterest")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-twitter text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Twitter")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-twitter")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-credit-card text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Credit Card")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-credit-card")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-camera text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Camera")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-camera")])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-phone text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Phone")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-phone")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-printer text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Printer")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-printer")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-school-outline text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("School Outline")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-school-outline")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-car text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Car")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-car")])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-school text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("School")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-school")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-bath text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Bath")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-bath")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-bed text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Bed")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-bed")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-multi-family text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Multi-Family")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-multi-family")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-condo text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Condo")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-condo")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-farm text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Farm")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-farm")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-house-property text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("House Property")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-house-property")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-land text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Land")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-land")])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-townhouse text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Townhouse")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-townhouse")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-caret-down text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Caret Down")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-caret-down")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-caret-left text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Caret Left")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-caret-left")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-caret-right text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Caret Right")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-caret-right")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-wrap" }, [
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-caret-up text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("Caret Up")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-caret-up")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-sort-table-header text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v("Sort Table Header")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [
              _vm._v(".icon-sort-table-header")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4"
          },
          [
            _c("i", { staticClass: "icon-people text-3xl" }),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v("People")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-sm pt-5" }, [_vm._v(".icon-people")])
          ]
        )
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
            api.createRecord('$93e363', $93e363);
          } else {
            api.reload('$93e363', $93e363);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58819" + '/');

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
//# sourceMappingURL=/Icons.ba11fe32.map