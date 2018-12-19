import React, { Component } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import "flexboxgrid2";
import HeaderNavigation from "./HeaderNavigation";
import StatisticsBar from "./StatisticsBar";
import MainContent from "./MainContent";
import sport from "./img/sport.jpg";
import avatarMain from "./img/avatar.png";
import twitterIcn from "./img/icon-twitter16.png";

const ProfileBG = styled.img`
  width: 100vw;
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll;
`;

class App extends Component {
  state = { nickname: "EveryInteraction" };

  render() {
    return (
      <Router>
        <div className="App">
          <Redirect from="/" to={`/${this.state.nickname}`} />
          <HeaderNavigation user={this.state.nickname} />
          <ProfileBG src={sport} />
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
