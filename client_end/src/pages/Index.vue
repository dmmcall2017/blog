<!-- 博客首页 -->
<template>
  <div class="index">
    <Header></Header>
    <div class="main">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
    import Header from '@/pages/Header'
    export default {
        name: "index",
        data(){
          return {

          }
        },
        created:function(){
          console.log(sessionStorage.getItem("user"));
          if(!sessionStorage.getItem("user")){
            this.$router.replace("/login");
          }
        },
        components:{
          Header
        }
    }
</script>

<style scoped>
  .index{
    /*min-width: 1000px;*/
  }
  .main{
    padding-top:51px;
  }

</style>
