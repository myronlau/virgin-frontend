import Vue from 'vue'
import {
  Layout,
  Menu,
  Icon,
  LocaleProvider,
  Dropdown,
  Avatar,
  Breadcrumb,
  Input,
  Button,
  Form,
  Alert,
  Checkbox
} from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(LocaleProvider)
Vue.use(Dropdown)
Vue.use(Avatar)
Vue.use(Breadcrumb)
Vue.use(Input)
Vue.use(Button)
Vue.use(Form)
Vue.use(Alert)
Vue.use(Checkbox)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
