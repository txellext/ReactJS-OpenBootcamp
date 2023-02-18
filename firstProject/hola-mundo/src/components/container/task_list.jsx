import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

// Import stylesheet of task.scss
import '../../styles/task.scss';

const TaskListComponent = () => {

    //Let's define an initial state
    const defaultTask = new Task('Example', 'Default', false, LEVELS.NORMAL);

    // Component state
    const [tasks, setTasks] = useState(defaultTask);
    // Another state: loading. Each time inside is loading, once done, no loading: false
    const [loading, setLoading] = useState(true);  

    // Lifecycle Component Control
    useEffect(() => {
        console.log('Task State modified');
        setLoading(false); 

        return () => {
            console.log('TaskList component will unmount...')
        };
    }, [tasks]);

    const changeCompleted = () => {
        console.log('TODO: change state task')
    }

    return (
        <div>
            <div>
                <h1> Your Tasks: </h1>
            </div>
            {/* TODO: Use For/Map to renderize a task list */}
            <TaskComponent task={ defaultTask } ></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
