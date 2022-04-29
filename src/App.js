import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Lock from './components/Lock';
import Signin from './components/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Lock/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </Router>
  );
}
export default App;