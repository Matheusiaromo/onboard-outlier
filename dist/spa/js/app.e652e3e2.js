(function(e){function t(t){for(var r,o,c=t[0],l=t[1],s=t[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={2:0},a={2:0},i=[];function c(e){return l.p+"js/"+({1:"chunk-common"}[e]||e)+"."+{1:"6efd4e9c",3:"eacd54f9",4:"dbb3030b",5:"458de878",6:"aaa760b0",7:"02ea231c",8:"17c79631",9:"114d87d7",10:"f27c3a1e",11:"2fca74f4",12:"3b50b8b7"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={1:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({1:"chunk-common"}[e]||e)+"."+{1:"0fcb4c2f",3:"28912f9b",4:"e3959e69",5:"e59602f7",6:"3aaa3c0f",7:"de1c2010",8:"208be4d2",9:"f6d4419c",10:"70c43940",11:"31d6cfe0",12:"31d6cfe0"}[e]+".css",a=l.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],u=s.getAttribute("data-href");if(u===r||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=u;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"someGetter",(function(){return P}));var o={};n.r(o),n.d(o,"UPDATE_LOGIN",(function(){return _})),n.d(o,"UPDATE_USUARIO",(function(){return k}));var a={};n.r(a),n.d(a,"getUsuario",(function(){return S})),n.d(a,"logarUsuario",(function(){return O})),n.d(a,"deslogarUsuario",(function(){return U}));n("5319"),n("81a9"),n("7d6e"),n("e54f"),n("0ca9"),n("5b0d");var i=n("2b0e"),c=n("1f91"),l=n("42d2"),s=n("b05d"),u=n("2a19");i["a"].use(s["a"],{config:{brand:{primary:"#b77e45",secondary:"#44423c",accent:"#9C27B0",dark:"#191916","dark-page":"#121212",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F2C037"},notify:{classes:"my-notify",progress:!0}},lang:c["a"],iconSet:l["a"],plugins:{Notify:u["a"]}});var d=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},f=[],m=(n("14d9"),n("87e7")),p={name:"App",mounted(){window.localStorage.token?m["a"].refresh(window.localStorage.refreshToken).then((e=>{window.localStorage.token=`Bearer ${e.data.data.access_token}`,window.localStorage.refreshToken=e.data.data.refresh_token,this.$store.dispatch("getUsuario")})).catch((e=>{this.$q.notify(e.response.data.errors[0].message),this.$store.dispatch("deslogarUsuario"),this.$router.push({name:"login"})})):this.$router.push({name:"login"})}},h=p,g=n("2877"),b=Object(g["a"])(h,d,f,!1,null,null,null),v=b.exports,w=n("2f62"),y=function(){return{roles:{admin:"6f3303ce-ab7b-49cf-a9f6-cc5fa440ab98",membro:"84775366-08a9-4cc1-9343-2a9eb4de7573",partime:"2016dbba-a402-4bc7-85c5-7e0ba53e93f2"},login:!1,usuario:{id:"",nome:"",email:"",role:"",genero:""}}};function P(){}function _(e,t){e.login=t}function k(e,t){e.usuario=Object.assign(e.usuario,t)}function S(e){return m["a"].get("/users/me?fields=id,nome,email,role,genero").then((t=>{e.commit("UPDATE_USUARIO",t.data.data),e.commit("UPDATE_LOGIN",!0)}))}function O(e,t){return console.log(t.email),m["a"].login({email:t.email,password:t.password}).then((e=>{window.localStorage.token=`Bearer ${e.data.data.access_token}`,window.localStorage.refreshToken=e.data.data.refresh_token}))}function U(e){e.commit("UPDATE_USUARIO",{id:"",nome:"",email:"",role:"",genero:""}),window.localStorage.removeItem("token"),window.localStorage.removeItem("refreshToken"),e.commit("UPDATE_LOGIN",!1)}var $={getters:r,mutations:o,actions:a,state:y};i["a"].use(w["a"]);var A=function(){const e=new w["a"].Store({modules:{usuario:$},strict:!1});return e},T=n("8c4f");n("ddb0");const E=[{path:"/",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"40f5")),redirect:"/onboarding",children:[{path:"welcome",name:"welcome",meta:{login:!0},component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"a8b7"))},{path:"onboarding",name:"onboarding",meta:{login:!0},component:()=>Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,"01fc"))},{path:"team",name:"team",meta:{login:!0},component:()=>Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,"87bb"))},{path:"companies",name:"companies",meta:{login:!0},component:()=>Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"f06a"))},{path:"parttime",name:"parttime",meta:{login:!0},component:()=>Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,"cbca"))},{path:"movies",name:"movies",meta:{login:!0},component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"cc87"))}]},{path:"/",component:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"4e31")),children:[{path:"login",name:"login",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"62cc"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"e51e"))}];var j=E;i["a"].use(T["a"]);var C=function(){const e=new T["a"]({scrollBehavior:()=>({x:0,y:0}),routes:j,mode:"history",base:"/"});return e},x=async function(){const e="function"===typeof A?await A({Vue:i["a"]}):A,t="function"===typeof C?await C({Vue:i["a"],store:e}):C;e.$router=t;const n={router:t,store:e,render:e=>e(v),el:"#q-app"};return{app:n,store:e,router:t}},I=n("bc3a"),L=n.n(I);i["a"].prototype.$axios=L.a;const N="/";async function q(){const{app:e,store:t,router:n}=await x();let r=!1;const o=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),c=[void 0];for(let s=0;!1===r&&s<c.length;s++)if("function"===typeof c[s])try{await c[s]({app:e,router:n,store:t,Vue:i["a"],ssrContext:null,redirect:o,urlPath:a,publicPath:N})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==r&&new i["a"](e)}q()},"5b0d":function(e,t,n){},"87e7":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("bc3a"),o=n.n(r);const a=o.a.create({baseURL:"https://admin.bilhon.com"});a.interceptors.request.use((function(e){const t=window.localStorage.token;return t&&(e.headers.Authorization=t),e}),(function(e){return Promise.reject(e)}));const i={get(e){return a.get(e)},getFiltered(e,t,n,r){return r?a.get(`${e}?filter[${t}][_eq]=${n}&fields=id,titulo,imagem`):a.get(`${e}?filter[${t}][_eq]=${n}&fields=id,first_name,last_name,avatar`)},getFilter(e,t){return a.get(`${e}${t}`)},getSingleUser(e,t){return a.get(`${e}${t}`)},post(e,t){return a.post(e,t)},update(e,t){return a.patch(e,t)},delete(e){return a.delete(e)},login(e){return console.log("services: "+e.email),a.post("/auth/login",e)},refresh(e){return a.post("/auth/refresh",{refresh_token:e})}}}});