<template>
  <q-page id="onboarding" style="overflow-x: hidden;position: relative;">

    <img src="../assets/bg-pages.png" alt="" class="bg-blur">

    <div class="row justify-center" style="margin: 0 auto; max-width: 1280px">

      <div class="col-12 col-sm-2">
          <ColunaAtividade colTitulo="Bem-vindo Outlier!" :atividades="atividadeC1" @open-modal-atividade="showAtividade" />
      </div>

      <div class="col-12 col-sm-2" >
          <ColunaAtividade colTitulo="Missão, Visão e Código" :atividades="atividadeC2" @open-modal-atividade="showAtividade" />
      </div>

      <div class="col-12 col-sm-2" >
        <ColunaAtividade colTitulo="Valores" :atividades="atividadeC3" @open-modal-atividade="showAtividade" />
      </div>

      <div class="col-12 col-sm-2" >
        <ColunaAtividade colTitulo="Primeiros Passos" :atividades="atividadeC4" @open-modal-atividade="showAtividade" />
      </div>

      <div class="col-12 col-sm-2" >
        <ColunaAtividade colTitulo="Suas Ferramentas" :atividades="atividadeC5" @open-modal-atividade="showAtividade" />
      </div>

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
      atividadeC5: [],
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
    setAtividadeC5(){
      api.getFiltered("/items/atividades", "coluna", "coluna5", true).then(
        response => {
          this.atividadeC5 = response.data.data
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
    this.setAtividadeC5()
  }
}
</script>

<style scoped>

.bg-blur {
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  mix-blend-mode: lighten;
  filter: blur(20px);
}

.q-img__content > div{
  background: #000 !important;
}

#onboarding {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;

  padding-top: calc(106px + 40px);

/*   background-image: url("../assets/bg-main.png");
  background-position: center;
  background-size: cover; */
}

#onboarding .row {
  flex-wrap: nowrap;
  gap: 20px;
}


@media (max-width: 768px){
  .bg-blur {
    width: inherit;
  }

  #onboarding .row {
    flex-wrap: wrap;
  }
}


</style>
