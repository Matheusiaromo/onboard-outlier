<template>
  <q-layout view="lHh Lpr lFf">
    <img src="../assets/bg-pages.png" alt="" class="bg-blur">
    <q-header class="h-bilhon">

        <div class="h-logo">
          <img style="max-width: 175px" src="../assets/Logo-Horizontal-2.svg" alt="">
        </div>

        <div class="h-div-tabs">
          <q-tabs
            no-caps
            style="align-self: end"
            class="h-tabs"
            indicator-color="primary"
          >
            <q-route-tab :to="{ name: 'onboarding' }" exact replace label="Onboarding" />
            <q-route-tab v-if="isAdmin || isMembro" :to="{ name: 'team' }" exact replace label="Team" />
            <q-route-tab v-if="isAdmin || isPartime" :to="{ name: 'parttime' }" exact replace label="PartTime" />
            <q-route-tab :to="{ name: 'extras' }" exact replace label="Extras" />
          </q-tabs>
        </div>

        <q-btn-dropdown class="h-drop" flat color="white" icon="las la-user">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label @click="deslogar">Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  computed: {
    isAdmin(){
      return this.$store.state.usuario.roles.admin === this.$store.state.usuario.usuario.role
    },
    isMembro(){
      return this.$store.state.usuario.roles.membro === this.$store.state.usuario.usuario.role
    },
    isPartime(){
      return this.$store.state.usuario.roles.partime === this.$store.state.usuario.usuario.role
    }
  },
  methods: {
    deslogar(){
      this.$store.dispatch("deslogarUsuario")
      this.$q.notify("Logout com sucesso")
      this.$router.push({name: "login"})
    }
  }
}
</script>

<style scoped>

.bg-blur {
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  mix-blend-mode: lighten;
  filter: blur(20px);
}

.h-bilhon {
  position: relative;
  margin-bottom: calc(-106px + -106px);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 106px;

  background: rgba(0, 0, 0, 0.22);
  border-bottom: 1px solid #44423C;
}

.h-logo{
    padding-left: 20px;
}

.h-drop{
    padding-right: 20px;
  }

.h-div-tabs {
  height: 100%;
  display:flex;
}

@media (max-width: 768px){
  .h-bilhon {
    flex-wrap: wrap;
    height: inherit;
    margin-bottom: calc(-115px + -115px);
    background: rgba(0, 0, 0, 0.44);
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.22) 42%, rgba(0, 0, 0, 0.44) 40px);
  }
  .h-logo{
    order: 1;
  }

  .bg-blur {
    width: auto;
  }

  .h-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom: 20px;
  }

  .h-div-tabs{
    order: 3;
    width: 100%;
    height: auto;

    flex-direction: row;
    justify-content: center;
  }

  .h-drop {
    order: 2;
  }
}

</style>
