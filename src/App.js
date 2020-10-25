import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/home' exact component={Home} />
            <Route path='/results' component={Results} />
          </Switch>
        </Router>
        </div>
    );
  }
}

export default App;
