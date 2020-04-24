import React from 'react';

import {
  View,
  Text,
  Button,
} from 'react-native';

// Routing 
import { NativeRouter, Switch, Route, } from "react-router-native";

const onButtonPressHandler = ( ) => {
  console.log("I have been pressed")
}

const Home = (props) => {
  return (    
    <View>
        <Button 
        title="This is a button"
        onPress={onButtonPressHandler}
        />
          
        
    </View>
  );
};

export default Home;
