import React, { useCallback, useMemo, useState } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
    // const [showParagraph, setShowParagraph] = useState(false);
    // const [allowToggle, setAllowToggle] = useState(false);
    // console.log('App Running');
    // const toggleParaHandler = useCallback(() => {
    //     if(allowToggle) {
    //         setShowParagraph((prevShowPara) => !prevShowPara)
    //     }
    // }, [allowToggle]);
    // const allowToggleHandler = () => {
    //     setAllowToggle(true)
    // }
    const [listTitle, setListTitle] = useState('My List');
    const changeTitleHandler = useCallback(() => {
        setListTitle('Updated Title');
    }, []);
    const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
    return (
        <div className="app">
            {/* <h1>Hi there!</h1>
            <DemoOutput show={showParagraph} />
            {showParagraph && <p>This is new!</p>}
            <Button onClick={toggleParaHandler}>Toggle Paragraph</Button>
            <Button onClick={allowToggleHandler}>Allow Toggle</Button> */}
            <DemoList title={listTitle} items={listItems} />
            <Button onClick={changeTitleHandler}>Change List Title</Button>
        </div>
    );
}

export default App;
