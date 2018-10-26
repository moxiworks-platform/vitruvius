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
})({"node_modules/skatejs/dist/es/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashCase = dashCase;
exports.keys = keys;
exports.empty = void 0;

function dashCase(str) {
  return typeof str === 'string' ? str.split(/([_A-Z])/).reduce(function (one, two, idx) {
    var dash = !one || idx % 2 === 0 ? '' : '-';
    two = two === '_' ? '' : two;
    return '' + one + dash + two.toLowerCase();
  }) : str;
}

var empty = function empty(val) {
  return val == null;
};

exports.empty = empty;

function keys(obj) {
  obj = obj || {};
  var names = Object.getOwnPropertyNames(obj);
  return Object.getOwnPropertySymbols ? names.concat(Object.getOwnPropertySymbols(obj)) : names;
}
},{}],"node_modules/skatejs/dist/es/name.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = name;

var _util = require("./util.js");

function format(prefix, suffix) {
  return (prefix.indexOf('-') === -1 ? 'x-' + prefix : prefix) + (suffix ? '-' + suffix : '');
}

function name() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'element';
  prefix = (0, _util.dashCase)(prefix);
  var suffix = 0;

  while (customElements.get(format(prefix, suffix))) {
    ++suffix;
  }

  return format(prefix, suffix);
}
},{"./util.js":"node_modules/skatejs/dist/es/util.js"}],"node_modules/skatejs/dist/es/define.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.define = define;

var _name = require("./name.js");

function define(Ctor) {
  customElements.define(Ctor.is || (0, _name.name)(), Ctor);
  return Ctor;
}
},{"./name.js":"node_modules/skatejs/dist/es/name.js"}],"node_modules/skatejs/dist/es/emit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emit = emit;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var defs = {
  bubbles: true,
  cancelable: true,
  composed: false
};

function emit(elem, name, opts) {
  var eventOptions = _extends({}, defs, opts);

  var e = void 0;

  if ('composed' in CustomEvent.prototype) {
    e = new CustomEvent(name, eventOptions);
  } else {
    e = document.createEvent('CustomEvent');
    e.initCustomEvent(name, eventOptions.bubbles, eventOptions.cancelable, eventOptions.detail);
    Object.defineProperty(e, 'composed', {
      value: eventOptions.composed
    });
  }

  return elem.dispatchEvent(e);
}
},{}],"node_modules/skatejs/dist/es/link.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.link = link;

function getValue(elem) {
  var checked = elem.checked,
      type = elem.type,
      value = elem.value;

  if (type === 'checkbox' || type === 'radio') {
    return checked ? value || true : false;
  }

  return value;
}

function link(elem) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'state.';
  return function (e) {
    // TODO revisit once all browsers have native support.
    //
    // We fallback to checking the composed path. Unfortunately this behaviour
    // is difficult to impossible to reproduce as it seems to be a possible
    // quirk in the shadydom polyfill that incorrectly returns null for the
    var localTarget = e.target || e.composedPath && e.composedPath()[0];
    var value = getValue(localTarget);
    var localTargetName = target || localTarget.name || 'value';

    if (localTargetName.indexOf('.') > -1) {
      var parts = localTargetName.split('.');
      var firstPart = parts[0];
      var propName = parts.pop();
      var obj = parts.reduce(function (prev, curr) {
        return prev[curr];
      }, elem);
      obj[propName || localTarget.name] = value;
      elem[firstPart] = elem[firstPart];
    } else {
      elem[localTargetName] = value;
    }
  };
}
},{}],"node_modules/skatejs/dist/es/shadow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shadow = shadow;

function shadow(elem) {
  return elem._shadowRoot || (elem._shadowRoot = elem.shadowRoot || elem.attachShadow({
    mode: 'open'
  }));
}
},{}],"node_modules/skatejs/dist/es/with-children.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withChildren = void 0;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _fixBabelExtend = function (O) {
  var gPO = O.getPrototypeOf || function (o) {
    return o.__proto__;
  },
      sPO = O.setPrototypeOf || function (o, p) {
    o.__proto__ = p;
    return o;
  },
      construct = (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === 'object' ? Reflect.construct : function (Parent, args, Class) {
    var Constructor,
        a = [null];
    a.push.apply(a, args);
    Constructor = Parent.bind.apply(Parent, a);
    return sPO(new Constructor(), Class.prototype);
  };

  return function fixBabelExtend(Class) {
    var Parent = gPO(Class);
    return sPO(Class, sPO(function Super() {
      return construct(Parent, arguments, gPO(this).constructor);
    }, Parent));
  };
}(Object);

