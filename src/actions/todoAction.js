//ACTION  CREATORS WITH OBJECT FOR CREATING TODOTASK

// todoAction.js
import * as actionTypes from './actionTypes';


//createTodoTask() function returns an object.

export const createTodoTask = (contact) => {
    return {
      type: actionTypes.CREATE_NEW_TODOTASK,
      contact: contact
    }
  };

  //deleteTodoTask method return an object
  export const deleteTodoTask = (id) => {
    return {
        type: actionTypes.REMOVE_TODOTASK,
        id: id
    }
};

 export const editTodoTask = (todo) => {
  return {
    type: actionTypes.EDIT_TODOTASK,
   todo:todo
  }

};

//export default editTodoTask;
//export default (GET_ALL_TODOTASK, CREATE_NEW_TODOTASK,REMOVE_TODOTASK);