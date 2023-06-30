import swaggerApi from './constants/api.swagger-constants'

const apis = {
  ...swaggerApi,
} as const

export type { ApiMaps } from './api.types'
export default apis
