<!--suppress ALL -->
<template>
  <div class="home">
    <a-layout :style="{ height: '100vh'}">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo">云上稻香智慧管理平台</div>
        <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
          <a-menu-item key="0" @click="changeMenuItem(0)">
            <user-outlined/>
            <span>基础信息</span>
          </a-menu-item>
          <a-menu-item key="1" @click="changeMenuItem(1)">
            <CodepenOutlined/>
            <span>地块管理</span>
          </a-menu-item>
          <a-menu-item key="2" @click="changeMenuItem(2)">
            <upload-outlined/>
            <span>设备管理</span>
          </a-menu-item>
          <a-menu-item key="3" @click="changeMenuItem(3)">
            <BranchesOutlined/>
            <span>产品溯源</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding-left: 15px">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)"/>
        </a-layout-header>
        <a-layout-content
          :style="{ minHeight: '280px' }">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import {
  UserOutlined,
  CodepenOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DingtalkOutlined,
  BranchesOutlined
} from '@ant-design/icons-vue';
import menu from "../config/menu";
import {useStore} from "vuex";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

let {ref, getCurrentInstance} = Vue
let {useRouter} = VueRouter

export default {
  name: 'Home',
  components: {
    UserOutlined,
    CodepenOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DingtalkOutlined,
    BranchesOutlined
  },
  setup: function () {
    let router = useRouter()
    let route = useRoute()
    let store = useStore()
    let collapsed = ref(false)
    let currentSelectArray = menu.filter((item, index) => {
      console.log(item.path == route.path.split('/')[2],11)
      return item.path == route.path.split('/')[2]
    })
    let selectedKeys = ref([currentSelectArray[0].id.toString()])
    console.log(selectedKeys)


    let changeMenuItem = (id) => {
      router.push('/home/' + menu[id].path)
    }
    return {
      menu,
      selectedKeys,
      collapsed,
      changeMenuItem,
    };
  }
}
</script>

<style lang="less">
.logo {
  height: 32px;
  line-height: 32px;
  overflow: hidden;
  letter-spacing: 1px;
  font-size: 14px;
  background: rgba(255, 255, 255, .2);
  margin: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
}

.ant-layout-header {
  position: relative;
  z-index: 1000;
  box-shadow: 0 1px 14px rgba(12, 12, 12, 0.08);
}

.ant-layout-content {
  padding-bottom: 10px;
  overflow: scroll;
}

// 滚动条隐藏
.ant-layout-content::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.ant-layout-content {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}

</style>