var withChildren = function withChildren() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
  return _fixBabelExtend(function (_Base) {
    _inherits(_class2, _Base);

    function _class2() {
      _classCallCheck(this, _class2);

      return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
    }

    _createClass(_class2, [{
      key: 'childrenUpdated',
      // We automatically set a prop called children to invoke an update if it's
      // been defined.
      value: function childrenUpdated() {
        _get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'childrenUpdated', this) && _get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'childrenUpdated', this).call(this);

        if (this.props && this.props.hasOwnProperty('children')) {
          this.props = {
            children: this.children
          };
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        _get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'connectedCallback', this) && _get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'connectedCallback', this).call(this);

        if (this.childrenUpdated) {
          var fn = this.childrenUpdated.bind(this);
          this._mo = new MutationObserver(fn);

          this._mo.observe(this, {
            childList: true
          });

          fn();
        }
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        _get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'disconnectedCallback', this) && _get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'disconnectedCallback', this).call(this);

        if (this._mo) {
          this._mo.disconnect();
        }
      }
    }]);

    return _class2;
  }(Base));
};

exports.withChildren = withChildren;
},{}],"node_modules/skatejs/dist/es/with-context.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withContext = void 0;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _fixBabelExtend = function (O) {
  var gPO = O.getPrototypeOf || function (o) {
    return o.__proto__;
  },
      sPO = O.setPrototypeOf || function (o, p) {
    o.__proto__ = p;
    return o;
  },
      construct = (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === 'object' ? Reflect.construct : function (Parent, args, Class) {
    var Constructor,
        a = [null];
    a.push.apply(a, args);
    Constructor = Parent.bind.apply(Parent, a);
    return sPO(new Constructor(), Class.prototype);
  };

  return function fixBabelExtend(Class) {
    var Parent = gPO(Class);
    return sPO(Class, sPO(function Super() {
      return construct(Parent, arguments, gPO(this).constructor);
    }, Parent));
  };
}(Object);

var withContext = function withContext() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
  return _fixBabelExtend(function (_Base) {
    _inherits(_class, _Base);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'context',
      get: function get() {
        if (this._context) {
          return this._context;
        }

        var node = this;

        while (node = node.parentNode || node.host) {
          if ('context' in node) {
            return node.context;
          }
        }

        return {};
      },
      set: function set(context) {
        this._context = context;
      }
    }]);

    return _class;
  }(Base));
};

exports.withContext = withContext;
},{}],"node_modules/skatejs/dist/es/with-lifecycle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLifecycle = void 0;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _fixBabelExtend = function (O) {
  var gPO = O.getPrototypeOf || function (o) {
    return o.__proto__;
  },
      sPO = O.setPrototypeOf || function (o, p) {
    o.__proto__ = p;
    return o;
  },
      construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect.construct : function (Parent, args, Class) {
    var Constructor,
        a = [null];
    a.push.apply(a, args);
    Constructor = Parent.bind.apply(Parent, a);
    return sPO(new Constructor(), Class.prototype);
  };

  return function fixBabelExtend(Class) {
    var Parent = gPO(Class);
    return sPO(Class, sPO(function Super() {
      return construct(Parent, arguments, gPO(this).constructor);
    }, Parent));
  };
}(Object);

var withLifecycle = function withLifecycle() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
  return _fixBabelExtend(function (_Base) {
    _inherits(_class, _Base);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.connecting && this.connecting();
        _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "connectedCallback", this) && _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "connectedCallback", this).call(this);
        this.connected && this.connected();
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.disconnecting && this.disconnecting();
        _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "disconnectedCallback", this) && _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "disconnectedCallback", this).call(this);
        this.disconnected && this.disconnected();
      }
    }]);

    return _class;
  }(Base));
};

exports.withLifecycle = withLifecycle;
},{}],"node_modules/skatejs/dist/es/with-update.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeAttributeDefinition = normalizeAttributeDefinition;
exports.normalizePropertyDefinition = normalizePropertyDefinition;
exports.prop = prop;
exports.props = exports.withUpdate = void 0;

