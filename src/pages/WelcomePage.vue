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
        <div class="col-12 col-md-7" style="border-radius: 10px; overflow: hidden;">
          <div style="position:relative;padding-top:52.81249999999999%;"><iframe id="panda-bc948d97-21ee-4cdd-b766-276e2cab8a60" src="https://player-vz-2cdebb25-226.tv.pandavideo.com.br/embed/?v=bc948d97-21ee-4cdd-b766-276e2cab8a60&preload=false" style="border:none;position:absolute;top:0;left:0;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" allowfullscreen=true width="100%" height="100%"></iframe></div>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #welcome .row {
    max-width: 1280px;
  }

  @media (min-width: 1240px) {
    #welcome .row {
      min-width: 1280px;
    }
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
