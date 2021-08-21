import React from 'react'
import { Navbar, Alignment, Button, Card, Elevation } from "@blueprintjs/core";
import './header.scss';
function Header(props) {
    return (
        <div>
            <Navbar  style={{ width: 'auto', background: 'rgb(51, 151, 165)'}}>
                <Navbar.Group align={Alignment.LEFT}>
                    {/* <Navbar.Heading>Blueprint</Navbar.Heading>  */}
                   <Navbar.Divider />
                    <Button style={{ margin: '1rem' }} className="bp3-minimal" icon="home" text="Home" />
                </Navbar.Group> 
            </Navbar>


            <h1>To Do List: {props.incomplete} items pending</h1>
        </div>
    )
}

export default Header
