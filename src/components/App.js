import React from 'react';
import { ClassSelect } from './ClassSelect';
import { AppStyled, AppWrapperStyled, AppTitleStyled } from '../styles';


const App = () => {

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
