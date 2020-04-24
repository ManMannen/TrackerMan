import React, { useState } from 'react';

import {
  Container,
  Content,
} from 'react-native';

// Routing 
import { NativeRouter, Switch, Route, } from "react-router-native";

// Components
import MenuHeader from './components/MenuHeader'
import NavigationFooter from './components/NavigationFooter'
// import Home from './pages/Home'

const Login = (props) => {

  const [active, setActive] = useState(false)

  return (
    <NativeRouter>
      <Container>
        <MenuHeader title="TrackerMan"/>
        <Content>

      

        </Content>
        <NavigationFooter active={active} setActive={setActive}/>
      </Container>
    </NativeRouter>
  );
};

export default Login;
