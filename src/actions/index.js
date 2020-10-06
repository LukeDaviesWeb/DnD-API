import dnd from '../apis/dnd';
import * as constants from './actionTypes';

export const fetchClassesAndSubclasses = () => async (dispatch) => {
    await dispatch(fetchClasses());
    await dispatch(fetchSubClasses());
}

export const fetchClasses = () => async dispatch => {
    const response = await dnd.get('/classes');

    dispatch({
        type: constants.FETCH_CLASSES,
        payload: response.data.results
    })
}

export const fetchSubClasses = () => async dispatch => {
    const response = await dnd.get(`/subclasses`);

    dispatch({
        type: constants.FETCH_SUBCLASSES,
        payload: response.data.results
    })
}

export const fetchSubClassDescription = (subclass) => async dispatch => {
    const response = await dnd.get(`/subclasses/${subclass}`);

    dispatch({
        type: constants.FETCH_DESCRIPTION,
        payload: response.data.desc[0]
    })
}


export const fetchSubClassFlavour = (subclass) => async dispatch => {
    const response = await dnd.get(`/subclasses/${subclass}`);

    dispatch({
        type: constants.FETCH_FLAVOUR,
        payload: response.data.subclass_flavor
    })
}

export const clearSubClassFlavour = () => async dispatch => {
    dispatch({
        type: constants.CLEAR_FLAVOUR,
        payload: ''
    })
}


export const fetchClassSpells = (parentClass) => async dispatch => {
    const response = await dnd.get(`/classes/${parentClass}/spells`);
    let payload;

    if (response.data.count) {
        payload = response.data.results
    } else {
        payload = 'no spells available for parent class'
    }

    await dispatch(fetchSpellsInit())

    dispatch({
        type: constants.FETCH_CLASS_SPELLS,
        payload: payload
    })
}

export const clearClassSpells = () => async dispatch => {
    dispatch({
        type: constants.CLEAR_CLASS_SPELLS,
        payload: []
    })
}

export const fetchSubClassSpells = (subclass) => async dispatch => {
    const response = await dnd.get(`/subclasses/${subclass}`);
    let parentClass = response.data.class.index;
    let payload;

    if (response.data.spells !== undefined) {
        payload = response.data.spells
    } else {
        payload = 'no spells available for current subclass'
    }

    await dispatch(fetchSpellsInit())
    await dispatch(fetchClassSpells(parentClass));
    await dispatch(setParentClass(parentClass))
    dispatch({
        type: constants.FETCH_SUBCLASS_SPELLS,
        payload: payload
    })

}

export const setParentClass = (parentClass) => async dispatch => {

    dispatch({
        type: constants.SET_PARENT_CLASS,
        payload: parentClass
    })
}

// export const clearParentClass = () => async dispatch => {

//     dispatch({
//         type: constants.CLEAR_PARENT_CLASS,
//         payload: ''
//     })
// }

export const clearSubClassSpells = () => async dispatch => {
    dispatch({
        type: constants.CLEAR_SUBCLASS_SPELLS,
        payload: []
    })
}

export const fetchSpellsInit = () => async dispatch => {
    dispatch({
        type: constants.FETCH_SPELLS_INIT,
        payload: true
    })
}
