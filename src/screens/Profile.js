import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../App'

const Profile = () => {

    const [data, setData] = useState([])
    const { state, dispatch } = useContext(UserContext)
    const [username, setUserName] = useState('')

    console.log(state, 'ssss')
    useEffect(() => {
        let token = localStorage.getItem("token")
        fetch('/my-posts', {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(res => res.json()).then(result => {
            console.log(result)
            setData(result.posts)
            console.log(data, 'data')
        }).catch(err => console.log(err))

        if (state !== null) {
            titleCase(state.name);
        }
    }, [])

    function titleCase(str) {
        return str.toLowerCase().split(' ').map(function (word) {
            setUserName(word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }

    return (
        <div style={{ maxWidth: '550px', margin: '0px auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '18px 0px', borderBottom: '1px solid grey' }}>
                <div>
                    <img style={{ width: '160px', height: '160px', borderRadius: '80px' }}
                        src={require('../images/arshad.jfif')}
                    />
                </div>
                <div>
                    <h4>{username}</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: '108%' }}>
                        <h5>40 Posts</h5>
                        <h5>41 Followers</h5>
                        <h5>20 Following</h5>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {data.map(item => {
                    return <img style={{ width: '30%', marginBottom: '10px', height: '200px' }} src={item.photo} />
                })}
            </div>

        </div>
    )

}

export default Profile