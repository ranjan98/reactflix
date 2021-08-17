import React, { useState, useCallback } from 'react';
import './App.css';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import SignIn from './pages/SignIn';
import { AuthContext } from './context/auth-context';

function App() {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);
  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout
        }}
      >
        <Route path="/welcome" exact>
          <Welcome />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
