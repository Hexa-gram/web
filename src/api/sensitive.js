import request from '@/utils/request';


export async function dlSensitiveFile(uri) {
  return request('/api' + uri,
    {
      method: 'GET',
    });
}
