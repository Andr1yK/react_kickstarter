/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = `${process.env.PUBLIC_URL}/api`;

export const getDataFromServer = (url: string, duration = 0) => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}${url}`).then((response) => {
      if (!response.ok) {
        reject(
          new Error(`${response.status} - ${response.statusText}`),
        );
      }

      if (!response.headers.get('content-type')?.includes('application/json')) {
        reject(new Error('Current type is not supported'));
      }

      resolve(response.json());
    });

    if (duration > 0) {
      setTimeout(() => {
        reject(new Error('Fetch is too long'));
      }, duration);
    }
  }).then((result: any) => result.data);
};
