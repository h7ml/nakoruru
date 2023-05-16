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

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
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
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

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
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
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
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
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

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
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

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
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

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
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
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags girl
     * @name GirlControllerGetGirls
     * @request GET:/api/girl
     */
    girlControllerGetGirls: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/girl`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 稀土掘金
     * @name JuejinControllerGetJuejin
     * @summary 获取稀土掘金热榜
     * @request GET:/api/juejin
     */
    juejinControllerGetJuejin: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/juejin`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 稀土掘金
     * @name JuejinControllerGetNewJuejin
     * @summary 获取最新稀土掘金热榜
     * @request GET:/api/juejin/new
     */
    juejinControllerGetNewJuejin: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/juejin/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 36氪
     * @name KrControllerGetKr
     * @summary 获取36氪热榜
     * @request GET:/api/36kr
     */
    krControllerGetKr: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/36kr`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 36氪
     * @name KrControllerGetNewKr
     * @summary 获取最新36氪热榜
     * @request GET:/api/36kr/new
     */
    krControllerGetNewKr: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/36kr/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 百度热搜
     * @name BaiduControllerGetBaidu
     * @summary 获取百度热搜榜
     * @request GET:/api/baidu
     */
    baiduControllerGetBaidu: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/baidu`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 百度热搜
     * @name BaiduControllerGetNewBaidu
     * @summary 获取百度热搜榜的最新数据
     * @request GET:/api/baidu/new
     */
    baiduControllerGetNewBaidu: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/baidu/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 哔哩哔哩
     * @name BilibiliControllerGetBilibili
     * @summary 获取哔哩哔哩热门榜
     * @request GET:/api/bilibili
     */
    bilibiliControllerGetBilibili: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/bilibili`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 知乎
     * @name ZhihuControllerGetZhihuHot
     * @summary 获取知乎热榜
     * @request GET:/api/zhihu
     */
    zhihuControllerGetZhihuHot: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/zhihu`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 知乎
     * @name ZhihuControllerGetZhihuHotNew
     * @summary 获取最新的知乎热榜
     * @request GET:/api/zhihu/new
     */
    zhihuControllerGetZhihuHotNew: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/zhihu/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 百度贴吧
     * @name TiebaControllerGetTieba
     * @summary 获取贴吧热议榜
     * @request GET:/api/tieba
     */
    tiebaControllerGetTieba: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/tieba`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 百度贴吧
     * @name TiebaControllerGetNewTieba
     * @summary 获取最新的贴吧热议榜
     * @request GET:/api/tieba/new
     */
    tiebaControllerGetNewTieba: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/tieba/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 澎湃
     * @name ThePaperControllerGetThePaper
     * @summary 获取澎湃热榜
     * @request GET:/api/thepaper
     */
    thePaperControllerGetThePaper: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/thepaper`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 澎湃
     * @name ThePaperControllerGetNewThePaper
     * @summary 获取澎湃热榜 - 最新数据
     * @request GET:/api/thepaper/new
     */
    thePaperControllerGetNewThePaper: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/thepaper/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 微博
     * @name WeiboControllerGetWeibo
     * @summary 获取微博热搜
     * @request GET:/api/weibo
     */
    weiboControllerGetWeibo: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/weibo`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 微博
     * @name WeiboControllerGetNewWeibo
     * @summary 获取微博热搜 - 最新数据
     * @request GET:/api/weibo/new
     */
    weiboControllerGetNewWeibo: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/weibo/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 少数派
     * @name SspaiControllerGetSspai
     * @summary 获取少数派热榜
     * @request GET:/api/sspai
     */
    sspaiControllerGetSspai: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/sspai`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 少数派
     * @name SspaiControllerGetNewSspai
     * @summary 获取少数派热榜 - 最新数据
     * @request GET:/api/sspai/new
     */
    sspaiControllerGetNewSspai: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/sspai/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 腾讯新闻
     * @name NewsqqControllerGetNewsqq
     * @summary 获取腾讯热点榜
     * @request GET:/api/newsqq
     */
    newsqqControllerGetNewsqq: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/newsqq`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 腾讯新闻
     * @name NewsqqControllerGetNewNewsqq
     * @summary 获取腾讯热点榜 - 最新数据
     * @request GET:/api/newsqq/new
     */
    newsqqControllerGetNewNewsqq: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/newsqq/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 今日头条
     * @name ToutiaoControllerGetToutiao
     * @summary 获取头条热榜
     * @request GET:/api/toutiao
     */
    toutiaoControllerGetToutiao: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/toutiao`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 今日头条
     * @name ToutiaoControllerGetNewToutiao
     * @summary 获取头条热榜 - 最新数据
     * @request GET:/api/toutiao/new
     */
    toutiaoControllerGetNewToutiao: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/toutiao/new`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 娜可露露
     * @name UserControllerFindAll
     * @summary 获取所有用户
     * @request GET:/api/users
     */
    userControllerFindAll: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/users`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 娜可露露
     * @name UserControllerCreate
     * @summary 创建新用户
     * @request POST:/api/users
     */
    userControllerCreate: (data: User, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 娜可露露
     * @name UserControllerFindOne
     * @summary 获取单个用户
     * @request GET:/api/users/{id}
     */
    userControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/users/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 娜可露露
     * @name UserControllerUpdate
     * @summary 更新用户信息
     * @request PUT:/api/users/{id}
     */
    userControllerUpdate: (id: number, data: User, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/users/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 娜可露露
     * @name UserControllerDelete
     * @summary 删除用户
     * @request DELETE:/api/users/{id}
     */
    userControllerDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/users/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
}
