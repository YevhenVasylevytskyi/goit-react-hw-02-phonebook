import React from 'react';
import { Component } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import FormAddContact from './components/FormAddContact/FormAddContact';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    console.log(data);
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
          <FormAddContact onSubmit={this.formSubmitHandler} />

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

        <Section title="Contacts"></Section>
      </Container>
    );
  }
}

export default Phonebook;
