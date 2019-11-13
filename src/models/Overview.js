import { WSApi } from '@/api/socketApi';


export default {
  namespace: 'overview',
  state: {
  },
  reducers: {
    save(state, { payload: data }) {
      return { ...state, ...data };
    }
  },
  effects: {
    *getData({ payload }, { call, put }) {
      const data = yield call(WSApi, JSON.stringify(payload));
      console.log(data)
      yield put({
        type: 'save',
        payload: data
      });
      return data;
    }

  }
};
