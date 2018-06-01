import 'whatwg-fetch';
import path from './path';

//url格式示例：/WHP.HydroPower/disp/initParams?userName=admin&password=123456
export default function get(url) {
    let result = fetch(path + url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });

    return result;
}
