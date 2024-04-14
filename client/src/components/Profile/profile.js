import React from 'react'
import './profile.css'

const profile = () => {
  return (
    <div className='height-100vh d-flex flex-column justify-content-center' >
        <h1 className='text-center m-5'>Profile</h1>
        <div className='profile-container'>
            <div className='profile-image-container'>
            <img src='https://www.w3schools.com/howto/img_avatar.png' alt='profile' className='profile-image'/>
            </div>
        </div>       
    </div>
  )
}

export default profile
