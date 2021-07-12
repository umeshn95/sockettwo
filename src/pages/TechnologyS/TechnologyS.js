import React from 'react';
import {  Counter, GoTosql, InfoSection} from '../../components';
import {  homeObjThree, homeObjTwo,homeObjOne,homeObjFour} from './Data';


function TechnologyS() {
  return (
    <>
      <InfoSection {...homeObjOne} />

      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />

      

      <Counter></Counter>
<GoTosql></GoTosql>
    </>
  );
}

export default TechnologyS;