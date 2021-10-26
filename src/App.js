import logo from './logo.svg';
import { Switch, Route  } from "react-router-dom";
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import Games from './Games';
import Owned from './Owned'
import Addgame from './Addgame'
import {useState, useEffect } from 'react'





function App() {

  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("http://localhost:3069/games")
    .then(res => res.json())
    .then((gameObj) => setGames(gameObj))
  },[])

  const gamelist = games.map(gameobj => <Games name={gameobj.name} genre={gameobj.genre} releasedate={gameobj.release_date} key={gameobj.id}/> )


  return (
    <div className="App">
      <Header/>
      <NavBar />
      <Switch>
        
          <Route path="/Owned">
            <Owned />
          </Route>
          <Route exact path="/Addgame">
            <Addgame />
          </Route>
          
           <Route path="/">
            <Games gamelist={gamelist} />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route> 
        </Switch>
        
    </div>
  );
}

export default App;
