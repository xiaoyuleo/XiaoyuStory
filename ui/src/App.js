import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import './App.css';

import Home from './containers/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </main>
      </div>
    </Router>

  );
}

export default App;
