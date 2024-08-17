import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import { useState } from 'react';
import './App.css';

function App() {
  const [alert,setalert]=useState(null);
  const showalert = (message, type) => {
    setalert({ msg: message, type: type });
  };
  return (

       <>
       <Navbar/>
       <Textform showalert={showalert} alert={alert} setalert={setalert}/>
       </>
      )
    }


export default App;
