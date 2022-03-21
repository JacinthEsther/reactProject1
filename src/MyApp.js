import React from 'react'
import "./components/MyApp.css"
import ProfileCard from "./components/ProfileCard"

function MyApp() {
    return (
    <div className="myapp-container"> 
        <ProfileCard username="Esther" hobby="reading"/>
        <ProfileCard username="Jacinta" hobby="making money"/>
        {/* <MyButtons buttonName="button1" color="primary" background="pink"/>
        <MyButtons buttonName="button2" color="green" background="white"/>
        <MyButtons buttonName="button3"  color="yellow" background="green"/> */}

    </div>
    )
}

export default MyApp