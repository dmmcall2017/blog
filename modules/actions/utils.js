//工具类
//日期格式化
var utils = {
    formatDate : function(str){
        let d = new Date();
        let o = {
            "M+":d.getMonth() + 1,//月份
            "d+":d.getDate(), //日
            "h+":d.getHours(),//小时
            "m+":d.getMinutes(),//分钟
            "s+":d.getSeconds(),//秒
            "S+":d.getMilliseconds()//毫秒
        };
        if (/(y+)/.test(str)) str = str.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(str)) str = str.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return str;
    }
}


module.exports = utils;