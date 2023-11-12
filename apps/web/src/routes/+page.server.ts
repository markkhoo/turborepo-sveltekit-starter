import { env } from '$env/dynamic/private';

export async function load({ params }) {
  async function safeFetch(url: string, options: RequestInit = {}) {
    if (!url || !url.startsWith('http')) return Promise.resolve(null);
    return fetch(url, options)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error(res.statusText);
      })
      .catch((err) => {
        console.error('Fetch Failed: ', err);
        return null;
      });
  }

  return {
    status: 200,
    body: {
      message: `Hello ${params}!`
    },
    data: await safeFetch(env.SERVER_URL)
  };
}
