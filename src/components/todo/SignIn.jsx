// import React from 'react';
// import { AuthContext } from '../../context/auth/authContext';
// import { useContext } from 'react';
// import { Form, Button, Col } from 'react-bootstrap';
// import { If, Else } from 'react-if';


// function SignIn(props) {
//     const { loggedIn, signUp, login } = useContext(AuthContext);
//     const [switcher, setSwitcher] = useState(false);
//     const [values, setValues] = useState({});
//     const submitHandler = e => {
//         e.preventDefault();

//         if (!values.role) {
//             login(values.username, values.password);
//         } else {
//             signUp(values.username, values.password, values.role);
//         }

//         // let username = e.target.username.value;
//         // let password = e.target.password.value;

//         // context.SignIn(username, password);

//     }

//     const handleChange = (event) => {
//         event.persist();
//         setValues(values => ({ ...values, [event.target.name]: event.target.value }));
//     };

//     const switchBtn = e => {


//         setValues({});
//         const switcher = e ? true : false;
//         setSwitcher(switcher);

//     }
//     return (
//         <div>

//             {!loggedIn && (
//                 <div className="login-page">
//                     <div className="form">
//                         {switcher && (
//                             <form onSubmit={handleSubmit} className="login-form">
//                                 <input type="text" onChange={handleChange} name="username" placeholder="username" />
//                                 <input type="password" onChange={handleChange} name="password" placeholder="password" />
//                                 <label for="role">Choose a role:</label>
//                                 <select onClick={handleChange} style={{ width: '10rem', marginBottom: '14px' }} name="role" id="role">
//                                     <option value="admin">Admin</option>
//                                     <option value="editor">Editor</option>
//                                     <option value="user">User</option>
//                                 </select>
//                                 <button>create</button>
//                                 <p className="message">
//                                     Already registered?{' '}
//                                     <a onClick={() => switchBtn(false)} href="#">
//                                         Sign In
//                                     </a>
//                                 </p>
//                             </form>
//                         )}
//                         {!switcher && (
//                             <form className="login-form" onSubmit={handleSubmit}>
//                                 <input type="text" onChange={handleChange} name="username" placeholder="username" />
//                                 <input type="password" onChange={handleChange} name="password" placeholder="password" />
//                                 <button>login</button>
//                                 <p className="message">
//                                     Not registered?{' '}
//                                     <a onClick={() => switchBtn(true)} href="#">
//                                         Create an account
//                                     </a>
//                                 </p>
//                             </form>
//                         )}
//                     </div>
//                 </div>
//             )}

//         </div>
//     )
// }

// export default SignIn
