<template>
  <q-page id="team" style="overflow-x: hidden;">

    <div class="row justify-center q-col-md-gutter-md" style="margin: 0 auto;max-width: 1280px">

      <div class="col-12 col-md-2">
          <ColunaUsuario colTitulo="Marketing" :usuarios="usuarioMarketing" @open-modal-usuario="showUsuario" />
      </div>

      <div class="col-12 col-md-2">
          <ColunaUsuario colTitulo="Gestão" :usuarios="usuarioGestao" @open-modal-usuario="showUsuario" />
      </div>

      <div class="col-12 col-md-2">
          <ColunaUsuario colTitulo="Aquisição" :usuarios="usuarioAquisicao" @open-modal-usuario="showUsuario" />
      </div>

      <div class="col-12 col-md-2">
          <ColunaUsuario colTitulo="Tecnologia" :usuarios="usuarioTecnologia" @open-modal-usuario="showUsuario" />
      </div>

      <div class="col-12 col-md-2">
          <ColunaUsuario colTitulo="Audiovisual" :usuarios="usuarioAudiovisual" @open-modal-usuario="showUsuario" />
      </div>

   </div>

    <ModalUsuario
      :usuario="usuarioDetalhes"
      :show="showModalUsuario"
      @hide="showModalUsuario = false"
      @update-usuario-detalhes="updateUsuario"
    />

  </q-page>
</template>

<script>

import ModalUsuario from "src/components/ModalUsuario.vue"
import ColunaUsuario from "src/components/ColunaUsuario.vue"

import { api } from "src/services"

export default {
  name: 'TeamPage',
  data(){
    return {
      usuarioTecnologia: [],
      usuarioGestao: [],
      usuarioAudiovisual: [],
      usuarioMarketing: [],
      usuarioAquisicao: [],
      showModalUsuario: false,
      usuarioDetalhes: []
    }
  },
  methods: {
    setUsuarioTecnologia(){
      api.getFilter("/users", "?filter[area][_eq]=Tecnologia&filter[role][_neq]=2016dbba-a402-4bc7-85c5-7e0ba53e93f2&sort=prioridade").then(
        response => {
          console.log(response.data.data)
          this.usuarioTecnologia = response.data.data
        }
      )
    },
    setUsuarioAquisicao(){
      api.getFilter("/users", "?filter[area][_eq]=Aquisição&filter[role][_neq]=2016dbba-a402-4bc7-85c5-7e0ba53e93f2&sort=prioridade").then(
        response => {
          console.log(response.data.data)
          this.usuarioAquisicao = response.data.data
        }
      )
    },
    setUsuarioGestao(){
      api.getFilter("/users", "?filter[area][_eq]=Gestão&sort=prioridade").then(
        response => {
          console.log(response.data.data)
          this.usuarioGestao = response.data.data
        }
      )
    },
    setUsuarioAudiovisual(){
      api.getFilter("/users", "?filter[area][_eq]=Audiovisual&sort=prioridade").then(
        response => {
          console.log(response.data.data)
          this.usuarioAudiovisual = response.data.data
        }
      )
    },
    setUsuarioMarketing(){
      api.getFilter("/users", "?filter[area][_eq]=Marketing&sort=prioridade").then(
        response => {
          console.log(response.data.data)
          this.usuarioMarketing = response.data.data
        }
      )
    },
    showUsuario(id){
      const query = "?fields=id,first_name,last_name,avatar,razao_social,funcao,sobre_mim,whatsapp,descricao_servico,email,area,email_empresarial,cpf,cnpj,rg,data_nascimento,endereco_comercial,endereco_residencial,slack,pix,empresa,ferramentas,pagamentos,passos"
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
    ModalUsuario,
    ColunaUsuario
  },
  created() {
    this.setUsuarioTecnologia()
    this.setUsuarioGestao()
    this.setUsuarioAudiovisual()
    this.setUsuarioMarketing()
    this.setUsuarioAquisicao()
  }
}
</script>

<style scoped>

#team {
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;
}

#team .row {
  flex-wrap: nowrap;
  gap: 20px;
}

@media (max-width: 1024px){

  #team .row {
    flex-wrap: wrap;
  }
}
</style>
