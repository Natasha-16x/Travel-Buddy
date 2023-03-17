import './App.css';
import SearchResult from './components/DisplayResults/display';



import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';

const App = () => {
  return (
    <div>
      <Navbar/>
      <HomePage />
      <SearchResult/>
    </div>
  
      
      
  )
}

export default App;
