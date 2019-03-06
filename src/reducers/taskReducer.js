//REDUCERS IN ACTION
import * as actionTypes from '../actions/actionTypes';
//import editTodoTask from '../actions/todoAction';

export default (state = [], action) => {
    switch (action.type){
      
          case actionTypes.CREATE_NEW_TODOTASK:
           return [
              ...state,
             Object.assign({}, action.contact)
             ];
      
          case actionTypes.REMOVE_TODOTASK:
          return state.filter((data,i) => i !== action.id);

          /* case actionTypes.EDIT_TODOTASK:
           {

            return state.map(s => data(s, action));
            
        }*/

           default:
            return state;
    
    
     }
  }; 
     
      
   

 /* const todo = (state, action) => {   switch (action.type) {
    case 'EDIT_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        text: action.text
      };
    default:
      return state;   } }; const todos = (state = [], action) => {   switch (action.type) {
    case 'EDIT_TODO':
      return state.map(t =>
        todo(t, action)                
      );

    default:
      return state;   } }*/