import React from 'react'
import { Link } from 'react-router-dom'
import { red } from '@material-ui/core/colors'
import M from 'materialize-css'

const SignUp = () => {
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')

    const onSubmit = () => {
        fetch("/sign-up", {
            method: "post",
            headers: {
                "Contetn-Type": "application/json"
            },
            body: JSON.stringify({
                name: "",
                password: "",
                email: ""
            })
        }).then(res => res.json()).then(data => {
            if (data.error) {
                M.toast({ html: data.error })
            }
        })
    }

    return (
        <div class="mycard">
            <div class="card auth-card input-field">
                <h2>Instagram</h2>
                <input type="text" placeholder="Name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />
                <input type="text" placeholder="E-mail"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <input type="text" placeholder="Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <button class="btn waves-effect waves-light #64b5f6 blue dark-1" onClick={onSubmit}>
                    SignUp
                </button>
                <h6 >
                    <Link to="/login">Already have an account?<span style={{ color: '#ee6e73', paddingLeft: '3px' }}>Login Here</span></Link>
                </h6>
            </div>
        </div>
    )

}

export default SignUp