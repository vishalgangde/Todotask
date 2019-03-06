//MAKE ONE FORM TO ADD THE TODO Task.
import React from 'react';
import { connect } from 'react-redux';
import * as todoAction from './actions/todoAction';

class App extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: ''
    }
  }

 handleChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let contact = {
        name: this.state.name
      }
      this.setState({
        name: ''
      });
  this.props.createTodoTask(contact );
    }

    listView(data, index){
        return (
          <div className="row">
            <div className="col-md-10">
              <li key={index} className="list-group-item clearfix">
                {data.name}
              </li>
            </div>
            <div className="col-md-2">
              <button  onClick={(e) => this.deleteTodoTask(e, index)} className="btn btn-danger">
                Remove
              </button>
              
            </div>
        </div> 
        );
      };
    
      deleteTodoTask(e, index){
        e.preventDefault();
        this.props.deleteTodoTask(index);
      }

     

  render() {

    return(
        <div className="container">
        <h1>Todo Application</h1>
        <hr />
        <div>
          <h3>Add Task</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name}/><br />
            <input type="submit" className="btn btn-success" value="ADD"/>
          </form>
          <hr />
        { <ul className="list-group">
          {this.props.contacts.map((contact, i) => this.listView(contact, i))}
        </ul> }
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
    return {
      contacts: state.contacts
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      createTodoTask: contact => dispatch(todoAction.createTodoTask(contact)),
      deleteTodoTask: index =>dispatch(todoAction.deleteTodoTask(index)),
      //editTodoTask: data =>dispatch(todoAction.editTodoTask(data))
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);


