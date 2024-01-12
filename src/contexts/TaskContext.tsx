import React, { ReactNode, createContext, useContext,
    Reducer, useReducer } from "react";

type nodeProp = {
    children: ReactNode
}

const ActionType = { create: 'create', update: 'update', delete: 'delete', reset: 'reset' }

interface StateInterface {
    id: number, name: string, done: boolean
}

type StateAction = {
    type: 'create'|'update'|'delete'|'reset',
    task: { id: number, name: string, done: boolean }
}

const initialStates: StateInterface[] = [
    {id: 1, name: 'wahyudi', done: false},
    {id: 2, name: 'chandra', done: false},
    {id: 3, name: 'agung', done: false}
];

const TasksContext = createContext({});
const TasksDispatchContext = createContext({});

export default function TaskProvider({children}: nodeProp) {

    const [tasks, dispatch] = useReducer(tasksReducer, initialStates);

    return (<>
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    </>);
}

function tasksReducer(tasks: StateInterface[], action: StateAction): StateInterface[] {

    switch (action.type) {
        case ActionType.create: {
            return [...tasks, {
                id: action.task.id,
                name: action.task.name,
                done: action.task.done
            }];
        }

        case ActionType.update: {
            tasks.map(task => {
                if (task.id == action.task.id) {
                    return action.task;
                } else {
                    return task;
                }
            });
        }

        case ActionType.delete: {
            return tasks.filter(task => task.id !== action.task.id);
        }

        default: {
            return tasks;

        }   

    } //end switch

} //end method

export function useState() {
    return useContext(TasksContext);
}

export function useDispatch() {
    return useContext(TasksDispatchContext);
}
