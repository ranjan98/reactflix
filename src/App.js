import './App.css';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <Route path="/welcome" exact>
        <Welcome />
      </Route>
      <Route path="/signin" exact>
        <SignIn />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </div>
  );
}

export default App;
