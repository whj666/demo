import 'whatwg-fetch';
import path from './path';
import $ from 'jquery';

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
