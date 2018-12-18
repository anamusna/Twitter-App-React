import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Tweet from "./Tweet";
import avatar from "../img/avatar.png";
import article from "../img/tweet/article.png";
import tweetImg from "../img/tweet/tweet-img.png";

const TweetContent = styled.div`
  background: white;
  margin-left: 18px;
`;

const TweetChoice = styled.div`
  display: flex;
  border-bottom: 1px solid #e1e8ed;
`;
const Text = styled(NavLink)`
  padding: 15px 15px 12px 15px;

  line-height: normal;
  font-size: 18px;

  text-decoration: none;

  color: ${props => (props.active ? "black" : "#1DA1F2")};
  cursor: ${props => (props.active ? "default" : "pointer")};
  pointer-events: ${props => (props.active ? "none" : "auto")};

  &:hover {
    text-decoration: ${props => (props.active ? "none" : "underline")};
  }
`;

const user = { nickname: "EveryInteraction" };

export default () => (
  <TweetContent>
    <TweetChoice>
      <Text to={`/${user.nickname}`} active>
        Tweets
      </Text>
      <Text to={`/${user.nickname}/tweets&replies`}>Tweets & replies</Text>
      <Text to={`/${user.nickname}/media`}>Media</Text>
    </TweetChoice>
    <Tweet
      avatar={avatar}
      name={user.nickname}
      nickname="@EveryInteract"
      date="2 Mar 2015"
      text="We've mader some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI"
      choise={true}
      imgcontent={tweetImg}
      comment={false}
      retweet={17}
      loves={47}
    />
    <Tweet
      avatar={avatar}
      name={user.nickname}
      nickname="@EveryInteract"
      date="23h"
      text="Our new website concept; Taking you from... @ Every Interaction"
      link="instagram.com/p/BNFGrfhBP3M"
      imgcontent={false}
      comment={1}
      retweet={4}
      loves={2}
    />
    <Tweet
      avatar={avatar}
      name={user.nickname}
      nickname="@EveryInteract"
      date="Nov 18"
      text="Variable web fonts are comming, and will opena a world of opportunities for weight use online"
      link={false}
      imgcontent={article}
      comment={false}
      retweet={false}
      loves={false}
    />
  </TweetContent>
);
