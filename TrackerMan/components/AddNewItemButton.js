import React from 'react';

import styles from '../assets/styles'

import {
    View,
    Text,
    FlatList,
    StatusBar,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    TextInput
  } from 'react-native';

  import {
      Button,
      Icon
  } from 'native-base'

const AddNewItemButton = (props) => {
    return (
        <View style= {{ padding: 10 }}>
            <Button style={ styles.addNewItemButton}
            onPress={props.onPress}
            >
                <Text style= {styles.addNewItemButtonTitle}>
                    { props.title}
                </Text>
                <Icon name={"add"} style={styles.addIcon}/>

            </Button>
        </View>

     );
}
 
export default AddNewItemButton;