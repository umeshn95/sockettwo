import React,{useEffect} from 'react';
import { GoGear } from "react-icons/go";
import { GiSpeedometer } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";

import Aos from 'aos';
import 'aos/dist/aos.css';

import { IconContext } from 'react-icons/lib';
import AboutSec from './AboutSec';
import {
  AboutSecrSection,
  AboutSecrWrapper,
  AboutSecrHeading,
  AboutSecrContainer,

} from './AboutSecret.elements';

function AboutSecret({AOS}) {
  useEffect(() => {
    Aos.init({duration:2000});

}, [])
  return (
    <IconContext.Provider value={{ color: '#5FDDE5', size: 104 }}>
      <AboutSecrSection>
        <AboutSecrWrapper>
          
          <AboutSecrHeading>Our 'Secret Sauce'</AboutSecrHeading>
          <AboutSecrContainer data-aos={AOS}>

          <AboutSec
              
              icon={<GoGear></GoGear>}
              heading='Skill'
         list1=' &#10004;  We recruit and retain exceptional engineering talent and keep training them. 80% of ZetaMonk’s developers and over 50% or QA staff hold Master degree'
         list2='&#10004; Breadth of technical expertise rare for a mid-sized software development partner. ZetaMonk has several hundred engineers well versed in different combinations of C++, Java, Python, JavaScript and other languages with experience in multitude of underlying platforms, IDEs, APIs, databases and frameworks.'
         list3='&#10004; Integrated Quality Assurance – Manual and Automated'
          ></AboutSec>

          <AboutSec
              heading='Speed'
              icon={<GiSpeedometer></GiSpeedometer>}
            

         list1='&#10004;We assemble a dedicated team ready to engage faster than hiring locally. We are able to quickly scale up or downsize according to client’s needs.'
         list2='&#10004;Ingrained Agile Development Methodology.'
         list3='&#10004;Tight integration with the Client’s team and processes.'
          ></AboutSec>

          <AboutSec
            heading='Security'
            icon={<MdSecurity></MdSecurity>}
         list1='&#10004;Thorough protection of client’s IP'
         list2='&#10004;Internal training and regular audits.'
         list3='&#10004;We have experienced zero security-related breaches or complaints in company’s history'
          ></AboutSec>

       
         
          </AboutSecrContainer>

        </AboutSecrWrapper>
      </AboutSecrSection>
      
    </IconContext.Provider>
  );
}
export default AboutSecret;
