import { GameLogic } from "../GameLogic";
import { EventMgr } from "./EventManager";

export class HttpHelper {
  // static BaseURL = CC_DEBUG ? "https://test-youyin.daqiezi.cc/game/" : "/game/"; // logic/getPlayerInfo
  // static BaseURL = CC_DEBUG ? "https://test-youyin.liveboxs.live/game/" : "/game/"; // logic/getPlayerInfo
  static BaseURL = CC_DEBUG ? "https://gm-test.liveboxs.live/game/" : "https://gm.liveboxs.live/game/";

  static token = "";
  static initBaseUrl() { }

  // static get<T>(url: string): Promise<T> {
  //     return new Promise((resole, reject) => {
  //         let xhr = new XMLHttpRequest();

  //         xhr.onreadystatechange = () => {
  //             if (xhr.readyState === XMLHttpRequest.DONE) {
  //                 if (xhr.status === 200) {
  //                     let res = JSON.parse(xhr.responseText);
  //                     resole(res);
  //                 } else {
  //                     reject(`get: ${url} err`);
  //                 }
  //             }
  //         };
  //         xhr.onerror = (err) => {
  //             reject(err);
  //         };

  //         xhr.open("GET", url, true);

  //         xhr.timeout = 8000;
  //         xhr.send();
  //     });
  // }

  static httpGet(url: string, callback: (error: any, res: any) => void) {
    if (GameLogic.instance.isOffLine) {
      EventMgr.emit("offline");
      return;
    }
    let urls = HttpHelper.BaseURL + url;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          let respone = xhr.responseText;
          let rsp = JSON.parse(respone);
          if (rsp.code != 0) {
            callback?.(rsp.code, rsp);
            return;
          }
          callback?.(0, rsp.result);
        } else {
          callback?.(1, null);
        }
      } else {
        callback?.(2, null);
      }
    };

    xhr.onerror = function (error) {
      if (typeof callback == "function") {
        callback?.(2, null);
      }
    };

    xhr.open("GET", urls, true);
    xhr.timeout = 8000;
    xhr.setRequestHeader("Content-Type", "application/json;charset=Utf-8");
    if (HttpHelper.token) {
      xhr.setRequestHeader("Authorization", HttpHelper.token);
    }
    if (GameLogic.instance.appInfo) {
      let appInfo = GameLogic.instance.appInfo;
      xhr.setRequestHeader("appVersion", appInfo.appVersion);
      xhr.setRequestHeader("deviceId", appInfo.deviceId);
      xhr.setRequestHeader("deviceName", appInfo.deviceName);
      xhr.setRequestHeader("deviceType", appInfo.deviceType + "");
      xhr.setRequestHeader("systemVersion", appInfo.systemVersion);
    } else {
      xhr.setRequestHeader("appVersion", "0.0.0");
      xhr.setRequestHeader("deviceId", "test_123456");
      xhr.setRequestHeader("deviceName", "test_iPhone");
      xhr.setRequestHeader("deviceType", "1");
      xhr.setRequestHeader("systemVersion", "605.1.15");
    }
    xhr.send();
  }

  static httpPost(path, params, callback) {
    if (GameLogic.instance.isOffLine) {
      EventMgr.emit("offline");
      return;
    }
    let url = HttpHelper.BaseURL + path;
    let xhr = new XMLHttpRequest();
    console.log("===========httpPost==========",url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status == 200) {
          let respone = xhr.responseText;
          let rsp = JSON.parse(respone);
          if (rsp.code != 200) {
            // show error---
            console.log("error code:", path, rsp);

            EventMgr.emit("toastview", rsp.message);
            callback(3, rsp);
            return;
          }
          callback(0, rsp.result);
        } else {
          callback(1, xhr.status);
        }
      }
    };
    xhr.onerror = function (error) {
      if (typeof callback == "function") {
        callback?.(2, error);
        EventMgr.emit("HttpError", path);
      }
    };
    xhr.ontimeout = function (error) {
      if (typeof callback == "function") {
        callback?.(2, "timeout");
        EventMgr.emit("HttpTimeOut", path);
      }
    };

    xhr.open("POST", url, true);
    xhr.timeout = 8000;
    xhr.setRequestHeader("Content-Type", "application/json;charset=Utf-8");

    if (HttpHelper.token) {
      xhr.setRequestHeader("Authorization", HttpHelper.token);
    }
    if (GameLogic.instance.appInfo) {
      let appInfo = GameLogic.instance.appInfo;
      xhr.setRequestHeader("appVersion", appInfo.appVersion);
      xhr.setRequestHeader("deviceId", appInfo.deviceId);
      xhr.setRequestHeader("deviceName", appInfo.deviceName);
      xhr.setRequestHeader("deviceType", appInfo.deviceType + "");
      xhr.setRequestHeader("systemVersion", appInfo.systemVersion);
    } else {
      xhr.setRequestHeader("appVersion", "0.0.0");
      xhr.setRequestHeader("deviceId", "test_123456");
      xhr.setRequestHeader("deviceName", "test_iPhone");
      xhr.setRequestHeader("deviceType", "1");
      xhr.setRequestHeader("systemVersion", "605.1.15");
    }

    let str = JSON.stringify(params);
    if (params) {
      xhr.send(str);
    } else {
      xhr.send();
    }
  }
}
