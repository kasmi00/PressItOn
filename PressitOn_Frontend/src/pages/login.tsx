import React, { useState } from 'react';
import './css/login.css';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const Login: React.FC = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '', mobileNo: '' });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const nav =useNavigate();


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/user/save', formData);
            setSuccessMessage(response.data);
            setError('');
        } catch (error: any) {
            setError(error.response.data);
            setSuccessMessage('');
        }
    };

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/user/validateLogin', formData);
            setSuccessMessage(response.data);
            nav('/dashboard');
            setError('');
            // If login is successful, navigate to a different page

        } catch (error: any) {
            setError(error.response.data);
            setSuccessMessage('');
        }
    };

    return (
        <div className="loginbg">
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" checked={isChecked} onChange={handleCheckboxChange} />
                <div className="signup">
                    <form className='inputform' onSubmit={handleSignup}>
                        <label htmlFor="chk" aria-hidden="true" className="logsi">Sign up</label>
                        <input type="text" name="username" placeholder="User name" value={formData.username} onChange={handleInputChange} required />
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                        <input type="text" name="mobileNo" placeholder="Mobile number" value={formData.mobileNo} onChange={handleInputChange} required />
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
                        <button type="submit" className="btn">Sign up</button>
                        {successMessage && <p className="success">{successMessage}</p>}
                        {error && <p className="error">{error}</p>}
                    </form>
                </div>
                <div className="login">
                    <form onSubmit={handleLogin}>
                        <label htmlFor="chk" aria-hidden="true" className="logsi">Login</label>
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
                        <button type="submit" className="btn">Login</button>
                        {successMessage && <p className="success">{successMessage}</p>}
                        {error && <p className="error">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
