import React from 'react'

import styles from '../assets/styles'

import Spinner from 'react-native-loading-spinner-overlay';

import {
    View,
  } from 'react-native';

const LoadingPage = (props) => {
    return ( 
    <View style={{ flex: 1/2}}>
        <Spinner
          visible={props.isLoading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
    </View> 
    );
}
 
export default LoadingPage;

