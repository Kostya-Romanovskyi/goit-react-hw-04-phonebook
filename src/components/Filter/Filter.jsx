import PropTypes from 'prop-types';
import { Text, FindInput } from './Filter.styled'
function Filter({ onChange }) {
    return <label>
        <Text>Find contact by name</Text>
        <FindInput onChange={onChange} name="filter" type="text" />
    </label>
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default Filter;


