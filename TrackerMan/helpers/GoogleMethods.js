import { GoogleSignin, statusCodes } from 'react-native-google-signin';

class Methods {

    signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
        } catch (error) {
            console.log(error)
        } 
        
    };

    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();

            return userInfo
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                return "you cancelled the login process"
            } else if (error.code === statusCodes.IN_PROGRESS) {
                return "login process already going on"
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                return "The play service is not supported or out of date"
            } else {
                return "Something weird happened"
            }
        }
    };
}

export default new Methods
