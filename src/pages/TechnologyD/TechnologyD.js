import React from 'react';
import {  Counter, GoToDjango, InfoSection} from '../../components';
import {  homeObjThree, homeObjTwo,homeObjOne,homeObjFour} from './Data';


function TechnologyD() {
  return (
    <>
      <InfoSection {...homeObjOne} />

      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />

      

      <Counter></Counter>
<GoToDjango></GoToDjango>
    </>
  );
}

export default TechnologyD;