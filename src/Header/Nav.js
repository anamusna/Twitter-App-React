import React, { Component } from "react";
import styled from "styled-components";
import styledMap from "styled-map";
import { NavLink } from "react-router-dom";
import homeIcn from "../img/nav/icon-home.svg";
import momentsIcn from "../img/nav/icon-moments.svg";
import notificationsIcn from "../img/nav/icon-notifications.svg";
import messagesIcn from "../img/nav/icon-messages.svg";
import { Navbar } from 'react-bootstrap';

const colors = {
  primary: "#667580",
  secondary: "#1DA1F2"
};

const NavList = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavCard = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 15px 12px 13px;
  border-bottom: 2px solid white;

  line-height: normal;
  font-size: 13px;

  color: ${colors.primary};
  text-decoration: none;
  transition: all .15s ease-in-out;

  img {
    margin-right: 5px;
  }

  &:hover {
    color: ${styledMap({
    secondary: colors.primary,
    default: colors.secondary
  })};
    border-bottom: 2px solid ${styledMap({ secondary: colors.secondary })};
    transition: all .15s ease-in-out;
  }
}
`;

class Nav extends Component {
  state = {
    nickname: "EveryInteraction"
  };

  render() {
    return (
      <div className="App">
        <Navbar>
          <NavCard to={`/${this.state.nickname}/`}>
            <img src={homeIcn} alt="" />
            Home
          </NavCard>
          <NavCard to={`/${this.state.nickname}/moments`}>
            <img src={momentsIcn} alt="" />
            Moments
          </NavCard>
          <NavCard to={`/${this.state.nickname}/notifications`}>
            <img src={notificationsIcn} alt="" />
            Notifications
          </NavCard>
          <NavCard to={`/${this.state.nickname}/messages`}>
            <img src={messagesIcn} alt="" />
            Messages
          </NavCard>
        </Navbar>
      </div>
    );
  }
}

export default Nav;
