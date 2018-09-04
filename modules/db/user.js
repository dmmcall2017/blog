//用户管理
let settings = require('../../settings');
let MongoClient = require('mongodb').MongoClient;
let col = 'user';
let userOp = {
	//存储用户信息
	insertUser:function(user,callback){
		MongoClient.connect(settings.url,function(err,client){ 
            if(err){
                console.log(err);
            }
            else{
                collection = client.db(settings.db).collection(col);
                collection.find({name:user.username}).toArray(function(err,res){
	                if(res.length > 0){
                        callback({"errMsg":"用户已存在","success":null})
	                }else{
                        collection.insert(user,function(err,res){
                            if(err){
                                callback({"errMsg":err,"success":null});
                            }else{
                                callback({"errMsg":"0","success":'ok'});
                            }
                        })
	                }
				});
            }
        });
	},
	//查询某个用户信息
	selectUser:function(user,callback){
		MongoClient.connect(settings.url,function(err,client){ 
            if(err){
                console.log(err);
            }
            else{
                collection = client.db(settings.db).collection(col);
				collection.find({name:user.name,password:user.password}).toArray(function(err,res){
					if(err){
						callback({"errMsg":err,"success":null})
					}else {
                        if (res.length > 0) {
                            callback({"errMsg": "0", "success": 'ok'});
                        } else {
                            callback({"errMsg": "用户不存在，登录失败！", "success": null});
                        }
                    }
				});
                client.close();
			}
		})
	},
	//查询用户列表
	selectAll:function(callback){
		MongoClient.connect(settings.url,function(err,client){ 
            if(err){
                console.log(err);
            }
            else{
                collection = client.db(settings.db).collection(col);
				collection.find({}).toArray(function(err,res){
					if(err){
						callback({"errMsg":err,"success":null})
					}else{
						callback({"errMsg":"0","success":"ok"});
					}
					client.close();
				});
				
			}
		});
	}
};

module.exports = userOp;

