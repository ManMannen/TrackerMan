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
    const itemId = props.match.param.itemId
    return ( 
        <View>
            <Text>
                Info page for the item { itemId } was opened
            </Text>
        </View>
     );
}
 
export default ItemInfo;