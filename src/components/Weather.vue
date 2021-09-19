<template>
  <div class="weather">
    <div class="baseInfo">
      <svg v-if="weatherIconArray[0]" t="1631611499530" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3129" width="50" height="50"><path d="M140.2 462.9l5.7-2.9c12.7-91.8 72.6-152.4 166.1-163.2 34.2-3.9 65.3 1.3 101.6 15.4 43.3-65.5 113.7-100.1 195.3-110.4-58.6-87.8-158.5-145.6-272-145.6C156.3 56.2 10 202.5 10 383c0 48.3 10.5 94.1 29.2 135.3 32.7-25.4 58.7-47.7 101-55.4z" fill="#79B7FF" p-id="3130"></path><path d="M0 733.2c0 129.7 105 234.7 234.7 234.7h554.7c129.7 0 234.7-105 234.7-234.7 0-99.6-62.1-184.5-149.5-218.7l0.2-5.3c0-135.5-109.9-245.3-245.3-245.3-85.7 0-161.1 44-205 110.5-23.7-16-52.3-25.2-83-25.2-82.7 0-149.5 66.8-149.5 149.3v3.9C82.8 522.4 0 618.2 0 733.2z" fill="#79B7FF" p-id="3131"></path></svg>
      <svg v-if="weatherIconArray[1]" t="1631768389992" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2326" width="50" height="50"><path d="M861 656.7l144.6-144.6L861 367.6V163.1H656.6L512 18.6 367.4 163.1H163v204.5L18.4 512.1 163 656.7v204.4h204.4L512 1005.7l144.6-144.6H861z" fill="#FCD170" p-id="2327"></path><path d="M512 1015.7c-2.6 0-5.1-1-7.1-2.9L363.3 871.1H163c-5.5 0-10-4.5-10-10V660.8L11.4 519.2c-1.9-1.9-2.9-4.4-2.9-7.1 0-2.7 1.1-5.2 2.9-7.1L153 363.4V163.1c0-5.5 4.5-10 10-10h200.3L504.9 11.5c1.9-1.9 4.4-2.9 7.1-2.9s5.2 1.1 7.1 2.9l141.6 141.6H861c5.5 0 10 4.5 10 10v200.3L1012.6 505c1.9 1.9 2.9 4.4 2.9 7.1 0 2.7-1.1 5.2-2.9 7.1L871 660.8v200.3c0 5.5-4.5 10-10 10H660.7l-141.6 141.6c-2 2-4.5 3-7.1 3zM173 851.1h194.4c2.7 0 5.2 1.1 7.1 2.9L512 991.6l137.5-137.5c1.9-1.9 4.4-2.9 7.1-2.9H851V656.7c0-2.7 1.1-5.2 2.9-7.1l137.5-137.5-137.5-137.5c-1.9-1.9-2.9-4.4-2.9-7.1V173.1H656.6c-2.7 0-5.2-1.1-7.1-2.9L512 32.7 374.5 170.2c-1.9 1.9-4.4 2.9-7.1 2.9H173v194.4c0 2.7-1.1 5.2-2.9 7.1L32.6 512.1l137.5 137.5c1.9 1.9 2.9 4.4 2.9 7.1v194.4z" fill="" p-id="2328"></path><path d="M512 512.1m-257.8 0a257.8 257.8 0 1 0 515.6 0 257.8 257.8 0 1 0-515.6 0Z" fill="#F7DDAD" p-id="2329"></path><path d="M512 779.9c-71.5 0-138.8-27.9-189.4-78.4-50.6-50.6-78.4-117.8-78.4-189.4s27.9-138.8 78.4-189.4c50.6-50.6 117.8-78.4 189.4-78.4 71.5 0 138.8 27.9 189.4 78.4 50.6 50.6 78.4 117.8 78.4 189.4S752 650.9 701.4 701.5 583.5 779.9 512 779.9z m0-515.6c-66.2 0-128.4 25.8-175.2 72.6-46.8 46.8-72.6 109-72.6 175.2s25.8 128.4 72.6 175.2c46.8 46.8 109 72.6 175.2 72.6 66.2 0 128.4-25.8 175.2-72.6 46.8-46.8 72.6-109 72.6-175.2S734 383.7 687.2 336.9c-46.8-46.8-109-72.6-175.2-72.6z" fill="" p-id="2330"></path></svg>

      <div class="temperature">
        <span>{{weatherData.temperture}}</span>
      </div>
      <div class="temperture-info">
        <span>C°</span>
        <span>{{weatherData.tq2}}</span>
      </div>
      <div class="temperture-info temperture-info-2">
        <span>{{ weatherData.cityName}}</span>
      </div>
      <div class="temperture-info temperture-info-3">
        <a-tag color="#87d068">空气质量 优</a-tag>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, reactive, toRefs, computed} from "vue";
import {useStore} from "vuex";

export default {
  name: "Weather",
  setup(){
    const store = useStore()
    let returnCitySN = window.returnCitySN
    let ip = returnCitySN?returnCitySN['cip']:'111.160.70.201'
    console.log(returnCitySN)
    let data = reactive({
      weatherData:{
        cityName:'',
        temperture:'',
        tq2:''
      },
      weatherIconArray:[0,0,0]
    })
    onMounted(async ()=>{
      store.commit('changeLoadingState','isLoadingWeather',true)
      let {data:{data:weatherData}} = await axios.get('http://api.yytianqi.com/forecast7d?key=qqdpas2u9p5l24n2',{
        params:{city: ip}
      })
      store.commit('changeLoadingState','isLoadingWeather',false)
      console.log(store.state.isLoadingWeather)
      data.weatherData.temperture = weatherData.list[0].qw1
      data.weatherData.tq2 = weatherData.list[0].tq2
      data.weatherData.cityName = weatherData.cityName

      data.weatherIconArray.forEach((item,index,arr)=>{
        arr[index]=0
        if(weatherData.tq2.indexOf('晴')){
          arr[0] = 1;
        }
        if(weatherData.tq2.indexOf('云')||weatherData.tq2.indexOf('阴')){
          arr[1] = 1;
        }
      })

    })
    return {
      ...toRefs(data)
    }
  }
}
</script>

<style scoped lang="less">
.weather{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .baseInfo{
    width: 100%;
    display: flex;
    flex-direction: row;
    border-radius: 12px;
    padding: 10px 30px;
    color: white;
    background-image: url("https://tva1.sinaimg.cn/large/008i3skNly1gugbgs5fmtj60py0bu3yf02.jpg");
    svg{
      margin-right: 10px;
    }
    .temperature{
      display: flex;
      width: 60px;
      justify-content: center;
      align-items: center;
      font-size: 35px;
    }
    .temperture-info{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-weight: 450;
    }
    .temperture-info-2{
      font-size: 18px;
      letter-spacing: 2px;
      flex:1;
      margin: 20px;
    }
    .temperture-info-3{

      justify-self: flex-end;
    }
  }
}

</style>