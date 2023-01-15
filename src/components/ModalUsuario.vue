<template>

      <q-dialog
        id="modal-usuario"
        class="dialog-onboard"
        :value="modelValue"
        @input="handleModal"
      >

        <div class="card-modal-usuario" >

          <div class="scroll scroll-modal-usuario">

            <img src="../assets/banner-modal-usuario.png" alt="" class="banner-modal-usuario">
            <div class="container-conteudo-modal-usuario">
              <img class="img-modal-usuario" :src="'https://admin.bilhon.com/assets/' + usuario.avatar" />

              <q-icon class="close-modal-usuario" v-close-popup name="close" size="30px" color="primary" />

              <div class="info-usuarios form-usuario" v-if="usuario.id === this.$store.state.usuario.usuario.id">

                  <div class="row vertical">
                    <div class="col-12 col-md-6">
                      <h2>{{usuario.first_name}} {{usuario.last_name}}</h2>
                      <p>{{usuario.area}}</p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12">
                      <div class="field-usuario">
                        <label style="margin-bottom: 8px">Sobre mim</label>
                        <q-input type="textarea" outlined dense v-model="usuario.sobre_mim" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="field-usuario">
                        <label style="margin-bottom: 8px">Descrição serviço</label>

                        <q-input type="textarea" outlined dense v-model="usuario.descricao_servico" />
                      </div>
                    </div>
                  </div>
                  <div class="row form-input-usuario">
                    <div>
                      <div class="field-usuario">
                        <label>CPF</label>
                        <q-input outlined dense mask="###.###.###-##" v-model="usuario.cpf" />
                      </div>
                        <div class="field-usuario">
                        <label>CNPJ</label>
                        <q-input outlined dense mask="##.###.###/####-##" v-model="usuario.cnpj" />
                      </div>
                      <div class="field-usuario">
                          <label>Razão social</label>
                          <q-input outlined dense v-model="usuario.razao_social" />
                      </div>
                      <div class="field-usuario">
                          <label>RG</label>
                          <q-input outlined dense v-model="usuario.rg" />
                      </div>
                      <div class="field-usuario">
                        <label>Endereço comercial</label>
                        <q-input outlined dense v-model="usuario.endereco_comercial" />
                      </div>
                      <div class="field-usuario">
                        <label>Whatsapp</label>
                        <q-input outlined dense mask="(##) #####-####" v-model="usuario.whatsapp" />
                      </div>
                    </div>
                    <div>
                      <div class="field-usuario">
                        <label>PIX</label>
                        <q-input outlined dense v-model="usuario.pix" />
                      </div>
                      <div class="field-usuario">
                        <label>Slack</label>
                        <q-input outlined dense v-model="usuario.slack" />
                      </div>
                      <div class="field-usuario">
                        <label>Data nascimento</label>
                        <q-input outlined dense mask="##/##/####" v-model="usuario.data_nascimento" />
                      </div>
                      <div class="field-usuario">
                        <label>E-mail email_empresarial</label>
                        <q-input outlined dense v-model="usuario.email_empresarial" />
                      </div>
                      <div class="field-usuario">
                        <label>Endereco residencial</label>
                        <q-input outlined dense v-model="usuario.endereco_residencial" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <label>Ferramentas</label>
                        <div class="grupo-checkbox">
                            <div v-for="ferramenta, key in usuario.ferramentas" :key="key + 'A'">
                            <input :id="key + 'A'" type="checkbox" v-model="ferramenta.status">
                            <label :for="key + 'A'">{{ferramenta.descricao}}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <label>Pagamentos</label>
                        <div class="grupo-checkbox">
                            <div v-for="pagamento, key in usuario.pagamentos" :key="key + 'B'">
                            <input :id="key + 'B'" type="checkbox" v-model="pagamento.status">
                            <label :for="key + 'B'">{{pagamento.descricao}}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <label>Passos</label>
                        <div class="grupo-checkbox">
                            <div v-for="passo, key in usuario.passos" :key="key + 'A'">
                            <input :id="key + 'C'" type="checkbox" v-model="passo.status">
                            <label :for="key + 'C'">{{passo.descricao}}</label>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              <div class="info-usuarios form-admin" v-else-if="isAdmin">
                <div class="row vertical">
                  <div class="col-12 col-md-6">
                    <h2>{{usuario.first_name}} {{usuario.last_name}}</h2>
                    <p>{{usuario.funcao}}</p>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="field-usuario">
                      <label>E-mail comercial</label>
                      <p>{{usuario.email_empresarial}}</p>
                    </div>
                    <div class="field-usuario">
                      <label>Slack</label>
                      <p>{{usuario.slack}}</p>
                    </div>
                    <div class="field-usuario">
                      <label>Área</label>
                      <p>{{usuario.area}}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="field-usuario">
                      <label>Sobre mim</label>
                      <p>{{usuario.sobre_mim}}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="field-usuario">
                      <label>Data nascimento</label>
                      <p>{{usuario.data_nascimento}}</p>
                    </div>
                    <div class="field-usuario">
                      <label>CPF</label>
                      <p>{{usuario.cpf}}</p>
                    </div>
                    <div class="field-usuario">
                      <label>RG</label>
                      <p>{{usuario.rg}}</p>
                    </div>
                    <div class="field-usuario">
                      <label>PIX</label>
                      <p>{{usuario.pix}}</p>
                    </div>
                    <div class="field-usuario">
                      <label>CNPJ</label>
                      <p>{{usuario.cnpj}}</p>
                    </div>
                    <div class="field-usuario">
                      <label>Empresa</label>
                      <p>{{usuario.empresa | corrigeEmpresa}}</p>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="field-usuario">
                      <label>Razão social</label>
                      <p>{{usuario.razao_social}}</p>
                    </div>
                    <div class="field-usuario">
                      <label>Endereco comercial</label>
                      <p>{{usuario.endereco_comercial}}</p>
                    </div>
                    <div class="field-usuario">
                      <label>Endereco residencial</label>
                      <p>{{usuario.endereco_residencial}}</p>
                    </div>
                    <div class="field-usuario">
                      <label>Whatsapp</label>
                      <p>{{usuario.whatsapp}}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <label>Ferramentas</label>
                    <div class="grupo-checkbox">
                        <div v-for="ferramenta, key in usuario.ferramentas" :key="key + 'A'">
                        <input :id="key + 'A'" type="checkbox" v-model="ferramenta.status">
                        <label :for="key + 'A'">{{ferramenta.descricao}}</label>
                    </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <label>Pagamentos</label>
                    <div class="grupo-checkbox">
                      <div v-for="pagamento, key in usuario.pagamentos" :key="key + 'B'">
                        <input :id="key + 'B'" type="checkbox" v-model="pagamento.status">
                        <label :for="key + 'B'">{{pagamento.descricao}}</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <label>Passos</label>
                    <div class="grupo-checkbox">
                      <div v-for="passo, key in usuario.passos" :key="key + 'C'">
                        <input :id="key + 'C'" type="checkbox" v-model="passo.status">
                        <label :for="key + 'C'">{{passo.descricao}}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="info-usuarios form-publico" v-else>
                <div class="row vertical">
                  <div class="col-12 col-md-6">
                    <h2>{{usuario.first_name}} {{usuario.last_name}}</h2>
                    <p>{{usuario.funcao}}</p>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="field-usuario">
                      <label>E-mail comercial</label>
                      <p>{{usuario.email_empresarial}}</p>
                    </div>
                    <div class="field-usuario">
                      <label>Slack</label>
                      <p>{{usuario.slack}}</p>
                    </div>
                    <div class="field-usuario">
                      <label>Área</label>
                      <p>{{usuario.area}}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="field-usuario">
                      <label>Sobre mim</label>
                      <p>{{usuario.sobre_mim}}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="field-usuario">
                      <label>Whatsapp</label>
                      <p>{{usuario.whatsapp}}</p>
                    </div>
                    <div class="field-usuario">
                      <label>Empresa</label>
                      <p>{{usuario.empresa | corrigeEmpresa}}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="btn-modal-usuario" v-if="usuario.id === this.$store.state.usuario.usuario.id">
                <q-btn label="Salvar" @click="$emit('update-usuario-detalhes')" color="primary" />
              </div>
            </div>
          </div>

        </div>
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
    isAdmin(){
      return this.$store.state.usuario.roles.admin === this.$store.state.usuario.usuario.role
    },
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
  },
  filters: {
    corrigeEmpresa: function (e){
     if(e) {
      e = e.toString().replace("_", " ").replace("Lanca", "Lança")
      return e
     }

     return "-"

    }
  }

}
</script>

