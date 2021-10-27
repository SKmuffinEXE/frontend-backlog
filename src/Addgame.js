import React from 'react'

export default function Gameform() {
    return (
        <div>
            <h1>Add a new game !</h1>
            <form id="AddnewGame" >
                <input className="inputFields" type="text" name="title" placeholder="Title goes here!" />
                <input className="inputFields" type="text" name="Release Date" placeholder="Release Date goes here!"  />
                <input className="inputFields" type="text" name="Genre" placeholder="Genre goes here!"  />
                <div id="buttonContainer"><button id="submitButton" type="submit">Add game!</button></div>
            </form>
        </div>
    )
}
