import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import Games from './Games';
import Owned from './Owned'
import Addgame from './Addgame'


function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar />
      <Switch>
          <Route path="/Games">
            <Games />
          </Route>
          <Route path="/Owned">
            <Owned />
          </Route>
          <Route exact path="/Addgame">
            <Addgame />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
