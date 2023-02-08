import React from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default', false, LEVELS.NORMAL);

    const changeState = () => {
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
