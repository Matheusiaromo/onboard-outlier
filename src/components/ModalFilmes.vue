<template>

      <q-dialog class="dialog-onboard"
        :value="modelValue" @input="handleModal"
        >

          <div class="q-header-card">
              <div class="text-h6 text-white">{{filme.titulo}}</div>
              <q-icon v-close-popup name="close" size="30px" color="primary" />
          </div>

          <q-card
          style="width: 100%;background: #D9D9D9;border-radius: 8px;"
          >

            <q-card-section style="max-height: 70vh" class="scroll">

              <q-img
                :src="'https://app.omatheusdev.com/assets/' + filme.imagem"
                :ratio="16/9"
                style="margin-bottom: 20px;border-radius: 8px;max-height: 200px;"
              />


              <div id="contentAtividade" v-html="filme.descricao"></div>

            </q-card-section>

          </q-card>
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

<style>

.q-dialog__inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.q-header-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: none !important;
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


</style>
