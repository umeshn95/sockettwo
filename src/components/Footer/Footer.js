import React,{useState} from 'react';
import { Button } from '../../globalStyles';
import zetalogo from '../../images/zetamonklogo.svg';
import { FaCheckCircle } from "react-icons/fa";
import {Container} from '../../globalStyles';
import { IconContext } from 'react-icons/lib';


import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,ContactSecres,ContactMain,Contactgrid,Contactfeedback,Feedbacklogo,FeedbackThankyou,Feedbackreply,Feedbackhome,Button1
} from './Footer.elements';

function Footer() {
const [show,setShow]=useState(true);
const [validemail,setValidemail]=useState('')

const [email,setEmail]=useState('')

const subscribe =()=>{
  let data = {email}
fetch('https://visheshsolanki.pythonanywhere.com/api/email/',{
  method:'POST',
  headers:{
      'Accept':'application/json',
      'Content-Type': 'application/json'
  },
  body:
     JSON.stringify(data)
  
 }).then(res=>{(res.statusText=='Bad Request' && !email)?setValidemail('Enter valid email'):setShow(false)}).catch(err=>{console.log(err)})

}


  return (
    <>
    <FooterContainer show={show}>
      <FooterSubscription>
        <FooterSubHeading>
          Connect Us for exclusive Pricing and to receive the latest Development news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput  type='email' placeholder='Your Email' onChange={(e)=>{setEmail(e.target.value)}}/>
          <Button onClick={subscribe} fontBig>Subscribe</Button>
          </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/about' onClick={() => {window.location.href="/about"}}>About us</FooterLink>
            <FooterLink to='/about' onClick={() => {window.location.href="/about"}} >What We Do</FooterLink>
            <FooterLink to='/whatwedo' onClick={() => {window.location.href="/whatwedo"}} >Who We Are</FooterLink>
            <FooterLink to='/contactus' onClick={() => {window.location.href="/contactus"}} >Career</FooterLink>
            <FooterLink to='/contactus' onClick={() => {window.location.href="/contactus"}} >Contact Us</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Technology</FooterLinkTitle>
            <FooterLink to='/technology' onClick={() => {window.location.href="/technology"}}>JavaScript</FooterLink>
            <FooterLink to='/technologyp' onClick={() => {window.location.href="/technologyp"}}>Python</FooterLink>
            <FooterLink to='/technologys' onClick={() => {window.location.href="/technologys"}}>SQL</FooterLink>
            <FooterLink to='/technologyD' onClick={() => {window.location.href="/technologyD"}}>Django</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Services</FooterLinkTitle>
            <FooterLink to='/webdev' onClick={() => {window.location.href="/webdev"}}>Web Development</FooterLink>
            <FooterLink to='/chatbot' onClick={() => {window.location.href="/chatbot"}}>Chatbot Development</FooterLink>
            <FooterLink to='/schoolmanage' onClick={() => {window.location.href="/schoolmanage"}}>UI/UX Design</FooterLink>
            <FooterLink to='/mobile' onClick={() => {window.location.href="/mobile"}}>Mobile Development</FooterLink>
            <FooterLink to='/digitalmarket' onClick={() => {window.location.href="/digitalmarket"}}>Digital Marketing</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink href='/'>LinkedIn</FooterLink>
            <FooterLink href='/'>Twitter</FooterLink>
            <FooterLink href='https://www.youtube.com/results?search_query=zetamonk'>Youtube</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/' onClick={() => {window.location.href="/"}}>
          <img src={zetalogo} style={{height:'50px', width:'50px'}}></img>
            
          <span style={{color:'#867AE9'}} >Zeta</span>
              <span style={{color:'#E5D549', marginLeft:'5px'}}>Monk</span>
          </SocialLogo>
          <WebsiteRights>ZetaMonk © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                'https://www.youtube.com/results?search_query=zetamonk'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>

    <IconContext.Provider value={{ color:'green', size:'420' }}>

    <ContactSecres show={show}>
  <Container>
    <ContactMain>
        <Contactgrid>
            <Contactfeedback>
                <FeedbackThankyou>
                    Thankyou for considering   <span style={{color:'#867AE9'}} >Zeta</span>
                    <span style={{color:'#E5D549', marginLeft:'5px'}}>Monk</span> for your project.
                </FeedbackThankyou>
                <Feedbackreply>
                    Your Request has been submitted we will get back to you soon to give details on your project.
                </Feedbackreply>
                <Feedbackhome>
                  <Button1 to='/' onClick={() => {window.location.href="/"}}>   <span style={{color:'#867AE9'}} >Zeta</span>
                   <span style={{color:'#E5D549', marginLeft:'5px'}}>Monk</span>.com</Button1>
                </Feedbackhome>

            </Contactfeedback>
            
            <Feedbacklogo>
                <FaCheckCircle></FaCheckCircle>
            </Feedbacklogo>


        </Contactgrid>
    </ContactMain>

  </Container>

  
</ContactSecres>
</IconContext.Provider>

    </>
  );
}

export default Footer;
