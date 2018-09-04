// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import ElementUI from 'element-ui'
import mavonEditor from 'mavon-editor'
import axios from 'axios'
import $ from 'jquery'
import utils from './utils/utils'
import 'element-ui/lib/theme-chalk/index.css'
import 'mavon-editor/dist/css/index.css'




Vue.config.productionTip = false;
Vue.use(vueResource);
Vue.use(ElementUI);
Vue.use(mavonEditor);

Vue.prototype.$axios = axios;
Vue.prototype.$utils = utils;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
