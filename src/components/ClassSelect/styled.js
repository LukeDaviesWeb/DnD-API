import styled from 'styled-components';

export const ClassListWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;

`

export const ClassSelectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`

export const ClassInputWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 20px;

    label{
        margin-bottom: 5px;
    }
    
    select{
        width: 100%;
        border: 2px solid black;
        padding: 10px 15px;
        font-size: 14px;
    }

    &:last-child{
        margin-right: 0;
    }
`