var _util = require("./util.js");

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _fixBabelExtend = function (O) {
  var gPO = O.getPrototypeOf || function (o) {
    return o.__proto__;
  },
      sPO = O.setPrototypeOf || function (o, p) {
    o.__proto__ = p;
    return o;
  },
      construct = (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === 'object' ? Reflect.construct : function (Parent, args, Class) {
    var Constructor,
        a = [null];
    a.push.apply(a, args);
    Constructor = Parent.bind.apply(Parent, a);
    return sPO(new Constructor(), Class.prototype);
  };

  return function fixBabelExtend(Class) {
    var Parent = gPO(Class);
    return sPO(Class, sPO(function Super() {
      return construct(Parent, arguments, gPO(this).constructor);
    }, Parent));
  };
}(Object);

function normalizeAttributeDefinition(name, prop) {
  var attribute = prop.attribute;
  var obj = (typeof attribute === 'undefined' ? 'undefined' : _typeof(attribute)) === 'object' ? _extends({}, attribute) : {
    source: attribute,
    target: attribute
  };

  if (obj.source === true) {
    obj.source = (0, _util.dashCase)(name);
  }

  if (obj.target === true) {
    obj.target = (0, _util.dashCase)(name);
  }

  return obj;
}

function identity(v) {
  return v;
}

function normalizePropertyDefinition(name, prop) {
  var coerce = prop.coerce,
      def = prop.default,
      deserialize = prop.deserialize,
      serialize = prop.serialize;
  return {
    attribute: normalizeAttributeDefinition(name, prop),
    coerce: coerce || identity,
    default: def,
    deserialize: deserialize || identity,
    serialize: serialize || identity
  };
}

var defaultTypesMap = new Map();

function defineProps(constructor) {
  if (constructor.hasOwnProperty('_propsNormalized')) return;
  var props = constructor.props;
  (0, _util.keys)(props).forEach(function (name) {
    var func = props[name] || props.any;
    if (defaultTypesMap.has(func)) func = defaultTypesMap.get(func);
    if (typeof func !== 'function') func = prop(func);
    func({
      constructor: constructor
    }, name);
  });
}

function delay(fn) {
  if (window.Promise) {
    Promise.resolve().then(fn);
  } else {
    setTimeout(fn);
  }
}

function prop(definition) {
  var propertyDefinition = definition || {}; // Allows decorators, or imperative definitions.

  var func = function func(_ref, name) {
    var constructor = _ref.constructor;
    var normalized = normalizePropertyDefinition(name, propertyDefinition); // Ensure that we can cache properties. We have to do this so the _props object literal doesn't modify parent
    // classes or share the instance anywhere where it's not intended to be shared explicitly in userland code.

    if (!constructor.hasOwnProperty('_propsNormalized')) {
      constructor._propsNormalized = {};
    } // Cache the value so we can reference when syncing the attribute to the property.


    constructor._propsNormalized[name] = normalized;
    var _normalized$attribute = normalized.attribute,
        source = _normalized$attribute.source,
        target = _normalized$attribute.target;

    if (source) {
      constructor._observedAttributes.push(source);

      constructor._attributeToPropertyMap[source] = name;

      if (source !== target) {
        constructor._attributeToAttributeMap[source] = target;
      }
    }

    Object.defineProperty(constructor.prototype, name, {
      configurable: true,
      get: function get() {
        var val = this._props[name];
        return val == null ? normalized.default : val;
      },
      set: function set(val) {
        var target = normalized.attribute.target,
            serialize = normalized.serialize;

        if (target) {
          var serializedVal = serialize ? serialize(val) : val;

          if (serializedVal == null) {
            this.removeAttribute(target);
          } else {
            this.setAttribute(target, serializedVal);
          }
        }

        this._props[name] = normalized.coerce(val);
        this.triggerUpdate();
      }
    });
  }; // Allows easy extension of pre-defined props { ...prop(), ...{} }.


  Object.keys(propertyDefinition).forEach(function (key) {
    return func[key] = propertyDefinition[key];
  });
  return func;
}

var withUpdate = function withUpdate() {
  var _class, _temp2;

  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
  return _fixBabelExtend((_temp2 = _class = function (_Base) {
    _inherits(_class, _Base);

    function _class() {
      var _ref2;

      var _temp, _this, _ret;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref2, [this].concat(args))), _this), _this._prevProps = {}, _this._prevState = {}, _this._props = {}, _this._state = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        var _constructor = this.constructor,
            _attributeToAttributeMap = _constructor._attributeToAttributeMap,
            _attributeToPropertyMap = _constructor._attributeToPropertyMap,
            _propsNormalized = _constructor._propsNormalized;

        if (_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'attributeChangedCallback', this)) {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'attributeChangedCallback', this).call(this, name, oldValue, newValue);
        }

        var propertyName = _attributeToPropertyMap[name];

        if (propertyName) {
          var propertyDefinition = _propsNormalized[propertyName];

          if (propertyDefinition) {
            var defaultValue = propertyDefinition.default,
                deserialize = propertyDefinition.deserialize;
            var propertyValue = deserialize ? deserialize(newValue) : newValue;
            this._props[propertyName] = propertyValue == null ? defaultValue : propertyValue;
            this.triggerUpdate();
          }
        }

        var targetAttributeName = _attributeToAttributeMap[name];

        if (targetAttributeName) {
          if (newValue == null) {
            this.removeAttribute(targetAttributeName);
          } else {
            this.setAttribute(targetAttributeName, newValue);
          }
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'connectedCallback', this)) {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'connectedCallback', this).call(this);
        }

        this.triggerUpdate();
      }
    }, {
      key: 'shouldUpdate',
      value: function shouldUpdate() {
        return true;
      }
    }, {
      key: 'triggerUpdate',
      value: function triggerUpdate() {
        var _this2 = this;

        if (this._updating) {
          return;
        }

        this._updating = true;
        delay(function () {
          var _prevProps = _this2._prevProps,
              _prevState = _this2._prevState;

          if (_this2.updating) {
            _this2.updating(_prevProps, _prevState);
          }

          if (_this2.updated && _this2.shouldUpdate(_prevProps, _prevState)) {
            _this2.updated(_prevProps, _prevState);
          }

          _this2._prevProps = _this2.props;
          _this2._prevState = _this2.state;
          _this2._updating = false;
        });
      }
    }, {
      key: 'props',
      get: function get() {
        var _this3 = this;

        return (0, _util.keys)(this.constructor.props).reduce(function (prev, curr) {
          prev[curr] = _this3[curr];
          return prev;
        }, {});
      },
      set: function set(props) {
        var _this4 = this;

        var ctorProps = this.constructor.props;
        (0, _util.keys)(props).forEach(function (k) {
          return k in ctorProps && (_this4[k] = props[k]);
        });
      }
    }, {
      key: 'state',
      get: function get() {
        return this._state;
      },
      set: function set(state) {
        this._state = state;
        this.triggerUpdate();
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        // We have to define props here because observedAttributes are retrieved
        // only once when the custom element is defined. If we did this only in
        // the constructor, then props would not link to attributes.
        defineProps(this);
        return this._observedAttributes.concat(_get(_class.__proto__ || Object.getPrototypeOf(_class), 'observedAttributes', this) || []);
      }
    }, {
      key: 'props',
      get: function get() {
        return this._props;
      },
      set: function set(props) {
        this._props = props;
      }
    }]);

    return _class;
  }(Base), _class._attributeToAttributeMap = {}, _class._attributeToPropertyMap = {}, _class._observedAttributes = [], _class._props = {}, _temp2));
};

