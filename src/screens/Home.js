import React, { useState, useEffect } from 'react'

const Home = () => {
    const [data, setData] = useState([])

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