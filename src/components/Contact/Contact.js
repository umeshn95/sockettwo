import React,{useState,useEffect} from 'react'
import {ContactSec,Contactgrid1,ContactHeader,ContactForm,ContactTextHeader,ContactPara,ContactDiscuss,ContactSpecialist,ContactName,ContactFullName,ContactCompanyName,ContactEmail,ContactAsk,ContactHelp,Input,Button,Message,ContactSecres,ContactMain,Contactgrid,Contactfeedback,Feedbacklogo,FeedbackThankyou,Feedbackreply,Feedbackhome,Button1,logo} from'./Contact.elements';
import {Container} from '../../globalStyles';
import { FaCheckCircle } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';


function Contact()
{
    const [name,setName]=useState('')
    const [company,setCompany]=useState('')
    const [email,setEmail]=useState('')
    const [about,setAbout]=useState('')
    const [msg,setMsg]=useState('')
    const [validemail,setValidemail]=useState('')
    const [validcompany,setValidcompany]=useState('')
    const [validname,setValidname]=useState('')
    const [validabout,setValidabout]=useState('')
    const [validmsg,setValidmsg]=useState('')
    const [show,setShow]=useState(true);

    
    
    
const saveUser=(show)=>{
    // e.preventDefault();
 if(!email){
     setValidemail('*Required')
   }
 if(!name){
     setValidname('*Required')
   }

 if(!msg){
     setValidmsg('*Required')
   }
 if(!company){
    setValidcompany('*Required')
   }
   else{
       let data = {name,company,email,about,msg};
       fetch('https://visheshsolanki.pythonanywhere.com//api/create/',{
           method:'POST',
           headers:{
               'Accept':'application/json',
               'Content-Type': 'application/json'
           },
           body:
              JSON.stringify(data)
           
          }).then(res=>{(res.statusText=='Bad Request' && !email)?setValidemail('Enter valid email'):setShow(false)}).catch(err=>{console.log(err)})
   }
    
}
   
   



        return (
            <>
            
            <ContactSec show={show}>
                <Container>
                <Contactgrid1>
                    <ContactHeader>
                        <ContactTextHeader>
                        Let’s Get Your &nbsp; &nbsp;   <span style={{color:'#C56183'}} >Dream Project</span> Started.
                        </ContactTextHeader>
                        <ContactPara>
                        It’s time to redefine what <span style={{color:'#C56183'}} >awesome</span> really looks like.
                        </ContactPara>
                    </ContactHeader>
                    <ContactForm>
                        <ContactDiscuss>
                        Discuss your <span style={{color:'#7579E7'}} >Dream Project</span> with us.
                        </ContactDiscuss>
                        <ContactSpecialist>
                        We’re looking forward to working together. Share your thoughts below and our Expert will be in touch shortly.
                        </ContactSpecialist>
                        <ContactName>
                            <ContactFullName>
                            <Input id='textfield1'  big={false} Hbig={false} type='text'  placeholder='FullName' value={name} onChange={(e)=>{setName(e.target.value)}} ></Input>
                            <Message>{validname}</Message>
                            </ContactFullName>
                            <ContactCompanyName>
                            <Input id='textfield2' big={false} Hbig={false} type='tel' maxLength='10' placeholder='Mobile' value={company} onChange={(e)=>{setCompany(e.target.value)}} ></Input>
                            <Message>{validcompany}</Message>
                            

                            </ContactCompanyName>
                        </ContactName>
                        <ContactEmail>
                        <Input id='textfield3' big={true} Hbig={false} type='email'  placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></Input>
                        <Message>{validemail}</Message>
                        

                        </ContactEmail>
                        <ContactAsk>
                        <Input id='textfield4' big={true} Hbig={false} type='text'  placeholder='Company Name' value={about} onChange={(e)=>{setAbout(e.target.value)}}></Input>
                        <Message>{validabout}</Message>
                        
                        </ContactAsk>
                        <ContactHelp>
                        <Input id='textfield5' big={true} Hbig={true} type='text'  placeholder='How can We Help?' value={msg} onChange={(e)=>{setMsg(e.target.value)}} ></Input>
                        <Message>{validmsg}</Message>
                        
                        </ContactHelp>
                        <Button type='submit' onClick={saveUser} onSubmit={(e)=>e.preventDefault()}>
                        Submit Request
                      </Button>
                    </ContactForm>
                </Contactgrid1>
    
                </Container>
            </ContactSec>
            
            
            <IconContext.Provider  value={{ color:'green', size:'420' }}>

<ContactSecres show={show}>
  <Container>
    <ContactMain>
        <Contactgrid>
            <Contactfeedback>
                <FeedbackThankyou>
                    Thankyou for considering   <span style={{color:'#867AE9'}} >Zeta</span>
                    <span style={{color:'#E5D549', marginLeft:'5px'}}>Monk</span> for your project.
                </FeedbackThankyou>
                <Feedbackreply>
                    Your Request has been submitted we will get back to you soon to give details on your project.
                </Feedbackreply>
                <Feedbackhome>
                  <Button1 to='/'>   <span style={{color:'#867AE9'}} >Zeta</span>
                   <span style={{color:'#E5D549', marginLeft:'5px'}}>Monk</span>.com</Button1>
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
   


export default Contact
