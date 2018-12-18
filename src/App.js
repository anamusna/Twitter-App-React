import React, { Component } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import "flexboxgrid2";
import HeaderNavigation from "./HeaderNavigation";
import StatisticsBar from "./StatisticsBar";
import MainContent from "./MainContent";
import profileBg from "./img/profile–image.png";
import avatarMain from "./img/avatar.png";
import twitterIcn from "./img/icon-twitter16.png";

const ProfileBG = styled.img`
  width: 100%;
  height: 100%;
`;

class App extends Component {
  state = { nickname: "EveryInteraction" };

  render() {
    return (
      <Router>
        <div className="row center-xs">
          <Helmet>
            <title>Twitter</title>
            <meta name="theme-color" content="#1da1f2" />
            <link rel="icon" type="image/png" href={twitterIcn} />
          </Helmet>

          <Redirect from="/" to={`/${this.state.nickname}`} />

          <HeaderNavigation user={this.state.nickname} />
          <ProfileBG src={profileBg} />
          <StatisticsBar
            avatar={avatarMain}
            tweets={8058}
            following={721}
            followers={1815}
            likes={460}
            lists={2}
          />
          <MainContent />
        </div>
      </Router>
    );
  }
}

export default App;
