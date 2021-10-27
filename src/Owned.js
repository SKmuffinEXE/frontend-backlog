import React from 'react'
// import {useState, useEffect } from 'react'

export default function Gamesowned({gameList, deleteItem}) {
   
    function handleDelete(id){
        fetch(`http://localhost:9292/ownedgames/${id}`, {
      method: "DELETE"
      })
    //   .then((resp) => resp.json())
    //   .then(() => {
    
    //    deleteItem(id)
    //   });
    deleteItem(id)
    }

    return (
        <div>
            {/* users here, button to set user */}
            <h1>Games owned</h1>
            {/* <h1> Users </h1>
            {userList.map(userObj => 
                <div>
                    <span>{userObj.user} &nbsp;</span> 
                    <button onClick = {() => {setUser(prev => userObj.id); handleClick()}}> Login</button>
                </div>
            )} */}
            
            {/* games of selected user */}

            {/* <h1> Games </h1> */}
            {/* console.log(ownedgames[2].game.name) */}
            {gameList.map(gameObj => <div>
                <h1>{gameObj.game.name} </h1>
                <h3>Genre: {gameObj.game.genre}</h3>
                <h3>Release Date: {gameObj.game.release_date}</h3>
                <h3>Status: {gameObj.status} </h3>
                <h3>Hours Played: {gameObj.hours_played}</h3>
                <button onClick = {() => handleDelete(gameObj.id)}>Remove from backlog!</button>
                    
                
                 </div>)}
        </div>
    )
}
