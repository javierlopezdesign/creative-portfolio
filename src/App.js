import React from "react";

// Router
import { Routes, Route } from 'react-router-dom'

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";




function App() {
  return (
      <div className="App">
        <GlobalStyle />

        <Nav/>
        <Routes>

          <Route path="/" element={<AboutUs />} /> 
          
          <Route path="/work" element={<OurWork />} />
            <Route path="/work/:id" element={<MovieDetail />}/>

          <Route path="/contact" element={<ContactUs />} />

        </Routes>


      </div>
  );
}

export default App;
