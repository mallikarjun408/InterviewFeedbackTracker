import * as stringConstant from '../constants/stringConstants';
import Utils from '../utils/Utils';
import * as ConfigUrls from '../utils/ConfigUrls';

import axios from 'axios';
//const XMLParser = require('react-xml-parser');


class APIHandler {

    static serviceHandler = null
    static pendingServCounter = 0

    constructor() {
    }

    static getData = (url,methodName,bodyData, responseHandler) => {

        var isNetworkAvailable = new Utils().isNetworkConnected();

        if (!isNetworkAvailable) {

            responseHandler(null, stringConstant.AppConstClass.OFFLINE_MESSAGE);
            return;
        }

        var host = ConfigUrls.ServiceUrl.HOST_URL;
        const serviceUrl = `${host}${url}`

        fetch(serviceUrl,{
            method:methodName,
            headers:{},
            body:bodyData
        })

            .then((response) => response.json())
            .then((json) => {
               // alert(json)
                //return json.movies;
                responseHandler(json, "");
            })
            .catch(error => {
                alert("error = "+error)
                if (!isNetworkAvailable) {
                    responseHandler(null, stringConstant.AppConstClass.OFFLINE_MESSAGE);
                } else {
                    responseHandler(null, stringConstant.AppConstClass.UNABLE_FETCH_RECORD);
                }
            });
    };

    static postData = (url,methodName,bodyData, responseHandler) => {

        var isNetworkAvailable = new Utils().isNetworkConnected();

        if (!isNetworkAvailable) {

            responseHandler(null, stringConstant.AppConstClass.OFFLINE_MESSAGE);
            return;
        }

        var host = ConfigUrls.ServiceUrl.HOST_URL;
        const serviceUrl = `${host}${url}`

        fetch(serviceUrl,{
            method:methodName,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(bodyData)
        })

            .then((response) => response.json())
            .then((json) => {
               // alert(json)
                //return json.movies;
                responseHandler(json, "");
            })
            .catch(error => {
                alert("error = "+error)
                if (!isNetworkAvailable) {
                    responseHandler(null, stringConstant.AppConstClass.OFFLINE_MESSAGE);
                } else {
                    responseHandler(null, stringConstant.AppConstClass.UNABLE_FETCH_RECORD);
                }
            });
    };
    /*
        static getPOSTSOAPActions = (url, params, headers, responseHandler) => {
            const xml = new XMLParser();
            axios.post(url,
                params,
                {
                    headers: headers
    
                }).then(res => {
                    //  console.log(res);
                    if (res.status == 200) {
                        const response = xml.parseFromString(res.data);
                        //console.log(response);
                        responseHandler(response);
                    } else {
                        responseHandler(null, stringConstant.AppConstClass.ERROR_MESSAGE);
                    }
    
    
                }).catch(err => { console.log(err); responseHandler(null, stringConstant.AppConstClass.ERROR_MESSAGE); });
        }
    */
}

export default APIHandler;