import React from 'react';
import s from "./ContactList.module.css";
import b from '../Button/Button.module.css';
import Container from "../Container";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import todosActions from '../../components/redux/todos/todos-actions'


//import Button from '../Button';

const ContactList = ({ contacts, onDelete}) =>(

    
    <Container>
   
                  <TransitionGroup component="ul" className={s.List} >
              
            {contacts.map(({ id, name, number }) =>
                <CSSTransition key={id} classNames={s} timeout={250}>
                <li key={id} ><p>{name}: {number} </p>
                  <button className={b.Button} type="button" onClick={() => onDelete(id)} >Delete</button>
                </li>
                 </CSSTransition>
            )}           
           
            </TransitionGroup>
          
             
  </Container>);

    
const  getchangeFilter = ( allContacts, filter) => {
 
const normalizedFilter = filter.toLowerCase();

return allContacts.filter(({ name }) =>
  name.toLowerCase().includes(normalizedFilter),  
)};
 
const mapStateToProps = ({contacts:{items,filter}}) => ({
 contacts: getchangeFilter(items,filter),
 
});

const mapDispatchToProps = dispatch => ({
  onDelete: id =>dispatch(todosActions.deleteTodo(id)),
});



export default connect(mapStateToProps, mapDispatchToProps)(ContactList); 



