import path from './path';
import get from './get';
import post from './post';
import {Message} from 'antd';

//POST接口 (传递对象自动转化成json字符串)
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

//get接口 (传递对象，如果对象值里面有数组类型的自动转化成字符串)
export function getApi(options, url, callback){
    for(let i in options){
        if(options[i] instanceof Array){
          options[i] = options[i].toString();
        }
    };
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