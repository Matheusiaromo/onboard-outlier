<template>
    <q-page id="welcome">

     <div class="row justify-center">
        <div class="col-12 col-md-5 col-texto">
            <div class="w-texto" v-if="isM">
              <h1>Bem vindo ao time, <span>{{this.$store.state.usuario.usuario.nome.split(' ')[0]}}</span>!</h1>
              <p>Estamos muito felizes em tê-lo conosco. Para começarmos o seu processo de onboarding na empresa, por favor assista o vídeo ao lado.</p>
            </div>
            <div class="w-texto" v-else>
              <h1>Bem vinda ao time, <span>{{this.$store.state.usuario.usuario.nome.split(' ')[0]}}</span>!</h1>
              <p>Estamos muito felizes em tê-la conosco. Para começarmos o seu processo de onboarding na empresa, por favor assista o vídeo ao lado.</p>
            </div>
        </div>
        <div class="col-12 col-md-7 ">
          <video id="video" controls="controls" width="300" height="150" poster="../assets/placeholder-w.jpg">
            <source src="https://admin.bilhon.com/assets/0b93a178-2365-49a0-a22f-4ae52b8d06f2" type="video/mp4" />
          </video>
        </div>
     </div>

    </q-page>
  </template>

  <script>


  export default {
    name: 'WelcomePage',
    computed: {
      isM(){
      return this.$store.state.usuario.usuario.genero === "m"
    },
    }
  }
  </script>

  <style scoped>

  #welcome {
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 106px);
  }

  #welcome .col-texto {
    display:flex;
    flex-direction: column;
    justify-content:center;
    gap:32px;
    max-width: 434px;
  }

  #welcome .w-texto {
    display:flex;
    flex-direction: column;
    justify-content:center;
    gap:32px;
  }

  #welcome h1 {
    padding: 0px;
    margin: 0px;
    color: #fff;
    font-weight: 500;
    font-size: 54px;
    line-height: 74px;
  }

  #welcome p {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #fff;
    margin: 0px;
    padding: 0px;
  }

  #welcome h1 span {
    color: #B77E45;
  }
   #welcome .row {
     margin: 0 auto;
     max-width: 1280px;
     justify-content: center;
   }


   #welcome #video {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }


  @media (max-width: 1440px) {
    #welcome .row {
      max-width: 1168px;
    }

  }

  @media (max-width: 1280px) {
    #welcome .row {
      max-width: 995px;
      padding-left: 20px;
      padding-right: 20px;
    }

    #welcome .col-texto {
      max-width: 100%;
      gap: 10px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 600px) {
    #welcome {
      height: calc(100vh - 140px);
    }
    #welcome h1 {
      font-size: 34px;
      line-height: 50px;
    }
  }


  </style>
