import * as React from "react";
import {Routes, Route} from "react-router-dom";

// imports App.js styles
import './App.scss';

// import all components to be rendered with routes.
import NavBar from "./components/navbar/navbar.components";
import LoginCard from './components/Login/login.cards.components';
import SignUpCard from './components/SignUp/SignUp.cards.components';


// App component is injected to index.html with all routes mapped to component to be rendered.
function App() {
  return (
          <Routes>
              <Route path='/sign-up' element={<NavBar> <SignUpCard /> </NavBar>} />
              <Route path='/login' element={<NavBar> <LoginCard /> </NavBar>} />
              <Route path='/' element={<NavBar> <LoginCard/> </NavBar>}/>
          </Routes>
  );
}

export default App;
