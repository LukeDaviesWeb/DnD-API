import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import {
    fetchSubClassSpells,
    fetchClassSpells,
} from '../../actions';

import { ButtonStyled, SpellListStyled, SpellListContainerStyled } from './styled'
import { AnimatePresence, motion } from "framer-motion"


export const ClassSpells = ({ currentClassType, currentClass }) => {
    const classSpells = useSelector(state => state.classState.classSpells);
    const subclassSpells = useSelector(state => state.classState.subclassSpells);
    const loadingSpells = useSelector(state => state.classState.loadingSpells);
    const parentClass = useSelector(state => state.classState.parentClass);

    const dispatch = useDispatch();

    const handleFetchSpells = () => {
        switch (currentClassType) {
            case 'subclass':
                dispatch(fetchSubClassSpells(currentClass))
                break;
            case 'class':
                dispatch(fetchClassSpells(currentClass))
                break;
            default: console.log('none selected')
        }
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

    const ulVariants = {
        show: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                when: "afterChildren"
            }
        },
        hide: {
        },
    }

    const liVariants = {
        show: {
            y: 0,
            opacity: 1,
        },
        hide: {
            y: -25,
            opacity: 0,
        },
    }



    return (
        <div>
            <div>
                <ButtonStyled onClick={handleFetchSpells}>Get Spells</ButtonStyled>
            </div>
            <AnimatePresence>
                {loadingSpells ? <p>Loading...</p> : (
                    <SpellListContainerStyled
                        variants={variants}
                        initial="hide"
                        animate="show"
                        transition={{ damping: 300 }}
                    >

                        {classSpells.length ? (
                            <SpellListStyled>
                                <h4>{currentClassType === 'class' ? `${currentClass} Spells` : `${parentClass} Spells (parent class)`} </h4>
                                <motion.ul variants={ulVariants} initial="hide" animate={"show"}>
                                    {
                                        typeof (classSpells) !== 'string' ? (

                                            classSpells.map(spell => (
                                                <motion.li key={spell.name} variants={liVariants}>{spell.name}</motion.li>
                                            ))
                                        ) : (
                                                <motion.li>{classSpells}</motion.li>
                                            )
                                    }
                                </motion.ul>
                            </SpellListStyled>
                        ) : ''}
                        {currentClassType === 'subclass' && subclassSpells.length ? (
                            <SpellListStyled>
                                <h4>{currentClass} Spells</h4>
                                <motion.ul variants={ulVariants} initial="hide" animate={"show"}>
                                    {
                                        typeof (subclassSpells) !== 'string' ? (
                                            subclassSpells.map(spell => (
                                                <motion.li key={spell.spell.name} variants={liVariants}>
                                                    {spell.spell.name}
                                                </motion.li>
                                            ))
                                        ) : (
                                                <motion.li>{subclassSpells}</motion.li>
                                            )
                                    }
                                </motion.ul>
                            </SpellListStyled>
                        ) : ''}
                    </SpellListContainerStyled>
                )}
            </AnimatePresence>



        </div>
    )
}