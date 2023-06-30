const apis = {
  apiSystemUsersGet: 'GET /api/system/users',
  apiSystemUsersPost: 'POST /api/system/users',
  apiSystemUserGet: 'GET /api/system/users/{id}',
  apiSystemUserPut: 'PUT /api/system/users/{id}',
  apiSystemUserDelete: 'DELETE /api/system/users/{id}',
  apiSystemMenuGet: 'GET /api/system/menu/{id}',
  apiSystemMenuPost: 'POST /api/system/menu',
  apiSystemMenuPut: 'PUT /api/system/menu/{id}',
  apiSystemMenuDelete: 'DELETE /api/system/menu/{id}',
  apiHotapiJuejinGet: 'GET /api/hotapi/juejin',
  apiHotapiJuejinNewGet: 'GET /api/hotapi/juejin/new',
  apiHotapi36KrGet: 'GET /api/hotapi/36kr',
  apiHotapi36KrNewGet: 'GET /api/hotapi/36kr/new',
  apiHotapiBaiduGet: 'GET /api/hotapi/baidu',
  apiHotapiBaiduNewGet: 'GET /api/hotapi/baidu/new',
  apiHotapiBaiduHotGet: 'GET /api/hotapi/baidu/hot',
  apiHotapiBaiduGithubGet: 'GET /api/hotapi/baidu/github',
  apiHotapiBilibiliGet: 'GET /api/hotapi/bilibili',
  apiHotapiZhihuGet: 'GET /api/hotapi/zhihu',
  apiHotapiZhihuNewGet: 'GET /api/hotapi/zhihu/new',
  apiHotapiTiebaGet: 'GET /api/hotapi/tieba',
  apiHotapiTiebaNewGet: 'GET /api/hotapi/tieba/new',
  apiHotapiThepaperThepaperGet: 'GET /api/hotapi/thepaper/thepaper',
  apiHotapiThepaperThepaperNewGet: 'GET /api/hotapi/thepaper/thepaper/new',
  apiHotapiWeiboWeiboGet: 'GET /api/hotapi/weibo/weibo',
  apiHotapiWeiboWeiboNewGet: 'GET /api/hotapi/weibo/weibo/new',
  apiHotapiNewsqqGet: 'GET /api/hotapi/newsqq',
  apiHotapiNewsqqNewGet: 'GET /api/hotapi/newsqq/new',
  apiHotapiToutiaoGet: 'GET /api/hotapi/toutiao',
  apiHotapiToutiaoNewGet: 'GET /api/hotapi/toutiao/new',
  apiHotapiSspaiGet: 'GET /api/hotapi/sspai',
  apiHotapiSspaiNewGet: 'GET /api/hotapi/sspai/new',
  apiHotapiGet: 'GET /api/hotapi/v2ex',
  apiIotapiDoubanGet: 'GET /api/iotapi/douban',
  apiHotapiHupuGet: 'GET /api/hotapi/hupu',
  apiOrderPost: 'POST /api/order',
  apiOrderGet: 'GET /api/order/{id}',
  apiOrderPatch: 'PATCH /api/order/{id}',
  apiOrderDelete: 'DELETE /api/order/{id}',
  apiReactFlowNodesGet: 'GET /api/react-flow/nodes',
  apiReactFlowEdgesGet: 'GET /api/react-flow/edges',
} as const

export default apis
