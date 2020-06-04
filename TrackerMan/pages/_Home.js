import React, { useEffect, useState } from 'react';
// React

// Styling and components
import styles from '../assets/styles'
import trackedItemsLogo from '../assets/img/trackItems.jpg';
import AddNewItemButton from '../components/AddNewItemButton'
import ModalTextInput from '../components/ModalTextInput'
import LoadingPage from '../components/LoadingPage'
import GoogleMap from '../components/GoogleMaps'

import {
  View,
  Text,
  FlatList,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Modal,

} from 'react-native';

import { Button, Icon } from 'native-base'

const Home = (props) => {
  const [selected, setSelected] = useState(new Map())
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [value, onChangeText] = useState('');
  const [EditModalVisible, setEditModalVisible] = useState(false)

  // Item state properties 
  const [itemDocId, setItemDocId] = useState("")
  const [itemName, setItemName] = useState("")
  const [itemDesc, setItemDesc] = useState("")
  const [itemLocation, setItemLocation] = useState("")
  const [itemTracked, setItemTracked] = useState(false)
  const [googleMapModalVisible, setGoogleMapModalVisible] = useState(false)

  const secret = "1337"

  useEffect(() => {
    setIsLoading(true)
    const url = "http://192.168.2.150:3000/users/macaFFJydES1SgbeEQLL/items"
    fetch(url, {
      method: 'GET',
      headers: {
        'secret': `${secret}`,
        'Content-Type': 'application/json'
      }

    })
      .then((response) => response.json())
      .then((responseJson) => {
        setItems(responseJson)
        setIsLoading(false)
      })
      .catch((error) => console.error(error))
      .finally(() => {

      })
  }, []);

  function Item({ id, name, location, desc, tracked, selected, onSelect }) {
    let item = {
      id: id,
      name: name,
      location: location,
      desc: desc,
      tracked: tracked
    }
    return (
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={[
          styles.item,
          { backgroundColor: !selected ? 'rgb(80,80,80)' : '#6A0DAD' },
        ]}
      >
        <Text style={styles.rowTitle}>{name}</Text>

        <View style={{ flexDirection: "row"}}>
          <Button
            style={styles.editButton}
            onPress={(() => {
              OpenEditItemModal(true, item)
            })}
          >
            <Icon name="settings" />
          </Button>
          <Button
            style={styles.editButton}
            onPress={(() => {
              openGoogleMapModal(true, item)
            })}
          >
            <Icon name="map" />
          </Button>
        </View>
      </TouchableOpacity>
    );
  }

  const OpenEditItemModal = (condition, item) => {
    setEditModalVisible(condition)
    // Assigning state in order to fetch from Edit item 
    // modal if the modal is open

    setItemDocId(item.id)
    setItemName(item.name)
    setItemDesc(item.desc)
    setItemLocation(item.location)
    setItemTracked(item.tracked)

  }

  const openGoogleMapModal = (condition, item) => {
    setGoogleMapModalVisible(condition)
    // Assigning state in order to fetch from Edit item 
    // modal if the modal is open

    setItemDocId(item.id)
    setItemName(item.name)
    setItemDesc(item.desc)
    setItemLocation(item.location)
    setItemTracked(item.tracked)
  }


  const closeGoogleMapModal = (condition) => {
    setGoogleMapModalVisible(condition)
  }

  const closeEditItemModal = (condition) => {
    setEditModalVisible(condition)
  }


  const onSelect = React.useCallback(
    id => {
      s
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      props.history.push(`/home/${id}`)
      setSelected(newSelected);
    },
    [selected],
  );

  const toggleNewItemModal = (condition) => {
    setModalVisible(condition)
  }

  const HandleDescInputValue = (value) => {
    setItemDesc(value)
  }

  const HandleNameInputValue = (value) => {
    setItemName(value)
  }


  const HandleLocationInputValue = (value) => {
    setItemLocation(value)
  }

  if (isLoading)
    <LoadingPage />

  return (
    <View style={styles.itemPageContainer}>
      <ImageBackground
        source={trackedItemsLogo}
        style={styles.image}
      >
        <View className="content" style={styles.trackedItemsContent}>
          <Text style={styles.title}>
            Your Items:
          </Text>
          <SafeAreaView style={{ display: "flex" }}>
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

                />
              )}
              isLoading={isLoading}
              keyExtractor={(item, i) => i}
              extraData={selected}


            />
          </SafeAreaView>
        </View>
        <AddNewItemButton
          title="Add New Item"
          onPress={(() => {
            toggleNewItemModal(true)
          })}
        />
      </ImageBackground>


      <Modal
        animationType={"slide"}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => { console.log("Modal has been closed.") }}>
        <View style={styles.modalContent}>
          <Icon name="close" style={styles.closeModalIcon} onPress={() => {
            toggleNewItemModal(false)
          }} />
          <Text style={styles.modalTitle}> Add New Item To Track:</Text>

          <Text style={styles.modalText}> Name </Text>
          <ModalTextInput
            placeholder={"Enter Name Here!"}
          />

          <Text style={styles.modalText}> Description </Text>
          <ModalTextInput
            placeholder={"Enter Description Here!"}
          />

          <Text style={styles.modalText}> Location </Text>
          <ModalTextInput
            placeholder={"Enter Location Here!"}
          />

          <AddNewItemButton
            title="Add New Item"
            onPress={(() => {
              console.log("I am the best")
            })}
          />
        </View>
      </Modal>



      <Modal
        animationType={"slide"}
        transparent={false}
        visible={googleMapModalVisible}
        onRequestClose={() => { console.log("Modal has been closed.") }}>
        <View style={styles.modalContent}>
          <Icon name="close" style={styles.closeModalIcon} onPress={() => {
            closeGoogleMapModal(false)
          }} />
          <GoogleMap />
        </View>
      </Modal>


      <Modal
        animationType={"slide"}
        transparent={false}
        visible={EditModalVisible}
        onRequestClose={() => { console.log("Modal has been closed.") }}>
        <View style={styles.modalContent}>
          <Icon name="close" style={styles.closeModalIcon} onPress={() => {
            closeEditItemModal(false)
          }} />
          <Text style={styles.modalTitle}> Edit Item - {itemName} </Text>

          <Text style={styles.modalText}> Name </Text>
          <ModalTextInput
            placeholder={itemName}
            defualtValue={"Enter Name Here!"}
            value={value}
            onChangeText={(() => {
              HandleNameInputValue(value)
            })}
          />

          <Text style={styles.modalText}> Description </Text>
          <ModalTextInput
            placeholder={itemDesc}
            defualtValue={"Enter Description Here!"}
            value={value}
            onChangeText={(() => {
              HandleDescInputValue(value)
            })}
          />

          <Text style={styles.modalText}> Location </Text>
          <ModalTextInput
            placeholder={itemName}
            defualtValue={"Enter Location Here!"}
            value={value}
            onChangeText={(() => {
              HandleLocationInputValue(value)
            })}
          />

          <AddNewItemButton
            title="Edit Item"

            onPress={(() => {
              console.log("I am the best")
            })}
          />
        </View>
      </Modal>
    </View>
  );
};


export default Home;
