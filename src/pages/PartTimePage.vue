<template>
  <q-page id="partime" style="overflow-x: hidden;">

    <div class="row justify-center q-col-md-gutter-md" style="margin: 0 auto; max-width: 1280px">

      <div class="col-12 col-md-2">
          <ColunaUsuario colTitulo="Tecnologia" :usuarios="usuarioTecnologia" @open-modal-usuario="showUsuario" />
      </div>
      <div class="col-12 col-md-2">

      </div>
      <div class="col-12 col-md-2">

      </div>
      <div class="col-12 col-md-2">

      </div>
      <div class="col-12 col-md-2">

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
  name: 'PartTimePage',
  data(){
    return {
      usuarioTecnologia: [],
      showModalUsuario: false,
      usuarioDetalhes: []
    }
  },
  methods: {
    setUsuarioTecnologia(){
      api.getFilter("/users", "?filter[area][_eq]=Tecnologia&filter[role]=2016dbba-a402-4bc7-85c5-7e0ba53e93f2&fields").then(
        response => {
          console.log(response.data.data)
          this.usuarioTecnologia = response.data.data
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
  }
}
</script>

<style scoped>

#partime {
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;

/*   background-image: url("../assets/bg-main.png");
  background-position: center;
  background-size: cover; */
}

#partime .row {
    flex-wrap: nowrap;
  }

@media (max-width: 1024px){

  #partime .row {
    flex-wrap: wrap;
  }
}
</style>
