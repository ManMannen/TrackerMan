// Core React components
import React, { Component } from "react";

// Styling and core modules
import styles from '../assets/styles'
import { View, StatusBar, Button } from 'react-native';

// Google Components
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import client from '../config/GoogleCreds'

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
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.props.history.push('/home')
      this.setState({ userInfo: userInfo, loggedIn: true });
      
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  removeRouteHistory = () => {
      this.props.history.entries = [];
      this.props.history.index = -1;
      this.props.history.push("/");
  }
  
  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        this.setState({ loggedIn: false });
      } else {
        // some other error
        this.setState({ loggedIn: false });
      }
    }
  };
  
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.removeRouteHistory()
      this.setState({ user: null, loggedIn: false }); // Remember to remove the user from your app's state as well
      console.log("You are now logged out!")
    } catch (error) {
      console.error(error);
    }
  };
  
  render() {
    return (
      <View style={styles.body}>
        <StatusBar barStyle="dark-content" />
        {!this.state.loggedIn ?
          <GoogleSigninButton
            style={styles.button}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._signIn}
            disabled={this.state.isSigninInProgress} 
            />
          :
          <Button 
            onPress={this.signOut}
            title="Logga ut"
            />
        }
      </View>
    );
  }
}


