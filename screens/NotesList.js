import React from 'react';
import { Button, View } from 'react-native';

const NotesList = props => {
    return (
        <View>
            <Button
                title="Favorites"
                onPress={() => props.navigation.navigate('favnotes')}
            />
        </View>
    )
}

export default NotesList;
