import { useReducer } from 'react';
import AddTask from '../components/AddTask';
import { TasksProvider } from '../contexts/TasksContext';

export default function Task() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
    </TasksProvider>
  );
}
