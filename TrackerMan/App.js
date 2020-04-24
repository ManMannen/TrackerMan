import React, { useState } from 'react';

import {
  Container,
  Content,
} from 'native-base';

// Routing 
import { NativeRouter, Switch, Route, } from "react-router-native";

// Components
import MenuHeader from './components/MenuHeader'
import NavigationFooter from './components/NavigationFooter'

//Pages
import Home from './pages/Home'
import Login from './pages/Login'


const App = ( props ) => {
  const [active, setActive] = useState(false)

  return (
    <NativeRouter>
      <Container>
        <MenuHeader title="TrackerMan"/>
        <Content>

          <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/home" component={Home}/>
          </Switch>

        </Content>
        <NavigationFooter active={active} setActive={setActive} />
      </Container>
    </NativeRouter>
  );
};

export default App;
