import { createStore } from 'vuex';

export default createStore({
  state: {
    typesResponse: {},
    step1: true,
    step2: false,
    step3: false,
  },
  mutations: {
    setTypesResponse(state, payload) {
      state.typesResponse = payload;
    },
    setStep1(state, payload) {
      state.step1 = payload;
    },
    setStep2(state, payload) {
      state.step2 = payload;
    },
    setStep3(state, payload) {
      state.step3 = payload;
    },
  },
  actions: {
    setTypesResponse({ commit }, payload) {
      commit('setTypesResponse', payload);
    },
    setStep1({ commit }, payload) {
      commit('setStep1', payload);
    },
    setStep2({ commit }, payload) {
      commit('setStep2', payload);
    },
    setStep3({ commit }, payload) {
      commit('setStep3', payload);
    },
  },
  getters: {
  },
  modules: {
  },
});
