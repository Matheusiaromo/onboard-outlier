<template>

      <div>
        <span class="titulo-coluna">
        {{colTitulo}}
        </span>

         <div class="row q-col-gutter-md coluna-mobile ">
          <div class="col-10 col-md-12" v-for="(usuario, index) in usuarios" :key="index">
           <q-card style="background: #191916;border-radius: 8px;overflow: hidden"  class="my-card" @click="$emit('open-modal-usuario', usuario.id)">

              <q-img
              class="img-card"
              placeholder-src="../assets/placeholder-cards.png"
              :src="'https://app.omatheusdev.com/assets/' + usuario.avatar"
              >

              <div class="absolute-bottom text-subtitle2">
                {{usuario.first_name}} {{usuario.last_name}}
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
  name: "ColunaUsuario",
  props: [
    "usuarios",
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
  width: 100%;
  transition: .5s;
}

.img-card:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: .5s;
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
