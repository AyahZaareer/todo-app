// import React from 'react'
// import { AuthContext } from '../../context/auth/authContext'
// import { If, Then, Else } from 'react-if';

// import { useContext } from 'react';

// const If = props => {
//     return props.condition ? props.children : null;
// };

// function Auth(props) {
//     const context = useContext(AuthContext);
//     // const condetionRender = loggedIn && props.username ? capabilites?.includes(props.capability) : false

//     let okToRender = false;

//     try {
//         okToRender =
//             context.loggedIn &&
//             (props.capability
//                 ? context.user.capabilities.includes(props.capability)
//                 : true);
//     } catch (e) {
//         console.log('Not Authorized');
//     }



//     return (
//         <If condition={okToRender}>
//             {props.children}
//         </If>
//     )
// }

// export default Auth



import React, { useContext } from 'react'
import { AuthContext } from '../../context/setting/authcon'

import { If, Else, Then } from 'react-if';

import Signup from './Signup'




function Auth(props) {




  const context = useContext(AuthContext);
  console.log('auth/Cont',AuthContext);

  let okToRender = context.loggedIn && props.capability ? context.user.capabilities.includes(props.capability) : false;
  return (
    <div>
      <If condition={okToRender}>

        {/* <Then> */}
          <div>{props.children}</div>
        {/* </Then>
        <Else>
          <dev style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>To Do List app</h1>
            <p>You need to Signup / Signin to see what to do.</p>
            <Signup />

          </dev>
        </Else> */}
      </If>
    </div>
  )
}

export default Auth
