
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
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                    var respone = xhr.responseText;
                    var rsp = JSON.parse(respone);
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
        xhr.open("GET", url, true);
        xhr.timeout = 8000;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21tb25cXEh0dHBIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXdDO0FBRXhDO0lBQUE7SUF5R0EsQ0FBQztJQXRHVSxzQkFBVyxHQUFsQjtJQUNBLENBQUM7SUFFTSxjQUFHLEdBQVYsVUFBYyxHQUFXO1FBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxNQUFNLEVBQUUsTUFBTTtZQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBRS9CLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztnQkFDckIsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLGNBQWMsQ0FBQyxJQUFJLEVBQUU7b0JBQ3hDLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7d0JBQ3BCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0gsTUFBTSxDQUFDLFVBQVEsR0FBRyxTQUFNLENBQUMsQ0FBQztxQkFDN0I7aUJBQ0o7WUFDTCxDQUFDLENBQUM7WUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLFVBQUMsR0FBRztnQkFDZCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDO1lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTNCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGtCQUFPLEdBQWQsVUFBZSxHQUFXLEVBQUUsUUFBNEI7UUFDcEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztR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LENBQUMsS0FBSyxFQUFDO1lBQ2hCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDNUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUNoRCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ2xELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRyxVQUFVLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBRyxNQUFNLEVBQUM7WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQUk7WUFDRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZDtJQUNMLENBQUM7SUF0R00sa0JBQU8sR0FBRyxnREFBZ0QsQ0FBQyxDQUFBLHNCQUFzQjtJQUNqRixnQkFBSyxHQUFHLEVBQUUsQ0FBQztJQXVHdEIsaUJBQUM7Q0F6R0QsQUF5R0MsSUFBQTtBQXpHWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRNZ3J9IGZyb20gXCIuL0V2ZW50TWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEh0dHBIZWxwZXIge1xyXG4gICAgc3RhdGljIEJhc2VVUkwgPSBcImh0dHBzOi8vdGVzdC15b3V5aW4uZGFxaWV6aS5jYy9nYW1lL2xvZ2ljLWFwaS9cIjsvLyBsb2dpYy9nZXRQbGF5ZXJJbmZvXHJcbiAgICBzdGF0aWMgdG9rZW4gPSBcIlwiO1xyXG4gICAgc3RhdGljIGluaXRCYXNlVXJsKCkge1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgZ2V0PFQ+KHVybDogc3RyaW5nKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbGUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2xlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGBnZXQ6ICR7dXJsfSBlcnJgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSA4MDAwO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBodHRwR2V0KHVybDogc3RyaW5nLCBjYWxsYmFjazogKHJlczogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJzcCA9IEpTT04ucGFyc2UocmVzcG9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s/Lihyc3ApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaz8uKHhocik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaz8uKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrPy4obnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG5cclxuICAgICAgICB4aHIudGltZW91dCA9IDgwMDA7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgSHR0cFBvc3QocGF0aCwgcGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCB1cmwgPSBIdHRwSGVscGVyLkJhc2VVUkwgKyBwYXRoO1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkgeyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJzcCA9IEpTT04ucGFyc2UocmVzcG9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT1QT1NUIHJzcDpcIiwgcGF0aCxyc3ApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaz8uKG51bGwsIHhoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s/LihudWxsLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBFdmVudE1nci5lbWl0KFwiSHR0cEVycm9yXCIsIHBhdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaz8uKG51bGwsIFwidGltZW91dFwiKTtcclxuICAgICAgICAgICAgICAgIEV2ZW50TWdyLmVtaXQoXCJIdHRwVGltZU91dFwiLCBwYXRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci50aW1lb3V0ID0gODAwMDsgXHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VXRmLThcIik7XHJcbiAgICAgICAgaWYoSHR0cEhlbHBlci50b2tlbil7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBIdHRwSGVscGVyLnRva2VuKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJhcHBWZXJzaW9uXCIgLFwiMC4wLjBcIik7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiZGV2aWNlSWRcIiAsXCJ0ZXN0XzEyMzQ1NlwiKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJkZXZpY2VOYW1lXCIgLFwidGVzdF9pUGhvbmVcIik7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiZGV2aWNlVHlwZVwiICxcIjFcIik7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwic3lzdGVtVmVyc2lvblwiICwgXCI2MDUuMS4xNVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XHJcbiAgICAgICAgaWYocGFyYW1zKXtcclxuICAgICAgICAgICAgeGhyLnNlbmQoc3RyKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==