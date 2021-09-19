let  { createApp } = Vue
import App from './App.vue'
import router from './router'
import store from './store'
import init from "./config/echarts";
let app = createApp(App)
let {useRouter} = VueRouter
app.config.globalProperties.$init = init
axios.defaults.baseURL = 'http://brisk.fun:8080/'

app.use(store)
app.use(router)
app.use(antd)
app.mount('#app')
