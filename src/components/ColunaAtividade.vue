<template>

      <div>
        <span class="titulo-coluna">
        {{colTitulo}}
        </span>

        <div class="row q-col-gutter-md coluna-mobile" >
          <div class="col-10 col-md-12" v-for="(atividade, index) in atividades" :key="index">
            <q-card style="background: #191916;border-radius: 8px"  class="my-card" @click="$emit('open-modal-atividade', atividade.id)">

              <q-img class="img-card"
              placeholder-src="../assets/placeholder-cards.png"
              :src="'https://app.omatheusdev.com/assets/' + atividade.imagem"
              >

                <div class="absolute-bottom text-subtitle2">
                  {{atividade.titulo}}
                </div>

                <template v-slot:loading>
                  <div>
                    <q-spinner-ios color="primary" />
                  </div>
                </template>

              </q-img>

            </q-card>
          </div>
        </div>
      </div>

</template>

<script>
export default {
  name: "ColunaAtividade",
  props: [
    "atividades",
    "colTitulo"
  ]

}
</script>

<style scoped>

.titulo-coluna {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 20px;
  display: block;
  text-align: center;
}

.img-card {
  aspect-ratio: 16 / 9;
}

.my-card:hover {
  cursor: pointer;
}

@media (max-width: 768px){

  .img-card {
    aspect-ratio: 1 / 1;
    object-position: center;
  }

  .coluna-mobile {
    margin-bottom: 30px;
  }

   .titulo-coluna {
    font-size: 20px;
    text-align: left;
  }

  .coluna-mobile {
    flex-wrap: nowrap;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  .coluna-mobile::-webkit-scrollbar {
  display: none;
}

  .coluna-mobile > * {
    scroll-snap-align: start;
  }
}

</style>
