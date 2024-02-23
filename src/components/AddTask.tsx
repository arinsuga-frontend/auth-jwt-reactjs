import { useState } from 'react';
import { useTasksDispatch } from '../contexts/TasksContext';
import Actiontype from '../enums/Actiontype';

export default function AddTask() {
  
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        dispatch({
          type: Actiontype.Add,
          model: { id: nextId++, text: text}
        }); 
      }}>Add</button>
    </>
  );
}

let nextId = 3;