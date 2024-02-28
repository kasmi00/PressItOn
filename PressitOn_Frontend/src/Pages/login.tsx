import React from 'react';
import './login.css';

const LoginForm: React.FC = () => {
    return (
        <body>
        <section className="container">
            <div className="login-container">
                <div className="circle circle-one"></div>
                <div className="form-container">
                    <img src="https://i.pinimg.com/564x/7b/2e/cb/7b2ecb3a16370bd8f265d07aac4e1d34.jpg" alt="illustration" className="illustration" height='500' />
                    <h1 className="opacity">LOGIN</h1>
                    <form  className='loginform'>
                        <input  type="text" placeholder="USERNAME" />
                        <input type="password" placeholder="PASSWORD" />
                        <button className="buttonsubmit">SUBMIT</button>
                    </form>
                    <div className="register-forget opacity">
                        <a href="/register">REGISTER</a>
                        <a href="">FORGOT PASSWORD</a>
                    </div>
                </div>
                <div className="circle circle-two"></div>
            </div>
            <div className="theme-btn-container"></div>
        </section>
        </body>
    );
};

export default LoginForm;
