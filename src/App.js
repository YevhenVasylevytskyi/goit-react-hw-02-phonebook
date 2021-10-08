import React from 'react';
import { Component } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import FormAddContact from './components/FormAddContact/FormAddContact';
import ContactsList from './components/ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = data => {
    // console.log(data);
    this.setState(prevState => {
      if (
        prevState.contacts.some(contact => contact.name.includes(data.name))
      ) {
        return alert(`${data.name} is already in contacts!`);
      }

      return { contacts: [...prevState.contacts, data] };
    });
  };

  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleNumberChange = event => {
  //   this.setState({ number: event.currentTarget.value });
  // };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <FormAddContact onSubmit={this.addContact} />

          {/* <h3>Name</h3>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleNameChange}
          />           */}
        </Section>

        <Section title="Contacts">
          <ContactsList contacts={this.state.contacts} />
        </Section>
      </Container>
    );
  }
}

export default App;
