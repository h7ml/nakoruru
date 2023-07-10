import {
  CreateUserDto,
  PaginatedUserDto,
  UpdateUserDto,
  Menu,
  Douban,
  CreateReactflowDto,
  UpdateReactflowDto,
  CreateDatabaseDto,
  Database,
  UpdateDatabaseDto,
} from "./api.swagger-schema-types";

interface ApiMaps {
  /** undefined */
  "POST /api/system/user": {
    request: {
      body: CreateUserDto,
    },
    response: boolean,
  };

  /** undefined */
  "GET /api/system/user": {
    request: {
      query: {
        /**
         * 页码
         * @example 1
         */
        page?: number,
        /**
         * 每页数量
         * @example 50
         */
        limit?: number,
      },
    },
    response: PaginatedUserDto,
  };

  /** undefined */
  "GET /api/system/user/{id}": {
    request: {
      params: {
        id: string,
      },
    },
    response: boolean,
  };

  /** undefined */
  "PATCH /api/system/user/{id}": {
    request: {
      params: {
        id: string,
      },

      body: UpdateUserDto,
    },
    response: boolean,
  };

  /** undefined */
  "DELETE /api/system/user/{id}": {
    request: {
      params: {
        id: string,
      },
    },
    response: boolean,
  };

  /** undefined */
  "GET /api/system/menu": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "POST /api/system/menu": {
    request: {
      body: Menu,
    },
    response: boolean,
  };

  /** undefined */
  "GET /api/system/menu/{id}": {
    request: {
      params: {
        id: number,
      },
    },
    response: boolean,
  };

  /** undefined */
  "PUT /api/system/menu/{id}": {
    request: {
      params: {
        id: number,
      },

      body: Menu,
    },
    response: boolean,
  };

  /** undefined */
  "DELETE /api/system/menu/{id}": {
    request: {
      params: {
        id: number,
      },
    },
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/juejin": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/juejin/new": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/36kr": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/36kr/new": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/baidu": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/baidu/new": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/baidu/hot": {
    request: {
      query: {
        pageSize?: number,
        pageNum?: number,
      },
    },
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/baidu/github": {
    request: {
      query: {
        optionLanguage?:
          | "语言不限"
          | "Python"
          | "C"
          | "Java"
          | "C++"
          | "C#"
          | "JavaScript"
          | "PHP"
          | "Go"
          | "Swift"
          | "Ruby"
          | "Visual Basic"
          | "Assembly"
          | "SQL"
          | "Pascal"
          | "R"
          | "Objective-C"
          | "Perl"
          | "Lua"
          | "MATLAB"
          | "Kotlin"
          | "Rust"
          | "SAS"
          | "Fortran"
          | "COBOL"
          | "Ada"
          | "Prolog"
          | "PowerShell"
          | "Julia"
          | "Dart"
          | "Vue",
        optionSince?: "DAILY" | "MONTHLY" | "WEEKLY",
      },
    },
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/bilibili": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/zhihu": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/zhihu/new": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/tieba": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/tieba/new": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/thepaper": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/thepaper/new": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/weibo": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/weibo/new": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/newsqq": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/newsqq/new": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/toutiao": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/toutiao/new": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/sspai": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/sspai/new": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/v2ex": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/hotapi/douban": {
    request: {},
    response: Douban,
  };

  /** undefined */
  "GET /api/hotapi/hupu": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "POST /api/reactflow": {
    request: {
      body: CreateReactflowDto,
    },
    response: boolean,
  };

  /** undefined */
  "GET /api/reactflow": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/reactflow/{id}": {
    request: {
      params: {
        id: string,
      },
    },
    response: boolean,
  };

  /** undefined */
  "PATCH /api/reactflow/{id}": {
    request: {
      params: {
        id: string,
      },

      body: UpdateReactflowDto,
    },
    response: boolean,
  };

  /** undefined */
  "DELETE /api/reactflow/{id}": {
    request: {
      params: {
        id: string,
      },
    },
    response: boolean,
  };

  /** undefined */
  "GET /api/react-flow/nodes": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "GET /api/react-flow/edges": {
    request: {},
    response: boolean,
  };

  /** undefined */
  "POST /api/system/database": {
    request: {
      body: CreateDatabaseDto,
    },
    response: boolean,
  };

  /** undefined */
  "GET /api/system/database/by-table/{tableName}": {
    request: {
      params: {
        /**
         * 要查询的表名
         * @example "users1"
         */
        tableName: string,
        /**
         * 要选择的列，逗号分隔
         * @example "id,name,email"
         */
        rows?: string,
        /**
         * 页码
         * @example 1
         */
        page?: number,
        /**
         * 每页数据条数
         * @example 10
         */
        pageSize?: number,
      },
    },
    response: Database,
  };

  /** undefined */
  "PATCH /api/system/database/{id}": {
    request: {
      params: {
        id: string,
      },

      body: UpdateDatabaseDto,
    },
    response: boolean,
  };

  /** undefined */
  "DELETE /api/system/database/{id}": {
    request: {
      params: {
        id: string,
      },
    },
    response: boolean,
  };
}

export default ApiMaps;
export * from "./api.swagger-schema-types";
