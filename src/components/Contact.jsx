function Contact({ contact, myPic }) {
  return (
    <div>
      <img src={myPic} className="img-fluid profilePic" alt="profile pic"></img>
      <span>{contact?.phone} </span>
      <span>{contact?.email} </span>
      <span>{contact?.location} </span>
    </div>
  );
}

export default Contact;
