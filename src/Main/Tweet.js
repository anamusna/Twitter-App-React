import React, { Component } from "react";
import styled from "styled-components";
import comment from "../img/tweet/icon-comments.svg";
import retweet from "../img/tweet/icon-retweet.svg";
import envelope from "../img/tweet/icon-envelope.svg";
// import lovesTrue from "../img/tweet/icon-loves-true.svg";
import lovesFalse from "../img/tweet/icon-loves-false.svg";
// import lovesPrimary from "../img/tweet/icon-loves-primary.svg";

const StTweet = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #e1e8ed;
  padding: 9px 12px;
  box-sizing: border-box;
`;
const Avatar = styled.img`
  width: 50px;
  background: white;
  border-radius: 50%;
`;

const TweetContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  margin-left: 10px;
`;

const TweetAuthor = styled.div`
  display: flex;
`;

const TweetName = styled.p`
  margin-right: 5px;
  margin-bottom: 0;
  margin-top: 0;

  line-height: 30px;
  font-size: 15px;

  color: #292f33;
`;
const TweetNickName = styled.p`
  margin-right: 5px;
  margin-bottom: 0;
  margin-top: 0;

  line-height: 30px;
  font-size: 15px;

  color: #657786;
`;
const TweetDate = styled.p`
  margin-bottom: 0;
  margin-top: 0;

  line-height: 30px;
  font-size: 15px;

  color: #657786;
`;

const TweetText = styled.p`
  width: 506px;
  text-align: left;
  margin-top: 5px;
  margin-bottom: 0;

  line-height: 30px;
  font-size: 25px;

  color: #292f33;
`;
const ImgContent = styled.img`
  box-sizing: border-box;
  margin-top: 17px;
  margin-right: 12px;
`;

const TweetFeedback = styled.div`
  display: flex;
`;

const FeedbackBtn = styled.button`
  display: flex;
  background: none;
  border: none;
  margin-top: 14px;
  margin-bottom: 12px;
  margin-left: 35px;

  &:first-child {
    margin-left: 0;
  }
`;
const ImgIcn = styled.img`
  margin-right: 12px;
`;

// const loveChoised = () => {
//   if (this.props.choise == true) {
//     return lovesTrue;
//   } else {
//     return lovesFalse;
//   }
// };

class Tweet extends Component {
  render() {
    return (
      <StTweet>
        <Avatar src={this.props.avatar} />
        <TweetContent>
          <TweetAuthor>
            <TweetName>{this.props.name}</TweetName>
            <TweetNickName>{this.props.nickname}</TweetNickName>
            <TweetDate>{this.props.date}</TweetDate>
          </TweetAuthor>
          <TweetText>{this.props.text}</TweetText>
          <ImgContent src={this.props.imgcontent} width="506" />
          <TweetFeedback>
            <FeedbackBtn>
              <ImgIcn src={comment} alt="" />
              {this.props.comment}
            </FeedbackBtn>
            <FeedbackBtn>
              <ImgIcn src={retweet} alt="" />
              {this.props.retweet}
            </FeedbackBtn>
            <FeedbackBtn>
              <ImgIcn choise={this.props.choise} src={lovesFalse} alt="" />
              {this.props.loves}
            </FeedbackBtn>
            <FeedbackBtn>
              <ImgIcn src={envelope} alt="" />
            </FeedbackBtn>
          </TweetFeedback>
        </TweetContent>
      </StTweet>
    );
  }
}

export default Tweet;
