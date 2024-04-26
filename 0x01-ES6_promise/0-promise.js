function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('API response');
    }, 1000);
  });
}

export default getResponseFromAPI;
