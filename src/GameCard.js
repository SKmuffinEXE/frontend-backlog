import React from 'react'
import styled from 'styled-components';


const CardWrapper = styled.div`
        width: 500px;
        margin: 10px;
        padding: 25px;
        box-shadow:  0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.12);
        border-radius: 35px;
        text-align: center;   
        
    `



export default function GameCard({game}) {
    return (
        <CardWrapper>
            <h1>{game.name}</h1> 
            <h3>{game.genre}</h3>
            <h3>{game.release_date}</h3>
            <button>Add to owned</button>
            
        </CardWrapper>
    )
}
