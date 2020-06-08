import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Principal from './components/Principal';
import Playeras from './components/Playeras';
import Shorts from './components/Accesorios';
import Tenis from './components/Tenis';
import Videos from './components/Videos';


function App() {
  return (
  <div>
 <Router>
   <Switch>
     {/* when user accesses /posts, load PostsList */}
     <Route path="/ropa">
       <Playeras/>
     </Route>
     <Route path="/accesorios">
       <Shorts/>
     </Route>
     <Route path="/tenis">
       <Tenis/>
     </Route>
     <Route path="/videos">
       <Videos/>
     </Route>
   
     {/* when user accesses /principal, load principal */}
     <Route path='/principal'>
       <Principal />
       
     </Route>
     {/* when user accesses EXACTLY /, redirect to /dashboard */}
     <Route exact path='/'>
       <Redirect to='/principal' />
     </Route>
   </Switch>
</Router>
</div>

  );
}

export default App;