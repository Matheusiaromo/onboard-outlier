(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"13f5":function(s,a,i){s.exports=i.p+"img/banner-modal-atividade.0719ec7e.png"},"38f9":function(s,a,i){"use strict";var t=function(){var s=this,a=s._self._c;return a("div",[a("span",{staticClass:"titulo-coluna"},[s._v("\n  "+s._s(s.colTitulo)+"\n  ")]),a("div",{staticClass:"row q-col-gutter-md coluna-mobile"},s._l(s.usuarios,(function(t,e){return a("div",{key:e,staticClass:"col-5 col-sm-3 col-md-12"},[a("q-card",{staticClass:"card-usuario",on:{click:function(a){return s.$emit("open-modal-usuario",t.id)}}},[a("q-img",{staticClass:"img-card",attrs:{"placeholder-src":i("d28a"),src:"https://admin.bilhon.com/assets/"+t.avatar},scopedSlots:s._u([{key:"loading",fn:function(){return[a("div",[a("q-spinner-ios",{attrs:{color:"primary"}})],1)]},proxy:!0}],null,!0)}),a("span",{staticClass:"card-usuario-nome"},[s._v("\n          "+s._s(t.first_name)+" "+s._s(t.last_name)+"\n        ")])],1)],1)})),0)])},e=[],o={name:"ColunaUsuario",props:["usuarios","colTitulo"]},l=o,r=(i("fcd7"),i("2877")),u=i("f09f"),c=i("068f"),d=i("d9b2"),n=i("eebe"),v=i.n(n),m=Object(r["a"])(l,t,e,!1,null,"4410225e",null);a["a"]=m.exports;v()(m,"components",{QCard:u["a"],QImg:c["a"],QSpinnerIos:d["a"]})},"6c18":function(s,a,i){"use strict";i("fbea")},"8a52":function(s,a,i){"use strict";var t=function(){var s=this,a=s._self._c;return a("q-dialog",{staticClass:"dialog-onboard",attrs:{id:"modal-usuario",value:s.modelValue},on:{input:s.handleModal}},[a("div",{staticClass:"card-modal-usuario"},[a("div",{staticClass:"scroll scroll-modal-usuario"},[a("img",{staticClass:"banner-modal-usuario",attrs:{src:i("b965"),alt:""}}),a("div",{staticClass:"container-conteudo-modal-usuario"},[a("img",{staticClass:"img-modal-usuario",attrs:{src:"https://admin.bilhon.com/assets/"+s.usuario.avatar}}),a("q-icon",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"close-modal-usuario",attrs:{name:"close",size:"30px",color:"primary"}}),s.usuario.id===this.$store.state.usuario.usuario.id?a("div",{staticClass:"info-usuarios form-usuario"},[a("div",{staticClass:"row vertical"},[a("div",{staticClass:"col-12 col-md-6"},[a("h2",[s._v(s._s(s.usuario.first_name)+" "+s._s(s.usuario.last_name))]),a("p",[s._v(s._s(s.usuario.area))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"field-usuario"},[a("label",{staticStyle:{"margin-bottom":"8px"}},[s._v("Sobre mim")]),a("q-input",{attrs:{type:"textarea",outlined:"",dense:""},model:{value:s.usuario.sobre_mim,callback:function(a){s.$set(s.usuario,"sobre_mim",a)},expression:"usuario.sobre_mim"}})],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"field-usuario"},[a("label",{staticStyle:{"margin-bottom":"8px"}},[s._v("Descrição serviço")]),a("q-input",{attrs:{type:"textarea",outlined:"",dense:""},model:{value:s.usuario.descricao_servico,callback:function(a){s.$set(s.usuario,"descricao_servico",a)},expression:"usuario.descricao_servico"}})],1)])]),a("div",{staticClass:"row form-input-usuario"},[a("div",[a("div",{staticClass:"field-usuario"},[a("label",[s._v("CPF")]),a("q-input",{attrs:{outlined:"",dense:"",mask:"###.###.###-##"},model:{value:s.usuario.cpf,callback:function(a){s.$set(s.usuario,"cpf",a)},expression:"usuario.cpf"}})],1),a("div",{staticClass:"field-usuario"},[a("label",[s._v("CNPJ")]),a("q-input",{attrs:{outlined:"",dense:"",mask:"##.###.###/####-##"},model:{value:s.usuario.cnpj,callback:function(a){s.$set(s.usuario,"cnpj",a)},expression:"usuario.cnpj"}})],1),a("div",{staticClass:"field-usuario"},[a("label",[s._v("Razão social")]),a("q-input",{attrs:{outlined:"",dense:""},model:{value:s.usuario.razao_social,callback:function(a){s.$set(s.usuario,"razao_social",a)},expression:"usuario.razao_social"}})],1),a("div",{staticClass:"field-usuario"},[a("label",[s._v("RG")]),a("q-input",{attrs:{outlined:"",dense:""},model:{value:s.usuario.rg,callback:function(a){s.$set(s.usuario,"rg",a)},expression:"usuario.rg"}})],1),a("div",{staticClass:"field-usuario"},[a("label",[s._v("Endereço comercial")]),a("q-input",{attrs:{outlined:"",dense:""},model:{value:s.usuario.endereco_comercial,callback:function(a){s.$set(s.usuario,"endereco_comercial",a)},expression:"usuario.endereco_comercial"}})],1),a("div",{staticClass:"field-usuario"},[a("label",[s._v("Whatsapp")]),a("q-input",{attrs:{outlined:"",dense:"",mask:"(##) #####-####"},model:{value:s.usuario.whatsapp,callback:function(a){s.$set(s.usuario,"whatsapp",a)},expression:"usuario.whatsapp"}})],1)]),a("div",[a("div",{staticClass:"field-usuario"},[a("label",[s._v("PIX")]),a("q-input",{attrs:{outlined:"",dense:""},model:{value:s.usuario.pix,callback:function(a){s.$set(s.usuario,"pix",a)},expression:"usuario.pix"}})],1),a("div",{staticClass:"field-usuario"},[a("label",[s._v("Slack")]),a("q-input",{attrs:{outlined:"",dense:""},model:{value:s.usuario.slack,callback:function(a){s.$set(s.usuario,"slack",a)},expression:"usuario.slack"}})],1),a("div",{staticClass:"field-usuario"},[a("label",[s._v("Data nascimento")]),a("q-input",{attrs:{outlined:"",dense:"",mask:"##/##/####"},model:{value:s.usuario.data_nascimento,callback:function(a){s.$set(s.usuario,"data_nascimento",a)},expression:"usuario.data_nascimento"}})],1),a("div",{staticClass:"field-usuario"},[a("label",[s._v("E-mail email_empresarial")]),a("q-input",{attrs:{outlined:"",dense:""},model:{value:s.usuario.email_empresarial,callback:function(a){s.$set(s.usuario,"email_empresarial",a)},expression:"usuario.email_empresarial"}})],1),a("div",{staticClass:"field-usuario"},[a("label",[s._v("Endereco residencial")]),a("q-input",{attrs:{outlined:"",dense:""},model:{value:s.usuario.endereco_residencial,callback:function(a){s.$set(s.usuario,"endereco_residencial",a)},expression:"usuario.endereco_residencial"}})],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("label",[s._v("Ferramentas")]),a("div",{staticClass:"grupo-checkbox"},s._l(s.usuario.ferramentas,(function(i,t){return a("div",{key:t+"A"},[a("input",{directives:[{name:"model",rawName:"v-model",value:i.status,expression:"ferramenta.status"}],attrs:{id:t+"A",type:"checkbox"},domProps:{checked:Array.isArray(i.status)?s._i(i.status,null)>-1:i.status},on:{change:function(a){var t=i.status,e=a.target,o=!!e.checked;if(Array.isArray(t)){var l=null,r=s._i(t,l);e.checked?r<0&&s.$set(i,"status",t.concat([l])):r>-1&&s.$set(i,"status",t.slice(0,r).concat(t.slice(r+1)))}else s.$set(i,"status",o)}}}),a("label",{attrs:{for:t+"A"}},[s._v(s._s(i.descricao))])])})),0)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("label",[s._v("Pagamentos")]),a("div",{staticClass:"grupo-checkbox"},s._l(s.usuario.pagamentos,(function(i,t){return a("div",{key:t+"B"},[a("input",{directives:[{name:"model",rawName:"v-model",value:i.status,expression:"pagamento.status"}],attrs:{id:t+"B",type:"checkbox"},domProps:{checked:Array.isArray(i.status)?s._i(i.status,null)>-1:i.status},on:{change:function(a){var t=i.status,e=a.target,o=!!e.checked;if(Array.isArray(t)){var l=null,r=s._i(t,l);e.checked?r<0&&s.$set(i,"status",t.concat([l])):r>-1&&s.$set(i,"status",t.slice(0,r).concat(t.slice(r+1)))}else s.$set(i,"status",o)}}}),a("label",{attrs:{for:t+"B"}},[s._v(s._s(i.descricao))])])})),0)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("label",[s._v("Passos")]),a("div",{staticClass:"grupo-checkbox"},s._l(s.usuario.passos,(function(i,t){return a("div",{key:t+"A"},[a("input",{directives:[{name:"model",rawName:"v-model",value:i.status,expression:"passo.status"}],attrs:{id:t+"C",type:"checkbox"},domProps:{checked:Array.isArray(i.status)?s._i(i.status,null)>-1:i.status},on:{change:function(a){var t=i.status,e=a.target,o=!!e.checked;if(Array.isArray(t)){var l=null,r=s._i(t,l);e.checked?r<0&&s.$set(i,"status",t.concat([l])):r>-1&&s.$set(i,"status",t.slice(0,r).concat(t.slice(r+1)))}else s.$set(i,"status",o)}}}),a("label",{attrs:{for:t+"C"}},[s._v(s._s(i.descricao))])])})),0)])])]):s.isAdmin?a("div",{staticClass:"info-usuarios form-admin"},[a("div",{staticClass:"row vertical"},[a("div",{staticClass:"col-12 col-md-6"},[a("h2",[s._v(s._s(s.usuario.first_name)+" "+s._s(s.usuario.last_name))]),a("p",[s._v(s._s(s.usuario.funcao))])]),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"field-usuario"},[a("label",[s._v("E-mail comercial")]),a("p",[s._v(s._s(s.usuario.email_empresarial))])]),a("div",{staticClass:"field-usuario"},[a("label",[s._v("Slack")]),a("p",[s._v(s._s(s.usuario.slack))])]),a("div",{staticClass:"field-usuario"},[a("label",[s._v("Área")]),a("p",[s._v(s._s(s.usuario.area))])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"field-usuario"},[a("label",[s._v("Sobre mim")]),a("p",[s._v(s._s(s.usuario.sobre_mim))])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"field-usuario"},[a("label",[s._v("Data nascimento")]),a("p",[s._v(s._s(s.usuario.data_nascimento))])]),a("div",{staticClass:"field-usuario"},[a("label",[s._v("CPF")]),a("p",[s._v(s._s(s.usuario.cpf))])]),a("div",{staticClass:"field-usuario"},[a("label",[s._v("RG")]),a("p",[s._v(s._s(s.usuario.rg))])]),a("div",{staticClass:"field-usuario"},[a("label",[s._v("PIX")]),a("p",[s._v(s._s(s.usuario.pix))])]),a("div",{staticClass:"field-usuario"},[a("label",[s._v("CNPJ")]),a("p",[s._v(s._s(s.usuario.cnpj))])]),a("div",{staticClass:"field-usuario"},[a("label",[s._v("Empresa")]),a("p",[s._v(s._s(s._f("corrigeEmpresa")(s.usuario.empresa)))])])]),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"field-usuario"},[a("label",[s._v("Razão social")]),a("p",[s._v(s._s(s.usuario.razao_social))])]),a("div",{staticClass:"field-usuario"},[a("label",[s._v("Endereco comercial")]),a("p",[s._v(s._s(s.usuario.endereco_comercial))])]),a("div",{staticClass:"field-usuario"},[a("label",[s._v("Endereco residencial")]),a("p",[s._v(s._s(s.usuario.endereco_residencial))])]),a("div",{staticClass:"field-usuario"},[a("label",[s._v("Whatsapp")]),a("p",[s._v(s._s(s.usuario.whatsapp))])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("label",[s._v("Ferramentas")]),a("div",{staticClass:"grupo-checkbox"},s._l(s.usuario.ferramentas,(function(i,t){return a("div",{key:t+"A"},[a("input",{directives:[{name:"model",rawName:"v-model",value:i.status,expression:"ferramenta.status"}],attrs:{id:t+"A",type:"checkbox"},domProps:{checked:Array.isArray(i.status)?s._i(i.status,null)>-1:i.status},on:{change:function(a){var t=i.status,e=a.target,o=!!e.checked;if(Array.isArray(t)){var l=null,r=s._i(t,l);e.checked?r<0&&s.$set(i,"status",t.concat([l])):r>-1&&s.$set(i,"status",t.slice(0,r).concat(t.slice(r+1)))}else s.$set(i,"status",o)}}}),a("label",{attrs:{for:t+"A"}},[s._v(s._s(i.descricao))])])})),0)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("label",[s._v("Pagamentos")]),a("div",{staticClass:"grupo-checkbox"},s._l(s.usuario.pagamentos,(function(i,t){return a("div",{key:t+"B"},[a("input",{directives:[{name:"model",rawName:"v-model",value:i.status,expression:"pagamento.status"}],attrs:{id:t+"B",type:"checkbox"},domProps:{checked:Array.isArray(i.status)?s._i(i.status,null)>-1:i.status},on:{change:function(a){var t=i.status,e=a.target,o=!!e.checked;if(Array.isArray(t)){var l=null,r=s._i(t,l);e.checked?r<0&&s.$set(i,"status",t.concat([l])):r>-1&&s.$set(i,"status",t.slice(0,r).concat(t.slice(r+1)))}else s.$set(i,"status",o)}}}),a("label",{attrs:{for:t+"B"}},[s._v(s._s(i.descricao))])])})),0)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("label",[s._v("Passos")]),a("div",{staticClass:"grupo-checkbox"},s._l(s.usuario.passos,(function(i,t){return a("div",{key:t+"C"},[a("input",{directives:[{name:"model",rawName:"v-model",value:i.status,expression:"passo.status"}],attrs:{id:t+"C",type:"checkbox"},domProps:{checked:Array.isArray(i.status)?s._i(i.status,null)>-1:i.status},on:{change:function(a){var t=i.status,e=a.target,o=!!e.checked;if(Array.isArray(t)){var l=null,r=s._i(t,l);e.checked?r<0&&s.$set(i,"status",t.concat([l])):r>-1&&s.$set(i,"status",t.slice(0,r).concat(t.slice(r+1)))}else s.$set(i,"status",o)}}}),a("label",{attrs:{for:t+"C"}},[s._v(s._s(i.descricao))])])})),0)])])]):a("div",{staticClass:"info-usuarios form-publico"},[a("div",{staticClass:"row vertical"},[a("div",{staticClass:"col-12 col-md-6"},[a("h2",[s._v(s._s(s.usuario.first_name)+" "+s._s(s.usuario.last_name))]),a("p",[s._v(s._s(s.usuario.funcao))])]),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"field-usuario"},[a("label",[s._v("E-mail comercial")]),a("p",[s._v(s._s(s.usuario.email_empresarial))])]),a("div",{staticClass:"field-usuario"},[a("label",[s._v("Slack")]),a("p",[s._v(s._s(s.usuario.slack))])]),a("div",{staticClass:"field-usuario"},[a("label",[s._v("Área")]),a("p",[s._v(s._s(s.usuario.area))])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"field-usuario"},[a("label",[s._v("Sobre mim")]),a("p",[s._v(s._s(s.usuario.sobre_mim))])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"field-usuario"},[a("label",[s._v("Whatsapp")]),a("p",[s._v(s._s(s.usuario.whatsapp))])]),a("div",{staticClass:"field-usuario"},[a("label",[s._v("Empresa")]),a("p",[s._v(s._s(s._f("corrigeEmpresa")(s.usuario.empresa)))])])])])]),s.usuario.id===this.$store.state.usuario.usuario.id?a("div",{staticClass:"btn-modal-usuario"},[a("q-btn",{attrs:{label:"Salvar",color:"primary"},on:{click:function(a){return s.$emit("update-usuario-detalhes")}}})],1):s._e()],1)])])])},e=[],o=(i("5319"),{name:"ModalUsuario",props:["usuario","show"],computed:{isAdmin(){return this.$store.state.usuario.roles.admin===this.$store.state.usuario.usuario.role},modelValue:{get(){return this.show},set(s){return s?this.$emit("show"):this.$emit("hide")}}},methods:{handleModal(s){this.modelValue=s}},filters:{corrigeEmpresa:function(s){return s?(s=s.toString().replace("_"," ").replace("Lanca","Lança"),s):"-"}}}),l=o,r=(i("f938"),i("2877")),u=i("24e8"),c=i("0016"),d=i("27f9"),n=i("9c40"),v=i("f09f"),m=i("7f67"),p=i("eebe"),_=i.n(p),f=Object(r["a"])(l,t,e,!1,null,null,null);a["a"]=f.exports;_()(f,"components",{QDialog:u["a"],QIcon:c["a"],QInput:d["a"],QBtn:n["a"],QCard:v["a"]}),_()(f,"directives",{ClosePopup:m["a"]})},a529:function(s,a,i){},b965:function(s,a,i){s.exports=i.p+"img/banner-modal-usuario.da8c8d95.png"},d28a:function(s,a,i){s.exports=i.p+"img/placeholder-cards.416d7703.png"},e110:function(s,a,i){"use strict";var t=function(){var s=this,a=s._self._c;return a("q-dialog",{staticClass:"dialog-onboard",attrs:{id:"modal-atividade",value:s.modelValue},on:{input:s.handleModal}},[a("div",{staticClass:"card-modal-atividade"},[a("div",{staticClass:"scroll scroll-modal-atividade"},[a("img",{staticClass:"banner-modal-atividade",attrs:{src:i("13f5"),alt:""}}),a("div",{staticClass:"container-conteudo-modal-atividade"},[a("img",{staticClass:"img-modal-atividade",attrs:{src:"https://admin.bilhon.com/assets/"+s.atividade.imagem}}),a("q-icon",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"close-modal-atividade",attrs:{name:"close",size:"30px"}}),a("h2",{staticClass:"titulo-modal-atividade"},[s._v(s._s(s.atividade.titulo))]),a("div",{attrs:{id:"contentAtividade"},domProps:{innerHTML:s._s(s.atividade.conteudo)}})],1)])])])},e=[],o={name:"ModalAtividade",props:["atividade","show"],computed:{modelValue:{get(){return this.show},set(s){return s?this.$emit("show"):this.$emit("hide")}}},methods:{handleModal(s){this.modelValue=s}}},l=o,r=(i("6c18"),i("2877")),u=i("24e8"),c=i("0016"),d=i("f09f"),n=i("7f67"),v=i("eebe"),m=i.n(v),p=Object(r["a"])(l,t,e,!1,null,null,null);a["a"]=p.exports;m()(p,"components",{QDialog:u["a"],QIcon:c["a"],QCard:d["a"]}),m()(p,"directives",{ClosePopup:n["a"]})},eaf7:function(s,a,i){},f938:function(s,a,i){"use strict";i("a529")},fbea:function(s,a,i){},fcd7:function(s,a,i){"use strict";i("eaf7")}}]);