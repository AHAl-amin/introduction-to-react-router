import { useLoaderData } from "react-router-dom";


const PostsDetails = () => {
    const post = useLoaderData();
    const {id,title, body} = post;
    return (
        <div>
            <h2>About post details:{id}</h2>
            <p>title:{title}</p>
            <p><span>{body}</span></p>
        </div>
    );
};

export default PostsDetails;