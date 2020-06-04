import React, { useEffect, useState } from 'react';
// React

// Styling and components
import styles from '../assets/styles'
import AddNewItemButton from '../components/AddNewItemButton'
import ModalTextInput from '../components/ModalTextInput'


import {
    View,
    Text,
} from 'react-native';

import {
    Button,
    Icon,
    Form
} from 'native-base'

const ItemForm = (props) => {
    return (
        <View>
            <Form>
                <Icon name="close" style={props.iconStyling} onPress={() => {
                    props.closeModal(false)
                }} />
                <Text style={props.titleStyling}> Edit Item </Text>

                <Text style={props.textStyling}> Name </Text>
                <ModalTextInput
                    placeholder={"Enter Name Here!"}
                />

                <Text style={props.textStyling}> Description </Text>
                <ModalTextInput
                    placeholder={"Enter Description Here!"}
                />

                <Text style={props.textStyling}> Location </Text>
                <ModalTextInput
                    placeholder={"Enter Location Here!"}
                />

                <Button
                    title="Edit item"
                    onPress={(() => {
                        console.log("I am the best")
                    })}
                />
            </Form>
        </View>
    );
}

export default ItemForm

// <ItemForm 
// titleStyling={styles.modalTitle}
// textStyling={styles.modalText}
// iconStyling={styles.closeModalIcon}
// closeModal={closeEditItemModal(false)}



// />
