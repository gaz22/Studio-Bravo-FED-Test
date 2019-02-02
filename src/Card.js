import React, { PureComponent } from "react";
import styled from "@emotion/styled";

// import image1 from "./static/Desktop-Tablet_placeholder-A@2x.png";
import arrow from "./static/right_chevron.svg";

class Card extends PureComponent {

  render() {
    let {data } = this.props;
    return (
      <CardContainer>
        <CardImage imgObj={data.imgUrlDesktop}/>
          <TextContainer>
            <BusinessType>{data.title}</BusinessType>
            <Cont>
              <BusinessName>{data.description}</BusinessName>
              <ArrowContainer>
                <RightArrow/>
              </ArrowContainer>
            </Cont>
        </TextContainer>
      </CardContainer>
    );
  }
}

export default Card;

const CardContainer = styled.div`
  display: inline-block;
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100%;
  margin: 0 auto;
  text-align: left;

  @media (min-width: 744px) {
    flex-basis: 45.33%;
  }

  @media (min-width: 1240px) {
    flex-basis: 28%;
  }
  @media (max-width: 744px) {
    display: -webkit-inline-box;
  }
`;

const CardImage = styled.div`
  overflow: hidden;
  padding-top: 66.67%;
  border-radius: 4px;
  background-size: cover;
  position: relative;
  background-image: url('${props => props.imgObj}');

  @media (max-width: 744px) {
    width: 45.33%;
  }
`;

const RightArrow = styled.div`

  @media (min-width: 970px) {
    display:none;
  }

  @media (max-width: 743px) {
    background-image: url(${arrow});
    background-size: contain;
    width: 48px;
    height: 48px;
    display: flex;
    background-repeat: no-repeat;
  }
`;

const ArrowContainer = styled.div`

  @media (min-width: 970px) {
    display:none;
  }

  @media (max-width: 743px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const Cont = styled.div`

  @media (min-width: 970px) {
      /* display:none; */
  }
  @media (max-width: 743px) {
    display: -webkit-inline-box;
  }
`;


const BusinessType = styled.p`
  font-weight: bold;
  margin: 5px 0;
`;

const BusinessName = styled.p`
  margin-bottom: 1px;
`;
const TextContainer = styled.div`
  background: #f2f3f2;
  height: 100px;
  padding: 40px 25px 45px;

  @media (max-width: 744px) {
    width: 35.33%;
    height: 200px;
    display: block;
    padding-right: 42px;
  }
`;
