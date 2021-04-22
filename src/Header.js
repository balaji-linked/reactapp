import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GitHub from './GitHub';
import Home from './Home';
import GitHubUser from './GitHubUser';
import NotFound from './NotFound';
import {Nav, Navbar, NavBar} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-bar">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/github">GitHub</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Switch>
                        <Route exact path="/github" component={GitHub}/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/github/user/:login/:id" component={GitHubUser}/>
                        <Route component={NotFound}/>
                    </Switch>
            </BrowserRouter>
        )
    }
}

export default Header;