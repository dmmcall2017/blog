<template>
  <div id="regist">
      <div class="title">
          WELCOME BLOG!
      </div>
      <div class="registBox">
          <p>Regist</p>
          <label>
              <span><i class="iconfont icon-yonghu"></i></span>
              <input type="text" class="username" v-model="userRegist.username" placeholder="请输入用户名"/>
          </label>
          <label>
              <span><i class="iconfont icon-mima"></i></span>
              <input type="password" class="password" v-model="userRegist.password" placeholder="请输入密码"  @blur="certainPassword"/>
          </label>
          <label>
              <span><i class="iconfont icon-mimaqueren"></i></span>
              <input type="password" class="password" v-model="userRegist.passwordAgain" placeholder="请确认密码" @blur="certainPassword"/>
              <transition name="slide"><div :class="tip.style" v-if="tip.display">{{tip.content}}</div></transition>
          </label>
          <label>
              <span><i class="iconfont icon-youxiang2"></i></span>
              <input type="text" class="password" v-model="userRegist.email" placeholder="请输入邮箱"/>
          </label>
          <button type="button" @click="regist">注&nbsp;&nbsp;&nbsp;&nbsp;册</button>
          <div class="tipPanel">
              <span @click="toLogin">已有账户？登录</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      userRegist:{
        username:'',
        password:'',
        passwordAgain:'',
        email:''
      },
      tip:{
        content:"两次密码不一致",
        display:false,
        style:"tip"
      }
    }
  },
  methods:{
    toLogin(){
      this.$router.push("/login");
    },
    regist(){
      let _this = this;
      // if(false){//注册信息不完整

      // }else{
        this.$axios.post("/api/ajax/registReg",this.userRegist)
          .then((res) => {
            let data = res.data;
            if(data.success === "ok"){
              this.$alert('注册成功', '提示', {
                confirmButtonText: '确定',
                callback: function() {
                  _this.$router.replace('/login');
                }
              });
            }else{
              this.$alert(data.errMsg, '提示', {
                confirmButtonText: '确定'
              });
            }
          });
      // }
    },
    certainPassword(){
      if(this.userRegist.password!==""&&this.userRegist.passwordAgain!==""){
        this.tip.display = this.userRegist.password === this.userRegist.passwordAgain;
      }
    }
  },
  computed:{

  }
}
</script>
<style scoped>
    #regist{
        position: absolute;
        top:0;
        width:100%;
        height:100%;
        background-image: url(../assets/bg.jpg);
        background-size: cover;
    }
    #regist>.title{
        position: absolute;
        top: 25%;
        left: 50%;
        font-family: 'yahei';
        color: #fff;
        font-size: 30px;
        width: 290px;
        margin-left: -145px;
    }
    #regist>.registBox{
        position: absolute;
        width: 500px;
        height: 365px;
        top: 50%;
        left: 50%;
        margin-left: -250px;
        margin-top: -140px;
        color: #fff;
        text-align: center;
        background: rgba(0, 148, 205,0);
        box-shadow: 0 0 25px #000, 0 0 25px #000;
        box-sizing: border-box;
        padding-top: 40px;
    }
    #regist>.registBox>p{
        width:100%;
        line-height: 30px;
      height: 30px;
        font-size:24px;
        text-align: center;
        font-family: 'yahei';
    }
    #regist>.registBox label{
        position:relative;
        display: block;
        color:#ccc;
        line-height: 50px;
      height: 50px;
    }
    #regist>.registBox label span{
        position: absolute;
        top: 16px;
        left: 130px;
        display: inline-block;
        line-height: 17px;
      height: 17px;
        color: #333;
        border-right: 1px solid #eee;
        padding-right: 3px;
    }
     #regist>.registBox label i{
        font-size: 20px;
    }
    #regist>.registBox input{
        line-height: 30px;
      height: 30px;
        padding: 0 35px;
        outline: 0;
        width: 49%;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    #regist>.registBox button{
        width: 50%;
        line-height: 30px;
      height: 30px;
        margin-top: 20px;
        border: 0;
        background: #0c5c86;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
        outline:0;
    }
    #regist>.registBox button:hover{
        box-shadow: 1px 1px 10px #000;
    }
    #regist>.registBox .tipPanel{
        width:48%;
        margin:0 auto;
    }
    #regist>.registBox .tipPanel>span{
        font-size:12px;
        cursor:pointer;
        margin-top: 10px;
        font-weight:normal;
    }
    #regist>.registBox .tipPanel>span:hover{
        color:#113956;
    }
    #regist>.registBox .tipPanel>span:first-child{
        float:left;
    }
    #regist>.registBox .tipPanel>span:last-child{
        float:right;
    }
  .tip{
    color: #00ffe9;
    line-height: 18px;
    height: 18px;
    padding: 0;
    font-size: 10px;
  }
    .slide-enter-active {
      transition: all .5s ease;
    }
    .slide-leave-active {
      transition: all .1s;
    }
    .slide-enter, .slide-leave-to{
      line-height:0;
      height:0;
      opacity: 0;
    }
</style>
