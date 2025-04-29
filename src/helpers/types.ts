import type { RawAxiosRequestHeaders, ResponseType } from 'axios'

export type ApiOptions = {
  baseURL?: string
  timeout?: number
  headers?: RawAxiosRequestHeaders
  responseType?: ResponseType
  dataOnly?: boolean
  signal?: AbortSignal
  silent?: boolean
  successNotification?: string
  onRequest?: (...args: any[]) => any
  onSuccess?: (...args: any[]) => any
  onError?: (...args: any[]) => any
  onFinally?: (...args: any[]) => any
  wrapResponse?: (...args: any[]) => any
}

export type User = {
  id: number
  name: string
  company: string
}

export type AssignedUser = {
  id: number
  name: string
  email: string
}

export type Todo = {
  id: number
  title: string
  description: string
  assignedUser: AssignedUser
}

export type TodoForm = Omit<Todo, 'id' | 'assignedUser'> &
  Omit<AssignedUser, 'id'>
