import React, {useState} from 'react'


export default function Gameform({addGame}) {

    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [release, setRelease] = useState("")

    function handleFormSubmit(e){
        e.preventDefault();
        const newGame = {
            name: title,
            release_date: release,
            genre: genre
        };
        addGame(newGame)
    }



    return (
        <div>
            <h1>Add a new game !</h1>
            <form id="AddnewGame" onSubmit={handleFormSubmit} >
                <input className="inputFields" type="text" name="title" placeholder="Title goes here!" onChange={(e) => setTitle(e.target.value)} />
                <input className="inputFields" type="text" name="Release Date" placeholder="Release Date goes here!" onChange={(e) => setRelease(e.target.value)}  />
                <input className="inputFields" type="text" name="Genre" placeholder="Genre goes here!" onChange={(e) => setGenre(e.target.value)}  />
                <div id="buttonContainer"><button id="submitButton" type="submit">Add game!</button></div>
            </form>
        </div>
    )
}
