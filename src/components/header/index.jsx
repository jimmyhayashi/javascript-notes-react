import React from "react";
import { Navbar, Container } from "rbx";
import logoImageWhite from "../../assets/images/logo-white.png";
import '../../styles/header.scss';
import { Link } from "react-router-dom";

function Header() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <img src={logoImageWhite} />
                    </Link>
                    <Navbar.Burger
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbar-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Navbar.Burger>
                </Navbar.Brand>
                <Navbar.Menu id="navbar-menu">
                    <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                        Item 1
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>
    )
}

export default Header;