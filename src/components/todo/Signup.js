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
import { AuthContext } from '../../context/auth/auth';
import { FormGroup, InputGroup, Button, Card, Label } from "@blueprintjs/core";
import "./todo.css";
function Signup(props) {

  const { loggedIn, setLoggedIn, user, setUser, validateToken, logout, login, setLoginState, signup } = useContext(AuthContext);


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      console.log(e.target.value);
      setUsername(e.target.value);
    } else if (e.target.name === 'password') {
      console.log(e.target.value);
      setPassword(e.target.value);
    } else {
      console.log(e.target.value);
      setRole(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, password, role);
  };

  return (
    <div

      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <h1 id="contained-modal-title-vcenter">Signup</h1>

      <card className='app' intent="danger" style={{
        'margin-top': '0rem'
      }}>
        <FormGroup intent="danger">
          <FormGroup controlId="formBasicUsername">
            <label>Username</label>
            <InputGroup
              intent="danger"
              onChange={handleChange}
              name="username"
              required
              type="text"
              placeholder="Enter username"
            />
          </FormGroup  >
          <FormGroup controlId="formBasicPassword" intent="danger">
            <Label intent="danger">Password</Label>
            <InputGroup
              intent="danger"
              onChange={handleChange}
              name="password"
              required
              type="password"
              placeholder="Password"
            />
          </FormGroup>

          <FormGroup intent="danger">
            <Label intent="danger">Role</Label>
            <select onChange={handleChange} name="role" as="select">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </FormGroup>
        </FormGroup>


        <Button intent="danger" onClick={handleSubmit}>
          Signup
        </Button>
      </card>
    </div>
  );
}

export default Signup;
