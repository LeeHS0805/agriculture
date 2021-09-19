<template>
  <div class="trace">
    <a-space direction="vertical" size="middle">
      <a-row class="trace-search" type="flex" justify="end" align="top">
        <a-col :span="12">
          <a-input-search
            class="search-input"
            v-model:value="value"
            placeholder="请输入产品唯一溯源码"
            enter-button
            @search="onSearch"
          />
        </a-col>
      </a-row>
      <a-row>
        <a-card style="width: 100%">
          <div>
            <a-descriptions bordered title="基本信息" :size="size">
              <template #extra>
                <a-button type="primary">Edit</a-button>
              </template>
              <a-descriptions-item label="产品名称">富士苹果</a-descriptions-item>
              <a-descriptions-item label="包装方式">箱装</a-descriptions-item>
              <a-descriptions-item label="上架时间">2021/9/17 18:00:00</a-descriptions-item>
              <a-descriptions-item label="产品数量">80</a-descriptions-item>
              <a-descriptions-item label="质量检测">合格</a-descriptions-item>
              <a-descriptions-item label="是否上架">是</a-descriptions-item>
              <a-descriptions-item label="产品介绍">
                富士苹果又称富士士苹果，是苹果的栽培品种之一，是由日本青森县藤崎町农林省园艺试验场东北支场[1]的培育者于1930年代末期培育的，并于1962年引进市场。富士苹果是由美国的红元帅苹果与国光苹果（原产于美国弗吉尼亚州）两个变种杂交得到的。
              </a-descriptions-item>
            </a-descriptions>
            <br />
          </div>
        </a-card>
      </a-row>
      <a-row type="flex" justify="end" align="top">
        <a-card style="width: 100%">
          <a-row>
            <a-col :span="12">
              <a-space direction="vertical" size="large">
                <span class="fs-5 fw-bold">种植记录</span>
                <a-timeline>
                  <a-timeline-item>播种 2020-4-11</a-timeline-item>
                  <a-timeline-item>除草 2021-3-01</a-timeline-item>
                  <a-timeline-item>套袋 2021-5-12</a-timeline-item>
                  <a-timeline-item>采摘 2021-6-08</a-timeline-item>
                </a-timeline>
              </a-space>
            </a-col>
            <a-col :span="12">
              <a-space direction="vertical" size="large">
                <span class="fs-5 fw-bold">物流信息</span>
                <a-timeline>
                  <a-timeline-item>园区内分拣 2021-6-12</a-timeline-item>
                  <a-timeline-item>天津市西青区物流中心 2021-6-13</a-timeline-item>
                  <a-timeline-item>天津市滨海国际机场 2021-6-13</a-timeline-item>
                  <a-timeline-item>黑龙江省哈尔滨市 2021-6-14</a-timeline-item>
                </a-timeline>
              </a-space>
            </a-col>
          </a-row>
        </a-card>
      </a-row>
    </a-space>

  </div>
</template>

<script>
export default {
  name: "Trace"
}
</script>

<style scoped lang="less">
.trace{
  width: 100%;
  padding: 20px 40px;
}
</style>