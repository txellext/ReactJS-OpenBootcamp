import React, { useRef } from 'react';

const Child = ({name, send, update}) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text = messageRef.current.value;
        alert(`${text}`);

    }

    function pressButtonParams(text){
        alert(`Text: ${text}`);
    }

    function submitName(e){
        e.preventDefault(); // No update page, recharge
        update(nameRef.current.value)
    }

    return (
        <div style={{background: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('On Mouse Over')}> Hello {name}</p>
            <button onClick={() => console.log('Button 1 clicked')}>
                Button 1
            </button>
            <button onClick={pressButton}>
                Button 2
            </button>
            <button onClick={() => pressButtonParams('Hello')}>
                Button 3
            </button>
            <input 
                placeholder='Send a text to your father' 
                onFocus={() => console.log('Input Focus')}
                onChange={(e) => console.log('Input changed:', e.target.value)}
                onCopy={() => console.log('Copied text from Input')}
                ref = {messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>
                Send Message
            </button>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input 
                        placeholder='New Name'
                        ref={nameRef}
                    />
                    <button type='submit'>Update Name</button>
                </form>

            </div>
        </div>
    );
}

export default Child;
