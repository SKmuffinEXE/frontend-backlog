import React from 'react'
import {useState, useEffect } from 'react'

export default function Gamesowned() {
    const [userList, setUserList] = useState([])
    const [user, setUser] = useState()
    const [gameList, setGameList] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/user")
        .then(res => res.json())
        .then((gameObj) => {
            
            setUserList(gameObj)
            console.log(gameObj[0].id)
        })
      },[])

      function handleClick(){
        console.log(user)
        setTimeout('', 7000);
        fetch(`http://localhost:9292/user/${user}`)
        .then(res => res.json())
        .then((gameObj) => {
            
            setGameList(gameObj.ownedgames)
        }) 
    }

    return (
        <div>
            {/* users here, button to set user */}
            <h1>Gamesowned</h1>
            <h1> Users </h1>
            {userList.map(userObj => 
                <div>
                    <span>{userObj.user} &nbsp;</span> 
                    <button onClick = {() => {setUser(prev => userObj.id); handleClick()}}> Login</button>
                </div>
            )}
            
            {/* games of selected user */}

            <h1> Games </h1>
            {/* console.log(ownedgames[2].game.name) */}
            {gameList.map(gameObj => <div>
                <h1>{gameObj.game.name} </h1>
                <h3>Genre: {gameObj.game.genre}</h3>
                <h3>Release Date: {gameObj.game.release_date}</h3>
                <h3>Status: {gameObj.status} </h3>
                <h3>Hours Played: {gameObj.hours_played}</h3>
                    
                
                 </div>)}
        </div>
    )
}
