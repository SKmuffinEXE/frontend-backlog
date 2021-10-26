import logo from './logo.svg';
import { Route, Switch } from "react-router-dom"
import './App.css';
import Header from './Header';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <NavBar/> */}
      <Switch>
          <Route path="/write">
            <Form addReview={addReview} />
          </Route>
          <Route path="/reviews">
            <Gallery movies={movies} deleteItem={deleteItem}  />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
