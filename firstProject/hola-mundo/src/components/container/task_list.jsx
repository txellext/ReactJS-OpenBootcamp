import React from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default', false, LEVELS.NORMAL);

    return (
        <div>
            <div>
                Your Tasks:
            </div>
            {/* TODO: Use For/Map to renderize a task list */}
            <TaskComponent task={ defaultTask } ></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
