<template>
  <div class="basicInfo">
    <a-row class="basic-user" :gutter="[8,8]">
      <a-card :bordered="false" >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </a-card>
    </a-row>
    <a-row class="basic-data" :gutter="[8,8]">
      <a-col :span="24" :md=12 >
        <a-card :bordered="false" >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </a-card>
      </a-col>
      <a-col :span="24" :md=12 >
        <a-card title="Card title"  :bordered="false" >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </a-card>
      </a-col>
    </a-row>

    <a-row class="basic-data" :gutter="[8,8]">
      <a-col :span="12">
        <a-card title="Card title" :bordered="false" >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="Card title" :bordered="false" >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "BasicInfo"
}
</script>

<style scoped lang="less">
.basic-user .ant-card{
  width: 100%;
  min-height: 100px;
  margin: 0px auto 10px auto;
}
.basic-data .ant-card{
  width: 95%;
  min-height: 300px;
  margin: 10px auto;
}

</style>