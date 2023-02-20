import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

// Import stylesheet of task.scss
import '../../styles/task.scss';

const TaskListComponent = () => {

    //Let's define an initial state
    const defaultTask = new Task('Example', 'Default', true, LEVELS.NORMAL);

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
            <div className='col-12'>
                <div className='card'>
                    {/**Header Card*/}
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>

                    </div>
                    {/**Body Card*/}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height:'400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'> Title </th>
                                    <th scope='col'> Description </th>
                                    <th scope='col'> Priority </th>
                                    <th scope='col'> Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* TODO: Use For/Map to renderize a task list */}
                                <TaskComponent task={ defaultTask } ></TaskComponent>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TaskListComponent;
