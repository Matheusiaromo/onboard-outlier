<template>

      <q-dialog
        id="modal-atividade"
        class="dialog-onboard"
        :value="modelValue"
        @input="handleModal"
      >

        <div class="card-modal-atividade">
          <div class="scroll scroll-modal-atividade">

            <img src="../assets/banner-modal-atividade.png" alt="" class="banner-modal-atividade">

            <div class="container-conteudo-modal-atividade">

              <img class="img-modal-atividade" :src="('https://admin.bilhon.com/assets/' + atividade.imagem)" />
              <q-icon class="close-modal-atividade" v-close-popup name="close" size="30px" />

              <h2 class="titulo-modal-atividade">{{atividade.titulo}}</h2>

              <div id="contentAtividade" v-html="atividade.conteudo"></div>

            </div>
          </div>
        </div>

      </q-dialog>

</template>

<script>
export default {
  name: "ModalAtividade",
  props: [
    "atividade",
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

<style>

#modal-atividade h2 {
  padding: 0px;
  margin: 0px;
  font-size: 24px;
  line-height: 33px;
  color: #191916;
  font-weight: 700;
}

#modal-atividade p {
  font-size: 14px;
  line-height: 24px;
  color: #44423C;
  margin: 0px;
  padding: 0px;
}

#modal-atividade label {
  color: #7A7D70;
  font-size: 12px;
  line-height: 16px;
}

#modal-atividade .banner-modal-atividade {
  width: 100%;
}

#modal-atividade .titulo-modal-atividade {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
}

.q-dialog__inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.q-card__section--vert {
  padding: 32px;
}

.card-modal-atividade {
  width: 100%;
  background: #FFFFFF;
  border-radius: 8px;
  position: relative;
}

.img-modal-atividade {
  border-radius: 8px;
  max-height: 163px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  margin-top: -120px;
  border: 4px solid #fff;
}

.container-conteudo-modal-atividade {
  padding: 32px;
  padding-top: 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#modal-atividade .close-modal-atividade {
  position: absolute;
  top: 10px;
  right: 15px;
  color: #fff;
}

#modal-atividade .close-modal-atividade:hover {
  cursor: pointer;
}

.titulo-modal-atividade {
  font-weight: 500;
  letter-spacing: 0.0125em;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
}

.q-dialog__inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

#contentAtividade {
  padding: 16px;
  border-radius: 8px;
  background: #F5F5F5;
  width: 100%;
}

#contentAtividade h1{
  font-size: 32px;
  line-height: 36px;
}

#contentAtividade img {
  width: 100%;
}

#contentAtividade video {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

#contentAtividade {
  color: #44423C;
}

.q-dialog__backdrop
{
  backdrop-filter: blur(8px);
}

@media (max-width: 600px) {
  #modal-atividade .banner-modal-atividade {
  height: 120px;
}

  #modal-atividade .img-modal-atividade {
    max-height: 120px;
    margin-top: -90px;
  }

  .container-conteudo-modal-atividade {
    padding: 20px;
    padding-top: 0px;
  }
}


</style>
