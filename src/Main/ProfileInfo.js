import React, { Component } from "react";
import styled from "styled-components";
import Button from "../Button";
import locationIcn from "../img/icon-location.svg";
import linkIcn from "../img/icon-link.svg";
import joinedIcn from "../img/icon-joined.svg";
import followersInc from "../img/icon-followers.svg";
import avatar from "../img/avatar.png";


import mediaInc from "../img/icon-photo.svg";


import photo1 from "../img/photos/1.png";
import photo2 from "../img/photos/2.png";

const StProfileInfo = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: flex-start;
  margin-top: 31px;
  width: 260px;
`;

const Name = styled.h3`
  line-height: 22px;
  font-size: 22px;

  color: #14171a;
  margin-top: 0;
  margin-bottom: 6px;
`;
const NickName = styled.p`
  line-height: 21px;
  font-size: 14px;

  color: #697787;
  margin: 0;
`;
const About = styled.p`
  line-height: 20px;
  font-size: 14px;

  color: #14171a;
  margin-bottom: 12px;
  width: 240px;
  text-align: left;

  padding-right: 20px;
`;

const ProfileCardList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-bottom: 16px;
  padding: 0;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;

  line-height: 28px;
  font-size: 14px;

  color: #657786;
`;
const Img = styled.img`
  margin-right: 10px;
`;

const ButtonsBlock = styled.div``;

const FollowersUKnow = styled.div`
  margin-top: 10px;
`;
const FollowersAvatar = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: flex-start;
`;
const AvatarCard = styled.img`
  width: 48px;
  margin-right: 5px;
  margin-bottom: 5px;

  border-radius: 50%;

  &:nth-child(5n) {
    margin-right: 0;
  }
`;

const PhotoVideo = styled.div``;
const Photo = styled.div``;
const PhotoCard = styled.img`
  width: 83px;
  border-radius: 2px;
  margin-right: 5px;
  margin-bottom: 5px;

  &:nth-child(3n) {
    margin-right: 0;
  }
`;

class ProfileInfo extends Component {
  render() {
    return (
      <StProfileInfo>
        <Name>{this.props.name}</Name>
        <NickName>{this.props.nickname}</NickName>
        <About>{this.props.about}</About>
        <ProfileCardList>
          <ProfileCard>
            <Img src={locationIcn} alt="" />
            {this.props.location}
          </ProfileCard>
          <ProfileCard>
            <Img src={linkIcn} alt="" />
            <a href={this.props.link}>{this.props.link}</a>
          </ProfileCard>
          <ProfileCard>
            <Img src={joinedIcn} alt="" />
            {this.props.joined}
          </ProfileCard>
        </ProfileCardList>
        <ButtonsBlock>
          <Button large larrgeMargin>
            Tweet to
          </Button>
          <Button large>Message</Button>
        </ButtonsBlock>
        <FollowersUKnow>
          <ProfileCard>
            <Img src={followersInc} alt="" />
            {this.props.followcount} Followers you know
          </ProfileCard>
          <FollowersAvatar>
            <AvatarCard src={avatar} alt="" />
            <AvatarCard src={avatar} alt="" />
            <AvatarCard src={avatar} alt="" />
            <AvatarCard src={avatar} alt="" />
            <AvatarCard src={avatar} alt="" />
            <AvatarCard src={avatar} alt="" />
          </FollowersAvatar>
        </FollowersUKnow>
        <PhotoVideo>
          <ProfileCard>
            <Img src={mediaInc} alt="" />
            {this.props.mediacount} Photos and videos
          </ProfileCard>
          <Photo>
            <PhotoCard src={photo1} alt="" />
            <PhotoCard src={photo2} alt="" />
            <PhotoCard src={photo2} alt="" />
            <PhotoCard src={photo1} alt="" />
            <PhotoCard src={photo1} alt="" />
            <PhotoCard src={photo2} alt="" />
          </Photo>
        </PhotoVideo>
      </StProfileInfo>
    );
  }
}

export default ProfileInfo;
