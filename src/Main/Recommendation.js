import React from "react";
import styled from "styled-components";
import User from "./User";
import avatar from "../img/avatar.png";
import peopleInc from "../img/icon-people.svg";

const Recommendation = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  margin-left: 12px;
`;


const WhoToFollow = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: white;
  margin-bottom: 10px;
  padding: 16px;
  padding-bottom: 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.label`
  line-height: normal;
  font-size: 17px;
  font-weight: bold;

  color: #292f33;
`;
const Refresh = styled.p`
  margin: 0;
  margin-left: 12px;
  margin-right: 12px;
  line-height: normal;
  font-size: 12px;

  color: #1da1f2;
`;
const ViewAll = styled.p`
  margin: 0;
  line-height: normal;
  font-size: 12px;

  color: #1da1f2;
`;

const FindPeople = styled.div`
  display: flex;
`;

const Img = styled.img`
  margin-right: 6px;
`;
const PeopleText = styled.p`
  font-size: 13px;

  color: #1da1f2;
`;

const TrendsLocation = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: white;
  margin-bottom: 24px;
  padding: 16px;
  padding-bottom: 0;
`;

const Change = styled.p`
  margin: 0;
  margin-left: 16px;
  line-height: normal;
  font-size: 12px;

  color: #1da1f2;
`;

const Footer = styled.ul`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  list-style: none;

  line-height: 18px;
  font-size: 13px;

  color: #718290;
`;

const FooterItems = styled.li`
  margin-right: 8px;
`;

export default () => (
  <Recommendation>
    <WhoToFollow>
      <Header>
        <Label>Who to follow</Label>
        <Refresh>Refresh</Refresh>
        <ViewAll>View all</ViewAll>
      </Header>
      <User
        avatar={avatar}
        name="Emile"
        nickname="@heskey" />
      <User
        avatar={avatar}
        name="Emile"
        nickname="@heskey" />
      <User
        avatar={avatar}
        name="Emile"
        nickname="@heskey" />
      <FindPeople>
        <Img src={peopleInc} alt="" />
        <PeopleText>Find people you know</PeopleText>
      </FindPeople>
    </WhoToFollow>
    <TrendsLocation>
      <Header>
        <Label>Trends for you</Label>
        <Change>Change</Change>
      </Header>
    </TrendsLocation>
    <Footer>
      <FooterItems>@2018 Twitter</FooterItems>
      <FooterItems>About</FooterItems>
      <FooterItems>Help Center</FooterItems>
      <FooterItems>Terms</FooterItems>
      <FooterItems>Privacy policy</FooterItems>
      <FooterItems>Cookies</FooterItems>
      <FooterItems>Ads info</FooterItems>
    </Footer>
  </Recommendation>
);
