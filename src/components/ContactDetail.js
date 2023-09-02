import React from "react";
import user from '../images/OIP.jpeg';
import { Link } from "react-router-dom";
const ContactDetail=(props)=>{
    // const {name,email}=props.location.state.contact;;
    console.log(props);
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">Gopala</div>
                    <div className="description">gopalapatel1234@gmail.com</div>
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