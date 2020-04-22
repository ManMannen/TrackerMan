import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';

const Footer = (props) => {
    return (
      <View style={styles.footer}>
          <View>
              <Text>
                Jag är en footer
              </Text>
          </View>
      </View>
    )
  }


export default Footer;