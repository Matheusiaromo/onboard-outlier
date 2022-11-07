<template>

      <q-dialog
        class="dialog-onboard"
        :value="modelValue" @input="handleModal"
        >

        <div class="q-header-card">
              <div class="text-h6 text-white">{{usuario.first_name}} {{usuario.last_name}}</div>
              <q-icon v-close-popup name="close" size="30px" color="primary" />
        </div>

          <q-card
          style="width: 100%;background: #FFFFFF;border-radius: 8px;"
          >

            <q-card-section style="max-height: 70vh" class="scroll">

              <q-img
                :src="'https://app.omatheusdev.com/assets/' + usuario.avatar"
                :ratio="16/9"
                 style="border-radius: 8px;max-height: 163px;"
              />

              <div class="perfil-usuario" v-if="usuario.id === this.$store.state.usuario.usuario.id">
                  <h4>Sobre</h4>

                  <div class="row q-col-gutter-md">
                    <div class="col-12">
                      <q-input rows="4" type="textarea" v-model="usuario.sobre_mim" label="Sobre mim" />
                    </div>
                    <div class="col-12">
                      <q-input rows="4" type="textarea" v-model="usuario.descricao_servico" label="Descrição do serviço" />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-input v-model="usuario.cpf" label="CPF" mask="###.###.###-##" />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-input v-model="usuario.cnpj" label="CNPJ" mask="##.###.###/####-##" />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-input v-model="usuario.razao_social" label="Razão social" />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-input v-model="usuario.rg" mask="##.###.###-#" label="RG" />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-input v-model="usuario.pix" label="PIX" />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-input v-model="usuario.slack" label="Slack" />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-input v-model="usuario.data_nascimento" mask="##/##/####" label="Data de nascimento" />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-input v-model="usuario.email_empresarial" label="email_empresarial" />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-input v-model="usuario.endereco_comercial" label="Endereço comercial" />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-input v-model="usuario.endereco_residencial" label="Endereço residencial" />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-input v-model="usuario.whatsapp" mask="(##) #####-####" label="Whatsapp" />
                    </div>
                    <div class="col-12">
                      <h6>Ferramentas</h6>
                      <div v-for="ferramenta, key in usuario.ferramentas" :key="key + 'A'">
                        <q-checkbox v-model="ferramenta.status" :label="ferramenta.descricao" />
                      </div>
                    </div>
                    <div class="col-12">
                      <h6>Pagamentos</h6>
                      <div v-for="pagamento, key in usuario.pagamentos" :key="key + 'B'">
                        <q-checkbox v-model="pagamento.status" :label="pagamento.descricao" />
                      </div>
                    </div>
                    <div class="col-12">
                      <h6>Passos</h6>
                      <div v-for="passo, key in usuario.passos" :key="key + 'C'">
                        <q-checkbox v-model="passo.status" :label="passo.descricao" />
                      </div>
                    </div>
                  </div>

              </div>


              <div class="perfil-admin" v-else-if="isAdmin">
                <h4>Sobre</h4>

                <div class="row">
                  <div class="col-12 gdc">
                      <span class="text-h6">Sobre mim</span>
                      <p>{{usuario.sobre_mim}}</p>
                  </div>
                  <div class="col-12 gdc">
                      <span class="text-h6">Descrição do serviço</span>
                      <p>{{usuario.descricao_servico}}</p>
                  </div>
                  <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">Área</span>
                      <p>{{usuario.area}}</p>
                  </div>
                  <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">Data Nascimento</span>
                      <p>{{usuario.data_nascimento}}</p>
                  </div>
                  <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">CPF</span>
                      <p>{{usuario.cpf}}</p>
                  </div>
                  <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">RG</span>
                      <p>{{usuario.rg}}</p>
                  </div>
                  <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">E-mail empresarial</span>
                      <p>{{usuario.email_empresarial}}</p>
                  </div>
                  <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">PIX</span>
                      <p>{{usuario.pix}}</p>
                  </div>
                  <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">CNPJ</span>
                      <p>{{usuario.cnpj}}</p>
                  </div>
                  <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">Razão Social</span>
                      <p>{{usuario.razao_social}}</p>
                  </div>
                  <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">Endereço comercial</span>
                      <p>{{usuario.endereco_comercial}}</p>
                  </div>
                  <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">Endereço residencial</span>
                      <p>{{usuario.endereco_residencial}}</p>
                  </div>
                  <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">Whatsapp</span>
                      <p>{{usuario.whatsapp}}</p>
                  </div>
                  <div class="col-12">
                      <h6>Ferramentas</h6>
                      <div v-for="ferramenta, key in usuario.ferramentas" :key="key + 'A'">
                        <q-checkbox v-model="ferramenta.status" :label="ferramenta.descricao" />
                      </div>
                    </div>
                    <div class="col-12">
                      <h6>Pagamentos</h6>
                      <div v-for="pagamento, key in usuario.pagamentos" :key="key + 'B'">
                        <q-checkbox v-model="pagamento.status" :label="pagamento.descricao" />
                      </div>
                    </div>
                    <div class="col-12">
                      <h6>Passos</h6>
                      <div v-for="passo, key in usuario.passos" :key="key + 'C'">
                        <q-checkbox v-model="passo.status" :label="passo.descricao" />
                      </div>
                    </div>

                </div>
              </div>

              <div class="perfil-publico" v-else>
                <h4>Sobre</h4>

                <div class="row">
                  <div class="col-12 gdc">
                      <span class="text-h6">Sobre mim</span>
                      <p>{{usuario.sobre_mim}}</p>
                  </div>
                  <div class="col-12 gdc">
                      <span class="text-h6">Descrição do serviço</span>
                      <p>{{usuario.descricao_servico}}</p>
                  </div>
                  <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">Área</span>
                      <p>{{usuario.area}}</p>
                  </div>


                  <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">E-mail empresarial</span>
                      <p>{{usuario.email_empresarial}}</p>
                  </div>

                  <!-- <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">CNPJ</span>
                      <p>{{usuario.cnpj}}</p>
                  </div> -->
                  <!-- <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">Razão Social</span>
                      <p>{{usuario.razao_social}}</p>
                  </div> -->
                  <!-- <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">Endereço comercial</span>
                      <p>{{usuario.endereco_comercial}}</p>
                  </div> -->

                  <div class="col-12 col-md-6 gdc">
                      <span class="text-h6">Whatsapp</span>
                      <p>{{usuario.whatsapp}}</p>
                  </div>

                </div>
              </div>



            </q-card-section>

            <q-separator />

            <q-card-actions align="right" v-if="usuario.id === this.$store.state.usuario.usuario.id">
              <q-btn label="Salvar" @click="$emit('update-usuario-detalhes')" color="primary" />
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
  }

}
</script>

<style>

.q-dialog__inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
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

</style>
