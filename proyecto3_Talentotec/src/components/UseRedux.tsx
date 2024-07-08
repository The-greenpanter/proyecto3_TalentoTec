import React, { useReducer } from 'react'

export const UseRedux = () => {
    
    const initialState = {count: 0}
    
    function reducer (state, action) {
        switch (action.type) {
            case `increment`:
                return {...state, count: state.count+1};
            case `decreace`:
                return {...state, count: state.count-1};
            case `reset`:
                return {...initialState};
            default:
                throw new Error();
    }
}
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2 className="">Exercise Hook userReducer</h2>
        <button onClick={()=> dispatch({type: `increment`})}>
            increment
        </button>
        <button onClick={()=> dispatch({type: `decreace`})}>
            decreace
        </button>
        <button onClick={()=> dispatch({type: `reset`})}>
            reset
        </button>
        <p className="count-text">Count is {state.count}</p>
        </div>
    )
};
