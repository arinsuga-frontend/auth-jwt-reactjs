import TaskProvider from '../contexts/TaskContext';

const Task = () => {

    return (
        <>
            <TaskProvider>
                <h1>TASK Page</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolor harum architecto similique perspiciatis provident omnis porro commodi, placeat quibusdam fugit, veniam iure rem. Quaerat neque animi veniam perferendis voluptate.</p>
            </TaskProvider>
        </>
    );

}

export default Task;
