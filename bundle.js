// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).itercumidrange=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=s,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g,m=/./;var h=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,E=w;var j=function(r){return E.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},x="function"==typeof Symbol?Symbol.toStringTag:"",T=_,O=x,S=w;var V=j,k=function(r){var e,t,n;if(null==r)return S.call(r);t=r[O],e=T(r,O);try{r[O]=void 0}catch(e){return S.call(r)}return n=S.call(r),e?r[O]=t:delete r[O],n},I=y()?k:V,A=Boolean.prototype.toString;var R=I,$=function(r){try{return A.call(r),!0}catch(r){return!1}},F=y();var M=function(r){return"object"==typeof r&&(r instanceof Boolean||(F?$(r):"[object Boolean]"===R(r)))},N=h,C=M;var B=d,G=function(r){return N(r)||C(r)},L=M;B(G,"isPrimitive",h),B(G,"isObject",L);var Z=G;var W=function(){return new Function("return this;")()},X="object"==typeof self?self:null,z="object"==typeof window?window:null,U="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Y="object"==typeof U?U:null;module.exports=Y;var D=Z.isPrimitive,q=W,H=X,J=z,K=r(Object.freeze({__proto__:null}));var Q=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(H)return H;if(J)return J;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},rr=Q(),er=rr.document&&rr.document.childNodes,tr=Int8Array,nr=m,ir=er,or=tr;var ar=function(){return"function"==typeof nr||"object"==typeof or||"function"==typeof ir};var ur=function(){return/^\s*function\s*([^(]*)/i},cr=ur;d(cr,"REGEXP",ur());var fr=cr,sr=I;var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===sr(r)};var pr=function(r){return null!==r&&"object"==typeof r};d(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pr));var vr=pr;var gr=I,dr=fr.REGEXP,mr=function(r){return vr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var hr=function(r){var e,t,n;if(("Object"===(t=gr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return mr(r)?"Buffer":t},br=hr;var yr=hr;var wr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e},Er=function(r){return yr(r).toLowerCase()},jr=ar()?Er:wr;var Pr=function(r){return"function"===jr(r)},_r=Pr;var xr=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&_r(r.next)},Tr=_;var Or=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Tr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Sr=Number.POSITIVE_INFINITY,Vr=Number,kr=Vr.NEGATIVE_INFINITY;var Ir=function(r){return r!=r},Ar=Sr,Rr=kr,$r=Ir;var Fr=function(){var r,e=Rr,t=Ar;return function(n){if(0===arguments.length)return void 0===r?null:r/2;$r(n)&&(t=n,e=n);n>e&&(e=n);n<t&&(t=n);return(r=e+t)/2}},Mr=Fr;var Nr=function(r){return"string"==typeof r},Cr=String.prototype.valueOf;var Br=I,Gr=function(r){try{return Cr.call(r),!0}catch(r){return!1}},Lr=y();var Zr=function(r){return"object"==typeof r&&(r instanceof String||(Lr?Gr(r):"[object String]"===Br(r)))},Wr=Nr,Xr=Zr;var zr=d,Ur=function(r){return Wr(r)||Xr(r)},Yr=Zr;zr(Ur,"isPrimitive",Nr),zr(Ur,"isObject",Yr);var Dr=Ur,qr=Math.floor;var Hr=function(r){return qr(r)===r},Jr=Hr;var Kr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Jr(r.length)&&r.length>=0&&r.length<=9007199254740991};var Qr=function(r){return"number"==typeof r},re=Vr.prototype.toString;var ee=I,te=Vr,ne=function(r){try{return re.call(r),!0}catch(r){return!1}},ie=y();var oe=function(r){return"object"==typeof r&&(r instanceof te||(ie?ne(r):"[object Number]"===ee(r)))},ae=Qr,ue=oe;var ce=d,fe=function(r){return ae(r)||ue(r)},se=oe;ce(fe,"isPrimitive",Qr),ce(fe,"isObject",se);var le=fe,pe=Sr,ve=kr,ge=Hr;var de=function(r){return r<pe&&r>ve&&ge(r)},me=le.isPrimitive,he=de;var be=function(r){return me(r)&&he(r)},ye=le.isObject,we=de;var Ee=function(r){return ye(r)&&we(r.valueOf())},je=be,Pe=Ee;var _e=d,xe=function(r){return je(r)||Pe(r)},Te=Ee;_e(xe,"isPrimitive",be),_e(xe,"isObject",Te);var Oe=xe,Se=le.isPrimitive,Ve=Ir;var ke=function(r){return Se(r)&&Ve(r)},Ie=le.isObject,Ae=Ir;var Re=function(r){return Ie(r)&&Ae(r.valueOf())},$e=ke,Fe=Re;var Me=d,Ne=function(r){return $e(r)||Fe(r)},Ce=Re;Me(Ne,"isPrimitive",ke),Me(Ne,"isObject",Ce);var Be=Kr,Ge=Oe.isPrimitive,Le=Dr.isPrimitive,Ze=Ne.isPrimitive;var We=function(r,e,t){var n,i,o;if(!Be(r)&&!Le(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ge(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Le(r)){if(!Le(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Ze(e)){for(o=i;o<n;o++)if(Ze(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},Xe=We,ze=Dr.isPrimitive;var Ue=function(r){if(!ze(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ye=Dr.isPrimitive;var De=function(r){if(!Ye(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},qe=Ue,He=De,Je=Dr.isPrimitive;var Ke=function(r){return Je(r)&&r===He(r)&&r!==qe(r)},Qe=Sr,rt=kr;var et=function(r){return r==r&&r>rt&&r<Qe},tt=Oe.isPrimitive;var nt=function(r){return tt(r)&&r>=0},it=Oe.isObject;var ot=function(r){return it(r)&&r.valueOf()>=0},at=nt,ut=ot;var ct=d,ft=function(r){return at(r)||ut(r)},st=ot;ct(ft,"isPrimitive",nt),ct(ft,"isObject",st);var lt=ft.isPrimitive,pt=Dr.isPrimitive;var vt=function(r,e){var t,n;if(!pt(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!lt(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},gt=Oe.isPrimitive,dt=Dr.isPrimitive;var mt=function(r,e,t){var n,i;if(!dt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!dt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!gt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},ht=vt,bt=mt;var yt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(bt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+ht("0",i):ht("0",i)+r,n&&(r="-"+r)),r},wt=Ke,Et=De,jt=Ue,Pt=et,_t=le.isPrimitive,xt=yt;var Tt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Pt(n)){if(!_t(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=xt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=xt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=wt(r.specifier)?Et(t):jt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Ot=Dr.isPrimitive,St=/[-\/\\^$*+?.()|[\]{}]/g;var Vt=function(r){var e,t;if(!Ot(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(St,"\\$&"):(e=(e=r.substring(1,t)).replace(St,"\\$&"),r=r[0]+e+r.substring(t))},kt=RegExp.prototype.exec;var It=I,At=function(r){try{return kt.call(r),!0}catch(r){return!1}},Rt=y();var $t=Vt,Ft=Pr,Mt=Dr.isPrimitive,Nt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Rt?At(r):"[object RegExp]"===It(r)))};var Ct=Ke,Bt=De,Gt=Ue,Lt=function(r,e,t){if(!Mt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Mt(e))e=$t(e),e=new RegExp(e,"g");else if(!Nt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Mt(t)&&!Ft(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Zt=et,Wt=le.isPrimitive,Xt=function(r){return Math.abs(r)},zt=/e\+(\d)$/,Ut=/e-(\d)$/,Yt=/^(\d+)$/,Dt=/^(\d+)e/,qt=/\.0$/,Ht=/\.0*e/,Jt=/(\..*[^0])0*e/;var Kt=function(r){var e,t,n=parseFloat(r.arg);if(!Zt(n)){if(!Wt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Xt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Lt(t,Jt,"$1e"),t=Lt(t,Ht,"e"),t=Lt(t,qt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Lt(t,zt,"e+0$1"),t=Lt(t,Ut,"e-0$1"),r.alternate&&(t=Lt(t,Yt,"$1."),t=Lt(t,Dt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Ct(r.specifier)?Bt(t):Gt(t)},Qt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var rn=vt;var en=Dr.isPrimitive,tn=Xe,nn=Ir,on=Tt,an=Kt,un=function(r){var e,t,n,i,o;for(e=0,n=[],o=Qt.exec(r);o;)(t=r.slice(e,Qt.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=Qt.lastIndex,o=Qt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},cn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+rn(" ",n):rn(" ",n)+r},fn=yt,sn=String.fromCharCode;var ln=function(r){var e,t,n,i,o,a,u,c,f;if(!en(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=un(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],en(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!tn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,nn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,nn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=on(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!nn(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=nn(o)?String(n.arg):sn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=an(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=fn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=cn(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},pn=d,vn=xr,gn=Pr,dn=Or,mn=Mr,hn=ln;var bn=function r(e){var t,n,i;if(!vn(e))throw new TypeError(hn("invalid argument. Must provide an iterator. Value: `%s`.",e));return i=mn(),pn(t={},"next",(function(){var r;if(n)return{done:!0};if((r=e.next()).done)return n=!0,r;r="number"==typeof r.value?i(r.value):i(NaN);return{value:r,done:!1}})),pn(t,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),dn&&gn(e[dn])&&pn(t,dn,(function(){return r(e[dn]())})),t};return bn}));
//# sourceMappingURL=bundle.js.map
