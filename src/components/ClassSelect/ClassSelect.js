import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { ClassInformation } from '../ClassInformation';
import { ClassSpells } from '../ClassSpells';

import {
    fetchClassesAndSubclasses,
    fetchSubClassDescription,
    fetchSubClassFlavour,
    clearClassSpells,
    clearSubClassSpells,
    clearSubClassFlavour,
    clearDescription
} from '../../actions';


import { ClassListWrapperStyled, ClassSelectContainer, ClassInputWrapperStyled } from './styled';
import { AnimatePresence, motion } from "framer-motion"

export const ClassSelect = () => {
    const [currentClass, setCurrentClass] = useState('');
    const [currentClassType, setCurrentClassType] = useState('');

    const dispatch = useDispatch();

    const { error, classes, subclasses, loading } = useSelector(state => ({
        error: state.classState.error,
        classes: state.classState.classes,
        subclasses: state.classState.subclasses,
        loading: state.classState.loading,
    }));


    useEffect(() => {
        dispatch(fetchClassesAndSubclasses())
    }, [dispatch])


    const handleClassChange = (e, classType) => {
        let classValue = e.target.value;

        setCurrentClass(classValue);
        setCurrentClassType(classType);

        switch (classType) {
            case 'subclass':
                dispatch(fetchSubClassDescription(e.target.value))
                dispatch(fetchSubClassFlavour(e.target.value))
                break;
            default: console.log('none selected')
        }

        dispatch(clearClassSpells())
        dispatch(clearSubClassSpells())
        dispatch(clearSubClassFlavour())
    }

    const variants = {
        show: {
            opacity: 1,
            y: 0
        },
        hide: {
            opacity: 0,
            y: -10
        }
    }


    if (error) { return <div>Error! {error.message}</div>; }
    if (loading) { return <div>Loading...</div>; }

    return (
        <ClassListWrapperStyled>
            <ClassSelectContainer>
                <ClassInputWrapperStyled>
                    <label htmlFor="class">Select a Class</label>
                    <select name="class" id="class" onChange={(e) => handleClassChange(e, 'class')}>
                        {classes.map(singleClass => (
                            <option value={singleClass.index}>{singleClass.name}</option>
                        ))}
                    </select>
                </ClassInputWrapperStyled>
                <ClassInputWrapperStyled>
                    <label htmlFor="class">Select a Subclass</label>
                    <select name="class" id="class" onChange={(e) => handleClassChange(e, 'subclass')}>
                        {subclasses.map(singleClass => (
                            <option value={singleClass.index}>{singleClass.name}</option>
                        ))}
                    </select>

                </ClassInputWrapperStyled>

            </ClassSelectContainer>

            <AnimatePresence>
                {currentClass ? (
                    <motion.div variants={variants} initial="hide" animate="show">
                        <ClassInformation currentClassType={currentClassType} currentClass={currentClass} />
                        <ClassSpells
                            currentClassType={currentClassType}
                            currentClass={currentClass}
                        />
                    </motion.div>
                ) : ('')}
            </AnimatePresence>




        </ClassListWrapperStyled>
    )
}