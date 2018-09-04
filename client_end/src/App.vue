<template>
  <div id="app">

    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',


}
</script>

<style>
body,html{
  width:100%;
  height:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width:100%;
  height:100%;
}
*{margin:0;padding:0;box-sizing: border-box;}
li{list-style:none;}
.main{
  width:100%;
}
.clearfix:after{
  content:"";
  overflow: hidden;
  display: block;
  clear:both;
}
.clearfix{
  zoom:1;
}

@font-face {
    font-family: yahei;
    src: url(assets/fonts/WAITAB__.ttf);
  }
</style>
