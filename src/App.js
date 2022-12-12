import React from 'react';
import './App.css';
import Navbar from './Components/navbar';
import SearchArticle from './Components/searchartikel';

function App() {
  return(
      <React.Fragment>
        <Navbar/>
        <SearchArticle/>
      </React.Fragment>
  );
}

export default App;
