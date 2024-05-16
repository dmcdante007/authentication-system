import { Route, Switch } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <Layout>
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/auth">
        <AuthPage />
      </Route>
      <Route path="/profile">
        {ctx.isLoggedIn && <UserProfile />}
        {!ctx.isLoggedIn && <Redirect to='/auth'/>}
      </Route>
      <Route path='*'>
        <Redirect to='/'/>
      </Route>
    </Switch>
    </Layout>
   
  );
}

export default App;
