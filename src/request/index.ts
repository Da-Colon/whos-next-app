interface IOptions extends RequestInit {}

const request = (path: string, method: string, body?: object): Promise<any> => {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const options: IOptions = { method, headers };

  if (body) {
    options.body = JSON.stringify(body);
  }
  const unexpected = (reject: (message:string) => void) => {
    return (error: Error) => {
      console.error(error.message);
      return reject("There was an unknown error.");
    };
  };

  const expectedResponse = (response: Response, unexpectedReject: () => void) => {
    return new Promise((resolve, reject) => {
      if (!response.ok) {
        response
          .json()
          .then((error) => reject(error.error || error.errors))
          .catch(unexpected(unexpectedReject));
      } else {
        if (response.status === 204) resolve(null);
        response
          .json()
          .then((response) => resolve(response))
          .catch(unexpected(unexpectedReject));
      }
    });
  };

  return new Promise((resolve, reject) => {
    return fetch(`${process.env.REACT_APP_API_URL}${path}`, options)
      .then((response) => resolve(expectedResponse(response, reject)))
      .catch(unexpected(reject));
  });
};

export default request;
