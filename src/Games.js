import React from 'react'
import GameCard from './GameCard'

export default function Games({gamelist}) {

    const GameList = gamelist.map((game) => <GameCard game = {game} />)

    return (
        <div>
            {GameList}
        </div>
    )
}
