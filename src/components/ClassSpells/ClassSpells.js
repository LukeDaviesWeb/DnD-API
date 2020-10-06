import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import {
    fetchSubClassSpells,
    fetchClassSpells,
} from '../../actions';

import { ButtonStyled, SpellListStyled, SpellListContainerStyled } from './styled'
import { AnimatePresence } from "framer-motion"


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


    return (
        <div>
            <div>
                <ButtonStyled onClick={handleFetchSpells}>Get Spells</ButtonStyled>
            </div>
            <AnimatePresence>
                {loadingSpells ? <p>Loading...</p> : (
                    <SpellListContainerStyled variants={variants} initial="hide" animate="show">

                        {classSpells.length ? (
                            <SpellListStyled>
                                <h4>{currentClassType === 'class' ? `${currentClass}` : `${parentClass}`} Spells (parent class)</h4>
                                <ul>
                                    {
                                        typeof (classSpells) !== 'string' ? (
                                            classSpells.map(spell => (
                                                <li key={spell.name} >{spell.name}</li>
                                            ))
                                        ) : (
                                                <li>{classSpells}</li>
                                            )
                                    }
                                </ul>
                            </SpellListStyled>
                        ) : ''}
                        {currentClassType === 'subclass' && subclassSpells.length ? (
                            <SpellListStyled>
                                <h4>{currentClass} Spells</h4>
                                <ul>
                                    {
                                        typeof (subclassSpells) !== 'string' ? (
                                            subclassSpells.map(spell => (
                                                <li key={spell.spell.name}>{spell.spell.name}</li>
                                            ))
                                        ) : (
                                                <li>{subclassSpells}</li>
                                            )
                                    }
                                </ul>
                            </SpellListStyled>
                        ) : ''}
                    </SpellListContainerStyled>
                )}
            </AnimatePresence>



        </div>
    )
}