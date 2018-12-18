import React, { Component } from "react";
import styled from "styled-components";
import styledMap from "styled-map";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const StatisticsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;



const colors = {
  primary: "#667580",
  secondary: "#1DA1F2"
};

const StatisticsList = styled.div`
  display: flex;
  margin: 0;
  padding: 0;

  margin-right: 202px;
`;

const StatisticsListCard = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 14px 7px;
  border-bottom: 2px solid ${props => (props.active ? "#1DA1F2" : "white")};

  font-weight: bold;
  font-size: 12px;
  text-align: center;

  color: ${colors.primary};
  text-decoration: none;
  transition: all 0.15s ease-in-out;

  &:hover {
    border-bottom: 2px solid ${styledMap({ secondary: colors.secondary })};
    box-sizing: border-box;
    transition: all 0.15s ease-in-out;

    span {
      color: ${styledMap({
    secondary: colors.primary,
    default: colors.secondary
  })};
    }
  }

  span {
    padding-top: 3px;
    line-height: 21px;
    font-size: 18px;
    text-align: center;

    color: ${props => (props.active ? "#1DA1F2" : colors.primary)};
  }
`;

const StatisticsWrap = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  box-shadow: 0 0 10px #b0b8be;
`;

class StatisticsBar extends Component {
  render() {
    return (
      <StatisticsWrap className="col-xl-12">
        <StatisticsStyle className="col-xl-10">
          <StatisticsList>
            <StatisticsListCard to="/tweets" active>
              Tweets
              <span>{this.props.tweets}</span>
            </StatisticsListCard>
            <StatisticsListCard to="/following">
              Following
              <span>{this.props.following}</span>
            </StatisticsListCard>
            <StatisticsListCard to="/followers">
              Followers
              <span>{this.props.followers}</span>
            </StatisticsListCard>
            <StatisticsListCard to="/likes">
              Likes
              <span>{this.props.likes}</span>
            </StatisticsListCard>
            <StatisticsListCard to="/lists">
              Lists
              <span>{this.props.lists}</span>
            </StatisticsListCard>
          </StatisticsList>
          <Button follow followText>
            Follow
          </Button>
        </StatisticsStyle>
      </StatisticsWrap>
    );
  }
}

export default StatisticsBar;
