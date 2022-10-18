<template>

      <q-dialog
        :value="modelValue" @input="handleModal"
        >
          <q-card
          style="width: 100%;"
          >
            <q-card-section>
              <div class="text-h6">{{usuario.nome}}</div>
            </q-card-section>

            <q-separator />

            <q-card-section class="scroll">

              <q-img
                :src="'https://app.omatheusdev.com/assets/' + usuario.avatar"
                :ratio="16/9"
              />

              <q-input v-model="usuario.area" label="Area" />

              <q-input type="textarea" v-model="usuario.descricao_servico" label="Descrição do serviço" />

              <q-input v-model="usuario.cpf" label="CPF" />

              <q-input v-model="usuario.cnpj" label="CNPJ" />

               <q-input v-model="usuario.razao_social" label="Razão social" />

              <q-input v-model="usuario.rg" label="RG" />

              <q-input v-model="usuario.pix" label="PIX" />

               <q-input v-model="usuario.slack" label="Slack" />

              <q-input v-model="usuario.data_nascimento" label="Data de nascimento" />

              <q-input v-model="usuario.email_comercial" label="Email comercial" />

              <q-input v-model="usuario.endereco_comercial" label="Endereço comercial" />

               <q-input v-model="usuario.endereco_residencial" label="Endereço residencial" />

              <span class="text-h6">Ferramentas</span>
              <div v-for="ferramenta, key in usuario.ferramentas" :key="key + 'A'">
                <q-checkbox v-model="ferramenta.status" :label="ferramenta.descricao" />
              </div>

              <span class="text-h6">Pagamentos</span>
              <div v-for="pagamento, key in usuario.pagamentos" :key="key + 'B'">
                <q-checkbox v-model="pagamento.status" :label="pagamento.descricao" />
              </div>

              <span class="text-h6">Passos</span>
              <div v-for="passo, key in usuario.passos" :key="key + 'C'">
                <q-checkbox v-model="passo.status" :label="passo.descricao" />
              </div>

            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
              <q-btn label="Fechar" flat v-close-popup />
              <q-btn v-if="usuario.id === this.$store.state.usuario.usuario.id" label="Salvar" @click="$emit('update-usuario-detalhes')" color="primary" />
            </q-card-actions>
          </q-card>
        </q-dialog>

</template>

<script>
export default {
  name: "ModalUsuario",
  props: [
    "usuario",
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

</style>
