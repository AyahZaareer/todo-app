// import React from 'react'
// import { Navbar, Alignment, Button, Card, Elevation } from "@blueprintjs/core";
// import "@blueprintjs/core/lib/css/blueprint.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";
// import { AuthContext } from '../../context/auth/authContext';
// import { SettingContext } from '../../context/setting/context';
// import { useContext } from 'react';
// import { Link } from 'react-router-dom';

// function Header(props) {
//     const { loggedIn, logout } = useContext(AuthContext);
//     const context = useContext(SettingContext);

//     const { incomplete } = context;
//     return (
//         <div>
//             <Navbar style={{ width: 'auto', background: 'rgb(51, 151, 165)' }}>
//                 <Navbar.Group align={Alignment.LEFT}>
//                     <Navbar.Heading>To Do List: {incomplete} items pending</Navbar.Heading>
//                     <Navbar.Divider />
//                     <Link to="/">
//                         <Button className="bp3-minimal" icon="home" text="Home" />
//                     </Link>
//                     {loggedIn && (
//                         <>
//                             <Link to="setting">
//                                 <Button className="bp3-minimal" icon="build" text="Setting" />
//                             </Link>
//                             <Link to="/">
//                                 <Button className="bp3-minimal" icon="log-out" onClick={() => logout()} text="log out" />
//                             </Link>
//                         </>
//                     )}
//                     {/* <Button style={{ margin: '1rem' }} className="bp3-minimal" icon="home" text="Home" /> */}
//                 </Navbar.Group>
//             </Navbar>


//             {/* <h1>To Do List: {props.incomplete} items pending</h1> */}
//         </div>
//     )
// }

// export default Header
