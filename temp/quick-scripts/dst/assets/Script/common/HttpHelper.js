
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/common/HttpHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c4d5XTq11OI4WYLV2sGh6l', 'HttpHelper');
// Script/common/HttpHelper.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpHelper = void 0;
var EventManager_1 = require("./EventManager");
var HttpHelper = /** @class */ (function () {
    function HttpHelper() {
    }
    HttpHelper.initBaseUrl = function () {
    };
    HttpHelper.get = function (url) {
        return new Promise(function (resole, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        var res = JSON.parse(xhr.responseText);
                        resole(res);
                    }
                    else {
                        reject("get: " + url + " err");
                    }
                }
            };
            xhr.onerror = function (err) {
                reject(err);
            };
            xhr.open("GET", url, true);
            xhr.timeout = 8000;
            xhr.send();
        });
    };
    HttpHelper.httpGet = function (url, callback) {
        var urls = HttpHelper.BaseURL + url;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                    var respone = xhr.responseText;
                    var rsp = JSON.parse(respone);
                    console.log("===GET rsp:", url, rsp);
                    callback === null || callback === void 0 ? void 0 : callback(rsp);
                }
                else {
                    callback === null || callback === void 0 ? void 0 : callback(xhr);
                }
            }
            else {
                callback === null || callback === void 0 ? void 0 : callback(null);
            }
        };
        xhr.onerror = function (error) {
            if (typeof callback == "function") {
                callback === null || callback === void 0 ? void 0 : callback(null);
            }
        };
        xhr.open("GET", urls, true);
        xhr.timeout = 8000;
        xhr.setRequestHeader("Content-Type", "application/json;charset=Utf-8");
        if (HttpHelper.token) {
            xhr.setRequestHeader("Authorization", HttpHelper.token);
            xhr.setRequestHeader("appVersion", "0.0.0");
            xhr.setRequestHeader("deviceId", "test_123456");
            xhr.setRequestHeader("deviceName", "test_iPhone");
            xhr.setRequestHeader("deviceType", "1");
            xhr.setRequestHeader("systemVersion", "605.1.15");
        }
        xhr.send();
    };
    HttpHelper.HttpPost = function (path, params, callback) {
        var url = HttpHelper.BaseURL + path;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    var respone = xhr.responseText;
                    var rsp = JSON.parse(respone);
                    console.log("===POST rsp:", path, rsp);
                }
                else {
                    callback === null || callback === void 0 ? void 0 : callback(null, xhr.status);
                }
            }
        };
        xhr.onerror = function (error) {
            if (typeof callback == "function") {
                callback === null || callback === void 0 ? void 0 : callback(null, error);
                EventManager_1.EventMgr.emit("HttpError", path);
            }
        };
        xhr.ontimeout = function (error) {
            if (typeof callback == "function") {
                callback === null || callback === void 0 ? void 0 : callback(null, "timeout");
                EventManager_1.EventMgr.emit("HttpTimeOut", path);
            }
        };
        xhr.open("POST", url, true);
        xhr.timeout = 8000;
        xhr.setRequestHeader("Content-Type", "application/json;charset=Utf-8");
        if (HttpHelper.token) {
            xhr.setRequestHeader("Authorization", HttpHelper.token);
            xhr.setRequestHeader("appVersion", "0.0.0");
            xhr.setRequestHeader("deviceId", "test_123456");
            xhr.setRequestHeader("deviceName", "test_iPhone");
            xhr.setRequestHeader("deviceType", "1");
            xhr.setRequestHeader("systemVersion", "605.1.15");
        }
        var str = JSON.stringify(params);
        if (params) {
            xhr.send(str);
        }
        else {
            xhr.send();
        }
    };
    HttpHelper.BaseURL = "https://test-youyin.daqiezi.cc/game/logic-api/"; // logic/getPlayerInfo
    HttpHelper.token = "";
    return HttpHelper;
}());
exports.HttpHelper = HttpHelper;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21tb25cXEh0dHBIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXdDO0FBRXhDO0lBQUE7SUFtSEEsQ0FBQztJQWhIVSxzQkFBVyxHQUFsQjtJQUNBLENBQUM7SUFFTSxjQUFHLEdBQVYsVUFBYyxHQUFXO1FBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxNQUFNLEVBQUUsTUFBTTtZQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBRS9CLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztnQkFDckIsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLGNBQWMsQ0FBQyxJQUFJLEVBQUU7b0JBQ3hDLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7d0JBQ3BCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0gsTUFBTSxDQUFDLFVBQVEsR0FBRyxTQUFNLENBQUMsQ0FBQztxQkFDN0I7aUJBQ0o7WUFDTCxDQUFDLENBQUM7WUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLFVBQUMsR0FBRztnQkFDZCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDO1lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTNCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGtCQUFPLEdBQWQsVUFBZSxHQUFXLEVBQUUsUUFBNEI7UUFDcEQsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLE9BQU8sR0FBRyxH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RyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUcsTUFBTSxFQUFDO1lBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFJO1lBQ0QsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Q7SUFDTCxDQUFDO0lBaEhNLGtCQUFPLEdBQUcsZ0RBQWdELENBQUMsQ0FBQSxzQkFBc0I7SUFDakYsZ0JBQUssR0FBRyxFQUFFLENBQUM7SUFpSHRCLGlCQUFDO0NBbkhELEFBbUhDLElBQUE7QUFuSFksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50TWdyfSBmcm9tIFwiLi9FdmVudE1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwSGVscGVyIHtcclxuICAgIHN0YXRpYyBCYXNlVVJMID0gXCJodHRwczovL3Rlc3QteW91eWluLmRhcWllemkuY2MvZ2FtZS9sb2dpYy1hcGkvXCI7Ly8gbG9naWMvZ2V0UGxheWVySW5mb1xyXG4gICAgc3RhdGljIHRva2VuID0gXCJcIjtcclxuICAgIHN0YXRpYyBpbml0QmFzZVVybCgpIHtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGdldDxUPih1cmw6IHN0cmluZyk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2xlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChgZ2V0OiAke3VybH0gZXJyYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gODAwMDtcclxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaHR0cEdldCh1cmw6IHN0cmluZywgY2FsbGJhY2s6IChyZXM6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGxldCB1cmxzID0gSHR0cEhlbHBlci5CYXNlVVJMICsgdXJsO1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbmUgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByc3AgPSBKU09OLnBhcnNlKHJlc3BvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09R0VUIHJzcDpcIiwgdXJsLHJzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s/Lihyc3ApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaz8uKHhocik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaz8uKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrPy4obnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmxzLCB0cnVlKTtcclxuICAgICAgICB4aHIudGltZW91dCA9IDgwMDA7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VXRmLThcIik7XHJcbiAgICAgICAgIGlmKEh0dHBIZWxwZXIudG9rZW4pe1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgSHR0cEhlbHBlci50b2tlbik7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiYXBwVmVyc2lvblwiICxcIjAuMC4wXCIpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcImRldmljZUlkXCIgLFwidGVzdF8xMjM0NTZcIik7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiZGV2aWNlTmFtZVwiICxcInRlc3RfaVBob25lXCIpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcImRldmljZVR5cGVcIiAsXCIxXCIpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcInN5c3RlbVZlcnNpb25cIiAsIFwiNjA1LjEuMTVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIEh0dHBQb3N0KHBhdGgsIHBhcmFtcywgY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgdXJsID0gSHR0cEhlbHBlci5CYXNlVVJMICsgcGF0aDtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbmUgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByc3AgPSBKU09OLnBhcnNlKHJlc3BvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09UE9TVCByc3A6XCIsIHBhdGgscnNwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s/LihudWxsLCB4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrPy4obnVsbCwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgRXZlbnRNZ3IuZW1pdChcIkh0dHBFcnJvclwiLCBwYXRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s/LihudWxsLCBcInRpbWVvdXRcIik7XHJcbiAgICAgICAgICAgICAgICBFdmVudE1nci5lbWl0KFwiSHR0cFRpbWVPdXRcIiwgcGF0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIudGltZW91dCA9IDgwMDA7IFxyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVV0Zi04XCIpO1xyXG4gICAgICAgIGlmKEh0dHBIZWxwZXIudG9rZW4pe1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgSHR0cEhlbHBlci50b2tlbik7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiYXBwVmVyc2lvblwiICxcIjAuMC4wXCIpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcImRldmljZUlkXCIgLFwidGVzdF8xMjM0NTZcIik7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiZGV2aWNlTmFtZVwiICxcInRlc3RfaVBob25lXCIpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcImRldmljZVR5cGVcIiAsXCIxXCIpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcInN5c3RlbVZlcnNpb25cIiAsIFwiNjA1LjEuMTVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShwYXJhbXMpO1xyXG4gICAgICAgIGlmKHBhcmFtcyl7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKHN0cik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=