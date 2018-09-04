<template>
  <div class="Post">
    <div class="main">
      <div class="editorBox">
        <div class="editor"><mavon-editor/></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    data () {
      return {

      }
    },
    mounted:function(){

    },
    methods:{

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
