import { Login } from '@/api/api';


export default {
  namespace: 'login',
  state: {
    response: {}
  },
  reducers: {
    save(state, { payload: data }) {
      return { ...state, ...data };
    }
  },
  effects: {
    *getLogin({ payload }, { call, put }) {
      const { data } = yield call(Login, payload);
      return data;
    },

  }
}