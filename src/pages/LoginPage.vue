<template>
  <q-page class="bg-grey-1 row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 q-my-md">Fazer login</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-0" style="width: 360px;">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input square outlined clearable v-model="form.email" type="email" label="email" />
              <q-input square outlined clearable v-model="form.password" type="password" label="password" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn color="primary" size="lg" class="full-width" label="Login" @click.prevent="logar" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    logar() {
      if (this.checkForm()) {
        this.erros = [];
        console.log("login: " + this.form.email)
        this.$store.dispatch("logarUsuario", this.form)
          .then(() => {
            this.$store.dispatch("getUsuario");
            this.$router.push({ name: "index" });

            this.$q.notify("Logado com sucesso")
          })
          .catch(error => {
            this.$q.notify(error.response.data.errors[0].message)
          });
      }
    },
    checkForm() {
      if (this.form.email && this.form.password) {
        return true;
      }
      this.$q.notify("Campos obrigatórios")
    }
  },
  beforeCreate(){
    console.log(this.$store.state.usuario.login)
    if (this.$store.state.usuario.login) {
      this.$router.push({name: "index"})
    }
  }
}
</script>

<style scoped>
</style>
