import Vue from 'vue';
import App from './App';
import router from './router/index';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource';
import store from './store/index';
import InfiniteLoading from 'vue-infinite-loading';
Vue.use(VueResource);
Vue.use(MuseUI);
Vue.use(Element);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
   template: '<App/>',
  components: { App }
})
/*import InfiniteLoading from './components/InfiniteLoading';*/


