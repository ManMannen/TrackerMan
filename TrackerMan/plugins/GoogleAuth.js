// Core React components
import React, { Component } from "react";

// Styling and core modules
import styles from '../assets/styles'
import { View, StatusBar } from 'react-native';

// Google Components
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import client from '../config/GoogleCreds'

// Google Methods
import * as Google from '../helpers/GoogleMethods'


export default class GoogleAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushData: [],
      loggedIn: false
    }
  }

  tap(param) {
    console.log(param)
  }

  componentDidMount() {
    GoogleSignin.configure({
      webClientId: `${client.webClientId}`,
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: true,
    });
  }

  _signIn = async () => {
    try {
      let userInfo = await Google.default._signIn()
      this.setState({ userInfo: userInfo, loggedIn: true });
      this.props.history.push("/home")
    } catch (err) {
      console.error(err)
    }
  }



  signOut = async () => {
    try {
      await Google.default.signOut()
      this.setState({ userInfo: null, loggedIn: false })
      this.props.history.entries = [];
      this.props.history.index = -1;
      this.props.history.push("/");
      console.log("You have successfully logged out!")
    } catch (err) {
      console.log(error)
      throw error;
    }
  }

  // getCurrentUserInfo = async () => {
  //   try {
  //     const userInfo = await GoogleSignin.signInSilently();
  //     this.setState({ userInfo });
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_REQUIRED) {
  //       // user has not signed in yet
  //       this.setState({ loggedIn: false });
  //     } else {
  //       // some other error
  //       this.setState({ loggedIn: false });
  //     }
  //   }
  // };


  render() {
    return (
      <View style={styles.body}>
        <StatusBar barStyle="dark-content" />
        
          <GoogleSigninButton
            style={styles.button}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._signIn}
            disabled={this.state.isSigninInProgress}
          />
      </View>
    );
  }
}


