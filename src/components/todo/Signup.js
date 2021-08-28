// import React from 'react';
// import { AuthContext } from '../../context/auth/auth'
// import { useContext } from 'react';
// import { Model, Form, Boutton } from 'react-bootstrap';
// function Register(props) {
//     const context = useContext(AuthContext);


//     const submitHandler = e => {
//         e.preventDefault();
//         let user = {
//             username: e.target.username.value,
//             password: e.target.password.value,
//             role: e.target.role.value,
//         }


//         context.SignUp(user.username, user.password, user.role);

//     }
//     return (
//         <div>

//             <If condition={!context.loggedIn}>
//                 <Modal show={context.show} onHide={context.handleClose}>

//                     <Modal.Header closeButton>
//                         <Modal.Title>Sign Up</Modal.Title>
//                     </Modal.Header>


//                     <Form onSubmit={submitHandler}>
//                         <Modal.Body>

//                             <Form.Label>Username</Form.Label>
//                             <Form.Control type='text' name='username' placeholder="Please enter a unique username" />

//                             <Form.Label>Email</Form.Label>
//                             <Form.Control type="email" name='email' placeholder="Should have a @ symbol in it" />

//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type="password" name='password' placeholder="Password" />

//                             <Form.Label>Role</Form.Label>
//                             <Form.Control as="select" name="role" >
//                                 <option value="user" >User</option>
//                                 <option value="editor" >editor</option>
//                                 <option value="admin" >Admin</option>
//                             </Form.Control >

//                         </Modal.Body>
//                         <Modal.Footer>

//                             <Button variant="primary" type="submit" onClick={context.handleClose}>Sign Up</Button>

//                         </Modal.Footer>
//                     </Form>
//                 </Modal>


//             </If>
//         </div>
//     )
// }

// export default Register












import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/setting/authcon';
import { FormGroup, InputGroup, Button, Card, Label } from "@blueprintjs/core";
import "./todo.css";
import { If, Else, Then } from 'react-if'
function Signup(props) {

  const context = useContext(AuthContext);


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');

  // const handleChange = (e) => {
  //   if (e.target.name === 'username') {
  //     console.log(e.target.value);
  //     setUsername(e.target.value);
  //   } else if (e.target.name === 'password') {
  //     console.log(e.target.value);
  //     setPassword(e.target.value);
  //   } else {
  //     console.log(e.target.value);
  //     setRole(e.target.value);
  //   }
  // };

  function changeUsername(e) {
    setUsername(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }



  function handleChangeRole(e) {
    setRole(e.target.value);
  }

  function handleSubmitSignup(e) {
    e.preventDefault();
    context.signup(email,
      username,
      password,
      role);
    console.log('signup',context)
  };

  return (
    <If condition={context.loggedIn}>
      <Then>
        <div></div>
      </Then>
      <Else>

        <form style={{ marginLeft: '50px' }}>
          <input type="text" name="username" placeholder="Enter Username" onChange={changeUsername}
            style={{ borderRadius: '5px', width: '120px', margin: '13px' }} />
          <input type="password" name="password" placeholder="Enter password" onChange={changePassword} style={{ borderRadius: '5px', width: '120px', margin: '13px' }} />

          <select name="roles" id="roles" onChange={handleChangeRole} style={{ borderRadius: '5px', height: '25px', marginRight: '20px' }}>
            <option value="user">user</option>
            <option value="editor" >editor</option> <option value="admin">admin</option>
          </select>

          <button style={{ borderRadius: '5px', width: '70px', height: '30px', }} onClick={handleSubmitSignup}>SignUp</button>
        </form>
      </Else>
    </If>
  );
}

export default Signup;
