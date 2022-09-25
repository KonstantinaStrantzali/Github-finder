import React from "react";
 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import Footer from './components/layout/Footer'
 
function App () {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" component={Navbar} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;
