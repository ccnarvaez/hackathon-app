import React from 'react';
import './style/App.css';
import {Login} from './views/Login';
import { HomeDashboard } from './views/HomeDashboard';
import { ProtectedRoute } from './ProtectedRoute';
import {SignInUser}  from './views/SignInUser';
import {UserProfile}  from './views/UserProfile';
import {SearchView}  from './views/SearchView';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import { AdminProfile } from './views/AdminProfile';
import { auth } from './firebaseConfig'; 
import { CreateUser } from './views/CreateUser';

const userLogedin=()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      localStorage.setItem('isAuth', true)
    }
    else{
      localStorage.setItem('isAuth', false)
    }
  })
} 


function App() { 
  userLogedin()
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <Switch>
          <ProtectedRoute path='/userprofile/admin@everis.cl' component={AdminProfile}/>
          <ProtectedRoute path='/dashboard/:usermail'component={HomeDashboard}/>
          <ProtectedRoute path='/signin/:usermail'component={SignInUser}/>
          <ProtectedRoute path='/userprofile/:usermail'component={UserProfile}/>
          <ProtectedRoute path='/search/:usermail'component={SearchView}/>
          <ProtectedRoute path='/user/:usermail'component={CreateUser}/>
          <Route exact path='/' component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
