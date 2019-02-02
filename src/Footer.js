import React, { Component } from "react";
import styled from "@emotion/styled";

import logo from "./static/logo.svg";

const Container = styled.div`
  bottom:0;
  left:0;
  right: 0;
  height:126px;
  padding: 18px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0 0 2px 0 rgba(0,0,0,0.2);
  background-color: #6d7877;
  z-index: 999999;

  @media (max-width: 743px) {
    display: block;
    height: 100%;
  }
`;
const TabMenu = styled.div`
  text-decoration: none;
  margin-right: 32px;
  font-size: 12.83px;
  transition: opacity 200ms ease-in;
  outline: none;
`;

const LeftContainer = styled.div`
  display: flex;

  @media (min-width: 970px) {
    display: flex;
    margin-left: 50px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: end;

  @media (min-width: 970px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
  }

  @media (max-width: 743px) {
    display: block;
  }
`;
const Logo = styled.div`
  background-image: url(${logo});
  background-size: contain;
  background-position: center;
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
`;

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <LeftContainer>
          <Logo/>
        </LeftContainer>
        <RightContainer>
          <TabMenu >
            <a style = {{ textDecoration: "none", color:"white" }} href = "/">Privacy</a>
          </TabMenu>
          <TabMenu>
            <a style = {{ textDecoration: "none",color:"white" }} href = "/">Terms and Conditions</a>
          </TabMenu>
          <TabMenu>
            <a style = {{ textDecoration: "none",color:"white" }} href = "/">Frequently Asked Questions</a>
          </TabMenu>
          <TabMenu >
            <a style = {{ textDecoration: "none",color:"white" }} href = "/">Contact us</a>
          </TabMenu>
        </RightContainer>
      </Container>
    );
  };
}
