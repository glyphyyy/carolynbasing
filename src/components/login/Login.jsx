import "./login.scss";
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../contexts/UserAuthContext';

function useWindowSize() { //Window resize function, checks height of browser and resizes height appropriately
    const [size, setSize] = useState([window.innerHeight]);
    useEffect(() => {
      const handleResize = () => {
        setSize([window.innerHeight]);
      };
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize")
      };
    }, []);
    return size;
}

export default function Login() { //Login function
    const height = useWindowSize();
    const appHeight = () => document.documentElement.style.setProperty('--app-height', `${height}px`);
    appHeight();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            sessionStorage.setItem('isLogged', 'true'); 
            navigate("/admin")
        }
        catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login">
          <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input type="email" onChange={ (e) => setEmail(e.target.value)} required/>
              <label>Password</label>
              <input type="password" onChange={ (e) => setPassword(e.target.value)} required/>
              <p>{error}</p>
              <input type="submit" value="Sign in" />
          </form>
        </div>
  )
}
