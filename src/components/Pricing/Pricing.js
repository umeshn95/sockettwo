import React,{useEffect} from 'react';
import { RiHomeWifiLine } from 'react-icons/ri';
import { BiBarChartAlt } from 'react-icons/bi';
import { VscDeviceMobile } from 'react-icons/vsc';
import { VscServerProcess } from "react-icons/vsc";
import { SiAdobeindesign } from "react-icons/si";
import { BsChat } from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css';

import { IconContext } from 'react-icons/lib';
import PricingCar from './PricingCar';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,

} from './Pricing.elements';

function Pricing({AOS}) {
  useEffect(() => {
    Aos.init({duration:2000});

}, [])
  return (
    <IconContext.Provider value={{ color: '#5FDDE5', size: 104 }}>
      <PricingSection  >
        <PricingWrapper>
          
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer data-aos={AOS}>

          <PricingCar
          service_link='/webdev'
          service_icon={<VscServerProcess></VscServerProcess>}
          service_name ='Web Development'
          service_description='Unique Web Design and Development,Our dedicated Team is continously improvising with time.'
          ></PricingCar>

           <PricingCar
          service_link='/chatbot'
           service_icon={<BsChat></BsChat>}
          service_name ='Chatbot Development'
          service_description='We Design Intelligent Chatbot With Instant Reply and Solve Business related problems.'
          ></PricingCar>

           <PricingCar
          service_link='/schoolmanage'

           service_icon={<SiAdobeindesign></SiAdobeindesign>}
          service_name ='UI/UX Development'
          service_description='We Provide Custom UI/UX Solutions, ZetaMonk has helped businesses with beautiful design.'
          ></PricingCar>

       
         
          </PricingContainer>

          <PricingContainer data-aos={AOS}>

<PricingCar
service_link='/mobile'
service_icon={<VscDeviceMobile></VscDeviceMobile>}
service_name ='Mobile Development'
service_description='Unique Web Design and Development,Our dedicated Team is continously thriving towards excellence.'
></PricingCar>

 <PricingCar
service_link='/digitalmarket'
 service_icon={<BiBarChartAlt></BiBarChartAlt>}
service_name ='Digital Marketing'
service_description='We have digital marketing solutions for every Industries.'
></PricingCar>

 <PricingCar
service_link='/iot'

 service_icon={<RiHomeWifiLine></RiHomeWifiLine>}
service_name ='Home Automation'
service_description='We Provide Complete Home Automation Services Ranging From Automatic Security to Automatic Appliance control,Preventive Maintainance of Home.'
></PricingCar>



</PricingContainer>
        </PricingWrapper>
      </PricingSection>
      
    </IconContext.Provider>
  );
}
export default Pricing;
