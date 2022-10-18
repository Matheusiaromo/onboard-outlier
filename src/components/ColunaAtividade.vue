<template>

      <div>
        <q-chip square color="primary" text-color="white">
        {{colTitulo}}
        </q-chip>

        <div class="row q-col-gutter-sm">
          <div class="col-12" v-for="(atividade, index) in atividades" :key="index">
            <q-card  class="my-card" @click="$emit('open-modal-atividade', atividade.id)">

              <q-img
              :src="'https://app.omatheusdev.com/assets/' + atividade.imagem"
              :ratio="16/9"
              />

              <q-card-section>
                <div class="text-p">{{atividade.titulo}}</div>
              </q-card-section>
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

<style>

</style>
