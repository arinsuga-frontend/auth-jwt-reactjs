import { createContext, useContext,
         useReducer, Dispatch } from 'react'
import Childrennode from '../types/Childrennode'
import Actiontype from '../enums/Actiontype'
import { default as Statemodel } from '../models/Taskmodel'
import { default as Stateaction } from '../types/Taskaction'
import AddTask from '../components/AddTask'

//Initial state in production can get from database via ajax / async ajax
const initialStates: Statemodel[] = [
    { id: 0, text: 'Philosophers Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];

// const TasksContext = createContext({})
// const TasksDispatchContext = createContext<Dispatch<Stateaction>>(() => null)

const StatesContext = createContext({})
const StatesDispatchContext = createContext<Dispatch<Stateaction>>(() => null)

export function TasksProvider({ children }: Childrennode) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialStates
  );

  return (
    <StatesContext.Provider value={tasks}>
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

function tasksReducer(states: Statemodel[], action: Stateaction) {
    switch (action.type) {
      case Actiontype.Add: {
        return [...states, {
          id: action.id,
          text: action.text,
          done: false
        }];
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
