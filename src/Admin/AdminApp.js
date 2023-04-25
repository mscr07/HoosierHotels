import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserPage from './UserPage';
import AdminPage from './AdminPage';

function App() {
  return (
    <Router>
        <Route path="/user" component={UserPage} />
        <Route path="/admin" component={AdminPage} />
    </Router>
  );
}

export default App;