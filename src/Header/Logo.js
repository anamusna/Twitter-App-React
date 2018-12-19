import React, { Component } from "react";
import styled from "styled-components";
import a from "../img/a.jpg";



const StLogo = styled.img`
  width: 60px;
  height: 60px;
`;

class Logo extends Component {
  render() {
    return (

      <StLogo src={a} alt="logo" />
    );
  }
}

export default Logo;
