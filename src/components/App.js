import React from 'react';
import { ClassSelect } from './ClassSelect';
import { AppStyled, AppWrapperStyled, AppTitleStyled } from '../styles';


const App = () => {

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
        <AppStyled>
            <AppWrapperStyled>
                <AppTitleStyled>
                    <h1>Dungeons and Dragons API</h1>
                    <p className="lead">Select a class or subclass to begin</p>
                </AppTitleStyled>

                <ClassSelect />
            </AppWrapperStyled>
        </AppStyled>
    )
}
export default App;
