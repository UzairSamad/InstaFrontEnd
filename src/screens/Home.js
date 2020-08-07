import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App'
import M from 'materialize-css'


const Home = () => {
    const [data, setData] = useState([])
    const { state, dispatch } = useContext(UserContext)
    console.log(data, ' ')

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
    const addComment = (text, postId) => {
        let token = localStorage.getItem("token")

        fetch('/comment', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                postId,
                text
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
    const deletePost = (postid) => {
        let token = localStorage.getItem("token")

        fetch(`/delete/${postid}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
        }).then(res => res.json()).then(result => {
            let newData = data.filter(item => item._id !== result._id)
            M.toast({ html: "Deleted Succesfully", classes: "#00e676 green accent-3" })
            setData(newData)
        }).catch(err => console.log(err))

    }
    return (
        <div className='home'>
            {
                data.map(item => {
                    return (
                        <div className='card home-card' key={item._id}>
                            <h5 style={{ padding: '5px' }}>{item.postedBy.name} {item.postedBy._id === state._id && <i class="material-icons" style={{ float: 'right' }} onClick={() => { deletePost(item._id) }}>delete</i>} </h5>
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
                                {
                                    item.comments.map(record => {
                                        return <h6 key={record._id} ><span style={{ fontWeight: "500" }}>{record.postedBy.name}</span>{record.text}</h6>
                                    })
                                }
                                <form onSubmit={(e) => {
                                    e.preventDefault()
                                    addComment(e.target[0].value, item._id)
                                }}>
                                    <input type='text' placeholder='Add a comment' />
                                </form>
                            </div>
                        </div>
                    )

                })
            }


        </div>
    )

}

export default Home