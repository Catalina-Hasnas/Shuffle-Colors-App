import * as actionTypes from './actionTypes';

const updateStateObject = (oldObject, updatedProprieties) => {
    return {
        ...oldObject,
        ...updatedProprieties
    };
};

const setSelectedColor = ( state, action ) => {
    return updateStateObject( state, {
        selectedColor: action.payload
    } );
};


const AppReducer = ( state, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_SELECTED_COLOR: return setSelectedColor(state, action);
        default:
            return state;
    }
};

export default AppReducer;