import React,{useEffect} from 'react';
import { BiLike } from "react-icons/bi";
import { IconContext } from 'react-icons/lib';
import { GoPerson,GoLightBulb } from "react-icons/go";
import { GiTrophyCup } from "react-icons/gi";
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Counterexperience,CounterMain,Countersub,Countersub1,Countersub2,Countersub3,Countersub4,Counterlogo,CounterType,CounterNumber} from'./Counter.elements';
function Counter() {
    useEffect(() => {
        Aos.init({duration:2000});

    }, [])
    return (
        <>
        <IconContext.Provider value={{ color: '#5C33F6', size: 98 }}>

        <Counterexperience data-aos='fade-up'>
            <CounterMain>
                <Countersub>
                    <b>Abundance of Experience</b> 210+ projects completed
                </Countersub>
                <Countersub1>
                    <Counterlogo>
                    <BiLike></BiLike>
                    </Counterlogo>
                    <CounterNumber >
                         210+
                    </CounterNumber>
                    <CounterType>
                        Successful Projects    
                    </CounterType>
                </Countersub1>
                <Countersub2>
                    <Counterlogo>
                        <GoPerson></GoPerson>
                    </Counterlogo>
                    <CounterNumber>
                        145+
                    </CounterNumber>
                    <CounterType>
                        Satisfied Client
                    </CounterType>
                </Countersub2>
                <Countersub3>
                    <Counterlogo><GoLightBulb></GoLightBulb>
                                     </Counterlogo>
                    <CounterNumber>97+                </CounterNumber>
                    <CounterType>
                    Expert Consultation 
                    </CounterType>
                </Countersub3>
                <Countersub4>
                    <Counterlogo>
                    <GiTrophyCup></GiTrophyCup>
                    </Counterlogo>
                    <CounterNumber>
                        22+
                    </CounterNumber>
                    <CounterType>
                        Success Awards                  
                    </CounterType>
                </Countersub4>
            </CounterMain>
        </Counterexperience>
        </IconContext.Provider>

        </>
        
    )
}

export default Counter
