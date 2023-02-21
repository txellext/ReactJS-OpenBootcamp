import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

// Import stylesheet of task.scss
import '../../styles/task.scss';
import Taskform from '../pure/forms/taskForm';

const TaskListComponent = () => {

    //Let's define an initial state
    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);


    // Component state
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
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

    function completeTask(task){
        console.log('Complete this Task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks]; // All tasks in a temporal variable
        tempTasks[index].completed = !tempTasks[index].completed; // If it was true is false and viceversa
        // We update the state of the component with the new list 
        // and it will update the iteration of the tasks in order to show task updated
        setTasks(tempTasks);
    }

    function removedTask(task){
        console.log('Delete this Task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks]; 
        tempTasks.splice(index,1); // From index element we delete 1 element
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Add this Task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks]; 
        tempTasks.push(task);
        setTasks(tempTasks);
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
                                { tasks.map((task, index) => {
                                    return(
                                            <TaskComponent 
                                                key={index}  
                                                task={task}
                                                complete={completeTask}
                                                removed={removedTask}>
                                            </TaskComponent>
                                        )
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Taskform added={addTask}></Taskform>
        </div>
    );
};

export default TaskListComponent;
