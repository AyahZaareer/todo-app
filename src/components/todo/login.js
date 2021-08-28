// import React from 'react'
// const If = props => {
//     return props.condition ? props.children : null;
// };
// class Login extends React.Component {
//     static AuthContext = LoginContext;

//     constructor(props) {
//         super(props);
//         this.state = { username: '', password: '' };
//     }

//     handleChange = e => {
//         this.setState({ [e.target.name]: e.target.value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.context.login(this.state.username, this.state.password);
//     };

//     render() {
//         return (
//             <>
//                 <If condition={this.context.loggedIn}>
//                     <button onClick={this.context.logout}>Log Out</button>
//                 </If>

//                 <If condition={!this.context.loggedIn}>
//                     <form onSubmit={this.handleSubmit}>
//                         <input
//                             required
//                             placeholder="UserName"
//                             name="username"
//                             onChange={this.handleChange}
//                         />
//                         <input
//                             required
//                             placeholder="password"
//                             name="password"
//                             onChange={this.handleChange}
//                         />
//                         <button>Login</button>
//                     </form>
//                 </If>
//             </>
//         );
//     }
// }

// export default Login;


import React, { Component, useState, useContext } from 'react'
import { AuthContext } from '../../context/setting/authcon';
import { Card, Button, Icon, Label } from "@blueprintjs/core";
import { If, Else, Then } from 'react-if';




function Login(props) {
    const authContext = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")


    console.log('loginnnnnnnn',authContext.loggedIn)
    const handleChangeUser = (e) => {
        setUsername(e.target.value)
    }
    const handleChangePass = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        authContext.login(username, password)
       
    }

    return (
        
        <div>
            <If condition={authContext.loggedIn}>
                <Then>
                    <Button intent="danger" onClick={authContext.logout} style={{
                        "margin-left": "1171px",
                        "margin-top": "18px"
                    }}>Logout</Button>
                </Then>
                <Else>
                    <form  onSubmit={handleSubmit}
                    style={{ "width": "28rem", "margin-left": "auto", "margin-top": "0px", "padding-top": "11px" }}>
                        <input type="text" name="username" placeholder="Enter Username" onChange={handleChangeUser} />
                        <input type="password" name="password" placeholder="Enter Password" onChange={handleChangePass} />
                        <Button intent="danger">Login</Button>
                    </form>
                </Else>
            </If>
        </div>
    )
}

export default Login