import React, { useState } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={false} />
            {/* {showParagraph && <p>This is new!</p>} */}
            <Button onClick={() =>setShowParagraph(!showParagraph)}>
                Toggle Paragraph
            </Button>
        </div>
    );
}

export default App;
