import { WSApi } from '@/api/socketApi';
import { getSession } from '@/utils/utils';



export default {
  namespace: 'file',
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
      if (data.records) {
        let arr = [];
        data.records.forEach((it, key) => { arr.push({ ...it, key: key + 1 + data.page_count * data.page_index }) })
        data.records = arr;
      }
      yield put({
        type: 'save',
        payload: data
      });
      return data;
    },
    *download({ payload }, { call, put }) {
      const data = yield call(WSApi, JSON.stringify(payload));
      console.log(data)
      window.open(`http://${getSession('hulk_ip')}:4231${data.uri}`)
      return data;
    }
  }
};
