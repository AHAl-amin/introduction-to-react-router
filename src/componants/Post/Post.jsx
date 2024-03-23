import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id ,title} = post;
    const postStyle={
        border:'2px solid orange',
        padding:'15px',
        borderRadius:'10px'
    }
    return (
        <div style={postStyle} >
            <h4>post of id:{id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            
        </div>
    );
};

export default Post;