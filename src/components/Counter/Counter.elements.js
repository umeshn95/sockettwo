import styled from "styled-components";

export const Counterexperience = styled.div`
color: #fff;
padding:110px 110px 20px 110px;
display:block; 
position:relative; 
height:400px;
@media screen and (max-width: 768px) {
    padding:0;
    height:auto;
}


`

export const CounterMain = styled.div`
display:grid;
grid-template-columns:0.8fr 0.6fr 0.6fr 0.6fr 0.6fr;
@media only screen and (max-width:550px){
grid-template-columns:1fr;
grid-template-rows:0.8fr 0.6fr 0.6fr 0.6fr 0.6fr;



}
`

export const Countersub = styled.div`
padding:10px;
color: #5C33F6;
font-size:28px;
align-self:center;

;
`

export const Countersub1 = styled.div`
display:grid;
grid-template-rows:0.8fr 0.3fr 0.3fr;
`
export const Countersub2 = styled.div`
display:grid;
grid-template-rows:0.8fr 0.3fr 0.3fr;

`
export const Countersub3 = styled.div`
display:grid;
grid-template-rows:0.8fr 0.3fr 0.3fr;

`
export const Countersub4 = styled.div`
display:grid;
grid-template-rows:0.8fr 0.3fr 0.3fr;

`
export const Counterlogo = styled.div`
justify-self:center;
align-self:center;
`

export const CounterNumber = styled.div`
font-size:40px;
font-weight:bold;
justify-self:center;
align-self:center;
color: #5C33F6;
`

export const CounterType = styled.div`
font-size:25px;
justify-self:center;
align-self:center;
color: #5C33F6;
`


