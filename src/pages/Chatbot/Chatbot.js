import React from 'react';
import { Counter, InfoSection } from '../../components';
import {  homeObjThree,homeObjOne,homeObjTwo } from './Data';

function Chatbot() {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Counter></Counter>
    </>
  );
}

export default Chatbot;