import React from 'react';
import { AboutSecret, Counter, Custom, InfoSection, TechStack,GoToTop} from '../../components';
import {  homeObjThree, homeObjTwo,homeObjOne } from './Data';


function About() {
  return (
    <>
      <InfoSection {...homeObjOne} />

      <InfoSection {...homeObjTwo} />

      

      <Counter></Counter>

    <AboutSecret></AboutSecret>
    </>
  );
}

export default About;