import React from "react";
import styled from "styled-components";
import Nav from "./Header/Nav";
import Profile from "./Header/Profile";
import Search from "./Header/Search";
import Button from "./Button";
import logoIcn from "./img/icon-logo.svg";

const HeaderElements = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  background: white;
`;


export default () => (
  <HeaderWrap className="col-xl-12">
    <HeaderElements className="col-xl-10">
      <Nav />
      <img src={logoIcn} alt="logo" />
      <HeaderRight>
        <Search />
        <Profile />
        <Button>Tweet</Button>
      </HeaderRight>
    </HeaderElements>
  </HeaderWrap>
);
