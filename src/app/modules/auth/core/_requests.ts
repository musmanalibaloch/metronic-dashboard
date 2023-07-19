import axios from 'axios'
import {AuthModel, UserModel} from './_models'

const API_URL = process.env.REACT_APP_API_URL
const WEBSOCKET_URL = process.env.REACT_APP_WEBSOCKET_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}account`
export const LOGIN_URL = `${API_URL}authenticate`
export const REGISTER_URL = `${API_URL}register`
export const REQUEST_PASSWORD_URL = `${API_URL}forgot_password`

export const REQUEST_WEBSOCKET = `${WEBSOCKET_URL}websocket/tracker/info`

// Server should return AuthModel
export function login(username: string, password: string, rememberMe: boolean) {
  return axios.post<AuthModel>(
    LOGIN_URL,
    {
      username,
      password,
      rememberMe,
    },
    {
      headers: {'Access-Control-Allow-Origin': '*'},
    }
  )
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(token: string) {
  return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    headers: {
      Authorization: `Bearer ${JSON.parse(token).id_token}`,
    },
  })
}

export function getWebSocket(access_token: string) {
  return axios.get<UserModel>(
    `${REQUEST_WEBSOCKET}?access_token=${JSON.parse(access_token).id_token}`
  )
}
