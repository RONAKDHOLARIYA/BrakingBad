export let BASE_URL = 'https://breakingbadapi.com'; //base url

//Promise for get api calling.
export let GET = async endpoint => {
  return new Promise((res, rej) => {
    return fetch(`${BASE_URL}/api/${endpoint}`) //make final url with endpoint.
      .then(data => data.text()) //use text for get true response of server.
      .then(data => {
        console.log('raw', data);
        let jsonData = JSON.parse(data); // convert text response to json.
        res(jsonData); //use for success reponse
      })
      .catch(err => {
        console.log(err);
        rej(err); //use for error reponse
      });
  });
};
