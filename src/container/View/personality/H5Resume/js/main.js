function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
  return "Chrome";
 }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}

var scrollFunc = function (e) {
    var con=document.getElementsByTagName("section");
        var tag=document.getElementsByTagName("aside")[0].children;  
    
    var direct = 0;
    e = e || window.event;
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件   
          
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            for (var i = 1; i < tag.length; i++) {
                if(tag[i].className=="cur_a"){
                    tag[i].className="";
                    con[i].style.display="none";
                    tag[i-1].className="cur_a";
                    con[i-1].style.display="block";
                    break;
                }
            }
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            
            for (var i = 0; i < tag.length-1; i++) {
                var n=0;
                if(tag[i].className=="cur_a"){
                    tag[i].className="";
                    con[i].style.display="none";  
                    n=i+1;
                    tag[n].className="cur_a";
                    con[n].style.display="block";
                    break;
                }
            }

        }
    } else if (e.detail) {  //Firefox滑轮事件
        if (e.detail> 0) { //当滑轮向上滚动时
            for (var i = 1; i < tag.length; i++) {
                if(tag[i].className=="cur_a"){
                    tag[i].className="";
                    con[i].style.display="none";
                    tag[i-1].className="cur_a";
                    con[i-1].style.display="block";
                    break;
                }
            }
        }
        if (e.detail< 0) { //当滑轮向下滚动时
            for (var i = 0; i < tag.length-1; i++) {
                var n=0;
                if(tag[i].className=="cur_a"){
                    tag[i].className="";
                    con[i].style.display="none";  
                    n=i+1;
                    tag[n].className="cur_a";
                    con[n].style.display="block";
                    break;
                }
            }
        }
    }
    // ScrollText(direct);
}
// 给页面绑定滑轮滚动事件
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
// //滚动滑轮触发scrollFunc方法

//以下是调用上面的函数
var browser = myBrowser();
if ("IE" == browser) {
    document.onmousewheel = scrollFunc;  
}else{
    window.onmousewheel= scrollFunc;  
}