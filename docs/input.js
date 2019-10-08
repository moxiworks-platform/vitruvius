!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=13)}([function(t,e,s){"use strict";s.d(e,"f",(function(){return n})),s.d(e,"g",(function(){return i})),s.d(e,"b",(function(){return o})),s.d(e,"a",(function(){return a})),s.d(e,"d",(function(){return c})),s.d(e,"c",(function(){return u})),s.d(e,"e",(function(){return h}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${n}--\x3e`,r=new RegExp(`${n}|${i}`),o="$lit$";class a{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],a=document.createTreeWalker(e.content,133,null,!1);let c=0,d=-1,p=0;const{strings:f,values:{length:m}}=t;for(;p<m;){const t=a.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)l(e[t].name,o)&&n++;for(;n-- >0;){const e=f[p],s=h.exec(e)[2],n=s.toLowerCase()+o,i=t.getAttribute(n);t.removeAttribute(n);const a=i.split(r);this.parts.push({type:"attribute",index:d,name:s,strings:a}),p+=a.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,i=e.split(r),a=i.length-1;for(let e=0;e<a;e++){let s,r=i[e];if(""===r)s=u();else{const t=h.exec(r);null!==t&&l(t[2],o)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-o.length)+t[3]),s=document.createTextNode(r)}n.insertBefore(s,t),this.parts.push({type:"node",index:++d})}""===i[a]?(n.insertBefore(u(),t),s.push(t)):t.data=i[a],p+=a}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&d!==c||(d++,e.insertBefore(u(),t)),c=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(s.push(t),d--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const l=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},c=t=>-1!==t.index,u=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e,s){"use strict";s.d(e,"f",(function(){return c})),s.d(e,"a",(function(){return h})),s.d(e,"d",(function(){return p})),s.d(e,"b",(function(){return f})),s.d(e,"e",(function(){return m})),s.d(e,"c",(function(){return g}));var n=s(6),i=s(3),r=s(2),o=s(9),a=s(8),l=s(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const c=t=>null===t||!("object"==typeof t||"function"==typeof t),u=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class h{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new d(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(c(t)||!u(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class d{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r.a||c(t)&&t===this.value||(this.value=t,Object(n.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(n.b)(this.value);){const t=this.value;this.value=r.a,t(this)}this.value!==r.a&&this.committer.commit()}}class p{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(l.c)()),this.endNode=t.appendChild(Object(l.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=Object(l.c)()),t.__insert(this.endNode=Object(l.c)())}insertAfterPart(t){t.__insert(this.startNode=Object(l.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;Object(n.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.a,t(this)}const t=this.__pendingValue;t!==r.a&&(c(t)?t!==this.value&&this.__commitText(t):t instanceof a.b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):u(t)?this.__commitIterable(t):t===r.b?(this.value=r.b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof o.a&&this.value.template===e)this.value.update(t.values);else{const s=new o.a(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)void 0===(s=e[n])&&(s=new p(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){Object(i.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class f{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;Object(n.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.a,t(this)}if(this.__pendingValue===r.a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=r.a}}class m extends h{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new _(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class _ extends d{}let y=!1;try{const t={get capture(){return y=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class g{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;Object(n.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.a,t(this)}if(this.__pendingValue===r.a)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=v(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=r.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const v=t=>t&&(y?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return i}));
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n={},i={}},function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"c",(function(){return i})),s.d(e,"b",(function(){return r}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}},r=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}}},function(t,e,s){"use strict";var n=s(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const i=new class{handleAttributeExpressions(t,e,s,i){const r=e[0];if("."===r){return new n.e(t,e.slice(1),s).parts}return"@"===r?[new n.c(t,e.slice(1),i.eventContext)]:"?"===r?[new n.b(t,e.slice(1),s)]:new n.a(t,e,s).parts}handleTextExpression(t){return new n.d(t)}};var r=s(8),o=s(6);s(3),s(2),s(7),s(5),s(9),s(0);s.d(e,"d",(function(){return a})),s.d(e,"c",(function(){return o.a})),s.d(e,"a",(function(){return n.d})),s.d(e,"b",(function(){return r.b})),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const a=(t,...e)=>new r.b(t,e,"html",i)},function(t,e,s){"use strict";s.d(e,"b",(function(){return i})),s.d(e,"a",(function(){return r}));var n=s(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function i(t){let e=r.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},r.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(n.f);return void 0===(s=e.keyString.get(i))&&(s=new n.a(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const r=new Map},function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return r}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=new WeakMap,i=t=>(...e)=>{const s=t(...e);return n.set(s,!0),s},r=t=>"function"==typeof t&&n.has(t)},function(t,e,s){"use strict";s.d(e,"a",(function(){return o})),s.d(e,"b",(function(){return a}));var n=s(3),i=s(1),r=s(5);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=new WeakMap,a=(t,e,s)=>{let a=o.get(e);void 0===a&&(Object(n.b)(e,e.firstChild),o.set(e,a=new i.d(Object.assign({templateFactory:r.b},s))),a.appendInto(e)),a.setValue(t),a.commit()}},function(t,e,s){"use strict";s.d(e,"b",(function(){return o})),s.d(e,"a",(function(){return a}));var n=s(3),i=s(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=` ${i.f} `;class o{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],o=t.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===t.indexOf("--\x3e",o+1);const a=i.e.exec(t);e+=null===a?t+(s?r:i.g):t.substr(0,a.index)+a[1]+a[2]+i.b+a[3]+i.f}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class a extends o{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),Object(n.c)(e,s.firstChild),t}}},function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s(3),i=s(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class r{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=n.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let o,a=0,l=0,c=r.nextNode();for(;a<s.length;)if(o=s[a],Object(i.d)(o)){for(;l<o.index;)l++,"TEMPLATE"===c.nodeName&&(e.push(c),r.currentNode=c.content),null===(c=r.nextNode())&&(r.currentNode=e.pop(),c=r.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return n.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},function(t,e,s){"use strict";var n=s(4),i=s(3),r=s(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=133;function a(t,e){const{element:{content:s},parts:n}=t,i=document.createTreeWalker(s,o,null,!1);let r=c(n),a=n[r],l=-1,u=0;const h=[];let d=null;for(;i.nextNode();){l++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(h.push(t),null===d&&(d=t)),null!==d&&u++;void 0!==a&&a.index===l;)a.index=null!==d?-1:a.index-u,a=n[r=c(n,r)]}h.forEach(t=>t.parentNode.removeChild(t))}const l=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,o,null,!1);for(;s.nextNode();)e++;return e},c=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(Object(r.d)(e))return s}return-1};var u=s(7),h=s(5),d=s(9);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const p=(t,e)=>`${t}--${e}`;let f=!0;void 0===window.ShadyCSS?f=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),f=!1);const m=t=>e=>{const s=p(e.type,t);let n=h.a.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},h.a.set(s,n));let i=n.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(r.f);if(void 0===(i=n.keyString.get(o))){const s=e.getTemplateElement();f&&window.ShadyCSS.prepareTemplateDom(s,t),i=new r.a(e,s),n.keyString.set(o,i)}return n.stringsArray.set(e.strings,i),i},_=["html","svg"],y=new Set,g=(t,e,s)=>{y.add(t);const n=s?s.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:r}=i;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,t);const u=document.createElement("style");for(let t=0;t<r;t++){const e=i[t];e.parentNode.removeChild(e),u.textContent+=e.textContent}(t=>{_.forEach(e=>{const s=h.a.get(p(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),a(t,s)})})})(t);const d=n.content;s?function(t,e,s=null){const{element:{content:n},parts:i}=t;if(null==s)return void n.appendChild(e);const r=document.createTreeWalker(n,o,null,!1);let a=c(i),u=0,h=-1;for(;r.nextNode();){for(h++,r.currentNode===s&&(u=l(e),s.parentNode.insertBefore(e,s));-1!==a&&i[a].index===h;){if(u>0){for(;-1!==a;)i[a].index+=u,a=c(i,a);return}a=c(i,a)}}}(s,u,d.firstChild):d.insertBefore(u,d.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const f=d.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==f)e.insertBefore(f.cloneNode(!0),e.firstChild);else if(s){d.insertBefore(u,d.firstChild);const t=new Set;t.add(u),a(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const v={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},b=(t,e)=>e!==t&&(e==e||t==t),S={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},w=Promise.resolve(!0),x=1,P=4,C=8,N=16,T=32,A="finalized";class O extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=w,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const n=this._attributeNameForProperty(s,e);void 0!==n&&(this._attributeToPropertyMap.set(n,s),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=S){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const n=this[t];this[s]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(A)||t.finalize(),this[A]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=b){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,n=e.converter||v,i="function"==typeof n?n:n.fromAttribute;return i?i(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,n=e.converter;return(n&&n.toAttribute||v.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|T,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=S){const n=this.constructor,i=n._attributeNameForProperty(t,s);if(void 0!==i){const t=n._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|C,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=this._updateState&~C}}_attributeToProperty(t,e){if(this._updateState&C)return;const s=this.constructor,n=s._attributeToPropertyMap.get(t);if(void 0!==n){const t=s._classProperties.get(n)||S;this._updateState=this._updateState|N,this[n]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~N}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const n=this.constructor,i=n._classProperties.get(t)||S;n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||this._updateState&N||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|P;const s=this._updatePromise;this._updatePromise=new Promise((s,n)=>{t=s,e=n});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&T}get _hasRequestedUpdate(){return this._updateState&P}get hasUpdated(){return this._updateState&x}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&x||(this._updateState=this._updateState|x,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~P}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}O[A]=!0;const E="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();s.d(e,"a",(function(){return V})),s.d(e,"b",(function(){return n.d})),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const $=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let n=0,i=e.length;n<i;n++){const i=e[n];Array.isArray(i)?t(i,s):s.push(i)}return s}(t);class V extends O{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){$(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?E?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof n.b&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}V.finalized=!0,V.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,r=u.a.has(e),o=f&&11===e.nodeType&&!!e.host,a=o&&!y.has(n),l=a?document.createDocumentFragment():e;if(Object(u.b)(t,l,Object.assign({templateFactory:m(n)},s)),a){const t=u.a.get(l);u.a.delete(l);const s=t.value instanceof d.a?t.value.template:void 0;g(n,l,s),Object(i.b)(e,e.firstChild),e.appendChild(l),u.a.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)}},,,function(t,e,s){"use strict";s.r(e);var n=s(10);class i extends n.a{static get properties(){return{name:{type:String},label:{type:String},value:{type:String},type:{type:String},style:{type:String},id:{type:String},pattern:{type:String},textarea:{type:Boolean},autocomplete:{type:Boolean},iconleft:{type:String},iconRight:{type:String},iconclose:{type:String},rows:{type:String},format:{type:Boolean},color:{type:String},background:{type:String}}}constructor(){super()}createRenderRoot(){return this}returnBaseContainerClass(){let t="vp-input-container";return"textarea"===this.type&&(t+=" textarea"),t}returnClass(){let t="";return this.iconleft&&(t+="padding-left: 30px; "),this.iconclose&&(t+="padding-right: 30px; "),this.color&&(t+=`color: ${this.color}; `),t=`padding: 0; ${t}`}noop(){}oneTimeValueSet(t){let e=this.querySelector("input");e||(e=this.querySelector("textarea")),this.oneTimeValueSet=self.noop,this.hidePlaceHolder({target:e})}checkLabelStyles(){const t=this;let e="";return this.iconleft&&(e+="left: 40px; "),this.background&&(e+=`background: ${this.background}; `),this.color&&(e+=`color: ${this.color}; `),this.value&&""!==this.value&&setTimeout((function(){t.oneTimeValueSet()})),e}showHideClearButton(t){if(!this.iconclose)return!1;let e=t.target,s=e.parentNode;""===e.value?s.querySelector(".v-icon-close-circle").style.display="none":s.querySelector(".v-icon-close-circle").style.display="block"}hidePlaceHolder(t){const e=t.target.previousElementSibling,s=e.parentNode;e.classList.add("active"),s.classList.add("dark")}showPlaceHolder(t){if(""!==t.target.value)return!1;const e=t.target.previousElementSibling,s=e.parentNode;e.classList.remove("active"),s.classList.remove("dark")}focusOnInput(t){const e=t.target.parentNode,s="textarea"===this.type?"textarea":"input";e.querySelector(s).focus({target:t.target})}clearField(t){const e=t.target.parentNode,s=e.querySelector("label");e.querySelector("input").value="",s.classList.remove("active"),e.classList.remove("dark"),e.querySelector(".v-icon-close-circle").style.display="none"}formatField(){setTimeout(()=>{let t=this.renderRoot.querySelector("input");"tel"===t.getAttribute("type")&&this.formatTelephone(t)},100)}formatTelephone(t){const e=this;t.addEventListener("keyup",(function(t){var s=t.target;s.value=e.phoneFormat(s.value)})),this.renderRoot.querySelector("input").value=e.phoneFormat(this.renderRoot.querySelector("input").value)}phoneFormat(t){var e=(t=(t=t.replace(/\D/g,"")).substring(0,10)).length;return t=0==e?t:e<4?"("+t:e<7?"("+t.substring(0,3)+") "+t.substring(3,6):"("+t.substring(0,3)+") "+t.substring(3,6)+" - "+t.substring(6,10)}preFlight(){this.pattern=this.pattern?this.pattern:"",this.value=this.value?this.value:"",this.id=this.id?this.id:"",this.rows=this.rows?this.rows:"",this.iconclose&&requestAnimationFrame(()=>{let t=this.querySelector("input");this.showHideClearButton({target:t})}),this.format&&this.formatField()}render(){return this.preFlight(),n.b`
    ${"textarea"===this.type?n.b`
        <div class="${this.returnBaseContainerClass()}">
          <i data-icontype="left" class="${this.iconleft}"></i>
          <i class="v-icon-close-circle" @click="${this.clearField}"></i>
          <label style="${this.checkLabelStyles()}" @click="${this.focusOnInput}">${this.label}</label>
          <textarea
            autocomplete="off"
            id="${this.id}"
            style="${this.returnClass()}"
            type="${this.type}"
            name="${this.name}"
            pattern="${this.pattern}"
            rows="${this.rows}"
            @keyup="${this.showHideClearButton}"
            @focus="${this.hidePlaceHolder}"
            @blur="${this.showPlaceHolder}"
          >${this.value}</textarea>
        </div>

      `:n.b`
      <div class="${this.returnBaseContainerClass()}">
        <i data-icontype="left" class="${this.iconleft}"></i>
        <i class="v-icon-close-circle" @click="${this.clearField}"></i>
        <label style="${this.checkLabelStyles()}" @click="${this.focusOnInput}">${this.label}</label>
        <input
          autocomplete="off"
          id="${this.id}"
          style="${this.returnClass()}"
          type="${this.type}"
          name="${this.name}"
          value="${this.value}"
          pattern="${this.pattern}"
          @keyup="${this.showHideClearButton}"
          @focus="${this.hidePlaceHolder}"
          @blur="${this.showPlaceHolder}"
        >
      </div>
      `}
    `}}customElements.define("vp-input",i)}]);