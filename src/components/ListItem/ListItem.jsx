import PropTypes from 'prop-types';
import { ListItemLi, PhoneNumber, DeleteBtn } from './ListItem.styled'

const ListItem = ({ name, number, id, deleteContact }) => {
    return (<ListItemLi key={id}>
        {name} <PhoneNumber>{number}</PhoneNumber>
        <DeleteBtn onClick={() => deleteContact(id)} type='button'>delete</DeleteBtn>
    </ListItemLi>)
}

export default ListItem

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
}