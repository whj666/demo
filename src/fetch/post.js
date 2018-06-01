import 'whatwg-fetch';

//options为一个对象
export default function post(url, options) {
    let result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': "application/json"
        },
        body: options
    });

    return result;
}
