import React from 'react'
import {useState} from 'react'
import styled from 'styled-components';

export default function OwnedGameCard({gameObj, port, deleteItem, updateTotalHours}) {


    

    const [status, setStatus] = useState("")
    const [hours, setHours] = useState("")
    const [editMode, setEditMode] = useState(false)

    const [displayHours, setDisplayHours] = useState(gameObj.hours_played)
    const [displayStatus, setDisplayStatus] = useState(gameObj.status)

    function toggleEditMode(e){
        e.preventDefault()
        setEditMode(!editMode)
    }

    function handleSubmit(e, id){
        e.preventDefault()
        fetch(`http://localhost:${port}/ownedgames/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            status: status,
            hours_played: hours
    },
    )})
    .then(r => r.json())
    .then(result => {
        setDisplayHours(result.hours_played)
        setDisplayStatus(result.status)
        gameObj.hours_played = result.hours_played
        gameObj.status = result.status
    });

    updateTotalHours()
    }

    function handleDelete(id){ 
        fetch(`http://localhost:${port}/ownedgames/${id}`, {
          method: "DELETE"
          })
    
        deleteItem(id)
        }

    return (
        <div>
            <div id="ownedstyle">
                <form onSubmit={(e) => handleSubmit(e, gameObj.id)}>
                <h1>{gameObj.game.name} </h1>
                <h3>Genre: {gameObj.game.genre}</h3>
                
                <h3>Release Date: {gameObj.game.release_date}  </h3>
                <h3>Status: {displayStatus} </h3>
                {editMode ? <input defaultValue = {status} onChange={(e) => setStatus(e.target.value)}/> : ""}
                
                <h3>Hours Played: {displayHours}</h3> 
                
                {editMode ? <input defaultValue = {gameObj.hours_played} onChange = {(e) => setHours(e.target.value)}/> : ""}
                <br/>
                <button onClick = {() => handleDelete(gameObj.id)}>Remove from backlog!</button>&nbsp;       

                {editMode ? <button onClick={(e) => {toggleEditMode(e)}}> Unedit </button> : <button onClick={(e) => {toggleEditMode(e)
                {setStatus(gameObj.status)} {setHours(gameObj.hours_played)}
                }}>Edit</button>} <br/>

                {editMode ? <button type = "submit"> Submit</button> : ""}         
                </form>
                 </div>
        </div>
    )
}



