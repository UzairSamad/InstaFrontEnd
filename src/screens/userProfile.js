import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../App'
import { useParams } from 'react-router-dom'
const UserProfile = () => {

    const [data, setData] = useState(null)
    const [profile,setProfile] = useState({})
    const { state, dispatch } = useContext(UserContext)
    const [username, setUserName] = useState('')
    const { userid } = useParams()
    console.log(data,'datadata')

    // console.log(state, 'ssss')
    useEffect(() => {
        let token = localStorage.getItem("token")
        fetch(`/user/${userid}`, {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(res => res.json())
        .then(result => {
            setData(result)
            setProfile(result)
            console.log(data,'result')
        }).catch(err => console.log(err))
       
      
    }, [])

    useEffect(()=>{
        if (data !== null) {
            titleCase(data.user[0].name);
        }
    },[data])
   
    console.log(data, 'aaaaa')
    console.log(profile, 'aaaaa')


    function titleCase(str) {
        return str.toLowerCase().split(' ').map(function (word) {
            setUserName(word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }

    return (
        <>
            {data !== null ?
                <div style={{ maxWidth: '550px', margin: '0px auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '18px 0px', borderBottom: '1px solid grey' }}>
                        <div>
                            <img style={{ width: '160px', height: '160px', borderRadius: '80px' }}
                                src={require('../images/arshad.jfif')}
                            />
                        </div>
                        <div>
                            <h4>{username}</h4>
                            <h5>{data.user[0].email}</h5>
                            <div style={{ display: "flex", justifyContent: "space-between", width: '108%' }}>
                                <h5>{data.posts.length}Posts</h5>
                                <h5>41 Followers</h5>
                                <h5>20 Following</h5>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        {data.posts.map(item => {
                            return <img style={{ width: '30%', marginBottom: '10px', height: '200px' }} src={item.photo} />
                        })}
                    </div>

                </div> : <div>Loading</div>}
        </>
    )

}

export default UserProfile