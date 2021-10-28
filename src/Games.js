import React from 'react'
import GameCard from './GameCard'

export default function Games({gamelist, user, port,  addOwned}) {

    const GameList = gamelist.map((game) => <GameCard game = {game} user = {user} port = {port}  addOwned = { addOwned}/>)

    return (
        <div>
            {GameList}
        </div>
    )
}
