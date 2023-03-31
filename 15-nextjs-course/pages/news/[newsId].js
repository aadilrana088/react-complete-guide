import { useRouter } from 'next/router';
const NewsDetail = () => {
    const router = useRouter();
    return (
        <div>
            <h1>NewsDetail</h1>
            <p>NewsId: {router.query.newsId}</p>
        </div>
    );
};

export default NewsDetail;
