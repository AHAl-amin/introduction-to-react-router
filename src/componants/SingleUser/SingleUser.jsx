import { Link } from "react-router-dom";


const SingleUser = ({user}) => {
   const{id , name , email, phone} = user;
   const userStyle ={
    border:'2px solid red',
    padding: '10px',
    borderRadius:'20px'
   }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>email:{email}</p>
            <p>phone:{phone}</p>
            <Link to={`/SingleUser/${id}`}>Show Details</Link>
        </div>
    );
};

export default SingleUser;