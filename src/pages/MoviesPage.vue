<template>
  <q-page id="movies" style="overflow-x: hidden;position: relative;">

   <div class="col justify-center">
      <span class="titulo-filmes">
        Filmes
      </span>
      <div class="container-filmes">
        <div class="box-filmes" v-for="filme, i in filmes" :key="i">
            <q-img
              class="img-card-filme"
              placeholder-src="../assets/placeholder-cards-filmes.png"
              :src="'https://admin.bilhon.com/assets/' + filme.imagem"
               @click="showFilmes(filme.id)"
              ></q-img>
        </div>
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

import { api } from "src/services"

export default {
  name: 'MoviesPage',
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
          console.log(response.data.data)
          this.filmesDetalhes = response.data.data
          this.showModalFilmes = true

        }
      )
    },
  },
  components: {
    ModalFilmes,
  },
  created() {
    this.setFilmes()
  }
}
</script>

<style scoped>

.titulo-filmes {
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 20px;
  display: block;
  text-align: left;
  line-height: 33px;
}

#movies {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;

  padding-top: 40px;
}

 #movies .col {
   margin: 0 auto;
   max-width: 1280px;
   justify-content: center;
 }

 #movies .container-filmes {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 20px;
 }

.box-filmes {
  min-width: 100px;
  overflow: hidden;
  border-radius: 5px;
}

.img-card-filme {
  aspect-ratio: 9/13;
  object-fit: cover;
  object-position: center;
  width: 100%;
  transition: .5s;
}

.img-card-filme:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: .5s;
}

@media (max-width: 1440px) {
  #movies .col {
    max-width: 1168px;
  }

  #movies .container-filmes {
   grid-template-columns: repeat(6, 1fr);
  }
}

@media (max-width: 1280px) {
  #movies .col {
    max-width: 995px;
  }

   #movies .container-filmes {
   grid-template-columns: repeat(5, 1fr);
  }
}


@media (max-width: 768px){

  #movies .container-filmes {
   grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 500px){
  #movies .container-filmes {
   grid-template-columns: repeat(2, 1fr);
   gap: 20px;
  }
}


</style>
