import React,{useState} from 'react'
import {ContactSecres,ContactMain,Contactgrid,Contactfeedback,Feedbacklogo,FeedbackThankyou,Feedbackreply,Feedbackhome,Button,logo} from'./Contactresponse.elements';
import {Container} from '../../globalStyles';
import { FaCheckCircle } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';



function Contactresponse()
{
         
     
        
        return (
            <>
        <IconContext.Provider value={{ color:'green', size:'420' }}>

            <ContactSecres>
              <Container>
                <ContactMain>
                    <Contactgrid>
                        <Contactfeedback>
                            <FeedbackThankyou>
                                Thankyou for considering   <span style={{color:'#867AE9'}} >Zeta</span>
                                <span style={{color:'#E5D549', marginLeft:'5px'}}>Monk</span> for your project.
                            </FeedbackThankyou>
                            <Feedbackreply>
                                Your Request has been submitted we will get back to you soon to give details on your project price.
                            </Feedbackreply>
                            <Feedbackhome>
                              <Button to='/'>   <span style={{color:'#867AE9'}} >Zeta</span>
                               <span style={{color:'#E5D549', marginLeft:'5px'}}>Monk</span>.com</Button>
                            </Feedbackhome>

                        </Contactfeedback>
                        
                        <Feedbacklogo>
                            <FaCheckCircle></FaCheckCircle>
                        </Feedbacklogo>


                    </Contactgrid>
                </ContactMain>

              </Container>

              
            </ContactSecres>
        </IconContext.Provider>

            </>
        )
    
}
   


export default Contactresponse
