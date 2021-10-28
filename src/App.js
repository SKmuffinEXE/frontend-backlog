import { Switch, Route  } from "react-router-dom";
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import Games from './Games';
import Owned from './Owned'
import Addgame from './Addgame'
import {useState, useEffect } from 'react'
import Users from "./Users";




function App() {
  // change port number here for easy access
  const port = 3075

  const [games, setGames] = useState([])
  const [user, setUser] = useState("")
  const [gameList, setGameList] = useState([])

 

  useEffect(() => {
    fetch(`http://localhost:${port}/games`)
    .then(res => res.json())
    .then((gameObj) => setGames(gameObj))

    fetch(`http://localhost:${port}/user/${user}`)
    .then(res => res.json())
    .then((userObj) => {
        
    setGameList(prev => userObj.ownedgames)
    }) 
  }  
  ,[user])

  const deleteItem = (id) => {
   
    const newListArray = gameList.filter(game => game.id !== id)
    setGameList(newListArray)
    // const newListArray = gameList.map(game => game.id !== id)
    // console.log(newListArray) 
}

function addOwned(){

  fetch(`http://localhost:${port}/user/${user}`)
    .then(res => res.json())
    .then((userObj) => {
        
    setGameList(prev => userObj.ownedgames)
    }) 
}

  // const gamelist = games.map(gameobj => <Games name={gameobj.name} genre={gameobj.genre} releasedate={gameobj.release_date} key={gameobj.id}/> )


  function addGame(newGame){ 

    const configObj = {
      method: "POST",
      headers: {
        Accept: "applicatiohn/json",
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(newGame)
  
    }

    fetch(`http://localhost:${port}/games`, configObj)  
      .then(res => res.json())
      // .then(newGame => setGames(prev => [...prev,newGame])
      .then(newGame => setGames(prev => [newGame,...prev])
      )
      
    }
    
  
   
  




  return (
    <div className="App">
      <Header user = {user}/>
      <NavBar />
      <Switch>
        <Route path="/userlogin">
            <Users setUser = {setUser} port = {port} />
          </Route>
        
          <Route path="/Owned">
            <Owned user = {user} gameList = {gameList} deleteItem = {deleteItem} port = {port}/>
          </Route>
          <Route exact path="/Addgame">
            <Addgame addGame={addGame} />
          </Route>
  
           <Route path="/">
            <Games gamelist={games} port = {port} user = {user}   addOwned = { addOwned}/>
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route> 
        </Switch>
        
    </div>
  );
}

export default App;
