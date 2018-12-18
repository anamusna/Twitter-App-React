import React, { Component } from "react";
import styled from "styled-components";
import ProfileInfo from "./Main/ProfileInfo";
import TweetMain from "./Main/TweetMain";
import Recommendation from "./Main/Recommendation";

const MainStyle = styled.main`
  display: flex;
  justify-content: space-between;
  padding-top: 9px;
`;

class MainContent extends Component {
  state = {
    name: "Every Interaction",
    nickname: "@EveryInteraction",
    about:
      "pretty cool to do what you love, just amazing",
    location: "Berlin, Germany",
    link: "dowhatyoulove.com",
    joined: "Joined Dec 2018",
    followcount: 6,
    mediacount: 212
  };

  render() {
    return (
      <MainStyle className="col-xl-10">
        <ProfileInfo
          name={this.state.name}
          nickname={this.state.nickname}
          about={this.state.about}
          location={this.state.location}
          link={this.state.link}
          joined={this.state.joined}
          followcount={this.state.followcount}
          mediacount={this.state.mediacount}
        />
        <TweetMain />
        <Recommendation />
      </MainStyle>
    );
  }
}

export default MainContent;
