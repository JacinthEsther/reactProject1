// import React from 'react'
import image from "../assets/logo.svg"
import  "./ProfileCard.css"
import React,{useState} from 'react'

const ProfileCard = (props) => {
let {username,hobby} = props
    const handleClick = () => {
        let newObject = {username:`Miss ${username}`,hobby: `I love  ${hobby}`}
        setState({...state,...newObject})
        // username:Esther, hobby: eating, username:My Esther, hobby:reading
        // newObject is updating the state when you click
    }

    const[state,setState] = useState({username: username, hobby: hobby}) //this is destructuring 
    return (
    <div className="profile-card">
        <img src={image} alt="profile card" className="profile-card-avatar"/>
        <div className="details-container">
            <div className="firstname-details">
                <p>Name</p>
                <h1>{state.username}</h1>

            </div>
            <div className="hobby-details">
                <p>Hobby</p>
                <h1>{state.hobby}</h1>
            </div>
        </div>
        <button  onClick={handleClick}>Click Me</button>
    </div>

  )
}

export default ProfileCard