import React from 'react';
import { GiFloatingCrystal } from 'react-icons/gi';
import { Button } from '../../globalStyles';
import {
   
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature,
    Img
  } from './Pricing.elements';
function PricingCar(props) {
    return (
        <>
           <PricingCard to={props.service_link}>
              <PricingCardInfo>
                
                <PricingCardIcon>
                {props.service_icon}
                </PricingCardIcon>
                <PricingCardPlan>{props.service_name}</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength>{props.service_description}</PricingCardLength>
                <PricingCardFeatures>
                  {/* <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature> */}
                </PricingCardFeatures>
               
              </PricingCardInfo>
            </PricingCard>   
        </>
    )
}

export default PricingCar
