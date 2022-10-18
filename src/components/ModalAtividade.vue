<template>

      <q-dialog
        :value="modelValue" @input="handleModal">
        >
          <q-card
          style="width: 100%;"
          >
            <q-card-section>
              <div class="text-h6">{{atividade.titulo}}</div>
            </q-card-section>

            <q-separator />

            <q-card-section class="scroll">

              <q-img
                :src="'https://app.omatheusdev.com/assets/' + atividade.imagem"
                :ratio="16/9"
                style="margin-bottom: 20px"
              />


              <div id="contentAtividade" v-html="atividade.conteudo"></div>

            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
              <q-btn label="Fechar" v-close-popup  color="primary" />
            </q-card-actions>
          </q-card>
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
}



</style>
