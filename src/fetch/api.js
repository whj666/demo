import path from './path';
import get from './get';
import post from './post';
import {Message} from 'antd';
import $ from 'jquery';
let count = 0;

//POST接口 (传递对象自动转化成json字符串)
export function postApi(options, url, callback){
	if(callback){
        if(url === '/api/login'){
            $("#login > .ant-spin").addClass("ant-spin-spinning");
        }else{
            count++;
            $("#container > .ant-spin").addClass("ant-spin-spinning");
        };

        const result = post((path + url), JSON.stringify(options));
        result.then(res => {
            return res.json();
        }).then(json => {
            if(url === '/api/login'){
                $("#login > .ant-spin").removeClass("ant-spin-spinning");
            }else{
                count--;
                if(count === 0){
                    $("#container > .ant-spin").removeClass("ant-spin-spinning");
                };
            };

            if(json.flag){
                callback(json);
            }else{
                Message.error(json.message);
            }
        }).catch(ex => {
            if(url === '/api/login'){
                $("#login > .ant-spin").removeClass("ant-spin-spinning");
            }else{
                count = 0;
                $("#container > .ant-spin").removeClass("ant-spin-spinning");
            };

            Message.error("网络连接错误！");
        });
    };
}

//get接口 (传递对象，如果对象值里面有数组类型的自动转化成字符串)
export function getApi(options, url, callback){
	if(callback){
        count++;
        $("#container > .ant-spin").addClass("ant-spin-spinning");
        
        options = JSON.stringify(options);
        options = JSON.parse(options);
        for(let i in options){
            if(options[i] instanceof Array){
                options[i] = options[i].toString();
            };
        };

        const result = get((path + url), options);
        result.then(res => {
            return res.json();
        }).then(json => {
            count--;
            if(count === 0){
                $("#container > .ant-spin").removeClass("ant-spin-spinning");
            };

            if(json.flag){
                callback(json);
            }else{
                Message.error(json.error);
            }
        }).catch(ex => {
            count = 0;
            $("#container > .ant-spin").removeClass("ant-spin-spinning");

            Message.error("网络连接错误！");
        });
    };
}