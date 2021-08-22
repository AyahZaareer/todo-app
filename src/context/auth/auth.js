// import React from 'react'
// import { cookie } from 'react-cookie';
// import jwt from 'jsonwebtoken';
// import superagent from 'superagent';
// import base64 from 'base-64';
// import { useEffect } from 'react';
// import axios from 'axios';

// export const AuthContext = React.createContext();
// const API = ' https://api-js401.herokuapp.com';

// function Auth(props) {
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [user, setUser] = useState({});
//     // const [token, setToken] = useState(null);
//     // const [show, setShow] = useState(false);
//     // const [capabilities, setCapabilities] = useState(null)


//     // useEffect(() => {
//     //     const token = cookie.load('auth');
//     //     validateToken(token);
//     //     const acl = cookie.load('acl');
//     //     setCapabilities(acl);

//     // }, [])


//     const signup = (username, password, email, role) => {
//         let newUser = {
//             username: username,
//             password: password,
//             email: `${email}`,
//             role: role,
//         }
//         // console.log('fromContext',newUser)
//         axios.post(`${API}/signup`, newUser, {

//             headers: {
//                 mode: 'cors',
//                 cache: 'no-cache',
//                 'Content-Type': 'application/json'
//             }
//         })


//             .then(response => validateToken(response.data.token))
//             .catch(console.error);
//     }


//     // async function signUp(userName, password, role) {
//     //     try {
//     //         const user = {
//     //             userName: userName,
//     //             password: password,

//     //             role: role,
//     //         }

//     //         let response = await axios.post(`${API}/signup`).send({ user });
//     //         validateToken(response.data.token);
//     //     } catch (error) {
//     //         console.error(error.message);
//     //     }
//     // }

//     const logout = () => {
//         setLoginState(false, null, {});
//     };

//     const login = (username, password) => {
//         axios.post(`${API}/signin`, {}, {
//             headers: {
//                 mode: 'cors',
//                 cache: 'no-cache',

//             },
//             auth: {
//                 username: `${username}`,
//                 password: `${password}`
//             }
//         })
//             .then(response => validateToken(response.data.token))
//             .catch(console.error);
//     }
//     // async function login(username, password) {
//     //     try {
//     //         const response = await superagent
//     //             .post(`${API}/signin`)
//     //             .set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);

//     //         const acl = response.body.capabilities;
//     //         setCapabilities(acl);
//     //         cookie.save('acl', acl);

//     //         validateToken(response.body.token);
//     //     } catch (error) {
//     //         console.error('LOGIN ERROR', error.message);
//     //     }
//     // }


//     const validateToken = token => {
//         try {
//             // console.log(token)
//             let user = jwt.decode(token);
//             // console.log(user);
//             setLoginState(!!user, token, user);
//         }
//         catch (e) {
//             setLoginState(false, null, {});
//             console.log('Token Validation Error', e);
//         }

//     };


//     const setLoginState = (loggedIn, token, user) => {
//         cookie.save('auth', token);
//         setLoggedIn(loggedIn)
//         setUser(user)

//     };
//     // function validateToken(token) {
//     //     if (token !== 'null' && token !== 'undefined') {
//     //         let user = jwt.decode(token);
//     //         saveLogin(true, token, user);
//     //     } else {
//     //         saveLogin(false, null, {});
//     //     }
//     // }

//     // async function saveLogin(loggedIn, token, user) {
//     //     cookie.save('auth', token);
//     //     await setLoggedIn(loggedIn);
//     //     await setUser({ user });
//     //     await setToken(token);
//     // }

//     // const handleClose = function (e) { 

//     //     setShow(false)
//     // };
//     // const handleShow  = function (e) { 
//     //     e.preventDefault()
//     //     setShow(true) 
//     // };

//     const state = {
//         loggedIn,
//         login,
//         logout,
//         user,
//         signup,
//     }
//     return (
//         <AuthContext.Provider value={state}>
//             {props.children}
//         </AuthContext.Provider>
//     )
// }

// export default Auth




import React, { Component, useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
import base64 from 'base-64';
const API = 'https://auth-server-401.herokuapp.com';
export const AuthContext = React.createContext();





function Auth(props) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  let setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    setUser(user);
    setLoggedIn(loggedIn);

  };


  let login = async (username, password) => {
    // headers{authorization: "Basic sdfsdfsdf="}
    try {
      const response = await superagent
        .post(`${API}/signin`)
        .set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
      console.log(response.body);
      validateToken(response.body.token);
    } catch (error) {
      console.error('LOGIN ERROR', error.message);
    }
  };

  let logout = () => {
    setLoginState(false, null, {});
  };

  let validateToken = (token) => {

    if (token !== 'null') {
      const user = jwt.decode(token);
      console.log(token, user);
      setLoginState(true, token, user);
    } else {
      setLoginState(false, null, {});
    }
  };
  const signup = async (username, password, role) => {
    try {
      const response = await superagent
        .post(`${API}/signup`, { username, password, role });
      validateToken(response.body.token);
    } catch (e) {
      console.error('Signup Error', e.message);

    }
  };

  useEffect(() => {
    const token = cookie.load('auth');
    validateToken(token);
  }, [])


  return (
    <div>
      <AuthContext.Provider
        value={{ loggedIn, setLoggedIn, user, setUser, validateToken, logout, login, setLoginState, signup }}
      >
        {props.children}
      </AuthContext.Provider>
    </div>
  )
}

export default Auth
