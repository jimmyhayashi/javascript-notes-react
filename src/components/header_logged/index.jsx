import React, { useState } from "react";
import { Navbar, Container, Column, Button, Dropdown } from "rbx";
import logoImageWhite from "../../assets/images/logo-white.png";
import { Navigate, Link } from "react-router-dom";
import "../../styles/header.scss";
import UsersService from "../../services/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

function HeaderLogged() {
    const [redirectToHome, setRedirectToHome] = useState(false);

    const logOut = async () => {
        await UsersService.logout();
        setRedirectToHome(true);
    };

    if (redirectToHome)
        return <Navigate to="/" />
    
    return (
        <Navbar className="navbar-logged">
            <Navbar.Brand>
                <Column.Group>
                    <Column size={11} offset={1}>
                        <Link to="/notes">
                            <img src={logoImageWhite} />
                        </Link>
                    </Column>
                </Column.Group>
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                    <Navbar.Item as="div">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <Button className="button" color="white" outlined>
                                    <span><FontAwesomeIcon icon={faList} /> Hello John Doe</span>
                                </Button>
                            </Dropdown.Trigger>
                            <Dropdown.Menu>
                                <Dropdown.Content>
                                    <Dropdown.Item as="div">
                                        <Link to="/users/edit">User Edit</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item as="div">
                                        <a href="#" onClick={e => logOut()}>Log Out</a>
                                    </Dropdown.Item>
                                </Dropdown.Content> 
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Item>
                </Navbar.Segment>
            </Navbar.Menu>
        </Navbar>
    )
}

export default HeaderLogged;