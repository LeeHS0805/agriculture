let mockDevice = [
  {
    name:'空气湿度控制系统',
    standard:'湿度',
    itemList:[
      {
        code:'Ab0001',
        battery: '90%',
        network:'connected',
        value:'30%'
      },
      {
        code:'Ab0002',
        battery: '53%',
        network:'connected',
        value:'33%'
      },
      {
        code:'Ab0003',
        battery: '66%',
        network:'connected',
        value:'29%'
      },
      {
        code:'Ab0004',
        battery: '-%',
        network:'disconnected',
        value:'--'
      },
    ]
  },
  {
    name:'光照强度控制系统',
    standard:'光照',
    itemList:[
      {
        code:'Bb0001',
        battery: '99%',
        network:'connected',
        value:'980Lx'
      },
      {
        code:'Bb0002',
        battery: '88%',
        network:'connected',
        value:'983Lx'
      },
      {
        code:'Bb0003',
        battery: '20%',
        network:'connected',
        value:'981Lx'
      },
      {
        code:'Bb0004',
        battery: '-%',
        network:'disconnected',
        value:'--'
      },
    ]
  },
  {
    name:'土壤湿度控制系统',
    standard:'湿度',
    itemList:[
      {
        code:'Cb0001',
        battery: '99%',
        network:'connected',
        value:'23%'
      },
      {
        code:'Cb0002',
        battery: '88%',
        network:'connected',
        value:'19%'
      },
      {
        code:'Cb0003',
        battery: '13%',
        network:'connected',
        value:'10%'
      },
      {
        code:'Cb0004',
        battery: '12%',
        network:'connected',
        value:'13%'
      },
    ]
  },

]
export {
  mockDevice
}