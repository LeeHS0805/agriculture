let cdn = {
    css: [
        //ant
        'https://cdn.bootcdn.net/ajax/libs/ant-design-vue/2.2.2/antd.css'
    ],
    js: [
        // vue must at first!
        'https://unpkg.com/vue@next', // vuejs
        // vue-router
        'https://unpkg.com/vue-router@next',
        // axios
        'https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.js',
        // Vuex
        'https://unpkg.com/vuex@next',
        // ant
        'https://cdn.bootcdn.net/ajax/libs/ant-design-vue/2.2.2/antd-with-locales.js',
        // echarts
        'https://cdn.bootcdn.net/ajax/libs/echarts/5.2.0/echarts.min.js',

    ]
}
let externals={
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'axios': 'axios',
    'vuex': 'Vuex',
    'ant-design-vue': 'antd'
}
module.exports={
    lintOnSave:false,
    devServer:{
        disableHostCheck: true,
        historyApiFallback: {
            index: '/index.html' //与output的publicPath
        },
    },
    configureWebpack:{
        externals:externals
    },
    chainWebpack (config) {
        config.plugin('html').tap(args => {
            args[0].cdn = cdn
            return args
        })
    }
}


