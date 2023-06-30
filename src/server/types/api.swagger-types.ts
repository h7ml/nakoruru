import type { CreateOrderDto, Douban, Menu, UpdateOrderDto, User } from './api.swagger-schema-types'

interface ApiMaps {
  /** undefined */
  'GET /api/system/users': {
    request: {}
    response: boolean
  }

  /** undefined */
  'POST /api/system/users': {
    request: {
      body: User
    }
    response: boolean
  }

  /** undefined */
  'GET /api/system/users/{id}': {
    request: {
      params: {
        id: number
      }
    }
    response: boolean
  }

  /** undefined */
  'PUT /api/system/users/{id}': {
    request: {
      params: {
        id: number
      }

      body: User
    }
    response: boolean
  }

  /** undefined */
  'DELETE /api/system/users/{id}': {
    request: {
      params: {
        id: number
      }
    }
    response: boolean
  }

  /** undefined */
  'GET /api/system/menu': {
    request: {}
    response: boolean
  }

  /** undefined */
  'POST /api/system/menu': {
    request: {
      body: Menu
    }
    response: boolean
  }

  /** undefined */
  'GET /api/system/menu/{id}': {
    request: {
      params: {
        id: number
      }
    }
    response: boolean
  }

  /** undefined */
  'PUT /api/system/menu/{id}': {
    request: {
      params: {
        id: number
      }

      body: Menu
    }
    response: boolean
  }

  /** undefined */
  'DELETE /api/system/menu/{id}': {
    request: {
      params: {
        id: number
      }
    }
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/juejin': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/juejin/new': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/36kr': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/36kr/new': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/baidu': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/baidu/new': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/baidu/hot': {
    request: {
      query: {
        pageSize?: number
        pageNum?: number
      }
    }
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/baidu/github': {
    request: {
      query: {
        optionLanguage?:
          | '语言不限'
          | 'Python'
          | 'C'
          | 'Java'
          | 'C++'
          | 'C#'
          | 'JavaScript'
          | 'PHP'
          | 'Go'
          | 'Swift'
          | 'Ruby'
          | 'Visual Basic'
          | 'Assembly'
          | 'SQL'
          | 'Pascal'
          | 'R'
          | 'Objective-C'
          | 'Perl'
          | 'Lua'
          | 'MATLAB'
          | 'Kotlin'
          | 'Rust'
          | 'SAS'
          | 'Fortran'
          | 'COBOL'
          | 'Ada'
          | 'Prolog'
          | 'PowerShell'
          | 'Julia'
          | 'Dart'
          | 'Vue'
        optionSince?: 'DAILY' | 'MONTHLY' | 'WEEKLY'
      }
    }
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/bilibili': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/zhihu': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/zhihu/new': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/tieba': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/tieba/new': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/thepaper/thepaper': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/thepaper/thepaper/new': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/weibo/weibo': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/weibo/weibo/new': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/newsqq': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/newsqq/new': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/toutiao': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/toutiao/new': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/sspai': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/sspai/new': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/hotapi/v2ex': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/iotapi/douban': {
    request: {}
    response: Douban
  }

  /** undefined */
  'GET /api/hotapi/hupu': {
    request: {}
    response: boolean
  }

  /** undefined */
  'POST /api/order': {
    request: {
      body: CreateOrderDto
    }
    response: boolean
  }

  /** undefined */
  'GET /api/order': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/order/{id}': {
    request: {
      params: {
        id: string
      }
    }
    response: boolean
  }

  /** undefined */
  'PATCH /api/order/{id}': {
    request: {
      params: {
        id: string
      }

      body: UpdateOrderDto
    }
    response: boolean
  }

  /** undefined */
  'DELETE /api/order/{id}': {
    request: {
      params: {
        id: string
      }
    }
    response: boolean
  }

  /** undefined */
  'GET /api/react-flow/nodes': {
    request: {}
    response: boolean
  }

  /** undefined */
  'GET /api/react-flow/edges': {
    request: {}
    response: boolean
  }
}

export default ApiMaps
export * from './api.swagger-schema-types'
