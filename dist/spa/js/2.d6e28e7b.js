(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"25d8":function(a,s,t){a.exports=t.p+"img/bg-pages.51d9f5cb.png"},"348e":function(a,s,t){"use strict";t("b2e7")},"38f9":function(a,s,t){"use strict";var i=function(){var a=this,s=a._self._c;return s("div",[s("span",{staticClass:"titulo-coluna"},[a._v("\n  "+a._s(a.colTitulo)+"\n  ")]),s("div",{staticClass:"row q-col-gutter-md coluna-mobile"},a._l(a.usuarios,(function(i,e){return s("div",{key:e,staticClass:"col-10 col-md-12"},[s("q-card",{staticClass:"my-card",staticStyle:{background:"#191916","border-radius":"8px",overflow:"hidden"},on:{click:function(s){return a.$emit("open-modal-usuario",i.id)}}},[s("q-img",{staticClass:"img-card",attrs:{"placeholder-src":t("d28a"),src:"https://app.omatheusdev.com/assets/"+i.avatar},scopedSlots:a._u([{key:"loading",fn:function(){return[s("div",[s("q-spinner-ios",{attrs:{color:"primary"}})],1)]},proxy:!0}],null,!0)},[s("div",{staticClass:"absolute-bottom text-subtitle2"},[a._v("\n          "+a._s(i.first_name)+" "+a._s(i.last_name)+"\n        ")])])],1)],1)})),0)])},e=[],o={name:"ColunaUsuario",props:["usuarios","colTitulo"]},c=o,l=(t("348e"),t("2877")),r=t("f09f"),u=t("068f"),n=t("d9b2"),d=t("eebe"),p=t.n(d),m=Object(l["a"])(c,i,e,!1,null,"0164caaa",null);s["a"]=m.exports;p()(m,"components",{QCard:r["a"],QImg:u["a"],QSpinnerIos:n["a"]})},"80ef":function(a,s,t){"use strict";t("899a")},"899a":function(a,s,t){},"8a52":function(a,s,t){"use strict";var i=function(){var a=this,s=a._self._c;return s("q-dialog",{staticClass:"dialog-onboard",attrs:{value:a.modelValue},on:{input:a.handleModal}},[s("div",{staticClass:"q-header-card"},[s("div",{staticClass:"text-h6 text-white"},[a._v(a._s(a.usuario.first_name)+" "+a._s(a.usuario.last_name))]),s("q-icon",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{name:"close",size:"30px",color:"primary"}})],1),s("q-card",{staticStyle:{width:"100%",background:"#FFFFFF","border-radius":"8px"}},[s("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"70vh"}},[s("q-img",{staticStyle:{"border-radius":"8px","max-height":"163px"},attrs:{src:"https://app.omatheusdev.com/assets/"+a.usuario.avatar,ratio:16/9}}),a.usuario.id===this.$store.state.usuario.usuario.id?s("div",{staticClass:"perfil-usuario"},[s("h4",[a._v("Sobre")]),s("div",{staticClass:"row q-col-gutter-md"},[s("div",{staticClass:"col-12"},[s("q-input",{attrs:{rows:"4",type:"textarea",label:"Sobre mim"},model:{value:a.usuario.sobre_mim,callback:function(s){a.$set(a.usuario,"sobre_mim",s)},expression:"usuario.sobre_mim"}})],1),s("div",{staticClass:"col-12"},[s("q-input",{attrs:{rows:"4",type:"textarea",label:"Descrição do serviço"},model:{value:a.usuario.descricao_servico,callback:function(s){a.$set(a.usuario,"descricao_servico",s)},expression:"usuario.descricao_servico"}})],1),s("div",{staticClass:"col-12 col-md-6"},[s("q-input",{attrs:{label:"CPF",mask:"###.###.###-##"},model:{value:a.usuario.cpf,callback:function(s){a.$set(a.usuario,"cpf",s)},expression:"usuario.cpf"}})],1),s("div",{staticClass:"col-12 col-md-6"},[s("q-input",{attrs:{label:"CNPJ",mask:"##.###.###/####-##"},model:{value:a.usuario.cnpj,callback:function(s){a.$set(a.usuario,"cnpj",s)},expression:"usuario.cnpj"}})],1),s("div",{staticClass:"col-12 col-md-6"},[s("q-input",{attrs:{label:"Razão social"},model:{value:a.usuario.razao_social,callback:function(s){a.$set(a.usuario,"razao_social",s)},expression:"usuario.razao_social"}})],1),s("div",{staticClass:"col-12 col-md-6"},[s("q-input",{attrs:{mask:"##.###.###-#",label:"RG"},model:{value:a.usuario.rg,callback:function(s){a.$set(a.usuario,"rg",s)},expression:"usuario.rg"}})],1),s("div",{staticClass:"col-12 col-md-6"},[s("q-input",{attrs:{label:"PIX"},model:{value:a.usuario.pix,callback:function(s){a.$set(a.usuario,"pix",s)},expression:"usuario.pix"}})],1),s("div",{staticClass:"col-12 col-md-6"},[s("q-input",{attrs:{label:"Slack"},model:{value:a.usuario.slack,callback:function(s){a.$set(a.usuario,"slack",s)},expression:"usuario.slack"}})],1),s("div",{staticClass:"col-12 col-md-6"},[s("q-input",{attrs:{mask:"##/##/####",label:"Data de nascimento"},model:{value:a.usuario.data_nascimento,callback:function(s){a.$set(a.usuario,"data_nascimento",s)},expression:"usuario.data_nascimento"}})],1),s("div",{staticClass:"col-12 col-md-6"},[s("q-input",{attrs:{label:"email_empresarial"},model:{value:a.usuario.email_empresarial,callback:function(s){a.$set(a.usuario,"email_empresarial",s)},expression:"usuario.email_empresarial"}})],1),s("div",{staticClass:"col-12 col-md-6"},[s("q-input",{attrs:{label:"Endereço comercial"},model:{value:a.usuario.endereco_comercial,callback:function(s){a.$set(a.usuario,"endereco_comercial",s)},expression:"usuario.endereco_comercial"}})],1),s("div",{staticClass:"col-12 col-md-6"},[s("q-input",{attrs:{label:"Endereço residencial"},model:{value:a.usuario.endereco_residencial,callback:function(s){a.$set(a.usuario,"endereco_residencial",s)},expression:"usuario.endereco_residencial"}})],1),s("div",{staticClass:"col-12 col-md-6"},[s("q-input",{attrs:{mask:"(##) #####-####",label:"Whatsapp"},model:{value:a.usuario.whatsapp,callback:function(s){a.$set(a.usuario,"whatsapp",s)},expression:"usuario.whatsapp"}})],1),s("div",{staticClass:"col-12"},[s("h6",[a._v("Ferramentas")]),a._l(a.usuario.ferramentas,(function(t,i){return s("div",{key:i+"A"},[s("q-checkbox",{attrs:{label:t.descricao},model:{value:t.status,callback:function(s){a.$set(t,"status",s)},expression:"ferramenta.status"}})],1)}))],2),s("div",{staticClass:"col-12"},[s("h6",[a._v("Pagamentos")]),a._l(a.usuario.pagamentos,(function(t,i){return s("div",{key:i+"B"},[s("q-checkbox",{attrs:{label:t.descricao},model:{value:t.status,callback:function(s){a.$set(t,"status",s)},expression:"pagamento.status"}})],1)}))],2),s("div",{staticClass:"col-12"},[s("h6",[a._v("Passos")]),a._l(a.usuario.passos,(function(t,i){return s("div",{key:i+"C"},[s("q-checkbox",{attrs:{label:t.descricao},model:{value:t.status,callback:function(s){a.$set(t,"status",s)},expression:"passo.status"}})],1)}))],2)])]):a.isAdmin?s("div",{staticClass:"perfil-admin"},[s("h4",[a._v("Sobre")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 gdc"},[s("span",{staticClass:"text-h6"},[a._v("Sobre mim")]),s("p",[a._v(a._s(a.usuario.sobre_mim))])]),s("div",{staticClass:"col-12 gdc"},[s("span",{staticClass:"text-h6"},[a._v("Descrição do serviço")]),s("p",[a._v(a._s(a.usuario.descricao_servico))])]),s("div",{staticClass:"col-12 col-md-6 gdc"},[s("span",{staticClass:"text-h6 area-input"},[a._v("Área")]),s("p",[a._v(a._s(a.usuario.area))])]),s("div",{staticClass:"col-12 col-md-6 gdc"},[s("span",{staticClass:"text-h6"},[a._v("Data Nascimento")]),s("p",[a._v(a._s(a.usuario.data_nascimento))])]),s("div",{staticClass:"col-12 col-md-6 gdc"},[s("span",{staticClass:"text-h6"},[a._v("CPF")]),s("p",[a._v(a._s(a.usuario.cpf))])]),s("div",{staticClass:"col-12 col-md-6 gdc"},[s("span",{staticClass:"text-h6"},[a._v("RG")]),s("p",[a._v(a._s(a.usuario.rg))])]),s("div",{staticClass:"col-12 col-md-6 gdc"},[s("span",{staticClass:"text-h6"},[a._v("E-mail empresarial")]),s("p",[a._v(a._s(a.usuario.email_empresarial))])]),s("div",{staticClass:"col-12 col-md-6 gdc"},[s("span",{staticClass:"text-h6"},[a._v("PIX")]),s("p",[a._v(a._s(a.usuario.pix))])]),s("div",{staticClass:"col-12 col-md-6 gdc"},[s("span",{staticClass:"text-h6"},[a._v("CNPJ")]),s("p",[a._v(a._s(a.usuario.cnpj))])]),s("div",{staticClass:"col-12 col-md-6 gdc"},[s("span",{staticClass:"text-h6"},[a._v("Razão Social")]),s("p",[a._v(a._s(a.usuario.razao_social))])]),s("div",{staticClass:"col-12 col-md-6 gdc"},[s("span",{staticClass:"text-h6"},[a._v("Endereço comercial")]),s("p",[a._v(a._s(a.usuario.endereco_comercial))])]),s("div",{staticClass:"col-12 col-md-6 gdc"},[s("span",{staticClass:"text-h6"},[a._v("Endereço residencial")]),s("p",[a._v(a._s(a.usuario.endereco_residencial))])]),s("div",{staticClass:"col-12 col-md-6 gdc"},[s("span",{staticClass:"text-h6"},[a._v("Whatsapp")]),s("p",[a._v(a._s(a.usuario.whatsapp))])]),s("div",{staticClass:"col-12"},[s("h6",[a._v("Ferramentas")]),a._l(a.usuario.ferramentas,(function(t,i){return s("div",{key:i+"A"},[s("q-checkbox",{attrs:{label:t.descricao},model:{value:t.status,callback:function(s){a.$set(t,"status",s)},expression:"ferramenta.status"}})],1)}))],2),s("div",{staticClass:"col-12"},[s("h6",[a._v("Pagamentos")]),a._l(a.usuario.pagamentos,(function(t,i){return s("div",{key:i+"B"},[s("q-checkbox",{attrs:{label:t.descricao},model:{value:t.status,callback:function(s){a.$set(t,"status",s)},expression:"pagamento.status"}})],1)}))],2),s("div",{staticClass:"col-12"},[s("h6",[a._v("Passos")]),a._l(a.usuario.passos,(function(t,i){return s("div",{key:i+"C"},[s("q-checkbox",{attrs:{label:t.descricao},model:{value:t.status,callback:function(s){a.$set(t,"status",s)},expression:"passo.status"}})],1)}))],2)])]):s("div",{staticClass:"perfil-publico"},[s("h4",[a._v("Sobre")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 gdc"},[s("span",{staticClass:"text-h6"},[a._v("Sobre mim")]),s("p",[a._v(a._s(a.usuario.sobre_mim))])]),s("div",{staticClass:"col-12 gdc"},[s("span",{staticClass:"text-h6"},[a._v("Descrição do serviço")]),s("p",[a._v(a._s(a.usuario.descricao_servico))])]),s("div",{staticClass:"col-12 col-md-6 gdc"},[s("span",{staticClass:"text-h6 area-input"},[a._v("Área")]),s("p",[a._v(a._s(a.usuario.area))])]),s("div",{staticClass:"col-12 col-md-6 gdc"},[s("span",{staticClass:"text-h6"},[a._v("Data de nascimento")]),s("p",[a._v(a._s(a.usuario.data_nascimento))])]),s("div",{staticClass:"col-12 col-md-6 gdc"},[s("span",{staticClass:"text-h6"},[a._v("E-mail empresarial")]),s("p",[a._v(a._s(a.usuario.email_empresarial))])]),s("div",{staticClass:"col-12 col-md-6 gdc"},[s("span",{staticClass:"text-h6"},[a._v("Slack")]),s("p",[a._v(a._s(a.usuario.slack))])]),s("div",{staticClass:"col-12 col-md-6 gdc"},[s("span",{staticClass:"text-h6"},[a._v("Whatsapp")]),s("p",[a._v(a._s(a.usuario.whatsapp))])])])])],1),s("q-separator"),a.usuario.id===this.$store.state.usuario.usuario.id?s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{attrs:{label:"Salvar",color:"primary"},on:{click:function(s){return a.$emit("update-usuario-detalhes")}}})],1):a._e()],1)],1)},e=[],o={name:"ModalUsuario",props:["usuario","show"],computed:{isAdmin(){return this.$store.state.usuario.roles.admin===this.$store.state.usuario.usuario.role},modelValue:{get(){return this.show},set(a){return a?this.$emit("show"):this.$emit("hide")}}},methods:{handleModal(a){this.modelValue=a}}},c=o,l=(t("80ef"),t("2877")),r=t("24e8"),u=t("e359"),n=t("0016"),d=t("f09f"),p=t("a370"),m=t("068f"),v=t("27f9"),_=t("8f8e"),h=t("eb85"),f=t("4b7e"),C=t("9c40"),b=t("7f67"),g=t("eebe"),x=t.n(g),k=Object(l["a"])(c,i,e,!1,null,null,null);s["a"]=k.exports;x()(k,"components",{QDialog:r["a"],QHeader:u["a"],QIcon:n["a"],QCard:d["a"],QCardSection:p["a"],QImg:m["a"],QInput:v["a"],QCheckbox:_["a"],QSeparator:h["a"],QCardActions:f["a"],QBtn:C["a"]}),x()(k,"directives",{ClosePopup:b["a"]})},"8fd4":function(a,s,t){"use strict";t("c0ff")},b2e7:function(a,s,t){},c0ff:function(a,s,t){},cbca:function(a,s,t){"use strict";t.r(s);var i=function(){var a=this,s=a._self._c;return s("q-page",{staticStyle:{"overflow-x":"hidden"},attrs:{id:"partime"}},[s("img",{staticClass:"bg-blur",attrs:{src:t("25d8"),alt:""}}),s("div",{staticClass:"row justify-center q-col-md-gutter-md",staticStyle:{margin:"0 auto","max-width":"1280px"}},[s("div",{staticClass:"col-12 col-sm-2"},[s("ColunaUsuario",{attrs:{colTitulo:"Tecnologia",usuarios:a.usuarioTecnologia},on:{"open-modal-usuario":a.showUsuario}})],1),s("div",{staticClass:"col-12 col-sm-2"}),s("div",{staticClass:"col-12 col-sm-2"}),s("div",{staticClass:"col-12 col-sm-2"}),s("div",{staticClass:"col-12 col-sm-2"})]),s("ModalUsuario",{attrs:{usuario:a.usuarioDetalhes,show:a.showModalUsuario},on:{hide:function(s){a.showModalUsuario=!1},"update-usuario-detalhes":a.updateUsuario}})],1)},e=[],o=t("8a52"),c=t("38f9"),l=t("87e7"),r={name:"PartTimePage",data(){return{usuarioTecnologia:[],showModalUsuario:!1,usuarioDetalhes:[]}},methods:{setUsuarioTecnologia(){l["a"].getFilter("/users","?filter[area][_eq]=Tecnologia&filter[role]=2016dbba-a402-4bc7-85c5-7e0ba53e93f2&fields=*,ferramentas.*,ferramentas.ferramentas_id.ferramenta").then((a=>{console.log(a.data.data),this.usuarioTecnologia=a.data.data}))},showUsuario(a){const s="?fields=id,whatsapp,sobre_mim,nome,avatar,razao_social,funcao,descricao_servico,email,area,email_comercial,cpf,cnpj,rg,data_nascimento,endereco_comercial,endereco_residencial,slack,pix,ferramentas,pagamentos,passos";l["a"].getSingleUser("/users/"+a,s).then((a=>{this.usuarioDetalhes=a.data.data,this.showModalUsuario=!0}))},updateUsuario(){l["a"].update("/users/"+this.$store.state.usuario.usuario.id,this.usuarioDetalhes).then((a=>{console.log(a),this.$q.notify("Usuario atualizado")})).catch((a=>{this.$q.notify(a.response.data.errors[0].message)}))}},components:{ModalUsuario:o["a"],ColunaUsuario:c["a"]},created(){this.setUsuarioTecnologia()}},u=r,n=(t("8fd4"),t("2877")),d=t("9989"),p=t("eebe"),m=t.n(p),v=Object(n["a"])(u,i,e,!1,null,"87d376d4",null);s["default"]=v.exports;m()(v,"components",{QPage:d["a"]})},d28a:function(a,s,t){a.exports=t.p+"img/placeholder-cards.416d7703.png"}}]);