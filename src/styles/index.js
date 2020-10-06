import styled from 'styled-components';

export const AppStyled = styled.div`
    font-family: 'Roboto Condensed', sans-serif;

    h1,h2,h3,h4,h5,h6,p{
        margin: 0;
        padding: 0;
    }

    p{
        font-size: 14px;
        line-height: 23px;
        &.lead{
            font-size: 20px;
        }
    }

    li{
        font-size: 14px;
    }
`

export const AppWrapperStyled = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 0 25px;
`

export const AppTitleStyled = styled.div`
    margin-bottom: 50px;
`



