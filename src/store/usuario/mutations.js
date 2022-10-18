export function UPDATE_LOGIN (state, payload) {
  state.login = payload
}

export function UPDATE_USUARIO(state, payload) {
  state.usuario = Object.assign(state.usuario, payload)
}
