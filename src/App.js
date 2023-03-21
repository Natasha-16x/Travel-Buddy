import React from 'react';
import MyNavbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';
import SearchResult from './components/DisplayResults/display';


import Recommend from './components/Recommend/Recommend';

function App() {
  return (
    <div>
      <MyNavbar />
      <Footer />
      <Recommend />
      <SearchResult/>
     
    </div>
  );
}

export default App;

