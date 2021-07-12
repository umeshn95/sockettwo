import styled from "styled-components";
import { Link } from 'react-router-dom';


export const ContactSecres = styled.div`
padding:60px;

@media only screen and (max-width:768px){
    padding:0px;

}

`
export const ContactMain = styled.div`


`
export const Contactgrid = styled.div`
display:grid;
height:550px;
grid-template-columns:1fr 1fr;
column-gap:100px;

@media only screen and (max-width:768px){
grid-template-columns:1fr;
 grid-template-rows:1fr 1fr;
}


`


export const Contactfeedback = styled.div`
display:grid;
grid-template-rows:0.5fr 0.5fr 0.5fr;
width:100%;


`

export const Feedbacklogo = styled.div`
width:100%;
height:auto;
@media only screen and (max-width:768px){
	display:none;
}


`
export const FeedbackThankyou = styled.div`
width:auto;
font-size:2.5rem;
padding:40px;

@media only screen and (max-width:768px){
padding-top:50px;
padding-bottom:30px;
padding-left:10px;
}
`
export const Feedbackreply = styled.div`
// padding-left:60px;
padding-left:40px;
font-size:1.5rem;
@media only screen and (max-width:768px){
	padding-left:0px;

}

`
export const Feedbackhome = styled.div`
padding-left:80px;
font-size:25px
justify-self:center;
align-slef:center;
@media only screen and (max-width:768px){
	padding-left:0px;

}


`
export const Button = styled(Link)`
box-shadow: 0px 0px 0px 0px #3dc21b;
	background-color:#44c767;
	border-radius:28px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:19px;
	padding:15px 76px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;

    &:hover{
        background-color:#5cbf2a;
    }

    &.active{
        position:relative;
        top:1px;
    }

`


