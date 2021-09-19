import * as echarts from "echarts/core";

let options = {
  baseInfoOption1: {
    color: ['#6395FA'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '20',
      bottom: '0',
      top: '20',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['区域A', '区域B', '区域C', '区域D', '区域E', '区域F', '区域G'],
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgb(158,158,158)'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgb(125,125,125)'
          }
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '土地块数',
        type: 'bar',
        barWidth: '60%',
        data: [1, 2, 13, 16, 3, 2, 14]
      }
    ]
  },
  deviceState: {
    grid:{
      tooltip : {
        show: true
      },
    },
    series: [{
      type: 'treemap',
      id: 'echarts-package-size',
      animationDurationUpdate: 1000,
      roam: false,
      nodeClick: undefined,
      data: [
        {
          name: "设备",
          size: 10,
          children: [
            {
              name: "正常设备",
              size: 7,
              value: 7
            },
          ],
        },
        {
          name: "设备",
          size: 10,
          children: [
            {
              name: "停机设备",
              size: 4,
              value: 3
            }
          ],
        },
        {
          name: "设备",
          size: 10,
          children: [
            {
              name: "异常设备",
              size: 3,
              value: 3
            }
          ],
        }
      ],
      universalTransition: true,
      label: {
        show: true
      },
      breadcrumb: {
        show: false
      }
    }]
  }
}

async function init(request, type, dom) {
  let myOption = options[type];
  // if(typeof request == 'function' ) let data = await request(myOption)
  let myChart = echarts.init(document.getElementById(dom));
  myChart.setOption(myOption)
  setTimeout(() => {
    myChart.resize()
  }, 0)
  window.onresize = function () {
    myChart.resize();
  };

}

export default init




