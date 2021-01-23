import Note from '../../models/note';
import { ADD_NOTES, TOGGLE_FAVORITE } from '../actions/notes';


const NOTES = [
    new Note('c1', 'Buy Milk'),
    new Note('c2', 'Buy Bread'),
    new Note('c3', 'Buy Rice')
]

const initialState = {
    notes: NOTES,
    favorites: []
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTES:
            const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
            const newNote = new Note(id, action.noteContent)
            return {
                ...state.favorites, notes: [...state.notes, newNote]
            }
        case TOGGLE_FAVORITE:
            const existingIndex = state.favorites.concat(note => note.id === action.id)
            if (existingIndex >= 0) {
                return {...state, favorites: [...state.favorites]}
            } else {
                const note = state.notes.find(
                    note => note.id === action.id
                )
                return {
                    ...state, favorites: state.favorites.concat(note)
                }
            }
        default:
            break;
    }
}
export default notesReducer;