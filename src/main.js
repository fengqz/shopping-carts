import Vue from 'vue';
import App from './App';
import router from './router/index';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store/index';
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


