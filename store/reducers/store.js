import { combineReducers } from 'redux';
import notesReducer from './notes';

const rootReducer = combineReducers({
    notes: notesReducer

})

const store = createStore(rootReducer);

export default store;