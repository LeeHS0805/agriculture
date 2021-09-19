<template>
  <div class="basicInfo">
    <a-row class="basic-user" :gutter="[8,8]">
      <a-card :bordered="false">
        <a-row type="flex" align="middle" justify="left">
          <a-col :span="1">
            <a-avatar :size="64" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"/>
          </a-col>
          <a-col :span="4">
            <a-row type="flex" align="middle" justify="center">
              <span class="username text-center fs-3">李鑫磊</span>
            </a-row>
          </a-col>
        </a-row>
      </a-card>
    </a-row>
    <a-row class="basic-data" :gutter="[8,8]">
      <a-col :span="12" :md=12>
        <a-card :bordered="false" title="土地情况概览">
          <div id="nums" class="echarts"></div>
        </a-card>
      </a-col>
      <a-col :span="12" :md=12>
        <a-card title="设备情况" :bordered="false">
          <div id="deviceState" class="echarts"></div>
        </a-card>
      </a-col>
    </a-row>

    <a-row class="basic-data" :gutter="[8,8]">
      <a-col :span="12">
        <a-card title="任务日志" :bordered="false">
          <a-list
            class="demo-loadmore-list"
            :loading="loading"
            item-layout="horizontal"
            :data-source="dataList"
          >
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  :description="item.task"
                >
                  <template #title>
                    <a>{{ item.name }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar :src="item.img"/>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
            <template #loadMore>
              <div :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
                <a-spin v-if="loadingMore"/>
                <a-button v-else @click="loadMore">loading more</a-button>
              </div>
            </template>
          </a-list>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="天气情况" :bordered="false" :loading="isLoadingWeather">
          <a-row type="flex" align="middle" justify="center">
            <Weather></Weather>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>

import {getCurrentInstance, onMounted, reactive, toRefs} from "vue";
import Weather from "../components/Weather";
import {useStore} from "vuex";

export default {
  name: "BasicInfo",
  components: {
    Weather
  },
  setup() {
    const store = useStore()
    let data = reactive({
      dataList: [
        {
          name: '李鑫磊',
          task: '区域A/区域B 灌溉温度季节性调整检测',
          img: 'https://img0.baidu.com/it/u=3644579383,1360526475&fm=26&fmt=auto&gp=0.jpg'
        },
        {
          name: '李鑫磊',
          task: '区域A/区域B 灌溉温度季节性调整检测 ',
          img: 'https://img0.baidu.com/it/u=3644579383,1360526475&fm=26&fmt=auto&gp=0.jpg'
        },
        {
          name: '李鑫磊',
          task: '区域A/区域B 灌溉温度季节性调整检测',
          img: 'https://img0.baidu.com/it/u=3644579383,1360526475&fm=26&fmt=auto&gp=0.jpg'
        },
        {
          name: '彭业诚',
          task: '区域A/区域D 减弱光照强度',
          img: 'https://img0.baidu.com/it/u=1802349811,1521865475&fm=26&fmt=auto&gp=0.jpg'
        }],
      isLoadingWeather: store.state.isLoadingWeather
    })
    let getUserFarm = function (){
      axios.get('/area/farm',{user_id:2}).then((res)=>{
        console.log(res)
      })
    }

    onMounted(() => {
      let init = getCurrentInstance().proxy.$init;
      getUserFarm()
      init('', 'baseInfoOption1', 'nums')
      init('', 'deviceState', 'deviceState')
    })
    setTimeout(()=>{
      store.commit('changeLoadingState','isLoadingWeather')
    },100)
    return {
      ...toRefs(data)
    }
  }

}
</script>

<style scoped lang="less">
.basic-user .ant-card {
  width: 100%;
  min-height: 100px;
  margin: 0px auto 10px auto;
}

.basic-data .ant-card {
  width: 95%;
  margin: 10px auto;
  letter-spacing: 1px;
}

span.username {
  letter-spacing: 2px;
}

.echarts {
  width: 100%;
  height: 180px;
}

iframe {
  width: 100%;
  height: 300px;
}
</style>