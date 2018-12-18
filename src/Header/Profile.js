import React, { Component } from "react";
import styled from "styled-components";
import avatar from "../img/avatar.png";

const StProfile = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
`;

const AvaterStyle = styled.img`
  width: 32px;
  height: 32px;
  margin: 0 16px;
  border-radius: 50%;
`;

class Profile extends Component {
  render() {
    return (
      <StProfile>
        <AvaterStyle src={avatar} alt="" />
      </StProfile>
    );
  }
}

export default Profile;
