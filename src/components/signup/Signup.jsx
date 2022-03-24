import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../contexts/UserAuthContext';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate("/")
        }
        catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='admin'>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" onChange={ (e) => setEmail(e.target.value)} required />
                    <label>Password</label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value)} required />
                    <input type="submit" value="Sign in" />
                </form>
            </div>
        </div>
  )
}
