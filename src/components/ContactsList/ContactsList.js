import PropTypes from 'prop-types';

const ContactsList = ({ contacts, deleteContact }) => {
  // console.log(contacts);

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>

            <button
              type="button"
              id={contact.id}
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ContactsList;
