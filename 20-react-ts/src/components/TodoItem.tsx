import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ todoItem: string; onRemoveTodo: () => void }> = (props) => {
    return <li className={classes.item} onClick={props.onRemoveTodo}>{props.todoItem}</li>;
};

export default TodoItem;
