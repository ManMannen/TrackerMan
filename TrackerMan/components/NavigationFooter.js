import React, { useState } from 'react';

import {
    Footer,  
    FooterTab,
    Button,
    Text,
    Icon,
} from 'native-base';

const NavigationFooter = (props) => {
    return (  
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={props.active}
            onPress={() => props.setActive(!props.active)}
          >
            <Icon name="home" />
            <Text>Apps</Text>
          </Button>
          <Button
            active={props.active}
            vertical
            onPress={() => props.setActive(!props.active)}
          >
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button
            active={props.active}
            vertical
            onPress={() => props.setActive(!props.active)}
          >
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button
            vertical
            active={props.active}
            onPress={() => props.setActive(!props.active)}
          >
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
        </Footer>
    )
}

export default NavigationFooter;