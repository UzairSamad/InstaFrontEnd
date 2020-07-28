import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App'

const Home = () => {
    const [data, setData] = useState([])
    const { state, dispatch } = useContext(UserContext)
    console.log(state, 'stateee')

    useEffect(() => {
        let token = localStorage.getItem("token")
        fetch("/all-posts", {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(res => res.json()).then(result => {
            console.log(result)
            setData(result.posts)
        }).catch(err => console.log(err))
    }, [])

    const likePost = (id) => {
        let token = localStorage.getItem("token")
        fetch('/like', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json()).then(result => {
            const newData = data.map(item => {
                if (item._id === result._id) {
                    return result
                } else {
                    return item
                }
            })
            setData(newData)
        }).catch(err => console.log(err))
    }
    const unlikePost = (id) => {
        let token = localStorage.getItem("token")
        fetch('/unlike', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json()).then(result => {
            const newData = data.map(item => {
                if (item._id === result._id) {
                    return result
                } else {
                    return item
                }
            })
            setData(newData)
        }).catch(err => console.log(err))
    }

    return (
        <div className='home'>
            {
                data.map(item => {
                    return (
                        <div className='card home-card' key={item._id}>
                            <h5 style={{ padding: '5px' }}>{item.postedBy.name} </h5>
                            <div className='card-image'>
                                <img src={item.photo} />
                            </div>
                            <div className='card-content'>
                                <i className="material-icons" style={{ color: 'red' }}>favorite</i>
                                {item.likes.includes(state._id) ?
                                    <i class="material-icons" onClick={() => { unlikePost(item._id) }}>thumb_down</i>
                                    : <i class="material-icons" onClick={() => { likePost(item._id) }}>thumb_up</i>
                                }

                                <h6>{item.likes.length} likes</h6>

                                <h6>{item.title}</h6>
                                <p>{item.body}</p>
                                <input type='text' placeholder='Add a comment' />
                            </div>
                        </div>
                    )

                })
            }


        </div>
    )

}

export default Home