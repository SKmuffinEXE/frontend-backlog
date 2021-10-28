import React from 'react'
import GameCard from './GameCard'
import styled from 'styled-components';

export default function Games({gamelist, user, port,  addOwned}) {

    const ContainerLayout = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
  `;



    const GameList = gamelist.map((game) => <GameCard game = {game} user = {user} port = {port}  addOwned = { addOwned}/>)

    return (
        <ContainerLayout>
            {GameList}
        </ContainerLayout>
    )
}
