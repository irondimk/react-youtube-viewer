import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header.js';
import FindContainer from './components/Find/FindContainer';
import Favorites from './components/Favorites/Favorites';

function App() {
  return (

    <BrowserRouter>
      <Header/>
      <div className="content">
        <Route path="/find" render={()=> <FindContainer/>} />
        <Route path="/favorites" render={()=> <Favorites/>} />
      </div>
    </BrowserRouter>
    
    // <Login/>
  );
}

export default App;
