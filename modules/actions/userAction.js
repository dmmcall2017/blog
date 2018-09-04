var userDB = require('../db/user');
let userObj = {
	user:{
		name:'',//用户名
		password:'',//密码
		email:'',//邮箱
		sex:'',//性别
        birthday:'',//生日
        headImg:'',//头像
    },
    //注册
	register:function(newUser,callback){
	    this.user.name = newUser.username;
        this.user.password = newUser.password;
        this.user.email = newUser.email;
        userDB.insertUser(this.user,callback);
    },
    //登录
    login:function(user,callback){
        userDB.selectUser(user,function(res){
            if(callback)callback(res)
        });
    },
    //获取个人信息
    getUserInfo:function(){

    }
}

// userObj.login({name:'janice',password:'123456'},function(res){
//     console.log(res);
// })

module.exports = userObj;