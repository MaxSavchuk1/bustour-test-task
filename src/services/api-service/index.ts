import Api from './Api'
import { ApiOptions } from '@/helpers/types'

const api = (options: ApiOptions) =>
  new Api({ baseURL: import.meta.env.VITE_BASE_URL, ...options })

export default api
