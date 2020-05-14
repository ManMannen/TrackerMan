import React from 'react'

// Styling and core modules

import {
    View,
    Flatlist,
} from 'native-base'


import styles from '../assets/styles'

const TrackedItemList = ( props ) => {
    return (  
        <View style={styles.container }>
            {/* <Flatlist
                data={props.items}
                renderItems={props.renderItems}
                keyExtractor={(item, index) => index}
                /> */}
        </View>

    );
}
 
export default TrackedItemList;