function randomInt(from, to) {
    return from + Math.floor(Math.random() * (1 + to - from));
}

function randomString(num = 24) {
    let r = [];
    for (let i = 0; i < num; i++) {
        let c = null;
        let v = randomInt(0, 62);
        if (v >= 52) {
            c = 48 + v - 52;
        }else if (v >= 26) {
            c = 65 + v - 26
        }else{
            c = 97 + v;
        }
        r.push(c);
    }
    return String.fromCharCode.apply(String, r);
}

const DEVICE_ID_KEY = 'hsm_device_id_key'

function call_back_to_js(method, data) {
    window['onWebNativeBack']?.(method, JSON.stringify(data))
}

function get_hsm_phone_msg() {
    let view = cc.view, sys = cc.sys, screen = cc.screen
    let size = view.getVisibleSizeInPixel()
    let offset = -new Date().getTimezoneOffset() / 60
    let udid = localStorage.getItem(DEVICE_ID_KEY)
    if (!udid) {
        udid = `${sys.platform}_${randomString()}`
        localStorage.setItem(DEVICE_ID_KEY, udid)
    }
    return call_back_to_js('on_get_hsm_phone_msg', {
        udid: udid,
        is_native_web: false,
        "device_info": {
            "timezone_abbr": `UTC${offset >= 0 ? "+" + offset : offset}`,
            "device_time_zone": Intl.DateTimeFormat().resolvedOptions().timeZone,
            "extinfo_version": "i2",
            "screen_width": size.x,
            "screen_height": size.x,
            "country_code": `${sys.languageCode}`,
            "device_model_name": `${sys.platform}`,
            "device_model": `${sys.osMainVersion}`,
            "short_version": "1.0.1",
            "long_version": "",
            "cpu_core": 0,
            liuhai_height: 0,
            "locale": `${sys.language}`,
            "free_space_in_external_storage_size": "",
            "app_package_name": "",
            "device_brand": `${sys.osMainVersion}`,
            "platform": `${sys.platform}`,
            "carrier": "",
            "user_agent": navigator.userAgent,
            "external_storage_size": "",
            "orientation": "0",
            "language": `${sys.language}`,
            "os_version": `${sys.osVersion}`,
            "udid": udid,
            "screen_density": `${screen.devicePixelRatio}`,
            "appsflyer_id": udid,
        },
        "game_info": { //游戏名字， bundle_id, 等等那些
            game_name: 'Lucky Joyance Casino Test',
            bundle_id: 'com.mindmystic.cidercasino',
            svr_bundle_id: 'com.mindmystic.cidercasino',
            remote_url: 'http://slots-lucky-joyance-ios.luckfun.vip/api/', //远程服务器地址
            auth_key: 'mGpH3eD74ifpp9FWER37RnQ6D5sQXt15', 
            // bundle_id: 'com.asselin.luckylegends',
            // svr_bundle_id: 'com.asselin.luckylegends',
            // remote_url: 'http://cash-dash-webplus.luckfun.vip/api/', //远程服务器地址
            // auth_key: '3bLgH08T7qG0nSIJb0WhZFK1E97bXAIR',
            email: 'LegendsCasino68@outlook.com',
            platform: 'web',
            version: '1.0.1',
        }
        // 新iOS主包产品相关信息
        // 游戏名：Lucky Joyance Casino
        // 平台：iOS
        // 包名：com.mindmystic.cidercasino
        // 产品名:Lucky Joyance Casino
        // 公司名：MindMystic Studio Limited
        // 公司地址(真实地址)：RM 19, 7/F, BLK C, MAI TAKINDBUILDING, 221 WAI YPSTREET, KWUN TONG, KOWLOON,HONG KONG
    })
}

window.winner_game = {
    get_hsm_phone_msg: get_hsm_phone_msg,
}