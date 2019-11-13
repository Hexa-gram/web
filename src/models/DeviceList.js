import { WSApi } from '@/api/socketApi';


export default {
  namespace: 'deviceList',
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
      if (data.devices) {
        let arr = [];
        data.devices.forEach((it, key) => { arr.push({ ...it, key: key + 1 + data.page_count * data.page_index }) })
        data.devices = arr;
      }
      yield put({
        type: 'save',
        payload: data
      });
      return data;
    }

  }
};
