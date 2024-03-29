import './App.css';
import Home from './Home';
import Header from './Header';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path = "/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path = '/'>
            <Header/>
            <Home />
          </Route>

        </Switch>
      </Router> 
    </div>
  );
}

export default App;
