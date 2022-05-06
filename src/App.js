import React from 'react'
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Aboutus from "./component/Aboutus";
import Error from "./component/Error";
import Newsb from "./component/Newsb";
import Main from "./component/Main";
import Navbar1 from "./Navbar";
import{Route,Routes} from "react-router-dom"




function App() {

  
  return(
  
    <>
    <Navbar1/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/news/:name" element={<Newsb/>}/>
      <Route path= "/*" element={<Error/>} />
    </Routes>


    </>
  )
}

export default App;
