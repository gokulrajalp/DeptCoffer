import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Lock from './components/Lock';
import Signin from './components/Signin';
import Password from './components/Password';
import User from './components/User';
import Admin from './components/Admin';
import Supervisor from './components/Supervisor';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Lock/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/password' element={<Password/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/supervisor' element={<Supervisor/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
  );
}
export default App;