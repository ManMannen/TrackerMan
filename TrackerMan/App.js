// Packages
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

//Native Base
import {
  Container,
  Content,
  Header,
  Footer,
  FooterTab,
  Button,
  Text,
  Icon,
  Left,
  Right,
  Body,
  Title,
  Subtitle
} from 'native-base';

// Routing 
import { NativeRouter, Route, Link } from "react-router-native";

// Components

const App = (props) => {

  const [active, setActive] = useState(false)

  return (

    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>TrackerMan</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='search' />
          </Button>
          <Button transparent>
            <Icon name='heart' />
          </Button>
          <Button transparent>
            <Icon name='more' />
          </Button>
        </Right>
      </Header>
      <Content>


      </Content>

      <Footer>
        <FooterTab>
          <Button
            vertical
            active={active}
            onPress={() => setActive(!active)}
          >
            <Icon name="home" />
            <Text>Apps</Text>
          </Button>
          <Button
            active={active}
            vertical
            onPress={() => setActive(!active)}
          >
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button
            active={active}
            vertical
            onPress={() => setActive(!active)}
          >
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button
            vertical
            active={active}
            onPress={() => setActive(!active)}
          >
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: "flex",
  }
})


export default App;
