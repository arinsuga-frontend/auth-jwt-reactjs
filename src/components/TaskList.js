import { useState } from 'react';
import { useTasks, useTasksDispatch } from '../contexts/TasksContext';
import Actiontype from '../enums/Actiontype';
import Task from './Task';

export default function TaskList() {

    const tasks = useTasks();

    return (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Task state={task} />
          </li>
        ))}
      </ul>
    );
  
}
