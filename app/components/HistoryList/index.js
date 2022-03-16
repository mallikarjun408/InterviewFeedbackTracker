import React, { useEffect, useState } from "react";
import { View, SectionList, Text, Image, TouchableOpacity, Linking, Platform } from "react-native";
import listofschedules from '../../assets/data/listofschedule.json';
import { styles } from './styles';
import Swipeout from 'react-native-swipeout';
import APIHandler from "../../network/APIHandler";
import Spinner from 'react-native-loading-spinner-overlay';


const HistoryList = ({ navigation }) => {

    let mm = "";
    const [schedules, setSchedules] = useState([])
    const [spinnerState, setSpinnerState] = useState(false);

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {

            setSpinnerState(true);
            APIHandler.getData("fetchFeedbackHistory", "GET", "", response)
        });
        setSpinnerState(true);
        APIHandler.getData("fetchFeedbackHistory", "GET", "", response)

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation])

    const response = (res, error) => {
        setSpinnerState(false);
        if (res != null) {
            // alert(JSON.stringify(res))
            setSchedules(res)
        } else {
            alert(error)
        }
    }

    const openProfile = (data) => {
        if (Platform.OS == "android") {

        }
        Linking.openURL(data.candidateInfo.candidate_profilelink)
    }

    const btnViewFeedback = (data) => {
        navigation.navigate("Feedbackform", { status: data.finalStatus, data: data, editMode:false })
    }

    // Buttons
    const Item = ({ data, index, section, mm }) => {
        //alert(JSON.stringify(data))
        return (

            <View style={styles.item}>
               
                <View style={data.finalStatus == "Select" ? styles.lineGreen : styles.lineRed}></View>
                <TouchableOpacity style={[styles.dataitemcontainer]}
                onPress={()=>btnViewFeedback(data)}>

                    <View style={{ padding: 10 }}>
                        <Text style={styles.textStyle80016}>Name : {data.candidateInfo.candidate_name} </Text>
                        <Text style={styles.textStyle60014}>Exp in (yrs)   : {data.candidateInfo.candidate_exp}</Text>
                        <Text style={styles.textStyle60014}>Skill set      : {data.candidateInfo.candidate_skillset}</Text>
                        <Text style={styles.textStyle60014}>Scheduled at   : {data.candidateInfo.scheduled_at}</Text>

                    </View>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { openProfile(data) }}>
                    <Image style={styles.fileicon}
                        source={require("../../assets/images/images.jpg")} />
                </TouchableOpacity>
            </View>
        )
    };
    return (
        <View style={styles.container}>
            <Spinner
                visible={spinnerState}
                textContent={'Loading...'}
                textStyle={{ color: "white" }}
            />
            <SectionList
                sections={schedules}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index, section }) => <Item data={item} index={index} section={section} mm={mm} />}
                renderSectionHeader={({ section: { scheduled_on } }) => {
                    mm = scheduled_on
                    return (

                        <Text style={styles.header}>{scheduled_on || ""}</Text>
                    )
                }}
            />
        </View>
    )

}

export default HistoryList;
