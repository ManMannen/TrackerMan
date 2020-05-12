import React from 'react';

// Styling and core modules
import styles from '../styles/styles'

import {
    Header,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Title,
} from 'native-base';

// ---------

const MenuHeader = (props) => {
    return (
        <Header>
            <Left>
                <Button transparent>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body>
                <Title>{ props.title }</Title>
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
    )
}

export default MenuHeader;