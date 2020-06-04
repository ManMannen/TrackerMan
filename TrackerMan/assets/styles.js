import { StyleSheet } from 'react-native';
import { overlay } from 'react-native-paper';

const styles = StyleSheet.create({
    Indextitle: {
        fontSize: 22,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Roboto",
        fontWeight: "bold",
        color: "rgb(255,255,255)",
        marginTop: 90,
    },
    
    image: {
        flex: 1,
        resizeMode: "cover",
        alignItems: "center",
        width:420,
      },

    button: {
        width: 192,
        height: 60,
    },

    googleAuth: {
        display: "flex",
        flex: 1,
        backgroundColor: "rgb(80,80,80)",
    },

    title: {
        fontSize: 22,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Roboto",
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 10,
        color: "white",
        borderBottomWidth: 2,
        borderBottomColor: "#6A0DAD"
    },

    spacer: {
        height: 20
    },

    headerStyle: {
        backgroundColor: "rgb(80,80,80)",
        borderBottomColor: "#6A0DAD",
        borderBottomWidth: 2,
        fontWeight: "bold",
    },

    iconStyle: {
        color: "#6A0DAD",
        fontWeight: "bold"
    },

    tabStyle: {
        color: "white",
        fontWeight: "bold"
    },

    footerStyle: {
        backgroundColor: "rgb(80,80,80)",
        borderTopColor: "#6A0DAD",
        borderTopWidth: 2
    },

    itemPageContainer: {
        flex: 1,
    },

    trackedItemsContent: {
        width: "90%",
        alignItems: "center",
        backgroundColor: "rgb(80,80,80)",
        height: "70%",
        marginTop: "15%",
        borderRadius: 10,
        opacity: 0.9,
        display: "flex",
        overflow: "hidden"

    },

    item: {
        borderRadius: 10,
        marginVertical: 8,
        borderWidth: 2,
        borderColor: "#6A0DAD",
        marginRight: 10,
        padding: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },

    rowTitle: {
        color: "white",
        fontSize: 22,
        fontFamily: "Roboto",
        fontWeight: "bold",
        padding: 10
    },

    flatList: {
        marginTop: 10,
        width: 350,
    },

    addNewItemButton: {
        color: "white",
        width: 130,
        height: 50,
        borderColor: "#6A0DAD",
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: "rgb(80,80,80)",
        padding: 10
        
     },

    addNewItemButtonTitle: {        
        color: "white",
        fontSize: 12,
        fontFamily: "Roboto",
        fontWeight: "bold",

    },
    

    overlay: {
        backgroundColor: "red",
        height: 100,
        width: 100
    },

    signOutButton: {
        color: "white",
        marginRight: 15
        
    },
    
    signOutButtonTitle: {
        color: "white",
        fontSize: 20,
        fontFamily: "Roboto",
        fontWeight: "bold",
        
    }, 

     modalContent: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "rgb(80,80,80)",
        padding: 100,
    
     },

     modalTitle: {
        color: 'white',
        marginTop: 8,
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: "bold",
        borderBottomColor: "white",
        borderBottomWidth: 1,
        marginBottom: 10
     },

     modalText: {
        color: 'white',
        marginTop: 18,
        marginBottom: 10,
        fontSize: 16,
        fontFamily: "Roboto",
        fontWeight: "bold",
     },

     textInput: {
        height: 36, 
        borderColor: 'gray',
        paddingLeft: 6,
        width: 250,
        color: "white"
     },

     ModalButtonTitle: {
         textAlign: "center",
         marginLeft: 100
     },

     editButton: {
         width: 52,
         height: 40,
         backgroundColor: "rgb(80,80,80)",
     },

     closeModalIcon: {
         position: "absolute",
         left: 10,
         top: 10,
         color: "white"
     },

     editItemModal: {
         backgroundColor: "white"
     }
});

export default styles;