exports.withUpdate = withUpdate;
var parse = JSON.parse,
    stringify = JSON.stringify;
var attribute = Object.freeze({
  source: true
});

var zeroOrNumber = function zeroOrNumber(val) {
  return (0, _util.empty)(val) ? 0 : Number(val);
};

var any = prop({
  attribute: attribute
});
var array = prop({
  attribute: attribute,
  coerce: function coerce(val) {
    return Array.isArray(val) ? val : (0, _util.empty)(val) ? null : [val];
  },
  default: Object.freeze([]),
  deserialize: parse,
  serialize: stringify
});
var boolean = prop({
  attribute: attribute,
  coerce: Boolean,
  default: false,
  deserialize: function deserialize(val) {
    return !(0, _util.empty)(val);
  },
  serialize: function serialize(val) {
    return val ? '' : null;
  }
});
var number = prop({
  attribute: attribute,
  default: 0,
  coerce: zeroOrNumber,
  deserialize: zeroOrNumber,
  serialize: function serialize(val) {
    return (0, _util.empty)(val) ? null : String(Number(val));
  }
});
var object = prop({
  attribute: attribute,
  default: Object.freeze({}),
  deserialize: parse,
  serialize: stringify
});
var string = prop({
  attribute: attribute,
  default: '',
  coerce: String,
  serialize: function serialize(val) {
    return (0, _util.empty)(val) ? null : String(val);
  }
});
defaultTypesMap.set(Array, array);
defaultTypesMap.set(Boolean, boolean);
defaultTypesMap.set(Number, number);
defaultTypesMap.set(Object, object);
defaultTypesMap.set(String, string);
var props = {
  any: any,
  array: array,
  boolean: boolean,
  number: number,
  object: object,
  string: string
};
exports.props = props;
},{"./util.js":"node_modules/skatejs/dist/es/util.js"}],"node_modules/skatejs/dist/es/with-renderer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRenderer = void 0;

