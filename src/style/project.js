import styled from 'styled-components'
import projimg from '../image/dubaiproj.png'

export const Parentimg = styled.div`
width:440px;
height:370px;
position:relative;

&::before{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: rgba(0 ,0 ,0,0.6);
    transition: 1s ease width;
}
&:hover::before{
    width: 100%;
 

}
&:hover span,
&:hover p,
&:hover a{
    opacity:1
}

`
export const Span = styled.span`

      

`
export const Para = styled.p`
width: 100%;
position: absolute;
text-align: center;
top: ${props => props.top};
left: 50%;
transform: translate(-50%,-50%);
color: $font-color;
font-size: 24px;
font-weight: 700;
font-family: $heading-font;
opacity: 0;
transition: .6s ease opacity;
letter-spacing: 1px;
color:rgb(222,225,232)
`
export const Anchor = styled.a`
text-decoration:none;
position:absolute;
top:68%;
left:50%;
display:block;
margin-left:-75px;
opacity:0;
width:130px;
height:50px;
background:rgb(2,29,68);
line-height:30px;
padding: 10px;
text-align:center;
color:white;
transition: .7s ease opacity;
border-radius:5px;

`