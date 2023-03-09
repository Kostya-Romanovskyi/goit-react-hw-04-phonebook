import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem'
import { ListOfContacts } from './ContactList.styled'

function ContactsList({ list, search, deleteContact }) {
    const filteredContact = list.filter(contact =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <ListOfContacts>
            {filteredContact.map(({ name, number, contactID }) => {
                return (
                    <ListItem name={name} number={number} id={contactID} deleteContact={deleteContact} />
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