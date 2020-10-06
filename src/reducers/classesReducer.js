import * as constants from '../actions/actionTypes';

const INITIAL_STATE = {
    loading: true,
    loadingSpells: false,
    parentClass: '',
    classes: [],
    subclasses: [],
    subclassSpells: [],
    flavour: '',
    classSpells: [],
    description: [],
    error: null
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case constants.FETCHING:
            return { ...state, loading: true };

        case constants.FETCH_CLASSES:
            return { ...state, classes: action.payload };

        case constants.FETCH_SUBCLASSES:
            return {
                ...state,
                loading: false,
                subclasses: action.payload
            };

        case constants.FETCH_DESCRIPTION:
            return { ...state, description: action.payload };

        case constants.FETCH_FLAVOUR:
            return { ...state, flavour: action.payload };

        case constants.CLEAR_FLAVOUR:
            return { ...state, flavour: action.payload };

        case constants.SET_PARENT_CLASS:
            return { ...state, parentClass: action.payload };

        case constants.FETCH_SPELLS_INIT:
            return { ...state, parentClass: '', loadingSpells: action.payload, };

        case constants.FETCH_SUBCLASS_SPELLS:
            return {
                ...state,
                loadingSpells: false,
                subclassSpells: action.payload
            };

        case constants.CLEAR_SUBCLASS_SPELLS:
            return { ...state, subclassSpells: action.payload };

        case constants.FETCH_CLASS_SPELLS:
            return {
                ...state,
                loadingSpells: false,
                classSpells: action.payload
            };

        case 'CLEAR_CLASS_SPELLS':
            return { ...state, classSpells: action.payload };

        default:
            return state;
    }
}