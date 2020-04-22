/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Footer from 'components/base/Footer'
import Header from 'compoonents/base/Header'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NativeRouter, Route, Link } from "react-router-native";

const App = ( props ) => {
  return (
    <NativeRouter>
      <Header/>
      <View >
        <Text>
          This is the main wrapper
        </Text>
      </View>
     <Footer/>
    </NativeRouter>
  );
};


export default App;
