import 'whatwg-fetch';
import path from './path';
import $ from 'jquery';

//url格式示例：/WHP.HydroPower/disp/initParams?userName=admin&password=123456
export default function get(url, options){
    let paramUrl = $.param(options);
    if (paramUrl) {
        url += '?' + paramUrl;
    } else {
        url += paramUrl;
    }

    let result = fetch(url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': "application/json"
        }
    });

    return result;
}
