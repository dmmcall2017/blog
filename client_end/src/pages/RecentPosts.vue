<!-- 最近文章 -->
<template>
  <div class="recent">
      <ul>
        <li v-for="(el,index) in postList" :key="index" @click="showDetails(el._id)">
          <h4>{{el.title}}</h4>
          <div>
            {{el.content.replace(/<.+?>/g," ")}}
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        postList: []
      };
    },
    created: function() {
      var _this = this;
      this.$axios.post("/api/ajax/getCompassList").then(res => {
        _this.postList = res.data.success;
      });
    },
    methods:{
      showDetails:function(compassID){
        this.$router.push({
          path:"/index/article",
          query:{id:compassID}
        })
      }
    }
  };
</script>
<style scoped>
  .recent {
    width: 80%;
    margin: 30px auto;
    text-align: left;
  }
  .recent > ul > li {
    cursor: pointer;
  }
  .recent > ul > li + li {
    margin-top: 20px;
  }
  li>div {
    position:relative;
    line-height:20px;
    height:60px;   /* 是line-height的三倍，如果设置了padding属性，也要加上padding的高度*/
    overflow:hidden;
    width:80%;
  }
  li>div:after {
    content:"...";
  }
</style>
