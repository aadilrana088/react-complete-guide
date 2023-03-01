import React, { useCallback, useState } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);
    console.log('App Running');
    const toggleParaHandler = useCallback(() => {
        if(allowToggle) {
            setShowParagraph((prevShowPara) => !prevShowPara)
        }
    }, [allowToggle]);
    const allowToggleHandler = () => {
        setAllowToggle(true)
    }
    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showParagraph} />
            {/* {showParagraph && <p>This is new!</p>} */}
            <Button onClick={toggleParaHandler}>Toggle Paragraph</Button>
            <Button onClick={allowToggleHandler}>Allow Toggle</Button>
        </div>
    );
}

export default App;
