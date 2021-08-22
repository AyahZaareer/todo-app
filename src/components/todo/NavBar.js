import React from 'react'
import { Navbar, Alignment, Button } from "@blueprintjs/core";
import Login from './login'

function NavBar() {
    return (


        <Navbar style={{
            backgroundColor: '#3397a5',
            display: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
           
        }}
        >
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading
                >To Do List</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="home" text="Home" />

            </Navbar.Group>
        </Navbar>

    )
}

export default NavBar