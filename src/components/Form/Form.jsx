import { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FormWrap, Label, Text, Input, SubmitBtn } from './Form.styled'

class Form extends Component {

    state = {
        name: '',
        number: '',
    }

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    };

    handleSubmit = evt => {
        evt.preventDefault();

        const { name, number } = this.state;
        const { addContact } = this.props;

        const contactID = nanoid();

        const newContact = { name, number, contactID };

        addContact(newContact)

        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };



    render() {
        const { name, number } = this.state;
        return <FormWrap onSubmit={this.handleSubmit}>
            <Label>
                <Text>Name</Text>
                <Input
                    onChange={this.handleChange}
                    type="text"
                    value={name}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </Label>
            <Label>
                <Text>Number</Text>
                <Input
                    onChange={this.handleChange}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </Label>
            <SubmitBtn type="submit">Add contact</SubmitBtn>
        </FormWrap>
    }
}

Form.propTypes = {
    addContact: PropTypes.func.isRequired,
}

export default Form;