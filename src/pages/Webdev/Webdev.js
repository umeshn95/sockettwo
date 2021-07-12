import React from 'react';
import { Counter, InfoSection } from '../../components';
import {  homeObjThree,homeObjTwo,homeObjOne } from './Data';

function Webdev() {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjOne} />
      <Counter></Counter>
    </>
  );
}

export default Webdev;