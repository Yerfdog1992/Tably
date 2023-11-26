// app.js

// Import necessary libraries/frameworks
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Import components for each page
import SignUp from './SignUp';
import Login from './Login';
import Explore from './Explore';
import Tab from './Tab';
import Friends from './Friends';

// Main App component
function App() {
  // Add any necessary state or logic here

  return (
    <Router>
      <div>
        {/* Navigation bar */}
        <nav>
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/tab">Tab</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
          </ul>
        </nav>

        {/* Main content area */}
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/tab">
            <Tab />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
