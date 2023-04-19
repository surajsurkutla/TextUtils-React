import React from 'react';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

/* import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; */

function App() {
  const [mode,setMode] = useState('light'); //whether the dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark Mode has been enabled","Success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "Success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-4'>
        {/*  <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
           <TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>
         {/*  </Route>
        </Switch> */}
      </div>
    {/* </Router> */} 
    </>
  ); 
}

export default App;
