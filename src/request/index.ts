import { Cookies } from "react-cookie";
interface IOptions extends RequestInit {}

const request = (path: string, method: string, body?: object): Promise<any> => {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const cookie = new Cookies();
  const token = cookie.get("token");
  if (token) headers.set("Authorization", `${token}`);
  
  const options: IOptions = { method, headers };

  if (body) {
    options.body = JSON.stringify(body);
  }


  return new Promise((resolve, reject) => {
    return fetch(`${process.env.REACT_APP_API_URL}${path}`, options)
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
};

export default request;
