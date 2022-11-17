<template>
  <q-page id="onboarding" style="overflow-x: hidden;position: relative;">

    <img src="../assets/bg-pages.png" alt="" class="bg-blur">

    <div class="row justify-center" style="margin: 0 auto; max-width: 1280px">

      <div class="col-12 col-sm-2">
          <ColunaFilme colTitulo="Indicações de filmes" :filmes="filmes" @open-modal-filme="showFilmes" />
      </div>

   </div>


    <ModalFilmes
      :filme="filmesDetalhes"
      :show="showModalFilmes"
      @hide="showModalFilmes = false"
    />

  </q-page>
</template>

<script>

import ModalFilmes from "src/components/ModalFilmes.vue"
import ColunaFilme from "src/components/ColunaFilme.vue"

import { api } from "src/services"

export default {
  name: 'ExtrasPage',
  data(){
    return {
      filmes: [],
      showModalFilmes: false,
      filmesDetalhes: [],
    }
  },
  methods: {
    setFilmes(){
      const query = "?fields=id,titulo,imagem,descricao"
      api.getFilter("/items/filmes", query).then(
        response => {
          this.filmes = response.data.data
        }
      )
    },
    showFilmes(id){
      api.get("/items/filmes/" + id).then(
        response => {
          this.filmesDetalhes = response.data.data
          this.showModalFilmes = true

        }
      )
    },
  },
  components: {
    ModalFilmes,
    ColunaFilme
  },
  created() {
    this.setFilmes()
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
