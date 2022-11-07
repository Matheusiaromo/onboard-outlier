<template>
  <q-page id="login" class="row">

    <div class="col-0 col-md-6"></div>
    <div class="col-12 col-md-6 form-login">
        <div class="login-card">
              <img src="../assets/logo-login.png" alt="" />
              <h5>Log in to access onboarding</h5>
              <q-input bg-color="dark"  dark class="login-input" @blur="changeIconColorEmail()" @focus="changeIconColorEmail()" v-model="form.email" type="email" label="email">
                <template v-slot:prepend>
                  <q-icon :color="colorInputEmail" name="las la-envelope" />
                </template>
              </q-input>
              <q-input bg-color="dark" dark class="login-input" @blur="changeIconColorSenha()" @focus="changeIconColorSenha()" v-model="form.password" type="password" label="password">
                <template v-slot:prepend>
                  <q-icon :color="colorInputSenha"  name="las la-key" />
                </template>
              </q-input>
            <button class="login-btn" @click.prevent="logar">Login</button>

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
      },
      colorInputEmail: "grey",
      colorInputSenha: "grey"
    }
  },
  methods: {
    changeIconColorEmail(){
      if(this.colorInputEmail === "grey") {
        this.colorInputEmail = "primary"
      } else {
        this.colorInputEmail = "grey"
      }
    },
    changeIconColorSenha(){
      if(this.colorInputSenha === "grey") {
        this.colorInputSenha = "primary"
      } else {
        this.colorInputSenha = "grey"
      }
    },
    logar() {
      if (this.checkForm()) {
        this.erros = [];
        console.log("login: " + this.form.email)
        this.$store.dispatch("logarUsuario", this.form)
          .then(() => {
            this.$store.dispatch("getUsuario");
            this.$router.push({ name: "onboarding" });

            this.$q.notify("Logado com sucesso")
          })
          .catch(error => {
            this.$q.notify({
              message: error.response.data.errors[0].message,
              classes: "notify-custom"
            })
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

#login {
  padding-left: 20px;
  padding-right: 20px;
  background-color: #191916;

  background-image: url("../assets/login-bg2.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.bg-login {
  position: absolute;
  left: 0;
  top: 0;
}

input {
  color: #fff;
}

.form-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-btn {
  margin: 0 auto;
  padding: 16px 32px;
  color: #191916;
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  background: #fff;
  border: none;

  margin-top: 40px;
}

.login-btn:hover {
  cursor: pointer;
}

.login-card {
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.login-card img {
  margin-bottom: 83px;
  max-width: 280px;
  align-self: center;
}

.form-login h5 {
  padding: 0px;
  margin: 0px;
  font-size: 20px;
  margin-bottom: 20px;
  align-self: start;
  color: #fff;
}

@media (max-width: 768px){
  .login-card {
    width: 100%;
    padding: 40px 20px;
    background: rgba(25, 25, 22, 0.84);
    border-radius: 10px;
  }

  .login-card img {
    width: 70%;
    max-width: 300px;
    margin-bottom: 40px;
  }

  .bg-login {
    width: 100%;
  }
}

</style>
