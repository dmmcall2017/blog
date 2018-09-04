<template>
  <div class="Post">
    <div class="main">
      <div class="editorBox">
        <p><input type="text" placeholder="文章标题" v-model="compass.title" title=""/></p>
        <div class="editor"><mavon-editor v-model="compass.content"/></div>
      </div>
      <label>
        文章分类：
        <select>
          <option value="js">js</option>
          <option value="css">css</option>
        </select>
      </label>
      <div class="postBtn">
        <button @click="save">发表文章</button>
      </div>
    </div>
  </div>
</template>

<script>
import Marked from 'marked';
export default {
  name: 'Post',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      compass:{
        title:"",//标题
        sort:"",//分类
        author:"",//作者
        content:""//内容
      },
      sorts:[]
    }
  },
  mounted:function(){
    this.chooseImg();
  },
  methods:{
    save:function(){
      let _this = this;
      this.compass.content = Marked(this.compass.content);
      this.$axios.post("/api/ajax/savePost",{post:JSON.stringify(this.compass)})
        .then((res) => {
          let data = res.data;
          if(data.success === "ok"){
            // this.$alert('确认发表吗？', '提示', {
            //     confirmButtonText: '确定',
            //     callback: function() {
            //         // _this.$router.replace('/');
            //     }
            // });
          }
        })
    },
    //上传图片
    upload:function(file){
      let _this = this,
        formData = new FormData();
      [].forEach.call(file.files,function(el,index){
        formData.append('illustration'+index,el);
      });
      _this.$axios.post("/api/ajax/uploadFile",formData,{headers:{'Content-Type':'multipart/form-data'}}).then(res=>{

      });
    },
    chooseImg:function(){
      let _this = this;
      $(".dropdown-item").find("input").change(function(){
        _this.upload($(this)[0]);
      })
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Post{
    position:relative;
    width:100%;
  }
  .main{
    width:80%;
    margin:50px auto;
    text-align: left;
  }
  .main>.editorBox{
    width:80%;
    border: 1px solid #eee;
  }
  .main>.editorBox>.editor>div{
    height:600px;
  }
  .main>.editorBox>p{
    width:100%;
    line-height: 30px;
    box-shadow: 0 0px 4px rgba(0,0,0,0.157), 0 0px 4px rgba(0,0,0,0.227);
  }
  .main>.editorBox>p{
    width:100%;
    line-height: 40px;
    background: #eee;
    padding-left:20px;
  }
  .main>.editorBox>p>input{
    line-height: 40px;
    border:0;
    width:100%;
    outline: 0;
    background: #eee;
    font-size:20px;
  }
  .main>.postBtn{
    width:80%;
    text-align: right;
  }
  .main>.postBtn>button{
    background:#0DBC79;
    color:#FFF;
    padding: 5px 10px;
    border-radius: 5px;
    border: 0;
    margin-top:20px;
    cursor: pointer;
    outline: 0;
  }
</style>
