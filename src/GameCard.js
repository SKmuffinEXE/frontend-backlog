import React from 'react'


export default function GameCard({game}) {
    return (
        <div>
            <h1>{game.name}</h1> 
            <h3>{game.genre}</h3>
            <h3>{game.release_date}</h3>
        </div>
    )
}