var _shadow = require("./shadow.js");

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _fixBabelExtend = function (O) {
  var gPO = O.getPrototypeOf || function (o) {
    return o.__proto__;
  },
      sPO = O.setPrototypeOf || function (o, p) {
    o.__proto__ = p;
    return o;
  },
      construct = (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === 'object' ? Reflect.construct : function (Parent, args, Class) {
    var Constructor,
        a = [null];
    a.push.apply(a, args);
    Constructor = Parent.bind.apply(Parent, a);
    return sPO(new Constructor(), Class.prototype);
  };

  return function fixBabelExtend(Class) {
    var Parent = gPO(Class);
    return sPO(Class, sPO(function Super() {
      return construct(Parent, arguments, gPO(this).constructor);
    }, Parent));
  };
}(Object);

var withRenderer = function withRenderer() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
  return _fixBabelExtend(function (_Base) {
    _inherits(_class2, _Base);

    function _class2() {
      _classCallCheck(this, _class2);

      return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
    }

    _createClass(_class2, [{
      key: 'renderer',
      value: function renderer(root, html) {
        if (_get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'renderer', this)) {
          _get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'renderer', this).call(this, root, html);
        } else {
          root.innerHTML = html() || '';
        }
      }
    }, {
      key: 'updated',
      value: function updated(prevProps, prevState) {
        var _this2 = this;

        _get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'updated', this) && _get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'updated', this).call(this, prevProps, prevState);
        this.rendering && this.rendering();
        this.renderer(this.renderRoot, function () {
          return _this2.render && _this2.render(_this2);
        });
        this.rendered && this.rendered();
      }
    }, {
      key: 'renderRoot',
      get: function get() {
        return _get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'renderRoot', this) || (0, _shadow.shadow)(this);
      }
    }]);

    return _class2;
  }(Base));
};

exports.withRenderer = withRenderer;
},{"./shadow.js":"node_modules/skatejs/dist/es/shadow.js"}],"node_modules/skatejs/dist/es/with-component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withComponent = void 0;

var _withChildren = require("./with-children.js");

var _withContext = require("./with-context.js");

var _withLifecycle = require("./with-lifecycle.js");

var _withUpdate = require("./with-update.js");

var _withRenderer = require("./with-renderer.js");

var withComponent = function withComponent() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
  return (0, _withLifecycle.withLifecycle)((0, _withChildren.withChildren)((0, _withContext.withContext)((0, _withUpdate.withUpdate)((0, _withRenderer.withRenderer)(Base || HTMLElement)))));
};

exports.withComponent = withComponent;
},{"./with-children.js":"node_modules/skatejs/dist/es/with-children.js","./with-context.js":"node_modules/skatejs/dist/es/with-context.js","./with-lifecycle.js":"node_modules/skatejs/dist/es/with-lifecycle.js","./with-update.js":"node_modules/skatejs/dist/es/with-update.js","./with-renderer.js":"node_modules/skatejs/dist/es/with-renderer.js"}],"node_modules/skatejs/dist/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _define = require("./define.js");

Object.keys(_define).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _define[key];
    }
  });
});

var _emit = require("./emit.js");

Object.keys(_emit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _emit[key];
    }
  });
});

var _link = require("./link.js");

Object.keys(_link).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _link[key];
    }
  });
});

var _name = require("./name.js");

Object.keys(_name).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _name[key];
    }
  });
});

var _shadow = require("./shadow.js");

Object.keys(_shadow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _shadow[key];
    }
  });
});

var _withChildren = require("./with-children.js");

Object.keys(_withChildren).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _withChildren[key];
    }
  });
});

var _withContext = require("./with-context.js");

Object.keys(_withContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _withContext[key];
    }
  });
});

var _withComponent = require("./with-component.js");

Object.keys(_withComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _withComponent[key];
    }
  });
});

var _withLifecycle = require("./with-lifecycle.js");

