import { createStore } from 'vuex'

export default createStore({
  state: {
    processing:0
    /*
    these are the cressponding codes for the processing life cycle
    0=>drop the file
    1=>processing
    2=>ready to be downloaded
    */
  },
  getters: {
    getProcessing(state){
      return state.processing;
    }
  },
  mutations: {
    setProcessing(state,payload){
      state.processing = payload.value;
    }
  },
  actions: {
  },
  modules: {
  }
})
