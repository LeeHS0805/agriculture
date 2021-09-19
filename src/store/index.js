let {createStore} = Vuex

export default createStore({
  state: {
    isLoadingWeather: false,
  },
  mutations: {
    changeLoadingState(state, type, flag) {
      state[type] = Boolean(flag);
    }
  },
  actions: {},
  modules: {}
})
