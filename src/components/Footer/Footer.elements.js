import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #DCD6F7;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
display: ${({ show }) => (show ? '' : 'none')};

`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #000;
`;

export const FooterSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #000;
  

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #000;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 18px;
`;

export const FooterLink = styled.a`
  color: #000;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-weight:bold;
  cursor:pointer;


  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #000;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #000;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #000;
  font-size: 24px;

`;





//show


export const ContactSecres = styled.div`
padding:80px;
display: ${({ show }) => (show ? 'none' : '')};

@media only screen and (max-width:768px){
    padding:0px;

}

`
export const ContactMain = styled.div`


`
export const Contactgrid = styled.div`
display:grid;
height:600px;
grid-template-columns:1fr 1fr;
column-gap:100px;

@media only screen and (max-width:768px){
grid-template-columns:1fr;
 grid-template-rows:1fr 1fr;
}


`


export const Contactfeedback = styled.div`
display:grid;
grid-template-rows:0.5fr 0.5fr 0.5fr;
width:100%;


`

export const Feedbacklogo = styled.div`
width:100%;
height:auto;
@media only screen and (max-width:768px){
	display:none;
}


`
export const FeedbackThankyou = styled.div`
width:auto;
font-size:2.5rem;
padding:40px;

@media only screen and (max-width:768px){
padding-top:50px;
padding-bottom:30px;
padding-left:10px;
}
`
export const Feedbackreply = styled.div`
// padding-left:60px;
padding-left:40px;
font-size:1.5rem;
@media only screen and (max-width:768px){
	padding-left:0px;

}

`
export const Feedbackhome = styled.div`
padding-left:80px;
font-size:25px
justify-self:center;
align-slef:center;
@media only screen and (max-width:768px){
	padding-left:0px;

}


`
export const Button1 = styled(Link)`
box-shadow: 0px 0px 0px 0px #3dc21b;
	background-color:#44c767;
	border-radius:28px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:19px;
	padding:15px 76px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;

    &:hover{
        background-color:#5cbf2a;
    }

    &.active{
        position:relative;
        top:1px;
    }

`