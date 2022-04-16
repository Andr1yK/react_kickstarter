/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = `${process.env.PUBLIC_URL}/api`;

export const getDataFromServer = <T>(url: string): Promise<T> => {
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
  }).then((result: any) => result.data);
};
