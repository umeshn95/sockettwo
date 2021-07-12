import React from 'react';
import { Contact } from '../../components';

import { InfoSection } from '../../components';

import { contactObj, homeObjThree } from './Data';

function SignUp() {
  return (
    <>
    <Contact {...contactObj}></Contact >
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
