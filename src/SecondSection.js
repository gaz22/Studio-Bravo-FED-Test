import React, { Component } from "react";
import styled from "@emotion/styled";

// components
import Card from "./Card";

// fetching data from API
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export default class SecondSection extends Component {

  state = {
      datas: [],
  };

  componentDidMount(){
    axios.get("https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/events.json") // where the api gets fetched from that API
      .then(res=>{
        console.log(res);
        this.setState({ datas: res.data});
      })
  };

  render() {
    return (
      <Container>
        <CardContainer>
        {this.state.datas
          .map((item,index) => (
          <Card data={item} key={index} myMarginTop={index} />
          ))}
        </CardContainer>
      </Container>
    );
  };
}

const CardContainer = styled.div`
  margin-left: -5px;
  margin-right: -5px;
  display: flex;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  height: 100%;

  @media (min-width: 744px) {
    display: flex;
    padding: 5%;
    margin: 0 auto;
  }

  @media (max-width: 743px) {
    padding: 5%;
    margin: 0 auto;
  }
`;
