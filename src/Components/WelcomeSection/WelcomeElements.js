//styles the welcome section on the home page

import styled from 'styled-components'

export const WelcomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30 px;
    height: 800px;
    position: relative;
    z-index: 1
    fontFamily:'Montserrat', sans-serif;
`

export const WelcomeBg = styled.div`
    position: absolute;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`