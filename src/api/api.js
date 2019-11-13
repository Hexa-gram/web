import request from '@/utils/request';

export async function userInfo() {
  return request('/web/users',
    {
      method: 'GET',
    }
  );
}


export async function getIpAndPort(sessionID) {
  return request('/api/conn',
    {
      method: 'GET',
      query: { sessionID: sessionID }
    }
  );
}


export async function Login(params) {
  
  return request(`/api/login_wow`, {
    method: 'POST',
    body: JSON.stringify({
      userName: params.userName,
      PASSWord: params.passWord
    })
  });
}





export async function fetchAddBook(id) {
  console.log('收到的id', id)
  return request(`/gateweb/novel/addBook`, {
    method: 'POST',
    body: JSON.stringify({
      id: id,
    }),
  });
}