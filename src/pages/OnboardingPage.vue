<template>
  <q-page id="onboarding" style="overflow-x: hidden;position: relative;">

    <!-- <img src="../assets/bg-pages.png" alt="" class="bg-blur"> -->

    <div class="row justify-center" style="margin: 0 auto; max-width: 1280px">
      <div class="col-12 col-md-3">
          <ColunaAtividade colTitulo="Missão, visão e código" :atividades="atividadeC1" @open-modal-atividade="showAtividade" />
      </div>

      <div class="col-12 col-md-3" >
          <ColunaAtividade colTitulo="Valores" :atividades="atividadeC2" @open-modal-atividade="showAtividade" />
      </div>

      <div class="col-12 col-md-3" >
        <ColunaAtividade colTitulo="Primeiros passos" :atividades="atividadeC3" @open-modal-atividade="showAtividade" />
      </div>

      <div class="col-12 col-md-3" >
        <ColunaAtividade colTitulo="Suas ferramentas" :atividades="atividadeC4" @open-modal-atividade="showAtividade" />
      </div>

     <!--  <div class="col-12 col-md-2" >
        <ColunaAtividade colTitulo="Treinamento" :atividades="atividadeC5" @open-modal-atividade="showAtividade" />
      </div> -->

   </div>

    <ModalAtividade
      :atividade="atividadeDetalhes"
      :show="showModalAtividade"
      @hide="showModalAtividade = false"
    />

  </q-page>
</template>

<script>

import ModalAtividade from "src/components/ModalAtividade.vue"
import ColunaAtividade from "src/components/ColunaAtividade.vue"

import { api } from "src/services"

export default {
  name: 'IndexPage',
  data(){
    return {
      atividadeC1: [],
      atividadeC2: [],
      atividadeC3: [],
      atividadeC4: [],
      /* atividadeC5: [], */ // treinamento
      showModalAtividade: false,
      atividadeDetalhes: [],
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
    setAtividadeC4(){
      api.getFiltered("/items/atividades", "coluna", "coluna4", true).then(
        response => {
          this.atividadeC4 = response.data.data
        }
      )
    },
    /* setAtividadeC5(){
      api.getFiltered("/items/atividades", "coluna", "coluna5", true).then(
        response => {
          this.atividadeC5 = response.data.data
        }
      )
    }, */
    showAtividade(id){
      api.get("/items/atividades/" + id).then(
        response => {
          this.atividadeDetalhes = response.data.data
          this.showModalAtividade = true

        }
      )
    },
  },
  components: {
    ModalAtividade,
    ColunaAtividade,
  },
  created() {
    this.setAtividadeC1()
    this.setAtividadeC2()
    this.setAtividadeC3()
    this.setAtividadeC4()
    /* this.setAtividadeC5() */
  }
}
</script>

<style scoped>

.q-img__content > div{
  background: #000 !important;
}

#onboarding {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;
  padding-top: 40px;
}

#onboarding .row {
  flex-wrap: nowrap;
  gap: 20px;
}


@media (max-width: 1024px){

  #onboarding .row {
    flex-wrap: wrap;
  }
}


</style>
