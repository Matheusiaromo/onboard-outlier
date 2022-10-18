<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          ONBOARD
        </q-toolbar-title>

        <q-btn-dropdown flat color="white" icon="person">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label @click="deslogar">Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>


      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  methods: {
    deslogar(){
      this.$store.dispatch("deslogarUsuario")
      this.$q.notify("Logout com sucesso")
      this.$router.push({name: "login"})
    }
  }
}
</script>
