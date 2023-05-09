/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 14:26:39
 * @lastModified  2023-05-09 19:18:56
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 14:26:39
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-09 19:18:50
 * @FilePath: \nakoruru\src\utils\index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
const { userAgent } = window.navigator;

export const isMac = userAgent.includes('Mac');
export const isWin = userAgent.includes('Windows');

export const ctrlKeyStr = isMac ? '⌘' : 'ctrl';
export const shiftKeyStr = isMac ? '⇧' : 'shift';

export const isCtrlKey = (e: KeyboardEvent): boolean => (isMac ? e.metaKey : e.ctrlKey);
export const isInputTag = (el: HTMLElement): boolean =>
  el.tagName === 'INPUT' || el.tagName === 'TEXTAREA';
export function uuid() {
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substr(uuid.lastIndexOf("/") + 1);
}