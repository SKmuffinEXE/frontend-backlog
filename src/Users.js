import React from 'react'
import {useState, useEffect } from 'react'

export default function Users({setUser}) {

    const [userList, setUserList] = useState([])
    // const [user, setUser] = useState()
    useEffect(() => {
        fetch("http://localhost:9292/user")
        .then(res => res.json())
        .then((gameObj) => {
            
            setUserList(gameObj)
            // console.log(gameObj[0].id)
        })
      },[])

    

    return (
        <div>
            <h1> Login here</h1>
            
            <h1> Users </h1>
            {userList.map(userObj => 
                <div>
                    <span>{userObj.user} &nbsp;</span> 
                    <button onClick = {() => {setUser(prev => userObj.id);}}> Login</button>
                </div>
            )}
        </div>
    )
}