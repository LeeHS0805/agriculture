<template>
  <div class="device-control">
    <a-card class="device-card" :title="item.name" style="width: 95%" v-for="(item,index) in deviceList">
      <a-row type="flex" justify="start">
        <a-col class="device-detail-card" v-for="(item1,index1) in item.itemList">
          <a-card>
           <template #title>
             <a-space>
               <svg style="top:-3px;position: relative" t="1632027489416" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2468" width="20" height="20"><path d="M659.619884 443.728735a44.143877 44.143877 0 0 1-44.143877-44.143877 104.841708 104.841708 0 0 0-209.683416 0 44.143877 44.143877 0 1 1-88.287755 0 193.129462 193.129462 0 1 1 386.258925 0 44.143877 44.143877 0 0 1-44.143877 44.143877z" fill="#8F9AB3" p-id="2469"></path><path d="M794.810508 443.728735a44.143877 44.143877 0 0 1-44.143877-44.143877 240.032332 240.032332 0 1 0-480.064664 0 44.143877 44.143877 0 0 1-88.287754 0 328.320086 328.320086 0 1 1 656.640172 0 44.143877 44.143877 0 0 1-44.143877 44.143877z" fill="#8F9AB3" p-id="2470"></path><path d="M898.27272 595.473313h-342.115048v-151.744578a44.143877 44.143877 0 0 0-88.287754 0v151.744578h-342.115048a55.179846 55.179846 0 0 0-55.179846 55.179846v246.929813a55.179846 55.179846 0 0 0 55.179846 55.179846h772.51785a55.179846 55.179846 0 0 0 55.179846-55.179846v-246.929813a55.179846 55.179846 0 0 0-55.179846-55.179846zM206.676115 818.261943a44.143877 44.143877 0 1 1 44.143877-44.143878 44.143877 44.143877 0 0 1-44.143877 44.143878z m133.783537 0a44.143877 44.143877 0 1 1 44.143878-44.143878 44.143877 44.143877 0 0 1-44.143878 44.143878z" fill="#8F9AB3" p-id="2471"></path></svg>
               <span>{{item1.code}}</span>
             </a-space>
           </template>
            <a-row type="flex" justify="start"  align="top">
              <a-space size="large">
                <a-col>
                  <p>序列号:</p>
                  <p>电量:</p>
                  <p>网络状态:</p>
                  <p>{{item.standard+':'}}</p>
                </a-col>
                <a-col>
                  <p>{{item1.code}}</p>
                  <p>{{item1.battery}}</p>
                  <p>
                    <a-tag color="green" v-if="item1.network=='connected'">
                      {{item1.network}}
                    </a-tag>
                    <a-tag color="red" v-else>
                      {{item1.network}}
                    </a-tag>
                  </p>
                  <p>{{item1.value}}</p>
                </a-col>
              </a-space>
            </a-row>
          </a-card>
        </a-col>

      </a-row>
    </a-card>
  </div>
</template>

<script>
import {reactive, toRefs} from "vue";
import {mockDevice} from "../config/mockData";

export default {
  name: "deviceControl",
  setup(){
    let data = reactive({
      deviceList: mockDevice
    })
    return {
      ...toRefs(data),
    }
  }
}
</script>

<style scoped lang="less">
.device-control{
  width: 100%;
}
.device-card.ant-card {
  width: 100%;
  min-height: 100px;
  margin: 40px auto 10px auto;
}
.device-detail-card .ant-card{
  margin: 10px 10px;
}
</style>