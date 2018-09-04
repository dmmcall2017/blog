const router = require('express').Router();
const userAct = require('../modules/actions/userAction');
const compassAct = require('../modules/actions/compassAction');
const upload = require('../modules/utils/upload.js');
const multiparty = require('multiparty');
let uploadUrl = './public/images';
const fs = require("fs");

//注册
router.post('/registReg',function(req,res){
    let user = req.body;
    userAct.register(user,function(result){
        res.send(result);
    })
});
//登录
router.post('/loginReg',function(req,res){
    let user = req.body;
    userAct.login(user,function(result){
        res.send(result);
    });
});
//发表文章
router.post('/savePost',function(req,res){
    let post = JSON.parse(req.body.post);
    // console.log(post);
    compassAct.postArticles(post,function(result){
        res.send(result);
    });
})
//获取文章列表
router.post('/getCompassList',function(req,res){
    compassAct.getList(function(result){
        res.send(result);
    })
});
//查询文章详细信息
router.post('/getOneCompass',function(req,res){
    compassAct.getOneCompass(req.body.id,function(result){
        res.send(result);
    })
});
//上传文件
router.post('/uploadFile',function(req,res){
    var form = new multiparty.Form();
    if(!fs.existsSync(uploadUrl)){
        fs.mkdirSync(uploadUrl);
    }
    form.uploadDir = uploadUrl;
    form.parse(req,function (err,fields,files) {
        for(var e in files){
            var el = files[e];
            fs.rename(el[0].path,uploadUrl+'/'+el[0].originalFilename,function(err){
                console.log(err);
            });
        }
    })
});
module.exports = router;

