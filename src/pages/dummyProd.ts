export async function fet() {
  const url = 'https://datagram-products-v1.p.rapidapi.com/test';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'datagram-products-v1.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
fet();
