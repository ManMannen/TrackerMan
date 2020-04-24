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

const Home = (props) => {

  const [active, setActive] = useState(false)

  return (
    <NativeRouter>
      <Container>
        <Content>
        <MenuHeader title="TrackerMan"/>

      

        </Content>
        <NavigationFooter active={active} setActive={setActive}/>
      </Container>
    </NativeRouter>
  );
};

export default Home;
