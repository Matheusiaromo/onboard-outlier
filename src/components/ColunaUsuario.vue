<template>

      <div>
        <q-chip square color="primary" text-color="white">
        {{colTitulo}}
        </q-chip>

        <div class="row q-col-gutter-sm">
          <div class="col-12" v-for="(usuario, index) in usuarios" :key="index">
            <q-card  class="my-card" @click="$emit('open-modal-usuario', usuario.id)">

              <q-img
              :src="'https://app.omatheusdev.com/assets/' + usuario.avatar"
              :ratio="16/9"
              />

              <q-card-section>
                <div class="text-p">{{usuario.nome}}</div>
              </q-card-section>

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

<style>

</style>
