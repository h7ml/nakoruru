import type CustomMaps from './api.custom-types'
import type BackendMaps from './types/api.swagger-types'

export type ApiMaps = Concat<BackendMaps, CustomMaps>
