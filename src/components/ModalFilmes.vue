<template>

      <q-dialog class="dialog-onboard"
        :value="modelValue" @input="handleModal"
      >

      <div class="container-modal-filmes">

        <q-icon v-close-popup name="close" size="30px" class="close-modal-filmes" color="primary" />

        <div class="container-img-modal-filme">
          <img
          class="img-modal-filme"
          :src="'https://app.omatheusdev.com/assets/' + filme.imagem"
          />
        </div>

        <div class="info-filmes">
          <div class="info-titulo">{{filme.titulo}}</div>
          <p class="text-generos">
            Gêneros: <span v-for="generos, i in filme.genero" :key="i">
              {{generos}},
            </span>
          </p>
          <div id="descricaoFilmes" v-html="filme.descricao"></div>
        </div>

      </div>

      </q-dialog>

</template>

<script>
export default {
  name: "ModalFilmes",
  props: [
    "filme",
    "show"
  ],
  computed: {
    modelValue: {
      get() {
        return this.show;
      },
      set(newValue) {
        if (newValue) {
          return this.$emit('show');
        }
        return this.$emit('hide');
      }
    }
  },
  methods: {
    handleModal(v) {
      this.modelValue = v;
    }
  }

}
</script>

<style scoped>

.container-modal-filmes {
  width: 100%;
  background: #191916;
  border-radius: 8px;
  position: relative;

  display: flex;
  flex-direction: row;
  gap: 34px;
  padding: 60px;
  max-width: 1217px;
}

.img-modal-filme {
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
  width: 100%;
  aspect-ratio: 9/13;
}

.container-img-modal-filme {
  min-width: 382px;
}

.close-modal-filmes {
  cursor: pointer;
  position: absolute;
  right: 46px;
  top: 26px;
}

.q-dialog__inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 1218px;
}

#descricaoFilmes {
  color: #fff;
  font-size: 16px;
  line-break: 24px;
}

.q-dialog__backdrop
  {
    backdrop-filter: blur(8px);
  }

.text-generos {
  font-size: 16px;
  line-height: 24px;
  color: #888888;
  padding: 0px;
  margin: 0px;
  margin-top: 4px;
  margin-bottom: 32px;
}

.text-generos span {
  color: #fff;
}

.q-dialog__inner--minimized > div {
  width: 1218px;
}

.info-filmes .info-titulo {
  color: #fff;
  font-size: 24px;
  line-height: 33px;
}

@media (max-width: 1440px){
  .container-modal-filmes {
    max-width: 896px;
    padding: 53px 45px;
  }

  .close-modal-filmes {
    top: 25px;
    right: 33px;
  }
}

@media (max-width: 1280px){
  .container-modal-filmes {
    max-width: 790px;
    padding: 43px 45px;
  }

  .container-img-modal-filme {
    min-width: 238px;
  }

  .close-modal-filmes {
    top: 20px;
    right: 29px;
  }
}

@media (max-width: 768px){
  .container-img-modal-filme {
    min-width: 100px;
  }

  .text-generos {
    margin-bottom: 15px;
  }

  .container-modal-filmes {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    max-height: 70vh;
    width: 100%;
    max-width: 100%;
  }

  .close-modal-filmes {
    top: 10px;
    right: 10px;
  }

  .img-modal-filme {
    width: 50%;
  }
}

</style>
