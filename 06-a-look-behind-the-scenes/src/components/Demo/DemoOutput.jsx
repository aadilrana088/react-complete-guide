import React from 'react';
import ParaOutput from './ParaOutput';

const DemoOutput = ({show}) => {
    console.log("Demo Output")
    return <ParaOutput>{show ? "This is new!": ""}</ParaOutput>;
};

export default DemoOutput;
