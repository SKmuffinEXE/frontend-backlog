import React from 'react'
import OwnedGameCard from './OwnedGameCard'
import {useState, useEffect} from 'react'
import styled from 'styled-components';



export default function Gamesowned({gameList, deleteItem, port,user}) {



    const [hoursplayed, setHoursPlayed] =useState("")
    
    useEffect(() => {
       fetch(`http://localhost:${port}/user/${user}/totalhours`)
       .then(res => res.json())
       .then((totalhours) => setHoursPlayed(totalhours))
       console.log(hoursplayed)
    },[user])
  



    return (
        <div>
            <h1>Games owned</h1>
            <h3>Total Hours: {hoursplayed} </h3>
            <div id="flexstyle">
            {gameList.map(gameObj => <OwnedGameCard key = {gameObj.id} gameObj = {gameObj} port = {port} deleteItem = {deleteItem}/>)}
            </div>
        </div>
    )
}

