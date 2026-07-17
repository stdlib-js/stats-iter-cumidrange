"use strict";var l=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var f=l(function(b,v){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),q=require('@stdlib/assert-is-function/dist'),t=require('@stdlib/symbol-iterator/dist'),g=require('@stdlib/stats-incr-midrange/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist');function o(n){var r,u,i;if(!m(n))throw new TypeError(p('1KN3w',n));return i=g(),r={},a(r,"next",s),a(r,"return",c),t&&q(n[t])&&a(r,t,d),r;function s(){var e;return u?{done:!0}:(e=n.next(),e.done?(u=!0,e):(typeof e.value=="number"?e=i(e.value):e=i(NaN),{value:e,done:!1}))}function c(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function d(){return o(n[t]())}}v.exports=o
});var x=f();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
