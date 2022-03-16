import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from "react-native"
import {
  notifications,
  messages,
  NotificationMessage,
  Android
} from "react-native-firebase-push-notifications"
const PushNotification = () =>{

    let removeOnNotificationOpened = null;
    let removeOnNotification  = null;
    let removeonTokenRefresh = null;


    useEffect(()=>{
      
            //remove the listener on unmount
            if (removeOnNotificationOpened) {
                removeOnNotificationOpened()
            }
            if (removeOnNotification) {
                removeOnNotification()
            }
        
            if (removeonTokenRefresh) {
                removeonTokenRefresh()
            }
       
    })

getToken = async () => {
    //get the messeging token
    const token = await notifications.getToken()
    //you can also call messages.getToken() (does the same thing)
    console.log("token from Push = "+token)
    return token
}
getInitialNotification = async () => {
    //get the initial token (triggered when app opens from a closed state)
    const notification = await notifications.getInitialNotification()
    console.log("getInitialNotification", notification)
    return notification
}

onNotificationOpenedListener = () => {
    //remember to remove the listener on un mount
    //this gets triggered when the application is in the background
    removeOnNotificationOpened = notifications.onNotificationOpened(
        notification => {
            console.log("onNotificationOpened", notification)
            //do something with the notification
        }
    )
}

onNotificationListener = () => {
    //remember to remove the listener on un mount
    //this gets triggered when the application is in the forground/runnning
    //for android make sure you manifest is setup - else this wont work
    //Android will not have any info set on the notification properties (title, subtitle, etc..), but _data will still contain information
    removeOnNotification = notifications.onNotification(notification => {
        //do something with the notification
        console.log("onNotification", notification)
    })
}

onTokenRefreshListener = () => {
    //remember to remove the listener on un mount
    //this gets triggered when a new token is generated for the user
    removeonTokenRefresh = messages.onTokenRefresh(token => {
        //do something with the new token
        console.log("  removeonTokenRefresh  =  "+removeonTokenRefresh)
    })
}
setBadge = async number => {
    //only works on iOS and some Android Devices
    return await notifications.setBadge(number)
}

getBadge = async () => {
    //only works on iOS and some Android Devices
    return await notifications.getBadge()
}

hasPermission = async () => {
    //only works on iOS
    return await notifications.hasPermission()
    //or     return await messages.hasPermission()
}

requestPermission = async () => {
    //only works on iOS
    return await notifications.requestPermission()
    //or     return await messages.requestPermission()
}

localNotification = async () => {
    //required for Android
    const channel = new Android.Channel(
        "test-channel",
        "Test Channel",
        Android.Importance.Max
    ).setDescription("My apps test channel")

    // for android create the channel
    notifications.android().createChannel(channel)
    await notifications.displayNotification(
        new NotificationMessage()
            .setNotificationId("notification-id")
            .setTitle("Notification title")
            .setBody("Notification body")
            .setData({
                key1: "key1",
                key2: "key2",
            })
            .android.setChannelId("test-channel") //required for android
    )
}



}

export default PushNotification;