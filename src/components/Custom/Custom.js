import React,{useEffect} from 'react';
import { BiWallet,BiCustomize } from "react-icons/bi";
import { IconContext } from 'react-icons/lib';
import { BiLock } from "react-icons/bi";
import { DiDjango,DiNpm } from "react-icons/di";
import { GoPerson,GoLightBulb } from "react-icons/go";
import { GiTrophyCup } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { FaTools,FaPython,FaNodeJs } from "react-icons/fa";
import { CgCrown } from "react-icons/cg";
import { RiCustomerService2Fill } from "react-icons/ri";
import Aos from 'aos';
import 'aos/dist/aos.css';
import {CustomMain,CustomGrid,CustomSubgrid1,CustomSubgrid2,CustomSubgrid3,CustomSubgrid4,CustomSubgrid5,CustomSubgrid6,CustomLogo,CustomPara} from'./Custom.elements';
function Custom() {
    useEffect(() => {
        Aos.init({duration:2000});

    }, [])
    return (
        <>
        <IconContext.Provider value={{ color: '#5FDDE5', size: 133 }}>
        <CustomMain data-aos='fade-up'>
            <CustomGrid>
                <CustomSubgrid1 invisible={true}>
                    
                    <CustomLogo >
                    <CgCrown></CgCrown>
                    </CustomLogo>
                    <CustomPara >
                    Great Experience
                    </CustomPara>
                </CustomSubgrid1>
                <CustomSubgrid2 invisible={true}>
                    
                    <CustomLogo>
                    <RiCustomerService2Fill></RiCustomerService2Fill>
                    </CustomLogo>
                    <CustomPara>
                    Customer Support
                    </CustomPara>
                </CustomSubgrid2  >
                <CustomSubgrid3 invisible={true}>
                    
                    <CustomLogo>
                    <BiWallet></BiWallet>
                    </CustomLogo>
                    <CustomPara>
                    Affordable Cost
                    </CustomPara>
                </CustomSubgrid3>
                <CustomSubgrid4 invisible={true}>
                    
                    <CustomLogo>
                    <BiLock></BiLock>
                    </CustomLogo>
                    <CustomPara>
                    Highly Secure
                    </CustomPara>
                </CustomSubgrid4>
                <CustomSubgrid5 invisible={true}>
                    
                    <CustomLogo>
                    <FaTools></FaTools>    
                    </CustomLogo>
                    <CustomPara>
                        Flexibility
                    </CustomPara>
                </CustomSubgrid5>
                <CustomSubgrid6 invisible={true}>
                    
                    <CustomLogo>
                    <BiCustomize></BiCustomize>
                    </CustomLogo>
                    <CustomPara>
                    Highly Customized
                    </CustomPara>
                </CustomSubgrid6>
            </CustomGrid>
        </CustomMain>

        </IconContext.Provider>

        </>
        
    )
}

export default Custom
