import { nanoid } from 'nanoid'
import styled from 'styled-components';

const { Component } = require("react");


const Form = styled.form`
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  width: 500px;
 `;

export class PhonebookForm extends Component{
  state = {
    name: '',
    number: '',
    id: ''
  };
// генерація id
  // modelIid = nanoid()
 

  handleChange = (ev) => {
    // console.log(ev.currentTarget.value)
    const { name, value } = ev.currentTarget;
    this.setState({ id: nanoid() })
    this.setState({ [name]: value });
  };
 
  // считування інформації з інпуту і 
  handleSubmit = ev => {
    ev.preventDefault();

    // console.log(this.state)
    // console.log(this.modelIid)
    // Перекидаємо в Арр
    this.props.onSubmit(this.state)
    this.reset();
  };

  reset = () => {
    this.setState({
      id: '',
      name: '',
      number: ''
    })
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Name<input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
           />
        </label>
        <label >
          Number<input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
        
      </Form>
    );
  };
  
}


