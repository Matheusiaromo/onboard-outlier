<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>

import { api } from "src/services.js"

export default {
  name: 'App',
  created() {

    if(window.localStorage.token){
        console.log(window.localStorage.refreshToken)
        api.refresh(window.localStorage.refreshToken).then(
          response => {
            console.log("tem token")
            window.localStorage.token = `Bearer ${response.data.data.access_token}`
            window.localStorage.refreshToken = response.data.data.refresh_token
            this.$store.dispatch("getUsuario");
          }
        ).catch(error => {
          console.log("token errado")
          this.$q.notify(error.response.data.errors[0].message)
          this.$store.dispatch("deslogarUsuario")
          this.$router.push({name: "login"})
        })
      }
  }
}
</script>
