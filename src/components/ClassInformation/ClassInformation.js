import React from 'react'
import { useSelector } from "react-redux";
import { ClassInformationStyled, InformationTitleStyled } from "./styled"


export const ClassInformation = ({ currentClassType, currentClass }) => {

    const description = useSelector(state => state.classState.description);
    const flavour = useSelector(state => state.classState.flavour);

    return (
        <ClassInformationStyled>
            <InformationTitleStyled>
                <h2>
                    Youve selected <br /> <span>{currentClass}</span> |
                    <span> {currentClassType}</span>
                    {currentClassType === 'subclass' && <span> | <i>{flavour}</i></span>}
                </h2>
            </InformationTitleStyled>


            <div>
                {description && (
                    currentClassType === 'subclass'
                        ? (<p>{description}</p>)
                        : (<p>Classes dont have a description</p>)
                )}
            </div>

        </ClassInformationStyled >
    )
}