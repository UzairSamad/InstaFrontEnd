import React from 'react'
import { Link } from 'react-router-dom'
import { red } from '@material-ui/core/colors'


const SignUp = () => {

    return (
        <div class="mycard">
            <div class="card auth-card input-field">
                <h2>Instagram</h2>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Password" />
                <button class="btn waves-effect waves-light #64b5f6 blue dark-1">
                    SignUp
                </button>
                <h6 >
                    <Link to="/login">Already have an account?<span style={{ color: '#ee6e73',paddingLeft:'3px' }}>Login Here</span></Link>
                </h6>
            </div>
        </div>
    )

}

export default SignUp