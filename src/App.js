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

  const [games, setGames] = useState([])
  const [user, setUser] = useState("")
  const [gameList, setGameList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3074/games")
    .then(res => res.json())
    .then((gameObj) => setGames(gameObj))

    fetch(`http://localhost:3074/user/${user}`)
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

  // const gamelist = games.map(gameobj => <Games name={gameobj.name} genre={gameobj.genre} releasedate={gameobj.release_date} key={gameobj.id}/> )


  function addGame(newGame){ 

    const configObj = {
      method: "POST",
      headers: {
        Accept: "applicatiohn/json",
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({newGame})
  
    }

    fetch('http://localhost:3074/games', configObj)  
      .then(res => res.json())
      .then(newGame => setGames(prev => [...prev,newGame]))
      
    }
    
   
  




  return (
    <div className="App">
      <Header user = {user}/>
      <NavBar />
      <Switch>
        <Route path="/userlogin">
            <Users setUser = {setUser} />
          </Route>
        
          <Route path="/Owned">
            <Owned user = {user} gameList = {gameList} deleteItem = {deleteItem} />
          </Route>
          <Route exact path="/Addgame">
            <Addgame addGame={addGame} />
          </Route>
  
           <Route path="/">
            <Games gamelist={games}  />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route> 
        </Switch>
        
    </div>
  );
}

export default App;
