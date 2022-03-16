import React, { useEffect, useState } from "react";
import { View, Text, Button, ImageBackground, Image, TextInput, TouchableOpacity } from "react-native";
import { LoginStyles } from './styles';
import Spinner from 'react-native-loading-spinner-overlay';
import APIHandler from "../../network/APIHandler";
import { useDispatch } from 'react-redux';
import { profileActions } from "../../redux/actions/profileActions";
import { SAVE_PROFILE_DETAILS } from "../../redux/types";

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import PushNotification from "../../utils/PushNotification";
import {
    notifications,
    messages,
    NotificationMessage,
    Android
} from "react-native-firebase-push-notifications"


/* GoogleSignin.configure({
   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // [Android] what API you want to access on behalf of the user, default is email and profile
   webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
   hostedDomain: '', // specifies a hosted domain restriction
   forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
   accountName: '', // [Android] specifies an account name on the device that should be used
   iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
   googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
   openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
   profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
 });*/

const LoginScreen = ({ navigation }) => {

    const [email, setEmailValue] = useState("");
    const [password, setPasswordValue] = useState("");
    const [spinnerState, setSpinnerState] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {

        getToken();

    }, [])
    const response = (res, error) => {
        setSpinnerState(false);
        if (res != null) {
            dispatch(profileActions(SAVE_PROFILE_DETAILS, res[0]))
            navigation.navigate('ProfileView'); //LandingScreen
        } else {
            alert(error)
        }
    }

    const onSignInTap = () => {
       // alert("type")
    }
    const onLoginTap = () => {
       // alert('test')
        setSpinnerState(true);
        const credentials = {
            "userName": "xxxxx",
            "pass": "yyyyy"
        }
        APIHandler.postData("login", "POST", credentials, response)

    }


    const getToken = async() => {
        //get the messeging token
        const token = await notifications.getToken()
        //you can also call messages.getToken() (does the same thing)
        console.log("token from Push = " + token)
        return token;
    }

    return (
        <ImageBackground style={LoginStyles.container} >
            <Spinner
                visible={spinnerState}
                textContent={'Loading...'}
                textStyle={{ color: "white" }}
            />
            <Image source={require('../../assets/images/capgemini_logo.png')}
                style={LoginStyles.header_image}
                resizeMode="contain"></Image>
            <TextInput
                style={LoginStyles.input}
                onChangeText={setEmailValue}
                value={email}
                placeholder="User Name / Email"
                keyboardType="email-address" />
            <TextInput
                style={LoginStyles.input}
                onChangeText={setPasswordValue}
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={true}
            />
            <TouchableOpacity style={LoginStyles.button}
                onPress={() => { onLoginTap() }}>
                <Text style={LoginStyles.btnText}> Login In</Text>
            </TouchableOpacity>



            <View style={LoginStyles.separation_view}>
                <View style={LoginStyles.line_style}></View>
                <View style={LoginStyles.circle_style}>
                    <Text>OR</Text>
                </View>
                <View style={LoginStyles.line_style}></View>
            </View>


            <GoogleSigninButton
                style={LoginStyles.btngoogle_signin}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => { onSignInTap() }}
                disabled={false}
            />
            <TouchableOpacity style={LoginStyles.button}
                onPress={() => { onLoginTap() }}>
                <Text style={LoginStyles.btnText}> SSO Sign In</Text>
            </TouchableOpacity>
        </ImageBackground >
    )
}

export default LoginScreen;
