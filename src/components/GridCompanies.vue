<template>

      <div>
        <span class="titulo-coluna">
        {{colTitulo}}
        </span>

        <div class="row q-col-gutter-md coluna-mobile" >
          <div class="col-5 col-sm-3" v-for="(atividade, index) in atividades" :key="index">
            <q-card class="card-atividade" @click="$emit('open-modal-atividade', atividade.id)">

              <q-img class="img-card"
              placeholder-src="../assets/placeholder-cards.png"
              :src="'https://admin.bilhon.com/assets/' + atividade.imagem"
              >
                <template v-slot:loading>
                  <div>
                    <q-spinner-ios color="primary" />
                  </div>
                </template>
              </q-img>
              <span class="card-atividade-titulo">
                {{atividade.titulo}}
              </span>
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

.card-atividade {
  background: #191916;
  border-radius: 8px;
  overflow:hidden;
  position: relative;
}

.card-atividade .card-atividade-titulo {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px 12px;
  color: #fff;
  font-weight: 500;
  background: #00000060;
  font-size: 14px;
  line-height: 18px;
}

.titulo-coluna {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 20px;
  display: block;
  text-align: left;
}

.img-card {
  aspect-ratio: 16 / 13;
  width: 100%;
  transition: .5s;
}

.img-card:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: .5s;
}


@media (max-width: 1024px){

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
