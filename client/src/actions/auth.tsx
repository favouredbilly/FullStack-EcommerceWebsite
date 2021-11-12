import { AUTH } from '../constants/actionTypes'
import * as api from '../api/index'

interface TypeForm {
  firstname: string
  lastname: string
  email: string
  password: string
  confirmpassword: string
}
export const signin =
  (formData: TypeForm, navigate: any) => async (dispatch: any) => {
    try {
      const { data } = await api.signIn(formData)

      dispatch({ type: AUTH, data })
      // navigate.push('/')
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

export const signup = (formData: TypeForm, navigate: any) => async (dispatch: any) => {
  try {
    const { data } = await api.signUp(formData)

    dispatch({ type: AUTH, data })

    // navigate.push('/')
    window.location.reload()
  } catch (error) {
    console.log(error)
  }
}
