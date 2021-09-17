import React, { useState } from 'react';
import './App.css';
import Header from './component/header';
import Devmgmt from './component/device_mgmt';
import Body from './component/body';
import Footer from './component/footer';
import Register from "./component/auth/registration";
import Login from "./component/auth/login";
import Service from "./service";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Application({logout}) {
  const [devMgmt, setDevMgmt] = useState(false);
  const [checkedData, setCheckedData] = useState([]); 

  return (
    <div className="App">
      <Router>
      <Header devMgmt = {devMgmt} setDevMgmt = {setDevMgmt} checkedData={checkedData} logout={logout}/>
        <Switch>
          <Route path = '/devmgmt'>
            <Devmgmt setDevMgmt = {setDevMgmt} checkedData = {checkedData} />
          </Route>
          <Route path = '/' component = {Body}/>
        </Switch>
     
      </Router>
      <Footer />
    </div>
  );
}



// User login and registration exchange
function User(props) {
  const [sign, setSign] = useState();
  const registerPage = () => { setSign("register"); }
  const loginPage = () => { setSign(); }
  return (
    <div className="App">
      <header className="App-header">
        {
          sign === 'register' ?
            <div>
              <Register login={loginPage} registeredUser={loginPage} />
            </div> :
            <div>
              <Login register={registerPage} signedUser={props.logedInUser} />
            </div>
        }

      </header>
    </div>
  );
}


// Content page 
function Homepage(props) {
  const [content, setContent] = useState("Welcome to our Application")
  const logout = () => {
    Service.logout();
    props.logout (false);
  }
  
  return (

    <div>
      {/* <a onClick={logout} href="!#" style={{ cursor: 'pointer', padding: '2px 20px', color: '#e5840c' }}>Logout</a> */}
      <Application logout={logout}/>
    </div>

  );
}

function App() {

  let userFlag = Service.getCurrentUser() ? true : false;
  const [userState, setUserState] = useState(userFlag);
  const isLogedIn = (userStatus) => {
    setUserState(userStatus);
  }
  return (
    <div>
      <>
         {userState ? <Homepage logout={isLogedIn} /> : <User logedInUser={isLogedIn} />}
      </>
      {/* <ToastContainer autoClose={5000} /> */}
    </div>
  )
}
export default App;
