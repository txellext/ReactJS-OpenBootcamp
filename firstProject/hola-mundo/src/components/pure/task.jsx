// let's create a rfc

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

// Import stylesheet task.scss
import '../../styles/task.scss'

const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Task created')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'> { task.name} </span>
            </th>
            <td className='align-middle'>
                <span> { task.description} </span>
            </td>
            <td className='align-middle'>
                {/** TODO: substitute with a badge, diff. colour */}
                <span> { task.level} </span>
            </td>
            
            <td className='align-middle'>
                {/* TODO: substitute for Icons  */} 
                <span> {task.completed} </span>
            </td>
        </tr>
        
        
        
        
        // <div>
        //     <h2 className='task-name'>
        //         Nombre: { task.name }
        //     </h2>
        //     <h3>
        //         Description: { task.description }
        //     </h3>
        //     <h4> Level: { task.level }
        //     </h4>
        //     <h5>
        //         This task is: { task.completed ? 'COMPLETED':'PENDING'}
        //     </h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
