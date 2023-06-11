/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type User = object;

export interface Menu {
  id: number;
  title: string;
  path: string;
  icon?: string;
  parentId?: number;
  parent?: Menu;
  children?: string[];
}

export type Douban = object;

export type CreateOrderDto = object;

export type UpdateOrderDto = object;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === "number" ? value : `${value}`,
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${
        queryString ? `?${queryString}` : ""
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal: cancelToken
          ? this.createAbortSignal(cancelToken)
          : requestParams.signal,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Nakoruru Backend API
 * @version 0.0.1
 * @license Apache-2.0 (https://github.com/h7ml/nestjs-nakoruru/blob/master/license)
 * @termsOfService https://nestjs.h7ml.cn/
 * @externalDocs https://nestjs.h7ml.cn/
 * @contact Contact Name <h7ml@qq.com> (http://github.com/h7ml)
 *
 * The Nakoruru Backend API description by h7ml
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags system
     * @name UserControllerFindAll
     * @summary 获取所有用户
     * @request GET:/api/system/users
     */
    userControllerFindAll: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/system/users`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags system
     * @name UserControllerCreate
     * @summary 创建新用户
     * @request POST:/api/system/users
     */
    userControllerCreate: (data: User, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/system/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags system
     * @name UserControllerFindOne
     * @summary 获取单个用户
     * @request GET:/api/system/users/{id}
     */
    userControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/system/users/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags system
     * @name UserControllerUpdate
     * @summary 更新用户信息
     * @request PUT:/api/system/users/{id}
     */
    userControllerUpdate: (
      id: number,
      data: User,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/system/users/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags system
     * @name UserControllerDelete
     * @summary 删除用户
     * @request DELETE:/api/system/users/{id}
     */
    userControllerDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/system/users/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags system
     * @name MenuControllerFindAll
     * @summary 获取所有菜单
     * @request GET:/api/system/menu
     */
    menuControllerFindAll: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/system/menu`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags system
     * @name MenuControllerCreate
     * @summary 创建新菜单
     * @request POST:/api/system/menu
     */
    menuControllerCreate: (data: Menu, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/system/menu`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags system
     * @name MenuControllerFindOne
     * @summary 获取单个菜单
     * @request GET:/api/system/menu/{id}
     */
    menuControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/system/menu/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags system
     * @name MenuControllerUpdate
     * @summary 更新菜单
     * @request PUT:/api/system/menu/{id}
     */
    menuControllerUpdate: (
      id: number,
      data: Menu,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/system/menu/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags system
     * @name MenuControllerDelete
     * @summary 删除菜单
     * @request DELETE:/api/system/menu/{id}
     */
    menuControllerDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/system/menu/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 稀土掘金
     * @name JuejinControllerGetJuejin
     * @summary 获取稀土掘金热榜
     * @request GET:/api/hotapi/juejin
     */
    juejinControllerGetJuejin: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/juejin`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 稀土掘金
     * @name JuejinControllerGetNewJuejin
     * @summary 获取最新稀土掘金热榜
     * @request GET:/api/hotapi/juejin/new
     */
    juejinControllerGetNewJuejin: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/juejin/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 36氪
     * @name KrControllerGetKr
     * @summary 获取36氪热榜
     * @request GET:/api/hotapi/36kr
     */
    krControllerGetKr: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/36kr`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 36氪
     * @name KrControllerGetNewKr
     * @summary 获取最新36氪热榜
     * @request GET:/api/hotapi/36kr/new
     */
    krControllerGetNewKr: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/36kr/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 百度热搜
     * @name BaiduControllerGetBaidu
     * @summary 获取百度热搜榜
     * @request GET:/api/hotapi/baidu
     */
    baiduControllerGetBaidu: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/hotapi/baidu`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 百度热搜
     * @name BaiduControllerGetNewBaidu
     * @summary 获取百度热搜榜的最新数据
     * @request GET:/api/hotapi/baidu/new
     */
    baiduControllerGetNewBaidu: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/hotapi/baidu/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 百度开发者热搜
     * @name HotControllerGetHotNews
     * @summary 百度开发者热搜
     * @request GET:/api/hotapi/baidu/hot
     */
    hotControllerGetHotNews: (
      query?: {
        pageSize?: number;
        pageNum?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/hotapi/baidu/hot`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 百度开发者github
     * @name GithubControllerGetGithubData
     * @summary 百度开发者github
     * @request GET:/api/hotapi/baidu/github
     */
    githubControllerGetGithubData: (
      query?: {
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
          | "Vue";
        optionSince?: "DAILY" | "MONTHLY" | "WEEKLY";
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/hotapi/baidu/github`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 哔哩哔哩
     * @name BilibiliControllerGetBilibili
     * @summary 获取哔哩哔哩热门榜
     * @request GET:/api/hotapi/bilibili
     */
    bilibiliControllerGetBilibili: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/bilibili`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 知乎
     * @name ZhihuControllerGetZhihuHot
     * @summary 获取知乎热榜
     * @request GET:/api/hotapi/zhihu
     */
    zhihuControllerGetZhihuHot: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/zhihu`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 知乎
     * @name ZhihuControllerGetZhihuHotNew
     * @summary 获取最新的知乎热榜
     * @request GET:/api/hotapi/zhihu/new
     */
    zhihuControllerGetZhihuHotNew: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/zhihu/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 百度贴吧
     * @name TiebaControllerGetTieba
     * @summary 获取贴吧热议榜
     * @request GET:/api/hotapi/tieba
     */
    tiebaControllerGetTieba: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/tieba`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 百度贴吧
     * @name TiebaControllerGetNewTieba
     * @summary 获取最新的贴吧热议榜
     * @request GET:/api/hotapi/tieba/new
     */
    tiebaControllerGetNewTieba: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/tieba/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 澎湃
     * @name ThePaperControllerGetThePaper
     * @summary 获取澎湃热榜
     * @request GET:/api/hotapi/thepaper/thepaper
     */
    thePaperControllerGetThePaper: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/hotapi/thepaper/thepaper`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 澎湃
     * @name ThePaperControllerGetNewThePaper
     * @summary 获取澎湃热榜 - 最新数据
     * @request GET:/api/hotapi/thepaper/thepaper/new
     */
    thePaperControllerGetNewThePaper: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/hotapi/thepaper/thepaper/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 微博
     * @name WeiboControllerGetWeibo
     * @summary 获取微博热搜
     * @request GET:/api/hotapi/weibo/weibo
     */
    weiboControllerGetWeibo: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/hotapi/weibo/weibo`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 微博
     * @name WeiboControllerGetNewWeibo
     * @summary 获取微博热搜 - 最新数据
     * @request GET:/api/hotapi/weibo/weibo/new
     */
    weiboControllerGetNewWeibo: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/hotapi/weibo/weibo/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 腾讯新闻
     * @name NewsqqControllerGetNewsqq
     * @summary 获取腾讯热点榜
     * @request GET:/api/hotapi/newsqq
     */
    newsqqControllerGetNewsqq: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/newsqq`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 腾讯新闻
     * @name NewsqqControllerGetNewNewsqq
     * @summary 获取腾讯热点榜 - 最新数据
     * @request GET:/api/hotapi/newsqq/new
     */
    newsqqControllerGetNewNewsqq: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/newsqq/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 今日头条
     * @name ToutiaoControllerGetToutiao
     * @summary 获取头条热榜
     * @request GET:/api/hotapi/toutiao
     */
    toutiaoControllerGetToutiao: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/toutiao`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 今日头条
     * @name ToutiaoControllerGetNewToutiao
     * @summary 获取头条热榜 - 最新数据
     * @request GET:/api/hotapi/toutiao/new
     */
    toutiaoControllerGetNewToutiao: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/toutiao/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 少数派
     * @name SspaiControllerGetSspai
     * @summary 获取少数派热榜
     * @request GET:/api/hotapi/sspai
     */
    sspaiControllerGetSspai: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/sspai`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 少数派
     * @name SspaiControllerGetNewSspai
     * @summary 获取少数派热榜 - 最新数据
     * @request GET:/api/hotapi/sspai/new
     */
    sspaiControllerGetNewSspai: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/sspai/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags v2ex
     * @name V2ExControllerGetV2Ex
     * @summary 获取 V2EX 热门话题
     * @request GET:/api/hotapi/v2ex
     */
    v2ExControllerGetV2Ex: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/v2ex`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags douban
     * @name DoubanControllerGetDouban
     * @summary 获取豆瓣热门话题
     * @request GET:/api/iotapi/douban
     */
    doubanControllerGetDouban: (params: RequestParams = {}) =>
      this.request<Douban, void>({
        path: `/api/iotapi/douban`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags hupu
     * @name HupuControllerGetHuPu
     * @summary 获取虎扑热门话题
     * @request GET:/api/hotapi/hupu
     */
    hupuControllerGetHuPu: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hotapi/hupu`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name OrderControllerCreate
     * @request POST:/api/order
     */
    orderControllerCreate: (data: CreateOrderDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/order`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name OrderControllerFindAll
     * @request GET:/api/order
     */
    orderControllerFindAll: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/order`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name OrderControllerFindOne
     * @request GET:/api/order/{id}
     */
    orderControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/order/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name OrderControllerUpdate
     * @request PATCH:/api/order/{id}
     */
    orderControllerUpdate: (
      id: string,
      data: UpdateOrderDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/order/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name OrderControllerRemove
     * @request DELETE:/api/order/{id}
     */
    orderControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/order/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags react flow nodes
     * @name NodesControllerGetNodes
     * @summary Get react flow nodes
     * @request GET:/api/react-flow/nodes
     */
    nodesControllerGetNodes: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/react-flow/nodes`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags react flow edges
     * @name EdgesControllerGetEdges
     * @summary react flow edges
     * @request GET:/api/react-flow/edges
     */
    edgesControllerGetEdges: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/react-flow/edges`,
        method: "GET",
        ...params,
      }),
  };
}
