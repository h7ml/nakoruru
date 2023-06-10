/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-23 22:09:16
 * @lastModified  2023-05-23 22:36:22
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-23 22:09:16
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-23 22:36:22
 * @FilePath: \nakoruru\src\store\user.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { atom, useRecoilState } from "recoil";
type Info = Record<string, any> | null;
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const userInfoState = atom<Info>({
  key: "userInfo",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

interface LoginState {
  userInfo: Info;
  setUserInfo: (info: Info) => void;
}

export const useLoginStore = (): LoginState => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  return {
    userInfo,
    setUserInfo,
  };
};
