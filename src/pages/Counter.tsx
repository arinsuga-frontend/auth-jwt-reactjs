
import { useState, useReducer } from "react";


type CounterState = { count: number }
type CounterAction = { type: string, payload: number }

const initState = {
    count: 0
}

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    switch (action.type) {
        case 'increment':
            return {...state, count: action.payload}
        case 'decrement':
            return {...state, count: action.payload}
        default:
            throw new Error();
            
    }

}

const Counter = () => {

    const [state, dispatch] = useReducer(counterReducer, initState);
    const increment = () => dispatch({type: 'increment', payload: state.count+1});
    const decrement = () => dispatch({type: 'decrement', payload: state.count-1});

    return (
        <>
            <h1>CounterX = {state.count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );

}

export default Counter;
