!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}({10:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.nativeContainer=document.querySelector(t),this.items=this.nativeContainer.querySelectorAll(n),this.assignEvents()}var t,r,o;return t=e,(r=[{key:"getOffsetTop",value:function(e){return document.querySelector(e).offsetTop}},{key:"scrollToElement",value:function(e,t,n){e.preventDefault();var r,o=e.target.getAttribute("href"),i=this.getOffsetTop(o),u=window.pageYOffset;!function e(){r!==i&&(u>i?(u-=t,r=Math.max(i,u)):(u+=t,r=Math.min(i,u)),window.scroll(0,r),requestAnimationFrame(e))}(),n&&n(),location.hash=o}},{key:"assignEvents",value:function(){for(var e=this,t=0;t<this.items.length;t++)this.items[t].addEventListener("click",(function(t){e.scrollToElement(t,150)}))}}])&&n(t.prototype,r),o&&n(t,o),e}())(".menu",".menu__link")}});