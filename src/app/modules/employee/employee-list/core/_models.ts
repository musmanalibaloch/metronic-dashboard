import {ID, Response} from '../../../../../_metronic/helpers'
export type User = {
  age: number
  firstname: string
  id: ID
  lastname: string
  skills: string
  title: string
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  id: 1,
  age: 12,
  firstname: 'Jazib',
  lastname: 'Rehman',
  skills: 'Web developer',
  title: 'Sr. Fullstack Developer',
}
