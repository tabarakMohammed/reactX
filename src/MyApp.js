import React from 'react';
import './index.css';
import App from './page/homePage/App';
import Auth from './page/authPage/Auth';
import Profile from './page/profilePage/Profile';
import Users from './page/usersPage/Users';
import {globalState} from './GeneralComponent/globalState'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";





///const root = ReactDOM.createRoot(document.getElementById('root'));
export default function MyApp() {
  //const globalStateContext = React.createContext({});

  const  [token,settoken] = React.useState("");

return (
  <globalState.Provider value={{ token, settoken }}>
    
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}> 
        <Route index path='home' element={<App />} />   </Route>
       
        <Route path="users" element={<Users/>}> </Route>
        <Route path="profile" element={<Profile/>}  ></Route>
        <Route path="login" element={<Auth />}>  </Route>
    </Routes>
  </BrowserRouter>
  </globalState.Provider>

);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
