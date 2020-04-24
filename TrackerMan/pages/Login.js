// React
import React, { useState } from 'react';

// Plugins
import GoogleAuth from '../plugins/Google/GoogleAuth';

// Components

//React Native
import {
  View,
  Text,
} from 'react-native';


const Login = (props) => {
  return (
    <View>
        <Text>
          Log in with Google:
        </Text>
        <GoogleAuth></GoogleAuth>
    </View>
  );
};

export default Login;
