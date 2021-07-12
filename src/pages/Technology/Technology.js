import React from 'react';
import {  Counter, InfoSection} from '../../components';
import {  homeObjThree, homeObjTwo,homeObjOne,homeObjFour} from './Data';


function Technology() {
  return (
    <>
      <InfoSection {...homeObjOne} />

      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />

      

      <Counter></Counter>

    </>
  );
}

export default Technology;