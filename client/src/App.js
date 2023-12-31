import './App.css';
import Main from './views/Main'
import Detail from './views/Detail'
import React from 'react';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Update from './views/Update'
function App() {
  return (
    <div className="App">


          <Link to="/">home</Link> 
       
      

      <Routes>
      <Route path="/" element={ <Main />} />

      <Route path="/product/:id/edit" element={ <Update />} />
      <Route  path="/product/:id" element={<Detail/>} /> 

    </Routes>

    </div>
  );
}

export default App;
