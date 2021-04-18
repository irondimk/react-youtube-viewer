import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header.js';
import FindContainer from './components/Find/FindContainer';
import Favorites from './components/Favorites/Favorites';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { authUser, load } from './redux/profileReducer';
import Preloader from './components/Preloader/Preloader';


let mapStateToProps = (state) => {
  return{
    isAuth: state.profile.isAuth,
    isLoadDone: state.profile.isLoadDone
  }
}

let App = (props) =>  {
  
  useEffect(()=>{
    props.load();
  }, [props.isAuth])

  return (
    <BrowserRouter basename={"/"}>
    {
      !props.isLoadDone ? <Preloader/> : 
      props.isAuth ? 
      <div> 
      <Header/>
      <div className="content">
        <Route path="/find" render={()=> <FindContainer/>} />
        <Route path="/favorites" render={()=> <Favorites/>} />
        <Route exact path="/" render={()=> <Redirect to="/find"/>} />
      </div> 
      </div> 
      :<Login/>
    }
    </BrowserRouter>
  );
}



export default connect(mapStateToProps, {load})(App);
