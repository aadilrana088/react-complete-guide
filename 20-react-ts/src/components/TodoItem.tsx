import React from 'react';

const TodoItem:React.FC<{todoItem: string}> = (props) => {
    return <div>{props.todoItem}</div>;
};

export default TodoItem;
