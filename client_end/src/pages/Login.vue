<!-- 登录 -->
<template>
  <div id="login">
      <div class="loginPic">
          <img src="../assets/images/logo.png"/>
      </div>
      <div class="loginBox">
          <p>
              <span class="Panel selected">登录</span>
              <span class="partSign"><i class="iconfont icon-yuan-copy-copy-copy"></i></span>
              <span class="Panel">注册</span>
          </p>
        <!--  -->
          <div class="loginPanel">
              <p>
                  <i class="iconfont icon-yonghu1"></i>
                  <input type="text" placeholder="请输入用户名"/>
              </p>
              <p>
                  <i class="iconfont icon-mima1"></i>
                  <input type="password" placeholder="请输入密码"/>
              </p>
          </div>
      </div>
      <!--<div -->
      <!--<div class="title">-->
          <!--WELCOME BLOG!-->
      <!--</div>-->
      <!--<div class="loginBox">-->
          <!--<p>Login</p>-->
          <!--<label>-->
              <!--<span><i class="iconfont icon-yonghu"></i></span>-->
              <!--<input type="text" class="username" v-model="user.username"/>-->
          <!--</label>-->
          <!--<label>-->
              <!--<span><i class="iconfont icon-mima"></i></span>-->
              <!--<input type="password" class="password" v-model="user.password"/>-->
          <!--</label>-->
          <!--<button type="button" @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>-->
          <!--<div class="tipPanel">-->
              <!--<span>忘记密码？</span>-->
              <!--<span @click="toRegister">注册</span>-->
          <!--</div>-->
      <!--</div>-->
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
        user:{
            username:'janice',
            password:'123456'
        }
    }
  },
  created:function(){

  },
  methods:{
      toRegister:function(){
          this.$router.replace('/register');
      },
      login:function(user){
            var _this = this;
            if(this.user.username == ""||this.user.password == ""){
              this.$alert('用户名和密码均必填！', '提示', {
                confirmButtonText: '确定'
              });
            }else{
              this.$axios.post("/api/ajax/loginReg",{name:_this.user.username,password:_this.user.password})
                .then((res) => {
                  let data = res.data;
                  if(data.success === "ok"){
                    sessionStorage.setItem("user",JSON.stringify(_this.user));
                    this.$alert('登录成功', '提示', {
                      confirmButtonText: '确定',
                      callback: function() {
                        _this.$router.replace('/index/recent');
                      }
                    });
                  }else{
                    this.$alert(data.errMsg, '提示', {
                      confirmButtonText: '确定'
                    });
                  }
                })
            }

      }
  }
}
</script>
<style scoped>
    #login{
        position: absolute;
        top: 0;
        width:100%;
        height:100%;
        background-size: cover;
    }
    #login>.loginPic{
        padding:50px;
        width:158px;
    }
    #login>.loginPic>img{
        width:100%;
    }
    #login .loginBox{
        width:450px;
        height:550px;
        margin: 0 auto;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 2px 2px 15px 1px #0C0C0C;
    }
    #login .loginBox>p{
        text-align: center;
        padding:20px 0;
    }
    #login .loginBox>p i{
        font-size:10px;
        display: inline-block;
        line-height: 24px;
    }
    #login .loginBox>p span{
      line-height: 24px;
    }
    #login .loginBox>p>.Panel{
        font-size:24px;
    }
    /*#login>.title{*/
        /*position: absolute;*/
        /*top: 25%;*/
        /*left: 50%;*/
        /*font-family: 'yahei';*/
        /*color: #fff;*/
        /*font-size: 30px;*/
        /*width: 290px;*/
        /*margin-left: -145px;*/
    /*}*/
    /*#login>.loginBox{*/
        /*position: absolute;*/
        /*width: 500px;*/
        /*height: 280px;*/
        /*top: 50%;*/
        /*left: 50%;*/
        /*margin-left: -250px;*/
        /*margin-top: -140px;*/
        /*color: #fff;*/
        /*text-align: center;*/
        /*background: rgba(0, 148, 205,0);*/
        /*box-shadow: 0 0 25px #000, 0 0 25px #000;*/
        /*box-sizing: border-box;*/
        /*padding-top: 40px;*/
    /*}*/
    /*#login>.loginBox>p{*/
        /*width:100%;*/
        /*line-height: 30px;*/
        /*height: 30px;*/
        /*font-size:24px;*/
        /*text-align: center;*/
        /*font-family: 'yahei';*/
    /*}*/
    /*#login>.loginBox label{*/
        /*position:relative;*/
        /*display: block;*/
        /*color:#ccc;*/
        /*line-height: 50px;*/
    /*}*/
    /*#login>.loginBox label span{*/
        /*position: absolute;*/
        /*top: 16px;*/
        /*left: 130px;*/
        /*display: inline-block;*/
        /*line-height: 17px;*/
        /*height: 17px;*/
        /*color: #333;*/
        /*border-right: 1px solid #eee;*/
        /*padding-right: 3px;*/
    /*}*/
    /*#login>.loginBox label i{*/
        /*font-size: 20px;*/
    /*}*/
    /*#login>.loginBox input{*/
        /*line-height: 30px;*/
        /*height: 30px;*/
        /*padding: 0 35px;*/
        /*outline: 0;*/
        /*width: 49%;*/
        /*border: 1px solid #ccc;*/
        /*border-radius: 4px;*/
    /*}*/
    /*#login>.loginBox button{*/
        /*width: 50%;*/
        /*line-height: 30px;*/
        /*height: 30px;*/
        /*margin-top: 20px;*/
        /*border: 0;*/
        /*background: #0c5c86;*/
        /*color: #fff;*/
        /*border-radius: 4px;*/
        /*cursor: pointer;*/
        /*outline:0;*/
    /*}*/
    /*#login>.loginBox button:hover{*/
        /*box-shadow: 1px 1px 10px #000;*/
    /*}*/
    /*#login>.loginBox .tipPanel{*/
        /*width:48%;*/
        /*margin:0 auto;*/
    /*}*/
    /*#login>.loginBox .tipPanel>span{*/
        /*font-size:12px;*/
        /*cursor:pointer;*/
        /*margin-top: 10px;*/
        /*font-weight:normal;*/
    /*}*/
    /*#login>.loginBox .tipPanel>span:hover{*/
        /*color:#113956;*/
    /*}*/
    /*#login>.loginBox .tipPanel>span:first-child{*/
        /*float:left;*/
    /*}*/
    /*#login>.loginBox .tipPanel>span:last-child{*/
        /*float:right;*/
    /*}*/
</style>
