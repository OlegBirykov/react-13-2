import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import List from './components/List';
import Details from './components/Details';

function App() { 
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/:id([0-9]+)/details'} component={Details} />
          <Route path={process.env.PUBLIC_URL} component={List} />
          <Redirect to={process.env.PUBLIC_URL} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
