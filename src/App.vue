<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>

import { api } from "src/services.js"

export default {
  name: 'App',
  mounted() {

    if(window.localStorage.token){
        api.refresh(window.localStorage.refreshToken).then(
          response => {
            window.localStorage.token = `Bearer ${response.data.data.access_token}`
            window.localStorage.refreshToken = response.data.data.refresh_token
            this.$store.dispatch("getUsuario");
          }
        ).catch(error => {
          this.$q.notify(error.response.data.errors[0].message)
          this.$store.dispatch("deslogarUsuario")
          this.$router.push({name: "login"})
        })
      } else {
        this.$router.push({name: "login"})
      }
  }
}
</script>
