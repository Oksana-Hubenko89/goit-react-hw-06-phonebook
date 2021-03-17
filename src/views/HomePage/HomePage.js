import React, {Component} from 'react'
import PageHeading from '../../components/PageHeading';
import ContactList from '../../components/ContactList';
import s from '../../components/ContactList/ContactList.module.css';
import ContactForm from '../../components/ContactForm';
import {CSSTransition} from "react-transition-group";
import stylesHomePage from "./HomePage.module.css";
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
    message:'',
  };


   handleSubmit = () => {
         this.setState({error:true})
    };
  resetError=()=>{
    this.setState({error:false})
  };
  
  render() {
         //const filterResult = this.getchangeFilter();
         const { message, error} = this.state;
     
    return (
          <div >

        
          <CSSTransition classNames={stylesHomePage}  in={true} appear  timeout={500} unmountOnExit>
          <PageHeading text="Phonebook" />
          </CSSTransition>
          <ContactForm onSubmitContact={()=>{this.handleSubmit(this.state.message)}} onResetError={()=>{this.resetError()}}/>
          <h2 className={s.contact}>Contacts</h2>
          <CSSTransition classNames={StyleFilter} in={this.props.contacts.length >1}
            timeout={250} unmountOnExit > 
          <Filter /> 
          </CSSTransition> 
          <ContactList /> 

          </div>  
    ) 
  }
}
const mapStateToProps = (state) => ({
 contacts: state.contacts.items,
});

export default connect(mapStateToProps, null) (HomePage);

    
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
