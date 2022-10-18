import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://app.omatheusdev.com"
})

axiosInstance.interceptors.request.use(
    function (config) {
        const token = window.localStorage.token
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

export const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint)
    },
    getFiltered(endpoint, field, value, coluna){
      if(coluna){
        return axiosInstance.get(`${endpoint}?filter[${field}][_eq]=${value}&fields=id,titulo,imagem`)
      } else {
        return axiosInstance.get(`${endpoint}?filter[${field}][_eq]=${value}&fields=id,nome,avatar`)
      }
    },
    getSingleUser(endpoint, query){
      return axiosInstance.get(`${endpoint}${query}`)
    },
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body)
    },
    update(endpoint, body) {
        return axiosInstance.patch(endpoint, body)
    },
    delete(endpoint) {
        return axiosInstance.delete(endpoint)
    },
    login(body) {
        console.log("services: " + body.email)
        return axiosInstance.post('/auth/login', body)
    },
    refresh(refreshToken) {
        return axiosInstance.post('/auth/refresh', {
          "refresh_token" : refreshToken
        })
    }
}
