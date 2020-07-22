import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    return (
        <div class="mycard">
            <div class="card auth-card input-field">
                <h2>Instagram</h2>
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Password" />
                <button class="btn waves-effect waves-light #64b5f6 blue darken-1">
                    Login
                </button>
                <h6 >
                    <Link to="/signup">Don't have an account?<span style={{ color: '#ee6e73',paddingLeft:'3px' }}>Sign up here</span></Link>
                </h6>
              
            </div>
        </div>
    )

}

export default Login