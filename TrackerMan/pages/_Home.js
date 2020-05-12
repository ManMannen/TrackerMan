// React
import React from 'react';

// Styling and core modules
import styles from '../assets/styles'

import {
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';

const Home = ( props ) => {
  return (    
    <View>
        <Text>
          This is the Home Page!
        </Text>
        <Button 
        title="Return to the Login page"
        onPress={ 
          props.history.push('/')
        }
        />
    </View>
  );
};

export default Home;
