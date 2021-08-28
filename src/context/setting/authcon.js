




// import React, { useState, useEffect } from 'react';
// import cookie from 'react-cookies';
// import jwt from 'jsonwebtoken';
// import superagent from 'superagent';
// import base64 from 'base-64';
// import axios from 'axios';
// const API = 'https://auth-server-401.herokuapp.com';
// export const AuthContext = React.createContext();





// function Auth(props) {
//   const [loggedIn, setLoggedIn] = useState(false)
//   const [user, setUser] = useState({})
//   const [token, setToken] = useState({})

//   useEffect(() => {
//     const token = cookie.load('auth');
//     validateToken(token);
//   }, []);

//   let setLoginState = (loggedIn, token, user) => {
//     cookie.save('auth', token);
//     setUser({ user });
//     setLoggedIn(loggedIn);

//   };


//   let login = async (username, password) => {
//     // headers{authorization: "Basic sdfsdfsdf="}
//     try {
//       const response = await superagent
//         .post(`${API}/signin`)
//         .set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
//       console.log(response.body);
//       validateToken(response.body.token);
//     } catch (error) {
//       console.error('LOGIN ERROR', error.message);
//     }
//   };

//   let logout = () => {
//     setLogoutState(false, null, {});
//   };
//   function setLogoutState(loggedIn, user) {
//     cookie.save('auth', null);
//     setUser({ user });
//     setLoggedIn(loggedIn);
//   }

//   // let validateToken = (token) => {

//   //   if (token !== 'null') {
//   //     const user = jwt.decode(token);
//   //     console.log(token, user);
//   //     setLoginState(true, token, user);
//   //   } else {
//   //     setLoginState(false, null, {});
//   //   }
//   // };

//   function validateToken(token) {
//     try {
//       const user = jwt.decode(token);

//       if (user) setLoginState(true, token, user);
//     } catch (error) {
//       setLoginState(false, null, {});
//       console.log(`Token Validation Error ${error.message}`);
//     }
//   }


//   async function signup(email, username, password, role) {
// 		try {
// 			let response = await axios.post(`${API}/signup`, {
// 				email,
// 				username,
// 				password,
// 				role,
// 			});

// 			validateToken(response.body.token);
// 		} catch (error) {
// 			console.error('Signup Error', error.message);
// 		}
// 	}
//   // async function signup(email,username, password, role) {
//   //   console.log('userrrrrrrrrrrrrrrr', username);
//   //   try {
//   //     const response = await superagent.post(`${API}/signup`, {
//   //       email,
//   //       username,
//   //       password,
//   //       role,
//   //     });
//   //     console.log('res', response);
//   //     validateToken(response.body.token);
//   //   } catch (e) {
//   //     console.error('Signup Error', e.message);

//   //   }
//   // };

//   // useEffect(() => {
//   //   const token = cookie.load('auth');
//   //   validateToken(token);
//   // }, [])


//   return (
//     <div>
//       <AuthContext.Provider
//         value={{ token,loggedIn, setLoggedIn, user, setUser, validateToken, logout, login, setLoginState, signup }}
//       >
//         {props.children}
//       </AuthContext.Provider>
//     </div>
//   )
// }

// export default Auth





import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
const API = 'https://auth-server-401.herokuapp.com';
export const AuthContext = React.createContext();

function Auth(props) {

  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = cookie.load('auth');
    validateToken(token);
  }, []);

  function validateToken(token) {
    try {
      const user = jwt.decode(token);
      if (user) setLoginState(true, token, user);
    } catch (error) {
      setLoginState(false, null, {});
      console.log(`Token Validation Error ${error.message}`);
    }
  }

  function setLoginState(loggedIn, token, user) {
    cookie.save('auth', token);
    setUser({ user });
    setLoggedIn(loggedIn);
    console.log('logged', loggedIn);
  }

  function setLogoutState(loggedIn, user) {
    cookie.save('auth', null);
    setUser({ user });
    setLoggedIn(loggedIn);
  }

  async function login(username, password) {
    try {
      const response = await superagent
        .post(`${API}/signin`)
        .set('authorization', `Basic ${btoa(`${username}:${password}`)}`);
      validateToken(response.body.token);
    } catch (error) {
      console.error('Signin Error', error.message);
    }
  }

  async function signup(email, username, password, role) {
    console.log('val-Signup', username)
    try {
      const response = await superagent.post(`${API}/signup`, {
        email,
        username,
        password,
        role,
      });


      validateToken(response.body.token);
    } catch (error) {
      console.error('Signup Error', error.message);
    }
  }

  function logout() {
    setLogoutState(false, {});
  }

  const state = {
    loggedIn,
    user,
    setLoggedIn,
    login,
    signup,
    logout,
    setUser,
  };


  return (
    <AuthContext.Provider
      value={state}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default Auth