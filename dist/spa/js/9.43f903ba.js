(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"87bb":function(a,o,s){"use strict";s.r(o);var i=function(){var a=this,o=a._self._c;return o("q-page",{staticStyle:{"overflow-x":"hidden"},attrs:{id:"team"}},[o("div",{staticClass:"row justify-center q-col-md-gutter-md",staticStyle:{margin:"0 auto","max-width":"1280px"}},[o("div",{staticClass:"col-12 col-md-2"},[o("ColunaUsuario",{attrs:{colTitulo:"Marketing",usuarios:a.usuarioMarketing},on:{"open-modal-usuario":a.showUsuario}})],1),o("div",{staticClass:"col-12 col-md-2"},[o("ColunaUsuario",{attrs:{colTitulo:"Gestão",usuarios:a.usuarioGestao},on:{"open-modal-usuario":a.showUsuario}})],1),o("div",{staticClass:"col-12 col-md-2"},[o("ColunaUsuario",{attrs:{colTitulo:"Aquisição",usuarios:a.usuarioAquisicao},on:{"open-modal-usuario":a.showUsuario}})],1),o("div",{staticClass:"col-12 col-md-2"},[o("ColunaUsuario",{attrs:{colTitulo:"Tecnologia",usuarios:a.usuarioTecnologia},on:{"open-modal-usuario":a.showUsuario}})],1),o("div",{staticClass:"col-12 col-md-2"},[o("ColunaUsuario",{attrs:{colTitulo:"Audiovisual",usuarios:a.usuarioAudiovisual},on:{"open-modal-usuario":a.showUsuario}})],1)]),o("ModalUsuario",{attrs:{usuario:a.usuarioDetalhes,show:a.showModalUsuario},on:{hide:function(o){a.showModalUsuario=!1},"update-usuario-detalhes":a.updateUsuario}})],1)},t=[],e=s("8a52"),u=s("38f9"),r=s("87e7"),l={name:"TeamPage",data(){return{usuarioTecnologia:[],usuarioGestao:[],usuarioAudiovisual:[],usuarioMarketing:[],usuarioAquisicao:[],showModalUsuario:!1,usuarioDetalhes:[]}},methods:{setUsuarioTecnologia(){r["a"].getFilter("/users","?filter[area][_eq]=Tecnologia&filter[role][_neq]=2016dbba-a402-4bc7-85c5-7e0ba53e93f2&sort=prioridade").then((a=>{console.log(a.data.data),this.usuarioTecnologia=a.data.data}))},setUsuarioAquisicao(){r["a"].getFilter("/users","?filter[area][_eq]=Aquisição&filter[role][_neq]=2016dbba-a402-4bc7-85c5-7e0ba53e93f2&sort=prioridade").then((a=>{console.log(a.data.data),this.usuarioAquisicao=a.data.data}))},setUsuarioGestao(){r["a"].getFilter("/users","?filter[area][_eq]=Gestão&sort=prioridade").then((a=>{console.log(a.data.data),this.usuarioGestao=a.data.data}))},setUsuarioAudiovisual(){r["a"].getFilter("/users","?filter[area][_eq]=Audiovisual&sort=prioridade").then((a=>{console.log(a.data.data),this.usuarioAudiovisual=a.data.data}))},setUsuarioMarketing(){r["a"].getFilter("/users","?filter[area][_eq]=Marketing&sort=prioridade").then((a=>{console.log(a.data.data),this.usuarioMarketing=a.data.data}))},showUsuario(a){const o="?fields=id,first_name,last_name,avatar,razao_social,funcao,sobre_mim,whatsapp,descricao_servico,email,area,email_empresarial,cpf,cnpj,rg,data_nascimento,endereco_comercial,endereco_residencial,slack,pix,ferramentas,pagamentos,passos";r["a"].getSingleUser("/users/"+a,o).then((a=>{this.usuarioDetalhes=a.data.data,this.showModalUsuario=!0}))},updateUsuario(){r["a"].update("/users/"+this.$store.state.usuario.usuario.id,this.usuarioDetalhes).then((a=>{console.log(a),this.$q.notify("Usuario atualizado")})).catch((a=>{this.$q.notify(a.response.data.errors[0].message)}))}},components:{ModalUsuario:e["a"],ColunaUsuario:u["a"]},created(){this.setUsuarioTecnologia(),this.setUsuarioGestao(),this.setUsuarioAudiovisual(),this.setUsuarioMarketing(),this.setUsuarioAquisicao()}},d=l,n=(s("a19b"),s("2877")),c=s("9989"),h=s("eebe"),g=s.n(h),p=Object(n["a"])(d,i,t,!1,null,"036f4dce",null);o["default"]=p.exports;g()(p,"components",{QPage:c["a"]})},a19b:function(a,o,s){"use strict";s("a451")},a451:function(a,o,s){}}]);