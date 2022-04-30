import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Lock from './components/Lock';
import Signin from './components/Signin';
import Password from './components/Password';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Lock/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/password' element={<Password/>}/>
      </Routes>
    </Router>
  );
}
export default App;