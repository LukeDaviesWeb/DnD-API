import React from 'react';
import { ClassInputWrapperStyled } from './styled';

export const Select = ({ classlist, classType, label, onChange }) => {

    return (
        <ClassInputWrapperStyled>
            <label htmlFor="class">{label}</label>
            <select name="class" id="class" onChange={(e) => onChange(e, classType)}>

                {classlist.map(singleClass => (
                    <option key={singleClass.index} value={singleClass.index}>{singleClass.name}</option>
                ))}
            </select>

        </ClassInputWrapperStyled>
    )
}