interface IFetch {
  endpoint: string;
  method: string;
}

async function request({ endpoint, method }: IFetch) {
  try {
    const response = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const jsonRes = await response.json();
    return jsonRes;
  } catch (error) {
    console.log('Could not retrieve endpoint', error);
    return error;
  }
}

export function getLoggedInStatus() {
  return request({
    method: 'GET',
    endpoint: '/auth'
  });
}
