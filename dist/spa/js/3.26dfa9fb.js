(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"01fc":function(a,t,i){"use strict";i.r(t);var d=function(){var a=this,t=a._self._c;return t("q-page",{staticStyle:{"overflow-x":"hidden",position:"relative"},attrs:{id:"onboarding"}},[t("div",{staticClass:"row justify-center",staticStyle:{margin:"0 auto","max-width":"1280px"}},[t("div",{staticClass:"col-12 col-md-2"},[t("ColunaAtividade",{attrs:{colTitulo:"Missão, visão e código",atividades:a.atividadeC1},on:{"open-modal-atividade":a.showAtividade}})],1),t("div",{staticClass:"col-12 col-md-2"},[t("ColunaAtividade",{attrs:{colTitulo:"Valores",atividades:a.atividadeC2},on:{"open-modal-atividade":a.showAtividade}})],1),t("div",{staticClass:"col-12 col-md-2"},[t("ColunaAtividade",{attrs:{colTitulo:"Primeiros passos",atividades:a.atividadeC3},on:{"open-modal-atividade":a.showAtividade}})],1),t("div",{staticClass:"col-12 col-md-2"},[t("ColunaAtividade",{attrs:{colTitulo:"Suas ferramentas",atividades:a.atividadeC4},on:{"open-modal-atividade":a.showAtividade}})],1),t("div",{staticClass:"col-12 col-md-2"},[t("ColunaAtividade",{attrs:{colTitulo:"Treinamento",atividades:a.atividadeC5},on:{"open-modal-atividade":a.showAtividade}})],1)]),t("ModalAtividade",{attrs:{atividade:a.atividadeDetalhes,show:a.showModalAtividade},on:{hide:function(t){a.showModalAtividade=!1}}})],1)},e=[],s=function(){var a=this,t=a._self._c;return t("q-dialog",{staticClass:"dialog-onboard",attrs:{id:"modal-atividade",value:a.modelValue},on:{input:a.handleModal}},[t("div",{staticClass:"card-modal-atividade"},[t("div",{staticClass:"scroll scroll-modal-atividade"},[t("img",{staticClass:"banner-modal-atividade",attrs:{src:i("13f5"),alt:""}}),t("div",{staticClass:"container-conteudo-modal-atividade"},[t("img",{staticClass:"img-modal-atividade",attrs:{src:"https://app.omatheusdev.com/assets/"+a.atividade.imagem}}),t("q-icon",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"close-modal-atividade",attrs:{name:"close",size:"30px"}}),t("h2",{staticClass:"titulo-modal-atividade"},[a._v(a._s(a.atividade.titulo))]),t("div",{attrs:{id:"contentAtividade"},domProps:{innerHTML:a._s(a.atividade.conteudo)}})],1)])])])},o=[],l={name:"ModalAtividade",props:["atividade","show"],computed:{modelValue:{get(){return this.show},set(a){return a?this.$emit("show"):this.$emit("hide")}}},methods:{handleModal(a){this.modelValue=a}}},n=l,c=(i("d959"),i("2877")),v=i("24e8"),r=i("0016"),u=i("f09f"),m=i("7f67"),h=i("eebe"),p=i.n(h),C=Object(c["a"])(n,s,o,!1,null,null,null),f=C.exports;p()(C,"components",{QDialog:v["a"],QIcon:r["a"],QCard:u["a"]}),p()(C,"directives",{ClosePopup:m["a"]});var A=function(){var a=this,t=a._self._c;return t("div",[t("span",{staticClass:"titulo-coluna"},[a._v("\n  "+a._s(a.colTitulo)+"\n  ")]),t("div",{staticClass:"row q-col-gutter-md coluna-mobile"},a._l(a.atividades,(function(d,e){return t("div",{key:e,staticClass:"col-5 col-sm-3 col-md-12"},[t("q-card",{staticClass:"card-atividade",on:{click:function(t){return a.$emit("open-modal-atividade",d.id)}}},[t("q-img",{staticClass:"img-card",attrs:{"placeholder-src":i("d28a"),src:"https://app.omatheusdev.com/assets/"+d.imagem},scopedSlots:a._u([{key:"loading",fn:function(){return[t("div",[t("q-spinner-ios",{attrs:{color:"primary"}})],1)]},proxy:!0}],null,!0)}),t("span",{staticClass:"card-atividade-titulo"},[a._v("\n          "+a._s(d.titulo)+"\n        ")])],1)],1)})),0)])},g=[],w={name:"ColunaAtividade",props:["atividades","colTitulo"]},b=w,_=(i("f092"),i("068f")),M=i("d9b2"),x=Object(c["a"])(b,A,g,!1,null,"394dc892",null),T=x.exports;p()(x,"components",{QCard:u["a"],QImg:_["a"],QSpinnerIos:M["a"]});var Q=i("87e7"),q={name:"IndexPage",data(){return{atividadeC1:[],atividadeC2:[],atividadeC3:[],atividadeC4:[],atividadeC5:[],showModalAtividade:!1,atividadeDetalhes:[]}},methods:{setAtividadeC1(){Q["a"].getFiltered("/items/atividades","coluna","coluna1",!0).then((a=>{this.atividadeC1=a.data.data}))},setAtividadeC2(){Q["a"].getFiltered("/items/atividades","coluna","coluna2",!0).then((a=>{this.atividadeC2=a.data.data}))},setAtividadeC3(){Q["a"].getFiltered("/items/atividades","coluna","coluna3",!0).then((a=>{this.atividadeC3=a.data.data}))},setAtividadeC4(){Q["a"].getFiltered("/items/atividades","coluna","coluna4",!0).then((a=>{this.atividadeC4=a.data.data}))},setAtividadeC5(){Q["a"].getFiltered("/items/atividades","coluna","coluna5",!0).then((a=>{this.atividadeC5=a.data.data}))},showAtividade(a){Q["a"].get("/items/atividades/"+a).then((a=>{this.atividadeDetalhes=a.data.data,this.showModalAtividade=!0}))}},components:{ModalAtividade:f,ColunaAtividade:T},created(){this.setAtividadeC1(),this.setAtividadeC2(),this.setAtividadeC3(),this.setAtividadeC4(),this.setAtividadeC5()}},y=q,k=(i("3c96"),i("9989")),F=Object(c["a"])(y,d,e,!1,null,"27bdd020",null);t["default"]=F.exports;p()(F,"components",{QPage:k["a"],QImg:_["a"]})},"13f5":function(a,t,i){a.exports=i.p+"img/banner-modal-atividade.0719ec7e.png"},"3c96":function(a,t,i){"use strict";i("8cef")},"51e1":function(a,t,i){},"8cef":function(a,t,i){},b217:function(a,t,i){},d959:function(a,t,i){"use strict";i("51e1")},f092:function(a,t,i){"use strict";i("b217")}}]);