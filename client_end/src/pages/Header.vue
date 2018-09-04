<template>
  <div id="header">
      <div class="clearfix">
        <ul class="clearfix tabList">
            <li v-for="(item,index) in tabs" @click="switchPanel(item.path,index)" :key="index" :class="{selected:currentTab==index}">{{ item.name }}</li>
        </ul>
        <ul>
            <li>
                <input type="text" placeholder="搜索文章"/><i class="iconfont icon-sousuo searchIcon"></i>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      tabs: [
        { path: "/index/recent", name: "最近" },
        { path: "/index/all", name: "所有文章" },
        { path: "/index/sorts", name: "归档" },
        { path: "/index/pics", name: "图片" },
        { path: "/index/post", name: "写文章" }
      ],
      currentTab: 0,
      selected: "selected"
    };
  },
  mounted: function() {

  },
  methods: {
    switchPanel: function(path, index) {
      this.$router.replace(path);
      this.currentTab = index;
    }
  }
};
</script>
<style scoped>
#header {
  width: 100%;
  top: 0;
  left: 0;
  background: #fff;
  position: fixed;
  text-align: center;
  z-index: 9999;
}
#header > div {
  width: 80%;
  margin: 0 auto;
}
#header > div > ul {
  float: left;
}
#header > div > ul:first-child {
  width: 80%;
  border-bottom: 1px solid #ccc;
}
#header > div > ul:last-child {
  width: 20%;
  position: relative;
}
#header > div > ul > li > input {
  padding: 8px 10px;
  margin-left: 20px;
  border: 1px solid #eee;
  outline: 0;
}
#header > div > ul > li {
  float: left;
  cursor: pointer;
  width: 20%;
  text-align: center;
  line-height: 50px;
}
#header > div > ul > .selected,
#header > ul > li:hover {
  color: #2ba245;
}
#header > div > .tabList > li:hover {
  color: #2ba245;
}
.searchIcon {
  position: absolute;
  top: 0;
  right: 0;
  color: #ccc;
  font-weight: 900;
}
</style>
