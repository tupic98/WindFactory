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
    saveType(state, { type, form }) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.typesResponse[type] = state.typesResponse[type].map((obj: any) => [form].find((o) => o['ID(a:40)'] === obj['ID(a:40)']) || obj);
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
    saveType({ commit }, { type, form }) {
      commit('saveType', { type, form });
    },
  },
  getters: {
  },
  modules: {
  },
});
