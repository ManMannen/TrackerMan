import { StyleSheet } from 'react-native';
import bakground from './img/background.jpg'

const styles = StyleSheet.create({
    title: {
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

    spacer: {
        height: 20
    }
});

export default styles;
