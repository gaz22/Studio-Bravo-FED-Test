import React, { Component } from "react";
import styled from "@emotion/styled";
import image0 from "./static/Desktop_header.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (min-width: 744px) {
    display: flex;
  }
  @media (max-width: 743px) {
    width: 100%;
    display: flex;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 429px;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  padding: 120px;
  margin-left: -5px;
  margin-right: -5px;
  margin-top: 95px;

  @media (min-width: 744px) {
    width: 100%;
  }
  @media (max-width: 743px) {
    width: 100%;
    display: flex;
    margin: 0 auto;
  }
`;
const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right:0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${image0});
  background-position: center;
  background-size: cover;
`;

const BannerTitle = styled.h2`
  font-size: 80.57px;
  letter-spacing: 0.25px;
  line-height: 46px;
  color: rgba(255, 255, 255, 1);
  font-weight: bold;
  margin-bottom: 24px;

  @media (min-width: 744px) {
    font-size: 55px;
  }

  @media (max-width: 743px) {
    display: flex;
    font-size: 40px;
    justify-content: center;
    text-align: center;
  }
`;

const BannerSubtitle = styled.h2`
  font-size: 60px;
  letter-spacing: 0.25px;
  line-height: 46px;
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  margin-bottom: 24px;

  @media (min-width: 744px) {
    font-size: 55px;
  }
  @media (max-width: 743px) {
    display: flex;
    font-size: 21px;
    justify-content: center;
    text-align: center;
  }
`;
const BannerContainer = styled.div`
  display: block;
  width: -webkit-fill-available;
  text-align: center;
  justify-content: center;
`;

export default class First extends Component {
  render() {
    return (
      <Container>
        <Banner>
          <Image/>
            <BannerContainer>
              <BannerTitle>
                MXDC MELBOURNE
              </BannerTitle>
              <BannerSubtitle>
                June 20 - 27
              </BannerSubtitle>
            </BannerContainer>
        </Banner>
      </Container>
    );
  };
}
