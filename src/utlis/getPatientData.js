const checkResponse = (response) => {
  if (response.status !== 200) {
    throw new Error(response.status);
  }
  return response.json();
};

const getUserData = (url) => {
  return fetch(`${url}`)
    .then(checkResponse)
    .catch((err) => {
      console.log(err);
      throw new Error(`fetch getDataUser falid ${err}`);
    });
};
export default getUserData;
