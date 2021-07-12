import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AboutSecrSection = styled.div`
padding:150px;
background: linear-gradient(248deg, #424874 0%, #424874 100%);
@media screen and (max-width: 768px) {
  padding:10px;
}
`;
export const Main = styled.div`
margin:25px;
background:white;
border-radius:18px;

`;

export const AboutSecrWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // margin: 0 auto;

  // @media screen and (max-width: 960px) {  
  //   margin: 0 30px;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  // }
`;

export const AboutSecrHeading = styled.h1`
  color: white;
  font-size: 48px;
  margin-bottom: 24px;
  text-align: center;

`;

export const AboutSecrContainer = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;

  // @media screen and (max-width: 960px) {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   width: 100%;
  // }
`;

export const AboutSecrCard = styled.div`
display:grid;
grid-template-columns:0.3fr 1fr;

@media screen and (max-width: 768px) {
grid-template-columns:1fr;

grid-template-rows:0.3fr 1fr;
 
  }
`;

export const AboutSecrCardInfo = styled.div`
line-height: 1.375;
padding:25px;
font-family: 'Roboto Condensed', sans-serif;
font-size: 1rem;
color: #5e5e5e;
font-weight:500;
`;

export const AboutSecrCardIcon = styled.div`
align-self:center;
justify-self:center;
font-family: 'Roboto Condensed', sans-serif;
font-size: 1rem;
color: #5e5e5e;
`;

export const AboutSecrCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 34px;
  // max-width:200px;
  text-align:center
`;

export const AboutSecrCardCost = styled.h4`
  font-size: 40px;
`;

export const AboutSecrCardLength = styled.p`
  font-size: 17px;
  margin:8px 24px 0 0;
  text-align:center;
  

  
`;

export const AboutSecrCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const AboutSecrCardFeature = styled.li`
  margin-bottom: 10px;
`;


export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  
`;



