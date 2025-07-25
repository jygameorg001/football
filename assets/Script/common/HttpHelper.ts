import {EventMgr} from "./EventManager";

export class HttpHelper {
    static BaseURL = "https://test-youyin.daqiezi.cc/game/logic-api/";// logic/getPlayerInfo
    static token = "";
    static initBaseUrl() {
    }
    
    static get<T>(url: string): Promise<T> {
        return new Promise((resole, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        let res = JSON.parse(xhr.responseText);
                        resole(res);
                    } else {
                        reject(`get: ${url} err`);
                    }
                }
            };
            xhr.onerror = (err) => {
                reject(err);
            };

            xhr.open("GET", url, true);

            xhr.timeout = 8000;
            xhr.send();
        });
    }

    static httpGet(url: string, callback: (res: any) => void) {
        let urls = HttpHelper.BaseURL + url;
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                    let respone = xhr.responseText;
                    let rsp = JSON.parse(respone);
                    console.log("===GET rsp:", url,rsp);
                    callback?.(rsp);
                } else {
                    callback?.(xhr);
                }
            } else {
                callback?.(null);
            }
        };

        xhr.onerror = function (error) {
            if (typeof callback == "function") {
                callback?.(null);
            }
        };

        xhr.open("GET", urls, true);
        xhr.timeout = 8000;
        xhr.setRequestHeader("Content-Type", "application/json;charset=Utf-8");
         if(HttpHelper.token){
            xhr.setRequestHeader("Authorization", HttpHelper.token);
            xhr.setRequestHeader("appVersion" ,"0.0.0");
            xhr.setRequestHeader("deviceId" ,"test_123456");
            xhr.setRequestHeader("deviceName" ,"test_iPhone");
            xhr.setRequestHeader("deviceType" ,"1");
            xhr.setRequestHeader("systemVersion" , "605.1.15");
        }
        xhr.send();
    }

    static HttpPost(path, params, callback) {
        let url = HttpHelper.BaseURL + path;
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {          
                    let respone = xhr.responseText;
                    let rsp = JSON.parse(respone);
                    console.log("===POST rsp:", path,rsp);
                } else {
                    callback?.(null, xhr.status);
                }
            }
        };
        xhr.onerror = function (error) {
            if (typeof callback == "function") {
                callback?.(null, error);
                EventMgr.emit("HttpError", path);
            }
        };
        xhr.ontimeout = function (error) {
            if (typeof callback == "function") {
                callback?.(null, "timeout");
                EventMgr.emit("HttpTimeOut", path);
            }
        };

        xhr.open("POST", url, true);
        xhr.timeout = 8000; 
        xhr.setRequestHeader("Content-Type", "application/json;charset=Utf-8");
        if(HttpHelper.token){
            xhr.setRequestHeader("Authorization", HttpHelper.token);
            xhr.setRequestHeader("appVersion" ,"0.0.0");
            xhr.setRequestHeader("deviceId" ,"test_123456");
            xhr.setRequestHeader("deviceName" ,"test_iPhone");
            xhr.setRequestHeader("deviceType" ,"1");
            xhr.setRequestHeader("systemVersion" , "605.1.15");
        }
        let str = JSON.stringify(params);
        if(params){
            xhr.send(str);
        }else{
            xhr.send();
        }
    }

}
