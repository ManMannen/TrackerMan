// React
import React, { useState } from 'react';

// Plugins
import GoogleAuth from '../plugins/GoogleAuth';

// Components

// Styling and core modules
import styles from '../assets/styles'
import backgroundImage from '../assets/img/background.jpg'



//React Native
import {
  View,
  Text,
  ImageBackground
} from 'react-native';



const Login = (props, history ) => {


  return (
    <View style={styles.googleAuth}>
      <ImageBackground source={backgroundImage} style={ styles.image }>
        <View>
          <Text style={styles.title}>
            Welcome to TrackerMan!
        </Text>
          <View style={styles.spacer}>
          </View>
          <View>
            <GoogleAuth history={props.history} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};



export default Login;
