import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teststate:""//测试vuex
  },
  mutations: {
    CHANGE_TESTSTATE(state, obj) {
		state.teststate=obj.teststate;
	}
  },
  actions: {
    changetitletest(context,teststate){
		context.commit('CHANGE_TESTSTATE',{'teststate':teststate})
	}
  }
})
