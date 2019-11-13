import { WSApi } from '@/api/socketApi';


export default {
  namespace: 'picture',
  state: {},
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
    },
    *delPic({ payload }, { call, put }) {
      const data = yield call(WSApi, JSON.stringify(payload));
      console.log(data)
      if (data.error_code === 0) return true;
      return false;
    }

  }
};
