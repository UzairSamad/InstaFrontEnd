import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
import Loader from '../components/Loader'

const CreatePost = () => {
    const history = useHistory()

    const [title, setTitle] = React.useState('')
    const [body, setBody] = React.useState('')
    const [image, setImage] = React.useState('')
    const [url, setUrl] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)



    const postData = () => {
        setIsLoading(true)
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "insta-clone")
        data.append("cloud_name", "uzair12")
        fetch("	https://api.cloudinary.com/v1_1/uzair12/image/upload",
            {
                method: "post",
                body: data
            }
        ).then(res => res.json()).then(data => setUrl(data.url))
            .catch(err => console.log(err))

        fetch("/create-post", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title,
                body,
                pic: url
            })

        }).then(res => res.json()).then(data => {
            if (data.error) {
                M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                setIsLoading(false)

            } else {
                M.toast({ html: "Created post Succecsfully", classes: "#00e676 green accent-3" })
                setIsLoading(false)
                history.push('/')

            }
        }).catch(err => console.log(err))
    }

    console.log(title, body)
    return (
        <div className='card input-field' style={{ margin: '30px auto', maxWidth: '500px', padding: '20px', textAlign: 'center' }}
        >
            <input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Title' />
            <input type='text' value={body} onChange={(e) => { setBody(e.target.value) }} placeholder='Body' />
            <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-1">
                    <span>Upload Image</span>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            {isLoading ? <Loader /> :
                <button class="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={postData}>
                    Submit
                </button>
            }

        </div>
    )
}

export default CreatePost
