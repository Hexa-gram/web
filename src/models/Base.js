import { getIpAndPort } from '@/api/api';
import { getCookie, setSession } from '@/utils/utils';
import { Socket } from '@/utils/socket';
import { WSApi } from '@/api/socketApi';


export default {
  namespace: 'base',
  state: {
    response: {}
  },
  reducers: {
    save(state, { payload: data }) {
      return { ...state, ...data };
    }
  },
  effects: {
    *getIpAndPort({ payload }, { call, put }) {
      if (!getCookie('sessionID')) return false;
      const { data } = yield call(getIpAndPort, getCookie('sessionID'));
      console.log(data)
      if (data.error_code < 0) {
        console.log('报错了', data.error_code)
      } else {
        Socket.setSocket(data.host, data.port);
        setSession('hulk_ip', data.host)
      }
      return true;
    },
    *titleInfo({ payload }, { call, put }) {
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
