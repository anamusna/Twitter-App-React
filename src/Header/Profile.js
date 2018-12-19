import React, { Component } from "react";
import avatar from "../img/avatar.png";
import styled from "styled-components";


const AvaterStyle = styled.img`
  width: 60px;
  height: 60px;
`;


class Profile extends Component {

  render() {
    return (

      <AvaterStyle src={avatar} alt="profile" />

    );
  }
}
export default Profile;

