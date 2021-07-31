import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'> Pizza-Challange </NavLink>
                <NavIcon>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    );
}

export default Navbar;
