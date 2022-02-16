(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(81),r=n.n(o),s=n(645),i=n.n(s)()(r());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);"]),i.push([t.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  font-family: Lato, serif;\n  font-size: 10px;\n}\n\nbody {\n  width: 100%;\n}\n\n.todo-lists {\n  margin: 5rem auto;\n  padding: 2rem;\n  box-shadow: 5px 5px 5px 5px #bfcaca;\n  width: 35%;\n}\n\n@media screen and (max-width: 768px) {\n  .todo-lists {\n    width: 80%;\n  }\n}\n\n.todo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border-bottom: 0.5px solid #bfcaca;\n}\n\n.todo-list-title {\n  font-size: 2rem;\n}\n\n.bi {\n  font-size: 2.8rem;\n  color: #555;\n}\n\n#todo-input {\n  padding: 2rem 1rem;\n  border: none;\n  outline: none;\n  font-size: 1.4rem;\n  font-style: italic;\n}\n\n.todo-list-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 0.5px solid #bfcaca;\n  padding: 1rem;\n}\n\n.todo-left {\n  display: flex;\n  align-items: center;\n}\n\n.strike-through {\n  text-decoration: line-through;\n  font-style: italic;\n  color: rgb(28, 28, 77);\n}\n\n.description {\n  padding-left: 2rem;\n  font-size: 1.5rem;\n}\n\n.todo-list-holder button {\n  align-self: flex-end;\n}\n\n.btn {\n  outline: none;\n  width: auto;\n  border: none;\n  background: white;\n  cursor: pointer;\n}\n\n.btn-delete {\n  display: none;\n}\n\n.btn-clear {\n  width: 100%;\n  font-size: 1.7rem;\n  font-weight: 400;\n  border-top: 0.5px solid #bfcaca;\n  padding-top: 2rem;\n  color: #555;\n}\n",""]);const a=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,s){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(i[d]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);o&&i[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var s={},i=[],a=0;a<t.length;a++){var d=t[a],c=o.base?d[0]+o.base:d[0],l=s[c]||0,p="".concat(c," ").concat(l);s[c]=l+1;var u=n(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=r(h,o);o.byIndex=a,e.splice(a,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var s=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<s.length;i++){var a=n(s[i]);e[a].references--}for(var d=o(t,r),c=0;c<s.length;c++){var l=n(s[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}s=d}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={id:o,exports:{}};return t[o](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),o=n(795),r=n.n(o),s=n(569),i=n.n(s),a=n(565),d=n.n(a),c=n(216),l=n.n(c),p=n(589),u=n.n(p),h=n(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m=document.querySelector("#todo-input"),g=document.querySelector(".btn-clear"),b=document.getElementsByClassName("status"),v=document.querySelector(".todo-lists-holder"),y=document.getElementsByClassName("btn-edit"),x=new class{constructor(){this.index=0,this.completed=!1,this.description="",this.todos=[]}addTodo(){return this.todos=this.readTodo(),this.description=m.value,this.index=this.todos.length,this.todos.push({index:this.index,description:this.description,completed:this.completed}),this.storeTodo(),this.renderPage(),this.todos}readTodo(){const t=JSON.parse(localStorage.getItem("todos"));return this.todos=t||[],this.todos}clearCompleted(){this.todos=this.readTodo(),this.todos=this.todos.filter((t=>!0!==t.completed)),this.arrangeIndex(),this.storeTodo(),this.renderPage()}removeTodo(t){return this.todos=this.readTodo(),this.todos=this.todos.filter((e=>e.index!==Number(t))),this.arrangeIndex(),this.storeTodo(),this.todos}storeTodo(){localStorage.setItem("todos",JSON.stringify(this.todos))}arrangeIndex(){this.todos.forEach(((t,e)=>{t.index=e}))}changeStatus(t,e){this.todos=this.readTodo(),this.todos[Number(t)].completed=e,this.storeTodo()}renderPage(){v.innerHTML="",this.todos=this.readTodo(),this.todos.forEach((t=>{(t=>{const e=document.createElement("div");e.classList.add("todo-list-row");const n=(t=>`\n  <div class="todo-left">\n    <input type="checkbox" class="status" id = ${t.index}  ${t.completed?"checked":""} />\n    <p class="description ${t.completed?"strike-through":""}">${t.description}</p>\n  </div>\n  <button class="btn btn-edit">\n  <i class="bi bi-three-dots-vertical"></i>\n  </button>  \n  <button class="btn btn-delete">  \n  <i class="bi bi-trash"></i>\n  </button>`)(t);e.innerHTML=n,v.appendChild(e)})(t)}))}};x.renderPage(),m.addEventListener("keypress",(t=>{"Enter"===t.key&&""!==m.value&&x.addTodo()})),g.addEventListener("click",(()=>{x.clearCompleted()}));for(let t=0;t<b.length;t+=1)b[t].addEventListener("change",(t=>{x.changeStatus(t.target.id,t.target.checked);const{parentNode:e}=t.target;e.querySelector(".description").classList.toggle("strike-through")}));for(let t=0;t<y.length;t+=1)y[t].addEventListener("click",(e=>{const{parentNode:n}=e.target,o=n.getElementsByClassName(".btn-delete")[0];n.querySelector(".description"),y[t].style.display="none",o.style.display="block"}))})()})();