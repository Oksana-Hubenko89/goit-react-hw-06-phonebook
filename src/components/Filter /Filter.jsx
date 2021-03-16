import React from 'react';
import Container from "../Container";
import { connect } from "react-redux";
import todosActions from '../redux/todos/todos-actions'

const Filter = ({ value, onChange }) => 
<Container>
    <label>
        Find contacts by name <br/>
        <input value={value} type="text" onChange={onChange} />
    </label>
</Container>;

const mapStateToProps = state => ({
    value: state.contacts.filter,
})
const mapDispatchToProps =dispatch=> ({
onChange: event=>dispatch(todosActions.changeFilter(event.target.value))
})

export default connect(mapStateToProps,mapDispatchToProps)(Filter);