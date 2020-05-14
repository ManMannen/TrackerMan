// Packages
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

//Native Base
import {
  View,
  Text,
} from 'react-native';

import styles from './assets/styles'

// Routing 
import { Switch, Route, Router } from "react-router-native";
import useHistory  from 'history/createMemoryHistory'

//Pages
import Home from './pages/_Home'
import Login from './pages/_Login'
import ItemInfo from './pages/_ItemInfo';


const App = () => {
  const [active, setActive] = useState(false)
  const history = useHistory()
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
                  <Icon style={ styles.iconStyle } onPress={() => history.goBack()} name="arrow-back" />
                </Left>
                <Body>
                  <Title style={{ fontWeight: "bold"}}>
                    TrackerMan
                    </Title>
                </Body>
                <Right>
    
                </Right>
              </Header>

              <Switch>
                {/* <Route /> Route to what pages you want jao */}
                <Route path="/home" component={Home}/> 
                <Route exact path="/home/:itemId" component={ItemInfo}/> 
                
              </Switch>
            </Container>


            <Footer style={ styles.footerStyle }>
              <FooterTab style={ styles.footerStyle }>
                <Button>
                  <Text style={ styles.tabStyle }>Items</Text >
                </Button>
                <Button>
                  <Text style={ styles.tabStyle}>Camera</Text>
                </Button>
                <Button >
                  <Text style={ styles.tabStyle }>Navigate</Text>
                </Button>
                <Button>
                  <Text style={ styles.tabStyle }>Contact</Text>
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
