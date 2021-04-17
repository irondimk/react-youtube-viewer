import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header.js';
import FindContainer from './components/Find/FindContainer';
import Favorites from './components/Favorites/Favorites';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { authUser } from './redux/profileReducer';


let mapStateToProps = (state) => {
  return{
    isAuth: state.profile.isAuth
  }
}

let App = (props) =>  {
  
  useEffect(()=>{
    
  }, [props.isAuth])

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    {
      props.isAuth ? 
      <div> 
      <Header/>
      <div className="content">
        <Route path="/find" render={()=> <FindContainer/>} />
        <Route path="/favorites" render={()=> <Favorites/>} />
      </div> 
      </div> 
      : <Login/>
    }
      
    </BrowserRouter>
    
    // 
  );
}



export default connect(mapStateToProps, {})(App);
