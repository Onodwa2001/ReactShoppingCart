import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Cart from './components/Cart';

function App() {

  return (
    <Router>
      <div className="App">
        {/* <Home /> */}
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/cart" >
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
