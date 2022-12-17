import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Show from "./components/showData"
import Header from "./components/header"
import Footer from "./components/footer"
import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <Show/>
      <Footer/>
        
    </div>
  );
}
export default App;

