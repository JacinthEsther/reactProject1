import React from 'react'
import image from "../assets/logo.svg"
import  "./ProfileCard.css"

const ProfileCard = (props) => {

    const handleClick = () => {
        console.log(props)
    }
  return (
    <div className="profile-card">
        <img src={image} alt="profile card" className="profile-card-avatar"/>
        <div className="details-container">
            <div className="firstname-details">
                <p>Name</p>
                <h1>{props.username}</h1>

            </div>
            <div className="hobby-details">
                <p>Hobby</p>
                <h1>{props.hobby}</h1>
            </div>
        </div>
        <button  onClick={handleClick}>Click Me</button>
    </div>

  )
}

export default ProfileCard