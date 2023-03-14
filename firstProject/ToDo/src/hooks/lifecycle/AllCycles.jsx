import React, {useEffect} from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('Component created')

        // Create an interval where component will be updated each second
        const intervalID = setInterval(() => {
            document.title = `${new Date()}` // change title to date time
            console.log('component updated')
        }, 1000);

        return () => {
            console.log('Component will disappear');
            document.title = "Stopped time";
            clearInterval(intervalID); // When component disappears, clean interval
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
