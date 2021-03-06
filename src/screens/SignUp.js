import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { red } from '@material-ui/core/colors'
import M from 'materialize-css'

const SignUp = () => {
    const history = useHistory()
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')

    const onSubmit = () => {
        let params = {
            name,
            password,
            email
        }
        fetch("/sign-up", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                password,
                email
            })

        }).then(res => res.json()).then(data => {
            if (data.error) {
                M.toast({ html: data.error, classes: "#c62828 red darken-3" })

            } else {
                M.toast({ html: data.message, classes: "#00e676 green accent-3" })
                history.push('/login')

            }
        }).catch(err=>console.log(err))
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
                <input type="password" placeholder="Password"
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