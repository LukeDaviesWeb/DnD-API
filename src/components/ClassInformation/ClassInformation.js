import React from 'react'
import { useSelector } from "react-redux";
import { ClassInformationStyled, InformationTitleStyled } from "./styled"
import { AnimatePresence } from "framer-motion"

export const ClassInformation = ({ currentClassType, currentClass }) => {

    const description = useSelector(state => state.classState.description);
    const flavour = useSelector(state => state.classState.flavour);



    return (
        <ClassInformationStyled>
            <InformationTitleStyled>
                <h2>
                    You have selected <br /> <span>{currentClass}</span> |
                    <span> {currentClassType}</span>
                    {currentClassType === 'subclass' && <span> | <i>{flavour}</i></span>}
                </h2>
            </InformationTitleStyled>


            <AnimatePresence>
                {description && (
                    currentClassType === 'subclass'
                        ? (<p initial="hide" animate="show">{description}</p>)
                        : (<p>Classes dont have a description</p>)
                )}
            </AnimatePresence>

        </ClassInformationStyled >
    )
}