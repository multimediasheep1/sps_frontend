import { LoginResponse } from "../interfaces/session";

const requestLogin = async ( request: string) => {

  console.log("LOGIN");
  try {
    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: request  
      ,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const json: LoginResponse = await response.json();
    localStorage.setItem('token', json.token);

    console.log(json);
    return json;
  } catch (error) {
    console.error('There was a problem with the fetch:', error);
  }
};

export const logout = (): void => {
    localStorage.removeItem('token');
  };
  
 export const getToken = (): string | null => {
    return localStorage.getItem('token');
  };

export default requestLogin;



