parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){return r(t)||i(t)||n(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function i(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function r(t){if(Array.isArray(t))return a(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")});var o=document.getElementById("form");function s(t){t.preventDefault(),o.reset()}o.addEventListener("submit",s);var c=document.querySelectorAll(".button-circle");c.forEach(function(t){t.addEventListener("click",function(){var t=this.getAttribute("data-target"),e=document.getElementById(t);"false"===this.getAttribute("data-active")?(e.classList.add("active"),this.innerHTML="&#8722;",this.classList.add("active"),this.setAttribute("data-active","true")):(e.classList.remove("active"),this.innerHTML="&#43;",this.classList.remove("active"),this.setAttribute("data-active","false"))})});var d=document.querySelector(".pagination"),l=document.querySelector(".container__slidershow"),u=document.querySelector(".slideshow").children,v=null,f=!1;function m(t){v=t.pageX,f=!0}function h(e){if(f){var n=e.pageX-v,i=t(u).findIndex(function(t){return t.classList.contains("slide--active")}),r=i-1<0?u.length-1:i-1,a=i+1>u.length-1?0:i+1,o=d.children;if(0===n)return void(f=!1);u[i].classList.remove("slide--active"),o[i].classList.remove("pagination__link--active"),n<0?(u[a].classList.add("slide--active"),o[a].classList.add("pagination__link--active")):(u[r].classList.add("slide--active"),o[r].classList.add("pagination__link--active"))}f=!1}window.PointerEvent?(l.addEventListener("pointerdown",m),l.addEventListener("pointerup",h)):(l.addEventListener("touchdown",m),l.addEventListener("touchup",h));
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.693506b2.js.map