import React, { Component } from 'react';
import shortid from 'shortid';

class FormAddContact extends Component {
  loginInputId = shortid.generate();
  numberInputId = shortid.generate();
  contactInputId = shortid.generate();

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);

    this.setState({
      // [event.currentTarget.name]: event.currentTarget.value,
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // console.log(this.state);

    const contact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(contact);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor={this.loginInputId}>Name </label>
        </div>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            id={this.loginInputId}
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor={this.numberInputId}>Namber </label>
        </div>

        <div>
          <input
            type="tel"
            name="number"
            placeholder="Namber"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            id={this.numberInputId}
            value={this.state.number}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <button type="submit">Add contact</button>
        </div>
      </form>
    );
  }
}

export default FormAddContact;
