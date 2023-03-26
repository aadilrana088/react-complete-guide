import classes from './PageContent.module.css';

const PageContent = ({title, children}) => {
    return <div className={classes.content}>
        <h1>{title}</h1>
        <div>
        {children}
        </div>
    </div>;
};

export default PageContent;
