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




const Home = (props) => {
  const [selected, setSelected] = React.useState(new Map())
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  const secret = "1337"
  
  useEffect(() => {
    const url = "http://192.168.2.150:3000/users/macaFFJydES1SgbeEQLL/items"
    fetch(url, { 
      method: 'GET',
      headers: {
        'secret' : `${secret}`,
        'Content-Type': 'application/json'
      }
      
    })
    .then((response) => response.json())
    .then((responseJson) => {
      setItems(responseJson)
    })
    .catch((error) => console.error(error))
    .finally(() => {
      setIsLoading(false)
    })
  }, []);

  function Item({ id, name, location, desc, tracked, selected, onSelect }) {
    return (
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={[
          styles.item,
          { backgroundColor: !selected ? 'rgb(80,80,80)' : '#6A0DAD'},
        ]}
      >
        <Text style={ styles.rowTitle}>{name}</Text>

      </TouchableOpacity>
    );
  }
  
  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  const itemInfoHandler = (id) => {

    props.history.push(`/home/${id}`)
  }

  return (
    <View style={styles.itemPageContainer}>
      <ImageBackground source={trackedItemsLogo} style={styles.image}>
        <View className="content" style={styles.trackedItemsContent}>
          <StatusBar barStyle="light-content" />
          <Text style={styles.title}>
            Your Items:
          </Text>
          <SafeAreaView>
            <FlatList 
              style={styles.flatList}
              data={items}
              renderItem={({ item }) => (
                <Item
                  id={item.docId}
                  name={item.name}
                  location={item.location}
                  desc={item.desc}
                  tracked={item.tracked}
                  selected={!!selected.get(item.docId)}
                  onSelect={onSelect}
                  // onPress={itemInfoHandler(item.docId)}
                  />
              )}
              isLoading={isLoading}
              keyExtractor={( item, i ) => i }
              extraData={selected}
            />
          <Button
          style={ styles.addNewButton } 
          title="Add a new item to track"
           />         
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
