import React from 'react';

const Child = () => {

    function pressButton(){
        alert('Default Text');

    }

    function pressButtonParams(text){
        alert(`Text: ${text}`);
    }

    return (
        <div>
            <p onMouseOver={() => console.log('On Mouse Over')}> ChildComponent</p>
            <button onClick={() => console.log('Button 1 clicked')}>
                Button 1
            </button>
            <button onClick={pressButton}>
                Button 2
            </button>
            <button onClick={() => pressButtonParams('Hello')}>
                Button 3
            </button>
        </div>
    );
}

export default Child;
