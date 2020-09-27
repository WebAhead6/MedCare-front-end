const checkResponse = (response) => {
  if (response.status !== 200) {
    throw new Error(response.status);
  }
  return response.json();
};

const postPatientData = (url, method, body = {}) => {
  return fetch(`${process.env.REACT_APP_API}${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(err);
      throw new Error(`fetch postUserData falid ${err}`);
    });
};
export default postPatientData;
