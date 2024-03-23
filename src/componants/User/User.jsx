import { useLoaderData } from "react-router-dom";
import SingleUser from "../SingleUser/SingleUser";
import './User.css'



const User = () => {
    const users = useLoaderData()
    console.log(User)  
    return (
        <div>
            <h2>Users:{users.length}</h2>
            <p>this is user part</p>
            
            <div className="User">
                {
                  users.map(user => <SingleUser key={user.id} user={user}></SingleUser>) 
                }
            </div>
            
        </div>
    );
};

export default User;