import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree,pricingObj } from './Data';

function Services() {
  return (
    <>
      <Pricing {...pricingObj} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Services;
