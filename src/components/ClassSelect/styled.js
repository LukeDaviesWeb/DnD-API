import styled from 'styled-components';
import { motion } from 'framer-motion';


export const ClassListWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;

`

export const ClassSelectContainer = styled(motion.div)`
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    margin-bottom: 25px;

    select{
        margin-bottom: 10px;
    }

    @media only screen and (min-width: 500px) {
        flex-direction: row;
        margin-bottom: 0;
    }
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

        &:focus{
            outline: none;
        }
    }

    &:last-child{
        margin-right: 0;
    }
`