let  { createApp } = Vue
import App from './App.vue'
import router from './router'
import store from './store'
let app = createApp(App)
let {useRouter} = VueRouter
app.config.globalProperties.$router = useRouter()

app.use(store)
app.use(router)
app.use(antd)
app.mount('#app')
