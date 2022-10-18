<template>
  <q-page padding>

    <div class="row q-col-gutter-sm no-wrap">

    <div class="col-6 col-sm-4 col-md-2">
        <ColunaAtividade colTitulo="Bem-vindo Outlier!" :atividades="atividadeC1" @open-modal-atividade="showAtividade" />
    </div>

     <div class="col-6 col-sm-4 col-md-2" >
        <ColunaAtividade colTitulo="Primeiros Passos" :atividades="atividadeC2" @open-modal-atividade="showAtividade" />
     </div>

     <div class="col-6 col-sm-4 col-md-2">
        <ColunaAtividade colTitulo="Missão, Visão e Valores" :atividades="atividadeC3" @open-modal-atividade="showAtividade" />
     </div>



    <div class="col-6 col-sm-4 col-md-2">
        <ColunaUsuario colTitulo="Marketing" :usuarios="usuarioMarketing" @open-modal-usuario="showUsuario" />
    </div>

     <div class="col-6 col-sm-4 col-md-2">
        <ColunaUsuario colTitulo="Gestão" :usuarios="usuarioGestao" @open-modal-usuario="showUsuario" />
    </div>

    <div class="col-6 col-sm-4 col-md-2">
        <ColunaUsuario colTitulo="Tecnologia" :usuarios="usuarioTecnologia" @open-modal-usuario="showUsuario" />
    </div>

    <div class="col-6 col-sm-4 col-md-2">
        <ColunaUsuario colTitulo="Audiovisual" :usuarios="usuarioAudiovisual" @open-modal-usuario="showUsuario" />
    </div>



   </div>


    <ModalAtividade
      :atividade="atividadeDetalhes"
      :show="showModalAtividade"
      @hide="showModalAtividade = false"
    />

    <ModalUsuario
      :usuario="usuarioDetalhes"
      :show="showModalUsuario"
      @hide="showModalUsuario = false"
      @update-usuario-detalhes="updateUsuario"
    />

  </q-page>
</template>

<script>

import ModalAtividade from "src/components/ModalAtividade.vue"
import ColunaAtividade from "src/components/ColunaAtividade.vue"
import ModalUsuario from "src/components/ModalUsuario.vue"
import ColunaUsuario from "src/components/ColunaUsuario.vue"

import { api } from "src/services"

export default {
  name: 'IndexPage',
  data(){
    return {
      atividadeC1: [],
      atividadeC2: [],
      atividadeC3: [],
      usuarioTecnologia: [],
      usuarioGestao: [],
      usuarioAudiovisual: [],
      usuarioMarketing: [],
      showModalAtividade: false,
      atividadeDetalhes: [],
      showModalUsuario: false,
      usuarioDetalhes: []
    }
  },
  methods: {
    setAtividadeC1(){
      api.getFiltered("/items/atividades", "coluna", "coluna1", true).then(
        response => {
          this.atividadeC1 = response.data.data
        }
      )
    },
    setAtividadeC2(){
      api.getFiltered("/items/atividades", "coluna", "coluna2", true).then(
        response => {
          this.atividadeC2 = response.data.data
        }
      )
    },
    setAtividadeC3(){
      api.getFiltered("/items/atividades", "coluna", "coluna3", true).then(
        response => {
          this.atividadeC3 = response.data.data
        }
      )
    },
    setUsuarioTecnologia(){
      api.getFiltered("/users", "area", "tecnologia").then(
        response => {
          console.log(response.data.data)
          this.usuarioTecnologia = response.data.data
        }
      )
    },
    setUsuarioGestao(){
      api.getFiltered("/users", "area", "gestao").then(
        response => {
          console.log(response.data.data)
          this.usuarioGestao = response.data.data
        }
      )
    },
    setUsuarioAudiovisual(){
      api.getFiltered("/users", "area", "audiovisual").then(
        response => {
          console.log(response.data.data)
          this.usuarioAudiovisual = response.data.data
        }
      )
    },
    setUsuarioMarketing(){
      api.getFiltered("/users", "area", "marketing").then(
        response => {
          console.log(response.data.data)
          this.usuarioMarketing = response.data.data
        }
      )
    },
    showAtividade(id){
      api.get("/items/atividades/" + id).then(
        response => {
          this.atividadeDetalhes = response.data.data
          this.showModalAtividade = true

        }
      )
    },
    showUsuario(id){
      const query = "?fields=id,nome,avatar,razao_social,funcao,descricao_servico,email,area,email_comercial,cpf,cnpj,rg,data_nascimento,endereco_comercial,endereco_residencial,slack,pix,ferramentas,pagamentos,passos"
      api.getSingleUser("/users/" + id, query).then(
        response => {
          this.usuarioDetalhes = response.data.data
          this.showModalUsuario = true

        }
      )
    },
    updateUsuario(){
      api.update("/users/" + this.$store.state.usuario.usuario.id, this.usuarioDetalhes ).then(
        response => {
          console.log(response)
          this.$q.notify("Usuario atualizado")
        }
      ).catch(error => {
        this.$q.notify(error.response.data.errors[0].message)
      })
    }
  },
  components: {
    ModalAtividade,
    ColunaAtividade,
    ModalUsuario,
    ColunaUsuario
  },
  created() {
    this.setAtividadeC1()
    this.setAtividadeC2()
    this.setAtividadeC3()
    this.setUsuarioTecnologia()
    this.setUsuarioGestao()
    this.setUsuarioAudiovisual()
    this.setUsuarioMarketing()
  }
}
</script>
