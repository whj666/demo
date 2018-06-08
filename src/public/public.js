//设置cookie存储
function setCookie(keyName, value, days){
    let d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = keyName + "=" + value + "; " + expires;
}

//把时间戳转化为显示时间格式
function getTimeValue(e, format = "yyyy-mm-dd hh:mm:ss"){
    let newDate = e ? new Date(e) : new Date();  //如果第一个参数为null，则默认为当前时间
    let timeNow = (
        newDate.getFullYear() +"-"+
        ((newDate.getMonth()+1) >= 10 ? (newDate.getMonth()+1) : "0"+(newDate.getMonth()+1)) +"-"+ 
        (newDate.getDate() >= 10 ? newDate.getDate() : "0"+newDate.getDate())+" "+
        (newDate.getHours() >= 10 ? newDate.getHours() : "0"+newDate.getHours())+":"+
        (newDate.getMinutes() >= 10 ? newDate.getMinutes() : "0"+newDate.getMinutes())+":"+
        (newDate.getSeconds() >= 10 ? newDate.getSeconds() : "0"+newDate.getSeconds())
    )
    return timeNow.substring(0, format.length);
}

//把显示时间格式转化为时间戳
function getTimeNumber(e){
    return (new Date(e)).getTime();
}

/*视口的大小，部分移动设备浏览器对innerWidth的兼容性不好，需要
 *document.documentElement.clientWidth或者document.body.clientWidth
 *来兼容（混杂模式下对document.documentElement.clientWidth不支持）。
 *使用方法 ： getViewPort().height;
 */
function getViewPort() {
	if (document.compatMode == "BackCompat") {   //浏览器嗅探，混杂模式
		return {
			width: document.body.clientWidth,
			height: document.body.clientHeight
		};
	} else {
		return {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		};
	}
}

export {
    setCookie,
    getTimeValue,
    getTimeNumber,
    getViewPort
}