<style>

#modal-usuario h2 {
  padding: 0px;
  margin: 0px;
  font-size: 24px;
  line-height: 33px;
  color: #191916;
  font-weight: 700;
}

#modal-usuario p {
  font-size: 14px;
  line-height: 24px;
  color: #44423C;
  margin: 0px;
  padding: 0px;
}

#modal-usuario label {
  color: #7A7D70;
  font-size: 12px;
  line-height: 16px;
}

#modal-usuario .banner-modal-usuario {
  width: 100%;
}

#modal-usuario .form-input-usuario {
  display: grid;
	grid-template-columns: 1fr 1fr;
  gap: 10px;
}


#modal-usuario .grupo-checkbox {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

#modal-usuario .grupo-checkbox > div {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: baseline;
}

#modal-usuario .grupo-checkbox label {
  line-height: 140%;
  color: #343A40;
  font-size: 14px;
}

#modal-usuario .grupo-checkbox input[type="checkbox"] {
  accent-color: #B77E45;
}

#modal-usuario .form-input-usuario label {
  margin-bottom: 8px;
}

/* #modal-usuario input {
  border-radius: 4px;
  border: 1px solid #7a7d705e;
  padding: 8px;
  margin-top: 5px;
  line-height: 140%;
  color: #343A40;
  font-size: 14px;
} */

