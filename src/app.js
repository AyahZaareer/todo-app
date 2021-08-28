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

import AuthProvider from './context/setting/authcon';
import SettingProvider from './context/setting/Setting'
// import Signup from './components/todo/';
import Auth from './components/todo/auth0';
import ListContext from './context/setting/Setting';
import NavBar from './components/todo/NavBar';
import { AuthContext } from './context/setting/authcon';
import { useContext } from 'react';
import { If, Else, Then } from 'react-if';


const DeleteLink = () => {
  return (
    <Auth capability="delete">
      <span>Delete</span>
    </Auth>
  );
};


const EditLink = () => {
  return (
    <Auth capability="update">
      <span>Edit</span>
    </Auth>
  );
};





function App(props) {
  const contextType = useContext(AuthContext)
  console.log('app/context',props);
  return (
    <>
      <AuthProvider>
          <NavBar />



          <If condition={AuthContext.loggedIn}>
        <SettingProvider>
            <Then>

              <ListContext>
                <EditLink />
                <DeleteLink />


                <ToDo />
              </ListContext>
            </Then>
            <Else>
              <div></div>
            </Else>

        </SettingProvider>
          </If>
      </AuthProvider>



    </>
  )
}

export default App

