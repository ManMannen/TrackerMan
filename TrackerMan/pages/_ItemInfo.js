// React
import React, { useEffect, useState } from 'react';

// Styling and core modules
import styles from '../assets/styles'
import trackedItemsLogo from '../assets/img/trackItems.jpg';

// import TrackedItemList from '../components/TrackedItemList'

import {
  View,
  Text,
  Button,
  FlatList,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

const  ItemInfo = ( props ) => {
    return ( 
        <View style={{ flex: 1/2, backgroundColor: "blue"}}>
            <Text>
                Info page for the item was opened
            </Text>
        </View>
     );
}
 
export default ItemInfo;