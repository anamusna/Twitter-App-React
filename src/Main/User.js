import React, { Component } from "react";
import styled from "styled-components";
import Button from "../Button";

const StUser = styled.div`
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  border-bottom: 1px solid #e6ecf0;
  margin-top: 11px;
  padding-bottom: 14px;
`;

const Avatar = styled.img`
  background: white;
  border-radius: 50%;
  margin-right: 12px;
`;

const UserBlock = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const UserName = styled.div`
  display: flex;
  margin-right: 51px;
`;

const Name = styled.p`
  margin-top: 0;
  margin-bottom: 9px;
  font-size: 13px;

  color: #292f33;
`;

const NickName = styled.p`
  margin-top: 0;
  margin-bottom: 9px;
  font-size: 13px;

  color: #292f33;
`;

class User extends Component {
  render() {
    return (
      <StUser>
        <Avatar src={this.props.avatar} alt="avatar" width="48" />
        <UserBlock>
          <UserName>
            <Name>{this.props.name}</Name>
            <NickName>{this.props.nickname}</NickName>
          </UserName>
          <Button follow followText followPadding>
            Follow
          </Button>
        </UserBlock>
      </StUser>
    );
  }
}

export default User;
