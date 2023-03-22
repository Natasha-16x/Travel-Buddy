import React from 'react';
import MyNavbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';
// import SearchResult from './components/DisplayResults/display';
import Recommend from './components/Recommend/Recommend';
import SearchBar from './components/Search/SearchBar';

function App() {
  return (
    <div>
      <MyNavbar />
      <SearchBar />
      <Recommend />
      <Footer />
      {/* <SearchResult/> */}
    </div>
  );
}

export default App;


