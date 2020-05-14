import { StyleSheet } from 'react-native';

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
        fontWeight: "bold"
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
        opacity: 0.9
    },

    item: {
        borderRadius: 10,
        marginVertical: 8,
        borderWidth: 2,
        borderColor: "#6A0DAD"

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

    addNewButton: {
        backgroundColor: "#6A0DAD",
        color: "#6A0DAD",
        width: "100"

    }
});

export default styles;
