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
    fetch("http://localhost:9292/games")
    .then(res => res.json())
    .then((gameObj) => setGames(gameObj))

    fetch(`http://localhost:9292/user/${user}`)
    .then(res => res.json())
    .then((userObj) => {
        
    setGameList(prev => userObj.ownedgames)
    }) 
  }  
  ,[user])

  // const gamelist = games.map(gameobj => <Games name={gameobj.name} genre={gameobj.genre} releasedate={gameobj.release_date} key={gameobj.id}/> )

  return (
    <div className="App">
      <Header user = {user}/>
      <NavBar />
      <Switch>
        <Route path="/userlogin">
            <Users setUser = {setUser} />
          </Route>
        
          <Route path="/Owned">
            <Owned user = {user} gameList = {gameList} />
          </Route>
          <Route exact path="/Addgame">
            <Addgame />
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
