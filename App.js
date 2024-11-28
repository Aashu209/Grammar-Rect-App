import logo from './logo.svg';
import './App.css';
import  React ,{ useState } from "react";
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import Alert from './Components/Alert';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState('null');

/*Adding Alert Function
  const showalert=(message , type)=>{
  setAlert({
  msg: message,
  type:type
  })
  }*/


//Adding Functions Here
const  toggleMode=()=>{
  if(mode==='dark'){
    setMode('light');
    document.body.style.backgroundColor ='snow';
    //document.About.mystyle.backgroundColor ='snow';
    //showalert("Light Mode Activated","success");
  }
  else{
    setMode('dark');
    document.body.style.backgroundColor ='#011932';
    //document.About.mystyle.backgroundColor ='#011932';
    //showalert("Dark Mode Activated", "success");
  }
}
//Important Information it is using the raect v6 from 2023:::
  return (
    <>
    
      <BrowserRouter>
        <Navbar
          title="Merriam-Webster"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <Textform
                  //showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;


/*

This syntax was no working bcause it is old syntax and in js v6 it was updated
<>
<BrowserRouter>
<Navbar title="Merriam-Webster" mode={mode}  toggleMode={toggleMode} about='About Us'></Navbar>
<div className="container my-5">
<Routes>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
      <Textform heading='Enter Your Text Below' mode={mode} />
      </Route>
</Routes>
</div>
</BrowserRouter>
</>
);
*/