import styled from 'styled-components';
import { motion } from "framer-motion"

export const ButtonStyled = styled.button`
    border: 2px solid black;
    background: none;
    padding: 10px 75px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    transform: translate3d(0, 0, 0);
    will-change: transform;
    transition: all .3s ease;
    box-shadow: 0px 0px 0px black;
    margin-bottom: 25px;
    &:hover{
        transform:translate3d(-2px, -4px, 0);
        box-shadow: 5px 5px 0px black;
    }
    &:focus{
        outline: none;
    }
    &:disabled{
        border: 2px solid rgba(0,0,0,0.3);
       
        &:hover{
            cursor: not-allowed;
            transform: translate3d(0, 0, 0);
            box-shadow: 0px 0px 0px black;
            border: 2px solid rgba(0,0,0,0.3);
        }
    }
`

export const SpellListContainerStyled = styled(motion.div)`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 500px) {
        flex-direction: row;
    }

    >div{
        margin-bottom: 25px;
        flex: 1 0 0;
        padding: 10px;

        &:last-child{
            margin-right: 0;
        }

        @media screen and (min-width: 500px) {
            margin-right: 25px;
            margin-bottom: 0;
        }
    }

    ul{
        li{
            margin-bottom: 5px;
        }
    }


`

export const SpellListStyled = styled.div`
    border: 2px solid black;

    h4{
        font-size: 25px;
        text-transform: capitalize;
        margin-bottom: 25px;
    }

    ul{
        display: flex;
        flex-wrap: wrap;
        list-style-type:none;
        padding: 0;
        li{
            border: 1px solid;
            padding: 10px;
   
            width: 100%;
      
        }
    }
    
`
export const SpellCTAStyled = styled.div`
    display: flex;
    flex-direction: column;
        button{
            flex: 1 0 0;

            &:last-child{
                @media screen and (min-width: 500px) {
                    margin-left: 25px;
                }
            }

            &[data-view="half-width"]{
                max-width: calc(50% - 12.5px);
                margin-left: 0;
            }

            &:first-child{
                @media screen and (min-width: 500px) {
                    margin-left: 0px;
                }
            }
        }

    @media screen and (min-width: 500px) {
        flex-direction: row;
    }
`
