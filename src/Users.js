import React from 'react'
import {useState, useEffect } from 'react'

export default function Users({setUser, port}) {

    const [userList, setUserList] = useState([])
    useEffect(() => {
        fetch(`http://localhost:${port}/user`)
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
                <div key = {userObj.id}>
                    <span>{userObj.user} &nbsp;</span> 
                    <button onClick = {() => {setUser(prev => userObj.id);}}> Login</button>
                </div>
            )}
        </div>
    )
}
