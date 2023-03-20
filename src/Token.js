import React, {useState, useEffect} from 'react'
import { Navigate, useSearchParams, useNavigate } from 'react-router-dom'
import Home from './routes/Home'

const Token = () => {
    const [token, setToken] = useState();
    const [searchParams] = useSearchParams();
    const code = searchParams.get("code");
    const navigate = useNavigate();
    const getToken = async () => {
      const url = 'https://api.intra.42.fr/oauth/token';
      const query =
          '?' +
          'grant_type=' + 
          'authorization_code' +
          '&' +
          'client_id=' +
          process.env.REACT_APP_UID + 
          '&' +
          'client_secret=' +
          process.env.REACT_APP_SECRET +
          '&' +
          'code=' + 
          code + 
          '&' +
          'redirect_uri=' +
          'http://localhost:4242/home' +
          '&' +
          'scope=public';
      const json = await (
          await fetch(url + query, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'X-Mobile': 'false',
                  'response-Type': 'text',
              },
          })
      ).json();
      localStorage.setItem('token', json.access_token);
      setToken(json.access_token);
  }
  useEffect(() => {
        getToken();
  }, [code]);
  
//  return null
  return (
    <div>
        {token ?
            <Navigate to="/" />
        :
            <Home />
        }
    </div>
  );
//  return token? React.cloneElement(children, { token }) : null
}

export default Token