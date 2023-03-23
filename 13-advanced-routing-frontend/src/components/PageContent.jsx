import classes from './PageContent.module.css';

const PageContent = ({title, children}) => {
    return <div className={classes.content}>
        <h1>{title}</h1>
        <p>{children}</p>
    </div>;
};

export default PageContent;
