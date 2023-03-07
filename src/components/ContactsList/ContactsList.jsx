import PropTypes from 'prop-types';
import { ListItem, ListOfContacts, PhoneNumber, DeleteBtn } from './ContactList.styled'

function ContactsList({ list, search, deleteContact }) {
    const filteredContact = list.filter(contact =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <ListOfContacts>
            {filteredContact.map(({ name, number, contactID }) => {
                return (
                    <ListItem key={contactID}>
                        {name} <PhoneNumber>{number}</PhoneNumber>
                        <DeleteBtn onClick={() => deleteContact(contactID)} type='button'>delete</DeleteBtn>
                    </ListItem>

                );
            })}
        </ListOfContacts>
    );
}

ContactsList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            contactID: PropTypes.string.isRequired,
        })
    ).isRequired,
    search: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;