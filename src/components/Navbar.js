import React, { useContext } from 'react'
import { Link ,useHistory} from 'react-router-dom'
import { UserContext } from '../App'


const NavBar = () => {
    const history = useHistory()
    const { state, dispatch } = useContext(UserContext)
    const navItems = () => {
        if (state) {
            return [
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/createPost">Create Post</Link></li>
                    <li>
                        <button class="btn waves-effect  #f44336 red darken-2"
                            onClick={() => {
                                localStorage.clear()
                                dispatch({ type: "CLEAR" })
                                history.push('/login')
                            }
                            }
                        >
                            Log out
                        </button>
                    </li>
                </ul>

            ]

        } else {
            return [
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </ul>
            ]
        }
    }
    return (
        <nav>
            <div class="nav-wrapper">
                <Link to={state ? "/" : "/login"} class="brand-logo">Instagram</Link>
                {navItems()}
            </div>
        </nav>
    )
}

export default NavBar