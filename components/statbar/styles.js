import styled from "styled-components";

export const StatBar = styled.div`
    // background: linear-gradient(263.39deg, #D8F3FF 7.94%, rgba(197, 182, 255, 0.710417) 101.06%, rgba(255, 88, 148, 0) 120.67%);
    
    
    row-gap : 2.5rem;
    border-radius: 50px;
    // background: #F2F2F2;
    background : rgb(17, 24, 39);
    box-shadow:  0px 0px 8px #0f0f0f;
    min-height : 469px;
    // margin-top : 8em;
    margin : 8em 1em 20vh 1em;
    padding : 2em 1em 2em 1em;

`

export const Circle = styled.div`
    // background: linear-gradient(180deg, #978EFF 18.54%, rgba(204, 57, 255, 0.975077) 100%);

    // background : #121212;
    // background : linear-gradient(180deg, #080808 18.54%, #121212 100%);
    background : rgb(112 26 117);
    backdrop-filter: blur(500px);
    
    width: 10em;
    height: 10em;

    border-radius : 50%;
    margin : 1.2em 0em 1.2em 0em;

    box-shadow : 0 0 2em rgba(0, 0, 0, 0.7);

    padding : 2em;

    z-index : 4;

`
