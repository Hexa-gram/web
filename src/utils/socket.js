import WSClient from 'engine.io-client';
import { getCookie } from '@/utils/utils';
// import { getCookie } from '@/utils/lang_cookie';
// import WSApi from '@/api/socketApi';

export const Socket = {
  connection: null,
  getSocket: () => {
    return Socket.connection;
  },
  setSocket: (ip, port) => {
    //language=${getCookie('language')}
    Socket.connection = WSClient(`ws://${ip}:${port}?sessionID=${getCookie('sessionID')}`);
  }
}

