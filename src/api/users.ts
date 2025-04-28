import api from '@/services/api-service'
import type { ApiOptions } from '@/helpers/types'

export default {
  getUsers: (options: ApiOptions) =>
    api(options).get('/users'),
}
