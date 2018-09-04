let db = require('../db/compass')
let util = require('../actions/utils')
//博文管理
let compassObj = {
    compass:{
        title:'',//标题
        author:'',//作者
        sort:'',//类别
        content:'',//博文内容
        createTime:''//创作时间
    },
    //发表文章
    postArticles:function postArticles(compass,callback){
        // let post = JSON.parse(compass);
        compass.createTime = util.formatDate("yyyy-MM-dd HH:mm:ss");
        db.insertCompass(compass,function(res){
            if(callback)callback(res);
        })
    },
    //文章列表
    getList:function getList(callback){
        db.selectList(function(res){
            if(callback)callback(res);
        });
    },
    //查询单篇文章
    getOneCompass:function getOneCompass(id,callback){
        db.selectOne(id,function(res){
            if(callback)callback(res);
        })
    }
};

module.exports = compassObj;