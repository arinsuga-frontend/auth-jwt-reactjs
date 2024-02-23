import { useState } from 'react';
import { useTasksDispatch } from '../contexts/TasksContext';
import ITaskmodel from '../models/ITaskmodel';
import Actiontype from '../enums/Actiontype';

//props for Task function
type Statetype = { state: ITaskmodel }

export default function Task({ state }: { state: ITaskmodel }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();
    let taskContent;
    if (isEditing) {
      taskContent = (
        <>
          <input
            value={state.text}
            onChange={e => {
              dispatch({
                type: Actiontype.Edit,
                model: {
                  ...state,
                  text: e.target.value
                }
              });
            }} />
          <button onClick={() => setIsEditing(false)}>
            Save
          </button>
        </>
      );
    } else {
      taskContent = (
        <>
          {state.text}
          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      );
    }
    
    return (
      <label>
        <input
          type="checkbox"
          checked={state.done}
          onChange={e => {
            dispatch({
              type: Actiontype.Edit,
              model: {
                ...state,
                done: e.target.checked
              }
            });
          }}
        />
        {taskContent}
        <button onClick={() => {
          dispatch({
            type: Actiontype.Delete,
            model: {id: state.id}
          });
        }}>
          Delete
        </button>
      </label>
    );
}
  