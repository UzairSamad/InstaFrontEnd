import React from 'react'

const Profile = () => {

    return (
        <div style={{maxWidth:'550px',margin:'0px auto'}}>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '18px 0px', borderBottom: '1px solid grey' }}>
                <div>
                    <img style={{ width: '160px', height: '160px', borderRadius: '80px' }}
                        src={require('../images/arshad.jfif')}
                    />
                </div>
                <div>
                    <h4>Ladan JAfrii</h4>
                    <div style={{ display: "flex",justifyContent:"space-between",width:'108%' }}>
                        <h5>40 Posts</h5>
                        <h5>41 Followers</h5>
                        <h5>20 Following</h5>
                    </div>
                </div>
            </div>
        <div style={{display:'flex',justifyContent: 'space-between',flexWrap:'wrap'}}>
        <img className='gallery-item' src="https://i.ytimg.com/vi/zAGVQLHvwOY/hqdefault.jpg"/>
        <img className='gallery-item' src="https://i.ytimg.com/vi/zAGVQLHvwOY/hqdefault.jpg"/>
        <img className='gallery-item' src="https://i.ytimg.com/vi/zAGVQLHvwOY/hqdefault.jpg"/>
        <img className='gallery-item' src="https://i.ytimg.com/vi/zAGVQLHvwOY/hqdefault.jpg"/>
        <img className='gallery-item' src="https://i.ytimg.com/vi/zAGVQLHvwOY/hqdefault.jpg"/>
        <img className='gallery-item' src="https://i.ytimg.com/vi/zAGVQLHvwOY/hqdefault.jpg"/>
        </div>

        </div>
    )

}

export default Profile