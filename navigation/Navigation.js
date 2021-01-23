import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FavoriteNotes from '../screens/FavoriteNotes';
import NotesList from '../screens/NotesList';


const Navigation = createStackNavigator({
    notes: NotesList,
    favnotes: FavoriteNotes
})

export default createAppContainer(Navigation);