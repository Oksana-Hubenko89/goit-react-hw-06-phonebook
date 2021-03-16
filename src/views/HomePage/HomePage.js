import React, {Component} from 'react'
import PageHeading from '../../components/PageHeading';
import ContactList from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';
//import Filter from '../../components/Filter ';
//import { v4 as uuidv4 } from 'uuid';
import {CSSTransition} from "react-transition-group";
import stylesHomePage from "./HomePage.module.css";
import Message from '../../components/Message';
import StyleMessage from '../../components/Message/Message.module.css';
import Filter from '../../components/Filter ';
import StyleFilter from '../../components/Filter /Filter.module.css';
import { connect } from "react-redux";
class HomePage extends Component {

  static defaultProps = {
    //   
  }
  static propTypes = {
   //
  }
  state = {
    error: false,
  };

    
//   addContact = ({name,number}) => {
//     console.log({name,number});
//     const contact = {
//       id: uuidv4(),
//       name,
//       number
//     }
//       this.setState({
//           error: false
//       });

//     if(this.state.contacts.find(item=>item.name === name)){
//         this.setState({
//             error: true
//         })
//         return;
//       };
//       this.setState(({ contacts }) => ({
//           contacts: [contact, ...contacts]
//       }));
//   };
  
  //   deleteContact = contactID => {
  //     this.setState({
  //         error: false
  //     });
  //   this.setState(prevState => ({
  //     contacts:prevState.contacts.filter(contact => contact.id !== contactID),
  //   }));
  //   };
 
  //   changeFilter = (event) => {
  //     this.setState({
  //         error: false
  //     });
  //   this.setState({ filter: event.currentTarget.value });
  // };

  //   getchangeFilter = () => {
      
  //   const { contacts, filter } = this.state;
  //   const normalizeFilter = filter.toLocaleLowerCase();
  //   return (contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizeFilter)));
  // };

   handleSubmit = event => {
        event.preventDefault();

        // if (this.state.name !==''){
        // this.props.onSubmit(this.state.name)
        // this.reset();
        // }
         if (this.state.name !=='' && this.state.number !==''){
        this.props.onSubmit(this.state.name, this.state.number)
        this.reset();
        return;
         }
         alert ('Заполни');
        
    };
  
  render() {
         //const filterResult = this.getchangeFilter();
         const {  error} = this.state;
     
    return (
          <div>

          <CSSTransition classNames={StyleMessage}  in={error} appear  timeout={250} unmountOnExit>
          <Message text="Контакт существует" />
          </CSSTransition>  
          <CSSTransition classNames={stylesHomePage}  in={true} appear  timeout={500} unmountOnExit>
          <PageHeading text="Phonebook" />
          </CSSTransition>
          <ContactForm error={error}/>
          <h2>Contacts</h2>
          <CSSTransition classNames={StyleFilter} in={this.props.contacts.length >1}
            timeout={250} unmountOnExit > 
          <Filter /> 
          </CSSTransition> 
          <ContactList error={error} /> 

          </div>  
    ) 
  }
}
const mapStateToProps = (state) => ({
 contacts: state.contacts.items,
});

export default connect(mapStateToProps, null) (HomePage);

