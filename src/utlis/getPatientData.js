const checkResponse = (response) => {
  if (response.status !== 200) {
    throw new Error(response.status);
  }
  return response.json();
};

const getUserData = (url) => {
  return fetch(`${process.env.REACT_APP_API}${url}`)
    .then(checkResponse)
    .catch((err) => {
      console.log(err);
      throw new Error(`fetch getDataUser falid ${err}`);
    });
};

export default getUserData;
