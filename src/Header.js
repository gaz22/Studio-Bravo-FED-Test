import React, { Component } from "react";
import styled from "@emotion/styled";

// pictures
import logo from "./static/logo.svg";
import menu from "./static/round-menu-24px.svg";
import close from "./static/close_icon.svg";

const Container = styled.div`
  position: fixed;
  top:0;
  left:0;
  right: 0;
  height:60px;
  padding: 18px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0 0 2px 0 rgba(0,0,0,0.2);
  background-color: #002522;
  z-index: 999999;
`;
const TabMenu = styled.div`
  text-decoration: none;
  margin-right: 32px;
  transition: opacity 200ms ease-in;
  outline: none;
  font-size: 18px;
`;
const TabMenuMobile = styled.div`
  text-decoration: none;
  margin-right: 32px;
  transition: opacity 200ms ease-in;
  outline: none;
  font-size: 22px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 32px;
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
    width: 64%;
    margin-top: -6px;
    margin-right: -17px;
  }

  @media (max-width: 743px) {
    display:none;
  }
`;

const MenuMobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 25px;
  background-color: #002522;
`;

const Logo = styled.div`
  background-image: url(${logo});
  background-size: contain;
  background-position: center;
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
`;
const CloseIcon = styled.div`
  background-image: url(${close});
  background-size: contain;
  background-position: center;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
`;
const Menu = styled.div`

  @media (min-width: 970px) {
      display:none;
  }
  @media (max-width: 743px) {
    background-image: url(${menu});
    background-size: contain;
    background-position: center;
    width: 48px;
    height: 48px;
    background-repeat: no-repeat;
  }
`;

const MenuTabFull = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999999999999999999;
`;

const MobileContainer = styled.div`
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 9999999999999999999;
  background-color: rgba(0,37,34,0.92);
`;


export default class Header extends Component {
  state = {
    isOpen: true,
  }
  IsOpen = () => {
      this.setState({ isOpen: false});
      // alert(this.state.isOpen);
  }
  IsClose = () => {
      this.setState({ isOpen: true});
      // alert(this.state.isOpen);
  }
  render() {
    return (
      <Container>
        <LeftContainer>
          <Logo/>
        </LeftContainer>
        <RightContainer>
          <TabMenu >
            <a style = {{ textDecoration: "none", color: "#00f7cc" }} href = "/">Program</a>
          </TabMenu>
          <TabMenu>
            <a style = {{ textDecoration: "none",  color: "#00f7cc"  }} href = "/">Partners</a>
          </TabMenu>
          <TabMenu>
            <a style = {{ textDecoration: "none",  color: "#00f7cc"  }} href = "/">Locations</a>
          </TabMenu>
          <TabMenu >
            <a style = {{ textDecoration: "none",  color: "#00f7cc" }} href = "/">About MXDC</a>
          </TabMenu>
          <TabMenu >
            <a style = {{ textDecoration: "none",  color: "#00f7cc" }} href = "/">Contact us</a>
          </TabMenu>
        </RightContainer>
        <Menu onClick = {this.IsOpen}/>

        { !this.state.isOpen &&
          <MenuTabFull>
            <MenuMobileContainer>
              <Logo/>
              <CloseIcon onClick = {this.IsClose}/>
            </MenuMobileContainer>
            <MobileContainer>
              <TabMenuMobile >
                <a style = {{ textDecoration: "none", color: "#00f7cc" }} href = "/">Program</a>
              </TabMenuMobile>
              <TabMenuMobile>
                <a style = {{ textDecoration: "none",  color: "#00f7cc" }} href = "/">Partners</a>
              </TabMenuMobile>
              <TabMenuMobile>
                <a style = {{ textDecoration: "none",  color: "#00f7cc" }} href = "/">Locations</a>
              </TabMenuMobile>
              <TabMenuMobile >
                <a style = {{ textDecoration: "none",  color: "#00f7cc" }} href = "/">About MXDC</a>
              </TabMenuMobile>
              <TabMenuMobile >
                <a style = {{ textDecoration: "none",  color: "#00f7cc" }} href = "/">Contact us</a>
              </TabMenuMobile>
            </MobileContainer>
          </MenuTabFull>
        }
      </Container>
    );
  };
}
