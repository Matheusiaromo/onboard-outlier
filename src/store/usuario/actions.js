import { api } from 'src/services'

export function getUsuario (context) {
  return api.get(`/users/me?fields=id,nome,email,role,genero`)
    .then(response => {
      context.commit('UPDATE_USUARIO', response.data.data)
      context.commit('UPDATE_LOGIN', true)
    })
}


export function logarUsuario(context, payload) {
  console.log(payload.email)
  return api.login({
    email: payload.email,
    password: payload.password
  })
    .then(response => {
      window.localStorage.token = `Bearer ${response.data.data.access_token}`
      window.localStorage.refreshToken = response.data.data.refresh_token
    })
}

export function deslogarUsuario (context) {
  context.commit("UPDATE_USUARIO", {
    id: "",
    nome: "",
    email: "",
    role: "",
    genero: ""
  })
  window.localStorage.removeItem("token")
  window.localStorage.removeItem("refreshToken")
  context.commit("UPDATE_LOGIN", false)
}
