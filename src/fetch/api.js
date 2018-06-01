import path from './path';
import get from './get';
import post from './post';
import {Message} from 'antd';

//测试POST接口
export function postApi(options, url, callback){
	if(callback){
        const result = post((path + url), JSON.stringify(options));
        result.then(res => {
            return res.json();
        }).then(json => {
            if(json.flag){
                callback(json.data);
            }else{
                Message.error(json.error);
            }
        }).catch(ex => {
            Message.error(ex);
        });
    };
}

//测试get接口
export function getApi(options, url, callback){
	if(callback){
        const result = get((path + url), options);
        result.then(res => {
            return res.json();
        }).then(json => {
            if(json.flag){
                callback(json.data);
            }else{
                Message.error(json.error);
            }
        }).catch(ex => {
            Message.error(ex);
        });
    };
}