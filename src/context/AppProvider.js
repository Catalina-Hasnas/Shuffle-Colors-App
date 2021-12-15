import React, { useReducer } from 'react';

import AppContext from './AppContext';
import AppReducer from './AppReducer';

const AppProvider = (props) => {
    const initialState = {
        selectedColor: 'white'
    };

    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    return (
        <AppContext.Provider
            value={{
                selectedColor: state.selectedColor,
                dispatch
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppProvider