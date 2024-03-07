import { createContext, useContext,
         useReducer, Dispatch } from 'react'
import Actiontype from '../enums/Actiontype'
import AddTask from '../components/AddTask'

//Initial state in production can get from database via ajax / async ajax
const initialStates = [
    { id: 0, text: 'Philosophers Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];

const states = [{}];
const StatesContext = createContext(states)
const StatesDispatchContext = createContext(() => null)

export function TasksProvider({ children }) {
  const [states, dispatch] = useReducer(
    tasksReducer,
    initialStates
  );

  return (
    <StatesContext.Provider value={states}>
      <StatesDispatchContext.Provider value={dispatch}>
        {children}
      </StatesDispatchContext.Provider>
    </StatesContext.Provider>
  );
}

export function useTasks() {
  return useContext(StatesContext);
}

export function useTasksDispatch() {
  return useContext(StatesDispatchContext);
}

function tasksReducer(states, action) {
    switch (action.type) {
      case Actiontype.Add: {
        return [...states, {
          id: action.model.id,
          text: action.model.text,
          done: false
        }];
      }

      case Actiontype.Edit: {
        return states.map(t => {
          if (t.id === action.model.id) {
            return action.model;
          } else {
            return t;
          }
        });
      }

      case Actiontype.Delete: {
        return states.filter(t => t.id !== action.model.id);
      }
  
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
