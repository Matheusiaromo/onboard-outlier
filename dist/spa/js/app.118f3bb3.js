(function(e){function t(t){for(var n,o,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={1:0},a={1:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{2:"352a0ff1",3:"ed33c0cf",4:"aa7e01f3",5:"4f3aaece",6:"64e8b35c",7:"4723484a",8:"1b679d81"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={2:1,3:1,4:1,5:1,6:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{2:"63d18ce8",3:"68cd87f7",4:"d453018a",5:"f070dd2d",6:"5e02b7b3",7:"31d6cfe0",8:"31d6cfe0"}[e]+".css",a=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],f.parentNode.removeChild(f),r(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"2f39":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"someGetter",(function(){return P}));var o={};r.r(o),r.d(o,"UPDATE_LOGIN",(function(){return _})),r.d(o,"UPDATE_USUARIO",(function(){return S}));var a={};r.r(a),r.d(a,"getUsuario",(function(){return k})),r.d(a,"logarUsuario",(function(){return O})),r.d(a,"deslogarUsuario",(function(){return U}));r("5319"),r("81a9"),r("7d6e"),r("e54f"),r("0ca9"),r("5b0d");var i=r("2b0e"),c=r("1f91"),s=r("42d2"),u=r("b05d"),l=r("2a19");i["a"].use(u["a"],{config:{brand:{primary:"#b77e45",secondary:"#44423c",accent:"#9C27B0",dark:"#191916","dark-page":"#121212",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F2C037"},notify:{classes:"my-notify",progress:!0}},lang:c["a"],iconSet:s["a"],plugins:{Notify:l["a"]}});var d=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},f=[],p=(r("14d9"),r("87e7")),m={name:"App",mounted(){window.localStorage.token?(console.log(window.localStorage.refreshToken),p["a"].refresh(window.localStorage.refreshToken).then((e=>{window.localStorage.token=`Bearer ${e.data.data.access_token}`,window.localStorage.refreshToken=e.data.data.refresh_token,this.$store.dispatch("getUsuario")})).catch((e=>{this.$q.notify(e.response.data.errors[0].message),this.$store.dispatch("deslogarUsuario"),this.$router.push({name:"login"})}))):this.$router.push({name:"login"})}},h=m,g=r("2877"),b=Object(g["a"])(h,d,f,!1,null,null,null),v=b.exports,w=r("2f62"),y=function(){return{roles:{admin:"6f3303ce-ab7b-49cf-a9f6-cc5fa440ab98",membro:"84775366-08a9-4cc1-9343-2a9eb4de7573",partime:"2016dbba-a402-4bc7-85c5-7e0ba53e93f2"},login:!1,usuario:{id:"",nome:"",email:"",role:""}}};function P(){}function _(e,t){e.login=t}function S(e,t){e.usuario=Object.assign(e.usuario,t)}function k(e){return p["a"].get("/users/me?fields=id,nome,email,role").then((t=>{e.commit("UPDATE_USUARIO",t.data.data),e.commit("UPDATE_LOGIN",!0)}))}function O(e,t){return console.log(t.email),p["a"].login({email:t.email,password:t.password}).then((e=>{window.localStorage.token=`Bearer ${e.data.data.access_token}`,window.localStorage.refreshToken=e.data.data.refresh_token}))}function U(e){e.commit("UPDATE_USUARIO",{id:"",nome:"",email:"",role:""}),window.localStorage.removeItem("token"),window.localStorage.removeItem("refreshToken"),e.commit("UPDATE_LOGIN",!1)}var $={getters:n,mutations:o,actions:a,state:y};i["a"].use(w["a"]);var A=function(){const e=new w["a"].Store({modules:{usuario:$},strict:!1});return e},T=r("8c4f");r("ddb0");const E=[{path:"/",component:()=>Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"40f5")),redirect:"/onboarding",children:[{path:"onboarding",name:"onboarding",meta:{login:!0},component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"01fc"))},{path:"team",name:"team",meta:{login:!0},component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"87bb"))},{path:"parttime",name:"parttime",meta:{login:!0},component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"cbca"))}]},{path:"/",component:()=>Promise.all([r.e(0),r.e(7)]).then(r.bind(null,"4e31")),children:[{path:"login",name:"login",component:()=>Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"62cc"))}]},{path:"*",component:()=>Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"e51e"))}];var j=E;i["a"].use(T["a"]);var C=function(){const e=new T["a"]({scrollBehavior:()=>({x:0,y:0}),routes:j,mode:"history",base:"/"});return e},x=async function(){const e="function"===typeof A?await A({Vue:i["a"]}):A,t="function"===typeof C?await C({Vue:i["a"],store:e}):C;e.$router=t;const r={router:t,store:e,render:e=>e(v),el:"#q-app"};return{app:r,store:e,router:t}},I=r("bc3a"),L=r.n(I);i["a"].prototype.$axios=L.a;const N="/";async function q(){const{app:e,store:t,router:r}=await x();let n=!1;const o=e=>{n=!0;const t=Object(e)===e?r.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),c=[void 0];for(let u=0;!1===n&&u<c.length;u++)if("function"===typeof c[u])try{await c[u]({app:e,router:r,store:t,Vue:i["a"],ssrContext:null,redirect:o,urlPath:a,publicPath:N})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==n&&new i["a"](e)}q()},"5b0d":function(e,t,r){},"87e7":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("bc3a"),o=r.n(n);const a=o.a.create({baseURL:"https://app.omatheusdev.com"});a.interceptors.request.use((function(e){const t=window.localStorage.token;return t&&(e.headers.Authorization=t),e}),(function(e){return Promise.reject(e)}));const i={get(e){return a.get(e)},getFiltered(e,t,r,n){return n?a.get(`${e}?filter[${t}][_eq]=${r}&fields=id,titulo,imagem`):a.get(`${e}?filter[${t}][_eq]=${r}&fields=id,first_name,last_name,avatar`)},getFilter(e,t){return a.get(`${e}${t}`)},getSingleUser(e,t){return a.get(`${e}${t}`)},post(e,t){return a.post(e,t)},update(e,t){return a.patch(e,t)},delete(e){return a.delete(e)},login(e){return console.log("services: "+e.email),a.post("/auth/login",e)},refresh(e){return a.post("/auth/refresh",{refresh_token:e})}}}});