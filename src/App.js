import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import store from './redux/store';  // Import your Redux store

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            {/* You can add more routes here if needed */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
