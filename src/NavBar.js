import React from 'react'

import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'reactstrap'

function NavBar() {
    return (
        <Navbar color="light">
            Welcome to Microblog!
            <Nav>
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/new">Create a new Post</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavBar
