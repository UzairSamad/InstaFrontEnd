import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'

const Login = () => {
    const history = useHistory()
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')

    const onSubmit = () => {
    
        fetch("/sign-in", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                password,
                email
            })

        }).then(res => res.json()).then(data => {
            console.log(data)
            // return;
            if (data.eror) {
                M.toast({ html: data.eror, classes: "#c62828 red darken-3" })
            } else {
                console.log(data)
                localStorage.setItem("token",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                M.toast({ html:"Signed In Succecsfully", classes: "#00e676 green accent-3" })
                history.push('/')

            }
        }).catch(err => console.log(err))
    }

    return (
        <div class="mycard">
            <div class="card auth-card input-field">
                <h2>Instagram</h2>
                <input type="text" placeholder="E-mail"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <input type="password" placeholder="Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <button class="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={onSubmit}>
                    Login
                </button>
                <h6 >
                    <Link to="/signup">Don't have an account?<span style={{ color: '#ee6e73', paddingLeft: '3px' }}>Sign up here</span></Link>
                </h6>

            </div>
        </div>
    )

}

export default Login