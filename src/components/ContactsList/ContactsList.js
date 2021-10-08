const ContactsList = ({ contacts }) => {
  // console.log(contacts);

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
