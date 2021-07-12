import React,{useEffect} from 'react';
import { BiLike } from "react-icons/bi";
import { IconContext } from 'react-icons/lib';
import { SiMongodb } from "react-icons/si";
import { DiDjango,DiNpm } from "react-icons/di";
import { GoPerson,GoLightBulb } from "react-icons/go";
import { GiTrophyCup } from "react-icons/gi";
import { FaReact,FaPython,FaNodeJs } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
import {TeckStackMain,TeckStackSub,TeckStackSub1,TeckStackSub2,TeckStackSub3,TeckStackSub4,TeckStackSub5,TeckStackSub6,TechLogo,TechStackSec,TechStackSubUpper} from'./TechStack.elements';
function Counter() {
    useEffect(() => {
        Aos.init({duration:2000});

    }, [])
    return (
        <>
        <IconContext.Provider value={{ color: '#5C33F6', size: 98 }}>

<TeckStackMain data-aos='fade-right'>
<TechStackSec>
    <TechStackSubUpper>
        Our Technology Stack
    </TechStackSubUpper>

        <TeckStackSub>

        <TeckStackSub1>
        <TechLogo>
        <FaReact></FaReact>
        </TechLogo>
        </TeckStackSub1>

        <TeckStackSub2>
        <TechLogo>
        <FaPython></FaPython>
        </TechLogo>
        </TeckStackSub2>

        <TeckStackSub3>
        <TechLogo>
        <FaNodeJs></FaNodeJs>

        </TechLogo>
        </TeckStackSub3>
        
        <TeckStackSub4>
        <TechLogo>
        <SiMongodb></SiMongodb>

        </TechLogo>
        </TeckStackSub4>

        <TeckStackSub5>
        <TechLogo>
        <DiDjango></DiDjango>

        </TechLogo>
        </TeckStackSub5>

        <TeckStackSub6>
        <TechLogo>
        <DiNpm></DiNpm>

        </TechLogo>
        </TeckStackSub6>


        </TeckStackSub>
</TechStackSec>

        </TeckStackMain>
        
        </IconContext.Provider>

        </>
        
    )
}

export default Counter
