!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}({16:function(e,t,n){"use strict";n.r(t);class r{constructor(){}createContainer(e){const t=this;let n=document.createElement("div");if(n.id="vp-toast-container",e.centered){let e=document.createElement("div");return e.className="vp-toast-wrapper",n.className="centered",e.appendChild(n),e.addEventListener("click",(function(){this.parentNode&&this.parentNode.removeChild(this),t.checkCenteredContainer()})),e}return n}createToast(e){const t=this;let n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("i"),c=document.createElement("div"),i=document.createElement("div"),a=document.createElement("p");return o.className="v-icon-check-circle","info"===e.type?o.className="v-icon-info-circle info":"error"===e.type&&(o.className="v-icon-info-circle error"),c.className="vp-toast-message",i.className="font-bold mb-5",n.className="vp-toast show",i.innerHTML=e.header||"",a.innerHTML=e.message||"",r.appendChild(o),e.header&&c.appendChild(i),c.appendChild(a),n.appendChild(r),n.appendChild(c),n.addEventListener("click",(function(){this.parentNode.removeChild(this),t.checkContainer()})),e.removeIn&&!isNaN(e.removeIn)&&(t.elemTimeout=setTimeout((function(){n.parentNode&&n.parentNode.removeChild(n),t.checkCenteredContainer()}),e.removeIn)),n}initContainer(e){null===document.querySelector("#vp-toast-container")&&document.body.appendChild(this.createContainer(e))}show(e={type:"success",header:null,message:null,removeIn:null}){this.initContainer(e),document.querySelector("#vp-toast-container").appendChild(this.createToast(e)),document.querySelector("#vp-toast-container").style.display="block"}checkContainer(){if(!document.querySelectorAll(".vp-toast").length){const e=document.querySelector("#vp-toast-container");e.parentNode.removeChild(e)}this.checkCenteredContainer()}checkCenteredContainer(){if(document.querySelectorAll(".vp-toast-wrapper").length){const e=document.querySelector(".vp-toast-wrapper");e.parentNode.removeChild(e)}this.elemTimeout&&clearTimeout(this.elemTimeout)}}window.Toast=r,t.default=r}});