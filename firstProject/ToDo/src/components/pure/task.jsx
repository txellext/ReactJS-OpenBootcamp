// Let's create a rfc

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Models
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

// Import stylesheet task.scss
import '../../styles/task.scss'

const TaskComponent = ({ task, complete, removed }) => {

    useEffect(() => {
        console.log('Task created')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);
    /**
     * Function that returns a Badge
     * depending on the level of the task
     */
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>);
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>);
            case LEVELS.BLOCKING:
                
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>);
            default:
                break;
        }
    }
    /**
     * Function that returns icon depending on completion of the task
     */
    function taskCompletedIcon(){
        if(task.completed){
            return(<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={ {color:'green'}}></i>)
        }else{
        return(<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={ {color: 'grey'} }></i>) 
        }
    }

    const taskCompleted = {
        color: 'grey',
        fontWeight:'bold',
        textDecoration: 'line-through'
    }

    const taskPending = {
        fontWeight: 'bold',
        color: 'tomato'
    }




    return (
        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'> { task.name} </span>
            </th>
            <td className='align-middle'>
                <span> { task.description} </span>
            </td>
            <td className='align-middle'>
                {/* Function execution to return badge element */}
                {taskLevelBadge()}
            </td>
            
            <td className='align-middle'>
                {/* Function execution to return icon element */}
                { taskCompletedIcon()}
                <i onClick={() => removed(task)} className='bi-trash task-action' style={ {color: 'tomato'} }></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    removed: PropTypes.func.isRequired
};


export default TaskComponent;
