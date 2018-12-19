import React from "react";
import Nav from "./Header/Nav";
import Search from "./Header/Search";
import Logo from "./Header/Logo";
import { Navbar } from 'react-bootstrap';



export default () => (

  <Navbar className="fixed-top bg-light">
    <Logo />
    <Search />
    <Nav />
  </Navbar>



);