/* #modal-usuario textarea {
  border-radius: 4px;
  border: none;
  border: 1px solid #7A7D70;
  padding: 5px;
  margin-top: 5px;
} */

#modal-usuario .btn-modal-usuario {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
}

.info-usuarios {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-usuarios .field-usuario {
  display: flex;
  flex-direction: column;
}

#modal-usuario .form-usuario {
  display: flex;
  flex-direction: column;
}

.checkbox-usuario {
  padding: 0px;
  margin: 0px;
}

#modal-usuario textarea:focus, input:focus{
    outline-color: #B77E45;
}

.info-usuarios > .row {
  padding: 16px;
  border-radius: 8px;
  background: #F5F5F5;
}

.info-usuarios .row > div {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-usuarios .vertical > div {
  gap: 0px;
}

.info-usuarios .vertical {
  padding: 0px;
  background: #fff;
}

.info-usuarios  .vertical .field-usuario {
  flex-direction: row;
  align-items: center;
  gap: 9px;
}

.q-dialog__inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.q-card__section--vert {
  padding: 32px;
}

.card-modal-usuario {
  width: 100%;
  background: #FFFFFF;
  border-radius: 8px;
  position: relative;
}

.img-modal-usuario {
  border-radius: 8px;
  height: 163px;
  width: 163px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  margin-top: -120px;
  border: 4px solid #fff;
}

.container-conteudo-modal-usuario {
  padding: 32px;
  padding-top: 0px;
}

#modal-usuario .close-modal-usuario {
  position: absolute;
  top: 10px;
  right: 15px;
}

#modal-usuario .close-modal-usuario:hover {
  cursor: pointer;
}

.gdc span{
  color: #191916;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.perfil-publico h4, .perfil-usuario h4, .perfil-admin h4 {
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #191916;
}

.perfil-usuario h6 {
  margin: 0px;
  padding: 0px;
  color: #191916;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  margin-bottom: 15px;
   margin-top: 20px;
}

.perfil-admin h6 {
  margin: 0px;
  padding: 0px;
  color: #191916;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  margin-bottom: 15px;
  margin-top: 20px;
}

.perfil-publico h6 {
  margin: 0px;
  padding: 0px;
  color: #191916;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  margin-bottom: 15px;
   margin-top: 20px;
}

.gdc p{
  color: #44423C;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}

.area-input {
  text-transform: capitalize;
}

@media (max-width: 600px){
.q-card__section--vert {
  padding: 20px;
}

#modal-usuario .form-input-usuario {
  grid-template-columns: 1fr;
}

#modal-usuario .banner-modal-usuario {
  height: 120px;
}

#modal-usuario .img-modal-usuario {
  height: 120px;
  width: 120px;
  margin-top: -90px;
}

.container-conteudo-modal-usuario {
  padding: 20px;
  padding-top: 0px;
}
}

</style>
