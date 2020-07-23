import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'


const NavBar = () => {
    const { state, dispatch } = useContext(UserContext)
    const navItems = () => {
        if (state) {
            return [
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/createPost">Create Post</Link></li>
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
                <Link to={ state?"/":"/login"} class="brand-logo">Instagram</Link>
                {navItems()}
            </div>
        </nav>
    )
}

export default NavBar