parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mwQg":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,o(n.key),n)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(t){var r=a(t,"string");return"symbol"===e(r)?r:String(r)}function a(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Grid=void 0;var i=function(){function e(){t(this,e),this.wordSelectMode=!1,this.selectedItems=[],this.firstSelectedItem,this.gridArea=null,this.words=[],this.foundWords=[]}return n(e,[{key:"getCellsInRange",value:function(e,t){var r=[];if(e.x>t.x||e.y>t.y){var n=[e,t];t=n[0],e=n[1]}if(e.y===t.y)for(var o=e.x;o<=t.x;o++)r.push(this.gridArea.querySelector('td[data-x="'.concat(o,'"][data-y="').concat(t.y,'"]')));else if(e.x===t.x)for(var a=e.y;a<=t.y;a++)r.push(this.gridArea.querySelector('td[data-x="'.concat(t.x,'"][data-y="').concat(a,'"]')));else if(t.y-e.y==t.x-e.x)for(var i=t.y-e.y,d=0;d<=i;d++)r.push(this.gridArea.querySelector('td[data-x="'.concat(e.x+d,'"][data-y="').concat(e.y+d,'"]')));return r}},{key:"renderGrid",value:function(e,t){var r=this,n=document.getElementsByClassName("grid-area")[0];n.lastChild&&n.removeChild(n.lastChild),this.gridArea=n;for(var o=document.createElement("table"),a=document.createElement("tbody"),i=0,d=0;d<e;d++){for(var s=document.createElement("tr"),c=0;c<e;c++){var u=document.createElement("td"),l=t[i++],f=document.createTextNode(l);u.appendChild(f),u.setAttribute("data-x",d),u.setAttribute("data-y",c),u.setAttribute("data-letter",l),s.appendChild(u)}a.appendChild(s)}o.appendChild(a),n.appendChild(o),o.addEventListener("mousedown",function(e){r.wordSelectMode=!0;var t=e.target,n=+t.getAttribute("data-x"),o=+t.getAttribute("data-y");t.getAttribute("data-letter");r.firstSelectedItem={x:n,y:o}}),o.addEventListener("mousemove",function(e){if(r.wordSelectMode){var t=e.target,n=+t.getAttribute("data-x"),o=+t.getAttribute("data-y");t.getAttribute("data-letter");r.selectedItems.forEach(function(e){return e.classList.remove("selected")}),r.selectedItems=r.getCellsInRange(r.firstSelectedItem,{x:n,y:o}),r.selectedItems.forEach(function(e){return e.classList.add("selected")})}}),o.addEventListener("mouseup",function(e){r.wordSelectMode=!1;var t=r.selectedItems.reduce(function(e,t){return e+t.getAttribute("data-letter")},""),n=t.split("").reverse().join("");-1!==r.words.indexOf(t)?r.foundWords.push(t):-1!==r.words.indexOf(n)?r.foundWords.push(n):r.selectedItems.forEach(function(e){return e.classList.remove("selected")}),r.selectedItems=[]})}}]),e}();exports.Grid=i;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var t=require("./grid");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(){e=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(N){s=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,a=Object.create(o.prototype),c=new j(n||[]);return i(a,"_invoke",{value:E(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(N){return{type:"throw",arg:N}}}t.wrap=f;var p={};function d(){}function y(){}function v(){}var m={};s(m,c,function(){return this});var g=Object.getPrototypeOf,w=g&&g(g(k([])));w&&w!==n&&o.call(w,c)&&(m=w);var b=v.prototype=d.prototype=Object.create(m);function x(t){["next","throw","return"].forEach(function(r){s(t,r,function(t){return this._invoke(r,t)})})}function L(t,e){var n;i(this,"_invoke",{value:function(i,a){function c(){return new e(function(n,c){!function n(i,a,c,u){var l=h(t[i],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==r(f)&&o.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):e.resolve(f).then(function(t){s.value=t,c(s)},function(t){return n("throw",t,c,u)})}u(l.arg)}(i,a,n,c)})}return n=n?n.then(c,c):c()}})}function E(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return G()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=S(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=h(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function S(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,S(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:G}}function G(){return{value:void 0,done:!0}}return y.prototype=v,i(b,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:y,configurable:!0}),y.displayName=s(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(L.prototype),s(L.prototype,u,function(){return this}),t.AsyncIterator=L,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new L(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},x(b),s(b,l,"Generator"),s(b,c,function(){return this}),s(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function n(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void e(l)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise(function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)})}}var i=document.querySelector(".submit-word");function a(t,r){return c.apply(this,arguments)}function c(){return(c=o(e().mark(function t(r,n){var o,i;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://wordsearch-api-production.up.railway.app/wordgrid?gridSize=".concat(r,"&wordList=").concat(n));case 2:return o=t.sent,t.next=5,o.text();case 5:return i=t.sent,t.abrupt("return",i.split(" "));case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}i.addEventListener("click",o(e().mark(function r(){var n,o,i,c,u,l;return e().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=new t.Grid,o=document.querySelector("#add-word").value,i=document.querySelector("#grid-size").value,r.next=5,a(i,o);case 5:c=r.sent,n.words=o.split(","),n.renderGrid(i,c),u=document.createTextNode(n.words),(l=document.querySelector(".word-list")).lastChild&&l.removeChild(l.lastChild),l.appendChild(u);case 12:case"end":return r.stop()}},r)})));
},{"./grid":"mwQg"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.1ac632fa.js.map