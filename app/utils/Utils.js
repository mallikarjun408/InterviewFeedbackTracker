import NetInfo from "@react-native-community/netinfo";
//import { getUniqueId, getManufacturer, hasNotch } from 'react-native-device-info';;
//const { htmlToText } = require('html-to-text');

let singletonObj = null;

export default class Utils {

    constructor() {

        if (singletonObj) {
            return singletonObj;
        }
        singletonObj = this;

        this.getNetworkInfo();
        this.isConnected = true;
        this.deviceId = null;
        return singletonObj;
    }

    async getNetworkInfo() {
        // Subscribe
        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            this.isConnected = state.isConnected;
        });

      //  this.deviceId = getUniqueId();
    }

    isNetworkConnected() {
        return this.isConnected;
    }

    getDeviceId() {
        return this.deviceId;
    }

    isDeviceHasNotch() {
       // return hasNotch();
    }
    /*
        stringFormatter(str) {
            if (!str) {
                return '';
            }
            str = str.replace(/&lt;/g, '<');
            str = str.replace(/&gt;/g, '>');
            str = str.replace(/&amp;nbsp;/g, '');
            str = str.replace(/&amp;/g, '&');
    
            const text = htmlToText(str, {
                wordwrap: 130
            });
    
            return text;
        }*/
    getFormattedDate = () => {
        var date = new Date();
        var year = date.getFullYear();

        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;

        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return month + '/' + day + '/' + year;
    }
    getFormattedTime = () => {
        var date = new Date();

        var hour = (date.getHours()).toString();
        hour = hour.length > 1 ? hour : '0' + hour;

        var min = date.getMinutes().toString();
        min = min.length > 1 ? min : '0' + min;

        return hour + ':' + min
    }
}