Object.keys(_withLifecycle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _withLifecycle[key];
    }
  });
});

var _withUpdate = require("./with-update.js");

Object.keys(_withUpdate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _withUpdate[key];
    }
  });
});

var _withRenderer = require("./with-renderer.js");

Object.keys(_withRenderer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _withRenderer[key];
    }
  });
});
},{"./define.js":"node_modules/skatejs/dist/es/define.js","./emit.js":"node_modules/skatejs/dist/es/emit.js","./link.js":"node_modules/skatejs/dist/es/link.js","./name.js":"node_modules/skatejs/dist/es/name.js","./shadow.js":"node_modules/skatejs/dist/es/shadow.js","./with-children.js":"node_modules/skatejs/dist/es/with-children.js","./with-context.js":"node_modules/skatejs/dist/es/with-context.js","./with-component.js":"node_modules/skatejs/dist/es/with-component.js","./with-lifecycle.js":"node_modules/skatejs/dist/es/with-lifecycle.js","./with-update.js":"node_modules/skatejs/dist/es/with-update.js","./with-renderer.js":"node_modules/skatejs/dist/es/with-renderer.js"}],"src/components/button/button.js":[function(require,module,exports) {
"use strict";

var _skatejs = require("skatejs");

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
    key: "render",
    value: function render(_ref) {
      var name = _ref.name,
          klass = _ref.klass,
          icon = _ref.icon;
      var icn = icon ? "<i class=\"".concat(icon, "\"></i> ") : '';
      return "\n      <button class=\"".concat(klass, "\">\n        ").concat(icn, "\n        ").concat(name, "\n      </button>\n    ");
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
        name: _skatejs.props.string,
        klass: _skatejs.props.string,
        icon: _skatejs.props.string
      };
    }
  }]);

  return Button;
}((0, _skatejs.withComponent)());

customElements.define('vp-button', Button);
},{"skatejs":"node_modules/skatejs/dist/es/index.js"}],"src/vue/views/Buttons.vue":[function(require,module,exports) {
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
  return _c(
    "section",
    { attrs: { id: "buttons" } },
    [
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
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _vm._m(5),
      _vm._v(" "),
      _vm._m(6),
      _vm._v(" "),
      _vm._m(7),
      _vm._v(" "),
      _c("vp-button", {
        attrs: {
          name: "Click Me!",
          klass: "btn btn-primary",
          icon: "icon-heart-broken"
        }
      })
    ],
    1
  )
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
    return _c("div", { staticClass: "my-10" }, [
      _c("button", { staticClass: "btn btn-flat" }, [_vm._v("Flat")]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-default" }, [_vm._v("Default")]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-primary" }, [_vm._v("Primary")]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-destructive" }, [
        _vm._v("Destructive")
      ])
    ])
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
    return _c("div", { staticClass: "my-10" }, [
      _c("button", { staticClass: "btn btn-flat" }, [
        _c("i", { staticClass: "icon-location-pin-filled" }),
        _vm._v(" Flat")
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-default" }, [
        _c("i", { staticClass: "icon-location-pin-filled" }),
        _vm._v(" Default")
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-primary" }, [
        _c("i", { staticClass: "icon-location-pin-filled" }),
        _vm._v(" Primary")
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-destructive" }, [
        _c("i", { staticClass: "icon-location-pin-filled" }),
        _vm._v(" Destructive")
      ])
    ])
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
    return _c("div", { staticClass: "my-10" }, [
      _c("button", { staticClass: "btn btn-flat btn-dense" }, [_vm._v("Flat")]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-default btn-dense" }, [
        _vm._v("Default")
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-primary btn-dense" }, [
        _vm._v("Primary")
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-destructive btn-dense" }, [
        _vm._v("Destructive")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("strong", [_vm._v("Buttons with Icons Dense (smaller)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "my-10" }, [
      _c("button", { staticClass: "btn btn-flat btn-dense" }, [
        _c("i", { staticClass: "icon-location-pin-filled" }),
        _vm._v(" Flat")
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-default btn-dense" }, [
        _c("i", { staticClass: "icon-location-pin-filled" }),
        _vm._v(" Default")
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-primary btn-dense" }, [
        _c("i", { staticClass: "icon-location-pin-filled" }),
        _vm._v(" Primary")
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-destructive btn-dense" }, [
        _c("i", { staticClass: "icon-location-pin-filled" }),
        _vm._v(" Destructive")
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60735" + '/');

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