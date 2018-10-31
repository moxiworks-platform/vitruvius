window.global = window; var parcelRequire; parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Y5ZL":[function(require,module,exports) {
"use strict";function e(e){return"string"==typeof e?e.split(/([_A-Z])/).reduce(function(e,t,r){return""+e+(e&&r%2!=0?"-":"")+(t="_"===t?"":t).toLowerCase()}):e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.dashCase=e,exports.keys=r,exports.empty=void 0;var t=function(e){return null==e};function r(e){e=e||{};var t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(e)):t}exports.empty=t;
},{}],"DKqm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.name=r;var e=require("./util.js");function t(e,t){return(-1===e.indexOf("-")?"x-"+e:e)+(t?"-"+t:"")}function r(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"element";r=(0,e.dashCase)(r);for(var n=0;customElements.get(t(r,n));)++n;return t(r,n)}
},{"./util.js":"Y5ZL"}],"TxCg":[function(require,module,exports) {

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.define=r;var e=require("./name.js");function r(r){return customElements.define(r.is||(0,e.name)(),r),r}
},{"./name.js":"DKqm"}],"lZZY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.emit=o;var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},t={bubbles:!0,cancelable:!0,composed:!1};function o(o,n,r){var c=e({},t,r),s=void 0;return"composed"in CustomEvent.prototype?s=new CustomEvent(n,c):((s=document.createEvent("CustomEvent")).initCustomEvent(n,c.bubbles,c.cancelable,c.detail),Object.defineProperty(s,"composed",{value:c.composed})),o.dispatchEvent(s)}
},{}],"l9D9":[function(require,module,exports) {
"use strict";function e(e){var t=e.checked,r=e.type,n=e.value;return"checkbox"===r||"radio"===r?!!t&&(n||!0):n}function t(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"state.";return function(n){var o=n.target||n.composedPath&&n.composedPath()[0],a=e(o),c=r||o.name||"value";if(c.indexOf(".")>-1){var u=c.split("."),i=u[0],s=u.pop();u.reduce(function(e,t){return e[t]},t)[s||o.name]=a,t[i]=t[i]}else t[c]=a}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.link=t;
},{}],"44ZF":[function(require,module,exports) {
"use strict";function o(o){return o._shadowRoot||(o._shadowRoot=o.shadowRoot||o.attachShadow({mode:"open"}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.shadow=o;
},{}],"x2lL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.withChildren=void 0;var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),o=function t(e,o,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,o);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,r)}if("value"in n)return n.value;var c=n.get;return void 0!==c?c.call(r):void 0};function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c=function(e){var o=e.getPrototypeOf||function(t){return t.__proto__},r=e.setPrototypeOf||function(t,e){return t.__proto__=e,t},n="object"===("undefined"==typeof Reflect?"undefined":t(Reflect))?Reflect.construct:function(t,e,o){var n,i=[null];return i.push.apply(i,e),n=t.bind.apply(t,i),r(new n,o.prototype)};return function(t){var e=o(t);return r(t,r(function(){return n(e,arguments,o(this).constructor)},e))}}(Object),p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return c(function(c){function p(){return r(this,p),n(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return i(p,t),e(p,[{key:"childrenUpdated",value:function(){o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"childrenUpdated",this)&&o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"childrenUpdated",this).call(this),this.props&&this.props.hasOwnProperty("children")&&(this.props={children:this.children})}},{key:"connectedCallback",value:function(){if(o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"connectedCallback",this)&&o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"connectedCallback",this).call(this),this.childrenUpdated){var t=this.childrenUpdated.bind(this);this._mo=new MutationObserver(t),this._mo.observe(this,{childList:!0}),t()}}},{key:"disconnectedCallback",value:function(){o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"disconnectedCallback",this)&&o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"disconnectedCallback",this).call(this),this._mo&&this._mo.disconnect()}}]),p}())};exports.withChildren=p;
},{}],"1UON":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.withContext=void 0;var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(e){var n=e.getPrototypeOf||function(t){return t.__proto__},o=e.setPrototypeOf||function(t,e){return t.__proto__=e,t},r="object"===("undefined"==typeof Reflect?"undefined":t(Reflect))?Reflect.construct:function(t,e,n){var r,u=[null];return u.push.apply(u,e),r=t.bind.apply(t,u),o(new r,n.prototype)};return function(t){var e=n(t);return o(t,o(function(){return r(e,arguments,n(this).constructor)},e))}}(Object),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return u(function(u){function i(){return n(this,i),o(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return r(i,t),e(i,[{key:"context",get:function(){if(this._context)return this._context;for(var t=this;t=t.parentNode||t.host;)if("context"in t)return t.context;return{}},set:function(t){this._context=t}}]),i}())};exports.withContext=i;
},{}],"JWIF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.withLifecycle=void 0;var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),o=function t(e,o,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,o);if(void 0===r){var c=Object.getPrototypeOf(e);return null===c?void 0:t(c,o,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0};function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=function(e){var o=e.getPrototypeOf||function(t){return t.__proto__},n=e.setPrototypeOf||function(t,e){return t.__proto__=e,t},r="object"===("undefined"==typeof Reflect?"undefined":t(Reflect))?Reflect.construct:function(t,e,o){var r,c=[null];return c.push.apply(c,e),r=t.bind.apply(t,c),n(new r,o.prototype)};return function(t){var e=o(t);return n(t,n(function(){return r(e,arguments,o(this).constructor)},e))}}(Object),p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return i(function(i){function p(){return n(this,p),r(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return c(p,t),e(p,[{key:"connectedCallback",value:function(){this.connecting&&this.connecting(),o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"connectedCallback",this)&&o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"connectedCallback",this).call(this),this.connected&&this.connected()}},{key:"disconnectedCallback",value:function(){this.disconnecting&&this.disconnecting(),o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"disconnectedCallback",this)&&o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"disconnectedCallback",this).call(this),this.disconnected&&this.disconnected()}}]),p}())};exports.withLifecycle=p;
},{}],"6S3N":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.normalizeAttributeDefinition=s,exports.normalizePropertyDefinition=l,exports.prop=d,exports.props=exports.withUpdate=void 0;var t=require("./util.js"),e=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),r=function t(e,r,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,r);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,o)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(o):void 0},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var p=function(t){var e=t.getPrototypeOf||function(t){return t.__proto__},r=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},o="object"===("undefined"==typeof Reflect?"undefined":n(Reflect))?Reflect.construct:function(t,e,o){var n,i=[null];return i.push.apply(i,e),n=t.bind.apply(t,i),r(new n,o.prototype)};return function(t){var n=e(t);return r(t,r(function(){return o(n,arguments,e(this).constructor)},n))}}(Object);function s(e,r){var i=r.attribute,a="object"===(void 0===i?"undefined":n(i))?o({},i):{source:i,target:i};return!0===a.source&&(a.source=(0,t.dashCase)(e)),!0===a.target&&(a.target=(0,t.dashCase)(e)),a}function c(t){return t}function l(t,e){var r=e.coerce,o=e.default,n=e.deserialize,i=e.serialize;return{attribute:s(t,e),coerce:r||c,default:o,deserialize:n||c,serialize:i||c}}var f=new Map;function b(e){if(!e.hasOwnProperty("_propsNormalized")){var r=e.props;(0,t.keys)(r).forEach(function(t){var o=r[t]||r.any;f.has(o)&&(o=f.get(o)),"function"!=typeof o&&(o=d(o)),o({constructor:e},t)})}}function y(t){window.Promise?Promise.resolve().then(t):setTimeout(t)}function d(t){var e=t||{},r=function(t,r){var o=t.constructor,n=l(r,e);o.hasOwnProperty("_propsNormalized")||(o._propsNormalized={}),o._propsNormalized[r]=n;var i=n.attribute,a=i.source,u=i.target;a&&(o._observedAttributes.push(a),o._attributeToPropertyMap[a]=r,a!==u&&(o._attributeToAttributeMap[a]=u)),Object.defineProperty(o.prototype,r,{configurable:!0,get:function(){var t=this._props[r];return null==t?n.default:t},set:function(t){var e=n.attribute.target,o=n.serialize;if(e){var i=o?o(t):t;null==i?this.removeAttribute(e):this.setAttribute(e,i)}this._props[r]=n.coerce(t),this.triggerUpdate()}})};return Object.keys(e).forEach(function(t){return r[t]=e[t]}),r}var _=function(){var o,n,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return p((n=o=function(o){function n(){var t,e,r;i(this,n);for(var o=arguments.length,u=Array(o),p=0;p<o;p++)u[p]=arguments[p];return e=r=a(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(u))),r._prevProps={},r._prevState={},r._props={},r._state={},a(r,e)}return u(n,s),e(n,[{key:"attributeChangedCallback",value:function(t,e,o){var i=this.constructor,a=i._attributeToAttributeMap,u=i._attributeToPropertyMap,p=i._propsNormalized;r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this,t,e,o);var s=u[t];if(s){var c=p[s];if(c){var l=c.default,f=c.deserialize,b=f?f(o):o;this._props[s]=null==b?l:b,this.triggerUpdate()}}var y=a[t];y&&(null==o?this.removeAttribute(y):this.setAttribute(y,o))}},{key:"connectedCallback",value:function(){r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.triggerUpdate()}},{key:"shouldUpdate",value:function(){return!0}},{key:"triggerUpdate",value:function(){var t=this;this._updating||(this._updating=!0,y(function(){var e=t._prevProps,r=t._prevState;t.updating&&t.updating(e,r),t.updated&&t.shouldUpdate(e,r)&&t.updated(e,r),t._prevProps=t.props,t._prevState=t.state,t._updating=!1}))}},{key:"props",get:function(){var e=this;return(0,t.keys)(this.constructor.props).reduce(function(t,r){return t[r]=e[r],t},{})},set:function(e){var r=this,o=this.constructor.props;(0,t.keys)(e).forEach(function(t){return t in o&&(r[t]=e[t])})}},{key:"state",get:function(){return this._state},set:function(t){this._state=t,this.triggerUpdate()}}],[{key:"observedAttributes",get:function(){return b(this),this._observedAttributes.concat(r(n.__proto__||Object.getPrototypeOf(n),"observedAttributes",this)||[])}},{key:"props",get:function(){return this._props},set:function(t){this._props=t}}]),n}(),o._attributeToAttributeMap={},o._attributeToPropertyMap={},o._observedAttributes=[],o._props={},n))};exports.withUpdate=_;var v=JSON.parse,h=JSON.stringify,g=Object.freeze({source:!0}),O=function(e){return(0,t.empty)(e)?0:Number(e)},m=d({attribute:g}),j=d({attribute:g,coerce:function(e){return Array.isArray(e)?e:(0,t.empty)(e)?null:[e]},default:Object.freeze([]),deserialize:v,serialize:h}),P=d({attribute:g,coerce:Boolean,default:!1,deserialize:function(e){return!(0,t.empty)(e)},serialize:function(t){return t?"":null}}),z=d({attribute:g,default:0,coerce:O,deserialize:O,serialize:function(e){return(0,t.empty)(e)?null:String(Number(e))}}),k=d({attribute:g,default:Object.freeze({}),deserialize:v,serialize:h}),w=d({attribute:g,default:"",coerce:String,serialize:function(e){return(0,t.empty)(e)?null:String(e)}});f.set(Array,j),f.set(Boolean,P),f.set(Number,z),f.set(Object,k),f.set(String,w);var A={any:m,array:j,boolean:P,number:z,object:k,string:w};exports.props=A;
},{"./util.js":"Y5ZL"}],"drFV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.withRenderer=void 0;var t=require("./shadow.js"),e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),o=function t(e,r,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,r);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,o)}if("value"in n)return n.value;var p=n.get;return void 0!==p?p.call(o):void 0};function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(t){var r=t.getPrototypeOf||function(t){return t.__proto__},o=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},n="object"===("undefined"==typeof Reflect?"undefined":e(Reflect))?Reflect.construct:function(t,e,r){var n,i=[null];return i.push.apply(i,e),n=t.bind.apply(t,i),o(new n,r.prototype)};return function(t){var e=r(t);return o(t,o(function(){return n(e,arguments,r(this).constructor)},e))}}(Object),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return u(function(u){function c(){return n(this,c),i(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return p(c,e),r(c,[{key:"renderer",value:function(t,e){o(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"renderer",this)?o(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"renderer",this).call(this,t,e):t.innerHTML=e()||""}},{key:"updated",value:function(t,e){var r=this;o(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"updated",this)&&o(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"updated",this).call(this,t,e),this.rendering&&this.rendering(),this.renderer(this.renderRoot,function(){return r.render&&r.render(r)}),this.rendered&&this.rendered()}},{key:"renderRoot",get:function(){return o(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"renderRoot",this)||(0,t.shadow)(this)}}]),c}())};exports.withRenderer=c;
},{"./shadow.js":"44ZF"}],"XGhd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.withComponent=void 0;var e=require("./with-children.js"),t=require("./with-context.js"),r=require("./with-lifecycle.js"),i=require("./with-update.js"),n=require("./with-renderer.js"),h=function(){var h=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return(0,r.withLifecycle)((0,e.withChildren)((0,t.withContext)((0,i.withUpdate)((0,n.withRenderer)(h||HTMLElement)))))};exports.withComponent=h;
},{"./with-children.js":"x2lL","./with-context.js":"1UON","./with-lifecycle.js":"JWIF","./with-update.js":"6S3N","./with-renderer.js":"drFV"}],"VUUb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./define.js");Object.keys(e).forEach(function(r){"default"!==r&&"__esModule"!==r&&Object.defineProperty(exports,r,{enumerable:!0,get:function(){return e[r]}})});var r=require("./emit.js");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return r[e]}})});var t=require("./link.js");Object.keys(t).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return t[e]}})});var n=require("./name.js");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return n[e]}})});var u=require("./shadow.js");Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return u[e]}})});var o=require("./with-children.js");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return o[e]}})});var c=require("./with-context.js");Object.keys(c).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return c[e]}})});var f=require("./with-component.js");Object.keys(f).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return f[e]}})});var i=require("./with-lifecycle.js");Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return i[e]}})});var s=require("./with-update.js");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return s[e]}})});var a=require("./with-renderer.js");Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return a[e]}})});
},{"./define.js":"TxCg","./emit.js":"lZZY","./link.js":"l9D9","./name.js":"DKqm","./shadow.js":"44ZF","./with-children.js":"x2lL","./with-context.js":"1UON","./with-component.js":"XGhd","./with-lifecycle.js":"JWIF","./with-update.js":"6S3N","./with-renderer.js":"drFV"}],"BkKT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createElement=exports.h=r,exports.cloneElement=a,exports.Component=A,exports.render=H,exports.rerender=u,exports.options=exports.default=void 0;var e=function(){},t={};exports.options=t;var n=[],o=[];function r(r,i){var l,a,s,p,c=o;for(p=arguments.length;p-- >2;)n.push(arguments[p]);for(i&&null!=i.children&&(n.length||n.push(i.children),delete i.children);n.length;)if((a=n.pop())&&void 0!==a.pop)for(p=a.length;p--;)n.push(a[p]);else"boolean"==typeof a&&(a=null),(s="function"!=typeof r)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(s=!1)),s&&l?c[c.length-1]+=a:c===o?c=[a]:c.push(a),l=s;var u=new e;return u.nodeName=r,u.children=c,u.attributes=null==i?void 0:i,u.key=null==i?void 0:i.key,void 0!==t.vnode&&t.vnode(u),u}function i(e,t){for(var n in t)e[n]=t[n];return e}var l="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function a(e,t){return r(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var s=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,p=[];function c(e){!e._dirty&&(e._dirty=!0)&&1==p.push(e)&&(t.debounceRendering||l)(u)}function u(){var e,t=p;for(p=[];e=t.pop();)e._dirty&&W(e)}function d(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&f(e,t.nodeName):n||e._componentConstructor===t.nodeName}function f(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function v(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function _(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function m(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===s.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,y,l):e.removeEventListener(t,y,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var a=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function y(e){return this._listeners[e.type](t.event&&t.event(e)||e)}var b=[],x=0,g=!1,C=!1;function N(){for(var e;e=b.pop();)t.afterMount&&t.afterMount(e),e.componentDidMount&&e.componentDidMount()}function w(e,t,n,o,r,i){x++||(g=null!=r&&void 0!==r.ownerSVGElement,C=null!=e&&!("__preactattr_"in e));var l=k(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--x||(C=!1,i||N()),l}function k(e,t,n,o,r){var i=e,l=g;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),U(e,!0))),i.__preactattr_=!0,i;var a=t.nodeName;if("function"==typeof a)return D(e,t,n,o);if(g="svg"===a||"foreignObject"!==a&&g,a=String(a),(!e||!f(e,a))&&(i=_(a,g),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),U(e,!0)}var s=i.firstChild,p=i.__preactattr_,c=t.children;if(null==p){p=i.__preactattr_={};for(var u=i.attributes,d=u.length;d--;)p[u[d].name]=u[d].value}return!C&&c&&1===c.length&&"string"==typeof c[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=c[0]&&(s.nodeValue=c[0]):(c&&c.length||null!=s)&&S(i,c,n,o,C||null!=p.dangerouslySetInnerHTML),B(i,t.attributes,p),g=l,i}function S(e,t,n,o,r){var i,l,a,s,p,c=e.childNodes,u=[],f={},v=0,_=0,h=c.length,y=0,b=t?t.length:0;if(0!==h)for(var x=0;x<h;x++){var g=c[x],C=g.__preactattr_;null!=(N=b&&C?g._component?g._component.__key:C.key:null)?(v++,f[N]=g):(C||(void 0!==g.splitText?!r||g.nodeValue.trim():r))&&(u[y++]=g)}if(0!==b)for(x=0;x<b;x++){var N;if(p=null,null!=(N=(s=t[x]).key))v&&void 0!==f[N]&&(p=f[N],f[N]=void 0,v--);else if(_<y)for(i=_;i<y;i++)if(void 0!==u[i]&&d(l=u[i],s,r)){p=l,u[i]=void 0,i===y-1&&y--,i===_&&_++;break}p=k(p,s,n,o),a=c[x],p&&p!==e&&p!==a&&(null==a?e.appendChild(p):p===a.nextSibling?m(a):e.insertBefore(p,a))}if(v)for(var x in f)void 0!==f[x]&&U(f[x],!1);for(;_<=y;)void 0!==(p=u[y--])&&U(p,!1)}function U(e,t){var n=e._component;n?V(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||m(e),P(e))}function P(e){for(e=e.lastChild;e;){var t=e.previousSibling;U(e,!0),e=t}}function B(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||h(e,o,n[o],n[o]=void 0,g);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||h(e,o,n[o],n[o]=t[o],g)}var L=[];function M(e,t,n){var o,r=L.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),A.call(o,t,n)):((o=new A(t,n)).constructor=e,o.render=T);r--;)if(L[r].constructor===e)return o.nextBase=L[r].nextBase,L.splice(r,1),o;return o}function T(e,t,n){return this.constructor(e,n)}function E(e,n,o,r,i){e._disable||(e._disable=!0,e.__ref=n.ref,e.__key=n.key,delete n.ref,delete n.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(n,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=n,e._disable=!1,0!==o&&(1!==o&&!1===t.syncComponentUpdates&&e.base?c(e):W(e,1,i)),e.__ref&&e.__ref(e))}function W(e,n,o,r){if(!e._disable){var l,a,s,p=e.props,c=e.state,u=e.context,d=e.prevProps||p,f=e.prevState||c,_=e.prevContext||u,m=e.base,h=e.nextBase,y=m||h,g=e._component,C=!1,k=_;if(e.constructor.getDerivedStateFromProps&&(c=i(i({},c),e.constructor.getDerivedStateFromProps(p,c)),e.state=c),m&&(e.props=d,e.state=f,e.context=_,2!==n&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(p,c,u)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(p,c,u),e.props=p,e.state=c,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!C){l=e.render(p,c,u),e.getChildContext&&(u=i(i({},u),e.getChildContext())),m&&e.getSnapshotBeforeUpdate&&(k=e.getSnapshotBeforeUpdate(d,f));var S,P,B=l&&l.nodeName;if("function"==typeof B){var L=v(l);(a=g)&&a.constructor===B&&L.key==a.__key?E(a,L,1,u,!1):(S=a,e._component=a=M(B,L,u),a.nextBase=a.nextBase||h,a._parentComponent=e,E(a,L,0,u,!1),W(a,1,o,!0)),P=a.base}else s=y,(S=g)&&(s=e._component=null),(y||1===n)&&(s&&(s._component=null),P=w(s,l,u,o||!m,y&&y.parentNode,!0));if(y&&P!==y&&a!==g){var T=y.parentNode;T&&P!==T&&(T.replaceChild(P,y),S||(y._component=null,U(y,!1)))}if(S&&V(S),e.base=P,P&&!r){for(var D=e,A=e;A=A._parentComponent;)(D=A).base=P;P._component=D,P._componentConstructor=D.constructor}}for(!m||o?b.unshift(e):C||(e.componentDidUpdate&&e.componentDidUpdate(d,f,k),t.afterUpdate&&t.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);x||r||N()}}function D(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,s=a,p=v(t);r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;return r&&s&&(!o||r._component)?(E(r,p,3,n,o),e=r.base):(i&&!a&&(V(i),e=l=null),r=M(t.nodeName,p,n),e&&!r.nextBase&&(r.nextBase=e,l=null),E(r,p,1,n,o),e=r.base,l&&e!==l&&(l._component=null,U(l,!1))),e}function V(e){t.beforeUnmount&&t.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?V(o):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),e.nextBase=n,m(n),L.push(e),P(n)),e.__ref&&e.__ref(null)}function A(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function H(e,t,n){return w(n,e,{},!1,t,!1)}i(A.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=i(i({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),c(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),W(this,2)},render:function(){}});var j={h:r,createElement:r,cloneElement:a,Component:A,render:H,rerender:u,options:t},z=j;exports.default=z;
},{}],"XvD0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("skatejs"),t=r(require("preact"));function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),i=function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,o)}if("value"in n)return n.value;var c=n.get;return void 0!==c?c.call(o):void 0};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="__preactNodeName",l=void 0;function f(t){var r=t.nodeName;if(r&&r.prototype instanceof HTMLElement){if(!r[u]){var o=r.name;customElements.define(r[u]=(0,e.name)(o),function(e){function t(){return c(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,r),t}())}t.nodeName=r[u]}return t}function s(){l=t.default.options.vnode,t.default.options.vnode=f}function d(){t.default.options.vnode=l}var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;return function(r){function u(){return c(this,u),p(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments))}return a(u,e),n(u,[{key:"renderer",value:function(e,r){s(),this._renderRoot=e,this._preactDom=(0,t.render)(r(),e,this._preactDom||e.childNodes[0]),d()}},{key:"disconnectedCallback",value:function(){i(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"disconnectedCallback",this)&&i(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"disconnectedCallback",this).call(this),this._preactDom=(0,t.render)(null,this._renderRoot,this._preactDom),this._renderRoot=null}},{key:"props",get:function(){return o({},i(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"props",this),{children:(0,t.h)("slot",null)})}}]),u}()};exports.default=y;
},{"skatejs":"VUUb","preact":"BkKT"}],"uicY":[function(require,module,exports) {
"use strict";var t=require("skatejs"),e=r(require("@skatejs/renderer-preact")),n=require("preact");function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function f(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(r){function o(){return u(this,o),f(this,a(o).apply(this,arguments))}return p(o,(0,t.withComponent)((0,e.default)())),c(o,[{key:"returnClass",value:function(t){var e=t.split(","),n="";return e.forEach(function(t){n+="btn-".concat(t," ")}),n}},{key:"render",value:function(t){var e=t.type,r=t.icon,o=t.onClick;return(0,n.h)("button",{className:"btn "+this.returnClass(e),onClick:o},r&&(0,n.h)("i",{class:r}),this.innerHTML)}},{key:"renderRoot",get:function(){return this}}],[{key:"props",get:function(){return{type:t.props.string,icon:t.props.string,onClick:t.props.string}}}]),o}();customElements.define("vp-button",y);
},{"skatejs":"VUUb","@skatejs/renderer-preact":"XvD0","preact":"BkKT"}],"zoTV":[function(require,module,exports) {
"use strict";require("../button/button");
},{"../button/button":"uicY"}]},{},["zoTV"], null)
//# sourceMappingURL=/button.map