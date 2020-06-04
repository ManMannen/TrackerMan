import React, { Component, useState } from 'react'
import styles from '../assets/styles'

import { TextInput } from 'react-native'

const BLUE = "#428AF8"
const LIGHT_GRAY = "#D3D3D3"


const ModalTextInput = (props) => {
    const [isFocused, setFocus] = useState(false)
    const [isBlurred, setBlur] = useState(false)

    handleBlur = (blur) => {
        setBlur(blur)

        if (props.onBlur) {
                props.onBlur(event);
          }
    }

    handleFocus = (Focus) => {
        setFocus(Focus)
        if (props.onFocus) {
                props.onFocus(event);
        }
    }

    return (
        <TextInput
            placeholder={props.placeholder}
            blurOnSubmit={true}
            value={props.value}
            placeholderTextColor="#FFF"
            underlineColorAndroid={
                isFocused ? BLUE : LIGHT_GRAY
            }
            onFocus={(() => {
                handleFocus(!isFocused)
            })}
            onBlur={(() => {
                handleBlur(!isBlurred)
            })}
            style={styles.textInput}
        />
    )
}


export default ModalTextInput