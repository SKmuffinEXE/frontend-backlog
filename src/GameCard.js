import React from 'react'
import styled from 'styled-components';


const CardWrapper = styled.div`
        width: 500px;
        margin: 10px;
        padding: 25px;
        box-shadow:  0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.12);
        border-radius: 35px;
        text-align: center; 
        background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);
        font-size:10px;


        & a:hover {
            transform: translateY(-3px);
            box-shadow: 4px 6px 15px -3px rgba(0, 0, 0, 0.65);
            text-decoration: none;
          }
        
          & a:active {
            transform: translateY(-1px);
            box-shadow: 4px 6px 8px -1px rgba(0, 0, 0, 0.65);
          }
        `;
        
    



export default function GameCard({game, user, port,  addOwned}) {

    function addGame(e){
        e.preventDefault()
        fetch(`http://localhost:${port}/user/${user.id}/${game.id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( )})
    .then(r => r.json())
    .then(result =>   {
        // console.log(result)
        addOwned()
    });
    // addOwned(game.id)
    }
    return (
        <CardWrapper>
            <h1>{game.name}</h1> 
            <h3>{game.genre}</h3>
            <h3>{game.release_date}</h3>
            <button onClick = {addGame}>Add to owned</button>
            
        </CardWrapper>
    )
}
