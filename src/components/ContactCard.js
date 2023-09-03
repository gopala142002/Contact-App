import user from "../images/OIP.jpeg";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  const removeContactHandler = (e) => {
      const newContacts = props.contacts.filter((contact) => {
        return contact.id !== id;
      });
      props.setContacts(newContacts);
      toast.success('Contact Removed successfully')
  };
  return ( 
    <div
      className="item"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div style={{ display: "flex" }}>
        <img
          className="ui avatar image"
          src={user}
          alt="user"
          style={{ marginRight: "10px" }}
        />
        <div className="content">
          <Link to={`/contact/${id}/${name}/${email}`}>
            <div className="header">{name}</div>
            <div>{email}</div>
          </Link>
        </div>
      </div>
      <div
        data-tooltip="Delete Contact"
        data-position="top right"
        style={{marginLeft:"auto",marginTop:"7px"}}
      >
        <i
          className="trash alternate outline icon"
          style={{
            color: "red",
            cursor: "pointer",
          }}
          onClick={removeContactHandler}
        />
      </div>
    </div>
  );
};
export default ContactCard;
