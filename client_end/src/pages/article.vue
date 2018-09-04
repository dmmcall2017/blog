<template>
    <div class="article">
      <p class="articleTitle"></p>
      <div class="articleContainer v-note-wrapper markdown-body"></div>
    </div>
</template>

<script>
    export default {
        name: "article",
        data(){
            return{
                id:'',
                compass:{},
                commentList:[]
            }
        },
        mounted:function(){
            this.id = this.$route.query.id;
            this.$axios.post('/api/ajax/getOneCompass',{id:this.id}).then(res => {
                this.compass.content = res.data.success[0].content;//.toString().replace(/\n/g,"<br/>");
                $(".article>.articleContainer").append($(this.compass.content)).find("p").css({
                  "width": "80%"
                }).find("img").each(function() {
                  if ($(this).attr("src").indexOf("http") === -1) {
                    $(this).attr("src", "http://192.168.1.143:3000/images/" + $(this).attr("alt")).css({
                      "width":"80%"
                    });
                  }
                });
            });
        }
    }
</script>

<style scoped>
  .article{
    position:relative;
    width:100%;
  }
  .articleContainer{
    width:80%;
    margin:50px auto;
    text-align: left;
  }
  .article>.articleContainer>img{
    width:100%;
  }
</style>
