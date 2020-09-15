import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    constlist: {
      projectInfo: [],
    },
    flag:false,
    city:{
      name:'太原',
      // 编码值
      code:10
    }
  },
  mutations: {
    setConstlist(state,status){
      state.constlist.projectInfo.push(...status) 
    },
    setConstlistNull(state){
      let len = state.constlist.projectInfo.length;
      state.constlist.projectInfo.splice(0,len);
    },
    // 全部分类 全部时间 推荐排序  距离最近
    setFlag(state,status){
      state.flag = status
    },
    // 城市切换
    setCity(state,data){
      state.city= data;
    }
  },
  actions: {
  },
  modules: {
  }
})
