import React from 'react';
import * as Google from './helpers/GoogleMethods'


import {
  Footer,
  Title,
  FooterTab,
  Button,
  Right,
  Body,
  Left,
  Header,
  Icon,
  Container,
} from 'native-base';

import {
  View,
  Text,
} from 'react-native';

import styles from './assets/styles'

// Routing 
import { Switch, Route, Router } from "react-router-native";
import useHistory from 'history/createMemoryHistory'

//Pages / Components
import Home from './pages/_Home'
import Login from './pages/_Login'
import ItemInfo from './pages/_ItemInfo';


const App = () => {
  const history = useHistory()

  signOut = async () => {
    try {
      await Google.default.signOut()
      resetHistory()
      console.log("You have successfully logged out!")
    } catch (error) {
      console.log(error)
    }
  }


  resetHistory = () => {
    history.entries = [];
    history.index = -1;
    history.replace("/");
  }

  return (
    <Router history={history}>
      <View style={{ flex: 1 }}>
        <Switch>

          {/* if the route matches the exact "/" path then the login screen will show */}
          {/* else the Home page with the footer and header will be displayed */}

          <Route exact path="/" component={Login} />
          <Route path="/" >
            <Container>
              <Header style={styles.headerStyle}>
                <Left>
                  <Icon style={styles.iconStyle} onPress={() => history.goBack()} name="arrow-back" />
                </Left>
                <Body>
                  <Title style={{ fontWeight: "bold" }}>
                    TrackerMan
                    </Title>
                </Body>
                <Right>
                    <Icon style={ styles.signOutButton} name="settings" onPress={signOut}/>
                </Right>
              </Header>

              <Switch>
                {/* <Route /> Route to what pages you want jao */}
                <Route exact path="/home" component={Home} />
                <Route path="/home/:itemId" component={ItemInfo} />

              </Switch>
            </Container>


            <Footer style={styles.footerStyle}>
              <FooterTab style={styles.footerStyle}>
                <Button>
                  <Icon name="add" />
                </Button>
                <Button>
                  <Icon name="cart" />
                </Button>
                <Button >
                  <Icon name="camera" />
                </Button>
                <Button>
                  <Icon name="person" />
                </Button>
              </FooterTab>
            </Footer>
          </Route>

        </Switch>
      </View>
    </Router>
  );
};

export default App;
