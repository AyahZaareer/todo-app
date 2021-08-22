// import React from 'react';
// import LogIn from './components/todo/SignIn.jsx';

// import ToDo from './components/todo/todo.js';
// import SettingtProvider from './context/setting/context';
// // import ListProvider from './context/setting/listContext';
// import { AuthContext } from './context/auth/authContext.js';
// import { If, Then, Else } from 'react-if';
// // import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { useContext } from 'react';
// import Header from './components/header/Header.jsx';
// import SettingsPage from './components/todo/setting'
// // import LogIn from './components/todo/SignIn'
// function App() {
//   // const { loggedIn } = useContext(AuthContext)
//   return (
//     <div>
//       <SettingtProvider>
//        <AuthContext>
//          <SettingsPage>
//            <ToDo/>
//          </SettingsPage>
//        </AuthContext>
//       </SettingtProvider>

//     </div>
//   )
// }

// export default App;


import React from 'react';
import ToDo from './components/todo/todo';
import Login from './components/todo/login';
import AuthProvider from './context/auth/auth';
// import Signup from './components/todo/';
import Auth from './components/todo/auth';
import ListContext from './context/setting/Setting';
import NavBar from './components/todo/NavBar';







function App(props) {
  return (
    <AuthProvider>
      <NavBar />

      {/* <Auth capability="read"> */}
        <ListContext>
          <ToDo />
        </ListContext>
      {/* </Auth> */}
    </AuthProvider>
  )
}

export default App
