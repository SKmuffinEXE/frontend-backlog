import React from 'react'
import OwnedGameCard from './OwnedGameCard'


export default function Gamesowned({gameList, deleteItem, port}) {
    
    
  



    return (
        <div>
            <h1>Games owned</h1>
            
            {gameList.map(gameObj => <OwnedGameCard key = {gameObj.id} gameObj = {gameObj} port = {port} deleteItem = {deleteItem}/>)}
        </div>
    )
}
