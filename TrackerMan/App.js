import React, { useState } from 'react';
import GoogleAuth from './plugins/GoogleAuth'

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
  Content,
} from 'native-base';

import {
  View,
  Text,
} from 'react-native';

import styles from './assets/styles'

// Routing 
import { Switch, Route, Router } from "react-router-native";
import useHistory from 'history/createMemoryHistory'

//Pages
import Home from './pages/_Home'
import Login from './pages/_Login'


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

              <Header style={{ backgroundColor: "black" }}>
                <Left>
                  <Icon onPress={() => history.goBack()} name="arrow-back" />
                </Left>
                <Body>
                  <Title>
                    TrackerMan
                    </Title>
                </Body>
                <Right>
    
                </Right>
              </Header>

              <Switch>
                {/* <Route /> Route to what pages you want jao */}
                <Route  exact path="/home" component={Home}/> 
              </Switch>
            </Container>


            <Footer>
              <FooterTab>
                <Button>
                  <Text>Apps</Text>
                </Button>
                <Button>
                  <Text>Camera</Text>
                </Button>
                <Button active>
                  <Text>Navigate</Text>
                </Button>
                <Button>
                  <Text>Contact</Text>
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
