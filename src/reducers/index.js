//CREATE COMBINEREDUCER FUNCTION
import { combineReducers } from 'redux';
import contacts from './taskReducer';

export default combineReducers({
    contacts: contacts
});