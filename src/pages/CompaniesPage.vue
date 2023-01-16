<template>
  <q-page id="companies">

   <div class="col">
      <div class="col-12 empresa-destacada">
          <img src="../assets/logo-bilhon-empresa.png" alt="">
          <p>Outlier, não é segredo que na nossa empresa temos produtos diversos. Além de cursos on-line, também trabalhamos com encapsulados, softwares e grupos de networking.</p>
          <p>Para organizar todas nossas frentes de atuação temos uma empresa principal: a Bilhon.</p>
          <p>A Bilhon é uma holding, isto é, uma empresa que detém controle de outras empresas. Esse nível de organização empresarial facilita nossos processos e prepara a empresa para mudanças e crescimento no futuro.</p>
          <p>Hoje temos 6 empresas que estão dentro do nosso “guarda-chuva”, sendo elas: Infomakers, Suple Funnel, Finch Presenciais, Info Institute, Info Tech e Outliers Lançamentos.</p>
          <p>Abra os cards para entender um pouco mais a fundo sobre cada uma delas.</p>
      </div>

      <div class="row">
        <div class="col-12">
          <GridCompanies colTitulo="Empresas do grupo Bilhon" :atividades="atividadeCE" @open-modal-atividade="showAtividade" />
        </div>

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
import GridCompanies from "src/components/GridCompanies.vue"

import { api } from "src/services"

export default {
  name: 'CompaniesPage',
  data(){
    return {
      atividadeCE: [],
      showModalAtividade: false,
      atividadeDetalhes: [],
    }
  },
  methods: {
    setAtividadeCE(){
      api.getFiltered("/items/atividades", "coluna", "coluna-e", true).then(
        response => {
          this.atividadeCE = response.data.data
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
    GridCompanies,
  },
  created() {
    this.setAtividadeCE()
  }
}
</script>

<style scoped>

.empresa-destacada {
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: left;
  align-items: center;

  max-width: 900px;
  margin: 0 auto;
  padding-top: 90px;
  padding-bottom: 64px;
}

.empresa-destacada p {
  width: 100%;
}

.empresa-destacada img {
  margin-bottom: 48px;
}

#companies {
  overflow-x: hidden;
  position: relative;
  flex-direction: column;
  justify-content: center;

  padding-bottom: 80px;
}

 #companies .col {
   margin: 0 auto;
   max-width: 1280px;
   justify-content: center;
 }

@media (max-width: 1440px) {
  #companies .col {
    max-width: 1168px;
  }

}

@media (max-width: 1280px) {
  #companies .col {
    max-width: 995px;
    padding-left: 20px;
    padding-right: 20px;
  }

  #companies .col-texto {
    max-width: 100%;
    gap: 10px;
    margin-bottom: 30px;
  }
}

@media (max-width: 600px) {
  .empresa-destacada {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .empresa-destacada img {
    margin-bottom: 48px;
  }
}


</style>

