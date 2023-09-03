import React from "react";
import user from '../images/OIP.jpeg';
import { Link ,useParams} from "react-router-dom";
const ContactDetail=()=>{
    const params = useParams(); 
    const {id,name,email} = params;
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div style={{display:"flex"}}>
                <div className="center-div" style={{margin:"auto"}}>
                    <Link to="/">
                        <button className="ui button blue">
                            Back to contact List
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default ContactDetail;