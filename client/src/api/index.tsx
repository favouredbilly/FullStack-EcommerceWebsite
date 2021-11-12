import axios from 'axios'
interface TypeForm {
  firstname: string
  lastname: string
  email: string
  password: string
  confirmpassword: string
}
const API = axios.create({ baseURL: 'http://localhost:3000/api/v1' })

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile') as any).token
    }`
  }

  return req
})

export const signIn = (formData: TypeForm) =>
  API.post('/users/signin', formData)
export const signUp = (formData: TypeForm) =>
  API.post('/users/signup', formData)
