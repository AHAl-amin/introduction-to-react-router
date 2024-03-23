import { useLoaderData, useNavigate } from "react-router-dom";


const PostsDetails = () => {
    const post = useLoaderData();
    const {id,title, body} = post;
    const navigate =useNavigate();

    const handleGoBack =() =>{
        navigate(-1);
    }
   
    return (
        <div >
            <h2>About post details:{id}</h2>
            <p>title:{title}</p>
            <p><span>{body}</span></p>
            <button  onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostsDetails;