let settings = require('../../settings');
let MongoClient = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectID;
let col = 'post';
let compassOp = {
    //新增博客文章
    insertCompass:function(compass,callback){
        MongoClient.connect(settings.url,function(err,client){ 
            if(err){
                console.log(err);
            }
            else{
                collection = client.db(settings.db).collection(col);
                collection.insertOne(compass,function(err,res){
                    if(err){
                        callback({"errMsg":err,"success":null});
                    }else{
                        callback({"errMsg":"0","success":res});
                    }
                    client.close();
                }) 
            }
        });
    },
    //查询列表（简介）
    selectList:function(callback){
        MongoClient.connect(settings.url,function(err,client){ 
            if(err){
                console.log(err);
            }
            else{
                collection = client.db(settings.db).collection(col);
                collection.find({}).toArray(function(err,res){
                    if(err){
                        callback({"errMsg":err,"success":null});
                    }else{
                        callback({"errMsg":"0","success":res});
                    }
                    client.close();
                })
            }
        });
    },
    //查询一篇文章
    selectOne:function(id,callback){
        console.log(id)
        MongoClient.connect(settings.url,function(err,client){ 
            if(err){
                console.log(err);
            }
            else{
                collection = client.db(settings.db).collection(col);
                collection.find({_id:new ObjectID(id)}).toArray(function(err,res){
                    if(err){
                        callback({"errMsg":err,"success":null});
                    }else{
                        callback({"errMsg":"0","success":res});
                    }
                    client.close();
                })
            }
        });
    },
    //按照特定条件查询
    selectListByConditions:function(callback){
        MongoClient.connect(settings.url,function(err,client){ 
            if(err){
                console.log(err);
            }
            else{
                collection = client.db(settings.db).collection(col);
                collection.find({},function(err,res){
                    if(err){
                        callback({"errMsg":err,"success":null});
                    }else{
                        callback({"errMsg":"0","success":res});
                    }
                    client.close();
                })
            }
        });
    },
    //删除某个文章
    deleteOne:function(callback){
        MongoClient.connect(settings.url,function(err,client){ 
            if(err){
                console.log(err);
            }
            else{
                collection = client.db(settings.db).collection(col);
                collection.remove({},function(err,res){
                    if(err){
                        callback({"errMsg":err,"success":null});
                    }else{
                        callback({"errMsg":"0","success":res});
                    }
                    client.close();
                })
            }
        });
    },
    //清空文章列表
    deleteAll:function(){

    }
};
// console.log(typeof new ObjectID("5b30c244bfc5fd13c8ace644"));
// compassOp.selectOne("5b30c244bfc5fd13c8ace644",function(res){
//     console.log(res)
// });
module.exports = compassOp;
