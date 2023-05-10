/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-10 10:27:01
 * @lastModified  2023-05-10 12:56:00
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-10 10:27:01
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-10 12:56:00
 * @FilePath: \nakoruru\src\pages\Amis\index.tsx
 * @Description: u
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
import React, { useState } from 'react';
import { Editor } from 'amis-editor';
import { render as renderAmis } from 'amis';
import { SchemaObject } from 'amis/lib/Schema'
import 'amis/lib/themes/default.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
import 'amis-editor-core/lib/style.css';
import 'amis-ui/lib/themes/cxd.css'
export function Amis() {
  const [mobile, setMobile] = useState(false)
  const [preview, setPreview] = useState(false)
  // @ts-ignore
  const defaultSchema: SchemaObject = window["AMIS_JSON"] || {
    type: "page",
    body: "测试",
    title: "标题"
  };
  const [schema, setSchema] = useState(defaultSchema)
  //window["setSchema"] = setSchema;
  let obj: any = defaultSchema;
  const onChange = (value: any) => {
    obj = value;
    console.log("change", obj)
  };
  const onSave = () => {
    console.log("保存", obj)
    // @ts-ignore
    window["saveAmis"] && window["saveAmis"](obj);
  };
  return (
    <div className={"jqp-amis-editor"}>
      <div className={"jqp-amis-editor-header"}>
        <div>
          {renderAmis({
            type: "form",
            mode: "inline",
            title: "",
            wrapWithPanel: false,
            body: [{
              type: "plain",
              text: "页面标题",
              className: "page-name"
            }, {
              type: "switch",
              option: "预览",
              name: "preview",
              onChange: function (v: any) {
                setPreview(v);
              }
            }, {
              type: "switch",
              option: "移动端",
              name: "mobile",
              onChange: function (v: any) {
                setMobile(v);
              }
            }, {
              type: "button",
              label: "保存",
              level: "primary",
              onClick: function () {
                onSave();
              }
            }, {
              type: "button",
              label: "退出",
              level: "danger",
              onClick: function () {
                if (window.confirm("确定退出?")) {
                  window.close();
                }
              }
            }]
          })}
        </div>
      </div>
      <Editor className={"jqp-amis-editor-body"} preview={preview} isMobile={mobile} onChange={onChange} value={schema} theme={"cxd"} onSave={onSave} />
    </div>
  )
}

export default Amis