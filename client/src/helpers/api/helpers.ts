interface IFetch {
  endpoint: string;
  method: string;
}

async function request({ endpoint, method }: IFetch) {
  try {
    await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    });
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
