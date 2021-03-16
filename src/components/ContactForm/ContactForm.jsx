
import React, { Component } from 'react';
import Container from "../Container";
//import 'react-native-get-random-values';
//import Button from "../Button";
import b from "../Button/Button.module.css";
import s from "./ContactForm.module.css";
import { connect } from "react-redux";
import todosActions from '../redux/todos/todos-actions'

class ContactForm extends Component {
    
    static defaultProps = {
    //  
  }
  static propTypes = {
   //
  }

    state = {
        name: '',
        number: '',
        alert:false

    }
   
// handleInputChange=e=>{
//     this.setState({name:e.currentTarget.value},{number:e.currentTarget.value})
// };

    handleInputChange = event => {
        const {name, value}= event.currentTarget;
        this.setState({[name]:value})
    };
    
    handleSubmit = event => {
        event.preventDefault();

         if (this.state.name !=='' && this.state.number !==''){
        this.props.onSubmit(this.state.name, this.state.number)
        this.reset();
        return;
         }

         alert ('Заполни');
        
    };
    
    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    };

    render(){ 
    
        const { name, number } = this.state;

        return (
            
        <Container>
            <form className={s.Form} onSubmit={this.handleSubmit}>
                <label>
                  Name <br/> <input type="text" name="name" value={name} onChange={this.handleInputChange }/>
                </label>
                <br/>
                <label>
                  Number <br/> <input type="tel" name="number" value={number} onChange={this.handleInputChange}/>
                </label>
                <br/>
                {/* <Button type="submit" >Add contact</Button> */}
                <button className={b.Button} type='submit'>Add contact</button>
       
            </form>
            
       </Container>
        )
    }      
};
 
const mapDispatchToProps = dispatch => ({
    onSubmit:  (name,number) => dispatch(todosActions.addTodo (name,number)),
})

export default connect( null,mapDispatchToProps)(ContactForm);
