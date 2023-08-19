// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).itercumidrange=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var c,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,e,r.get),p&&i&&i.call(t,e,r.set),t};var c=e;function a(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,e){return null!=t&&d.call(t,e)}var _="function"==typeof Symbol?Symbol.toStringTag:"";var g=s()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[_],e=m(t,_);try{t[_]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[_]=r:delete t[_],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var w=s();function h(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function S(t){return p(t)||h(t)}function E(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",h);var T="object"==typeof self?self:null,I="object"==typeof window?window:null,N="object"==typeof global?global:null;var O=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(T)return T;if(I)return I;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),A=O.document&&O.document.childNodes,x=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;a(P,"REGEXP",B);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function G(t){return null!==t&&"object"==typeof t}function C(t){var e,r,n,o;if(("Object"===(r=g(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=B.exec(n.toString()))return e[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!V(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(G));var F="function"==typeof y||"object"==typeof x||"function"==typeof A?function(t){return C(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?C(t).toLowerCase():e};function k(t){return"function"===F(t)}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null,M=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;function U(t){return t!=t}return function t(e){var r,n,o,u,i,f,l,c;if(i=typeof(u=e),null===u||"object"!==i&&"function"!==i||!k(u.next))throw new TypeError(function(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}("1KN3w,G7",e));return l=R,c=M,o=function(t){return 0===arguments.length?void 0===f?null:f/2:(U(t)&&(c=t,l=t),t>l&&(l=t),t<c&&(c=t),(f=l+c)/2)},a(r={},"next",(function(){var t;if(n)return{done:!0};if((t=e.next()).done)return n=!0,t;t="number"==typeof t.value?o(t.value):o(NaN);return{value:t,done:!1}})),a(r,"return",(function(t){if(n=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),L&&k(e[L])&&a(r,L,(function(){return t(e[L]())})),r}}));
//# sourceMappingURL=index.js.map
