import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ todoItem: string }> = (props) => {
    return <div className={classes.item}>{props.todoItem}</div>;
};

export default TodoItem;
