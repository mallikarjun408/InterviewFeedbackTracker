import React, { useEffect, useState } from "react";
import { View, SectionList, Text, Image, TouchableOpacity, Linking, Platform } from "react-native";
import listofschedules from '../../assets/data/listofschedule.json';
import { styles } from './styles';
import Swipeout from 'react-native-swipeout';
import APIHandler from "../../network/APIHandler";
import Spinner from 'react-native-loading-spinner-overlay';

const ListOfSchedules = ({ navigation }) => {

    let mm = "";

    const [schedules, setSchedules] = useState([])
    const [spinnerState, setSpinnerState] = useState(false);

    useEffect(() => {
       
        const unsubscribe = navigation.addListener('focus', () => {
           
            setSpinnerState(true);
            APIHandler.getData("listofSchedules", "GET", "", response)
        });
        setSpinnerState(true);
        APIHandler.getData("listofSchedules", "GET", "", response)

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation])

    const response = (res, error) => {
        setSpinnerState(false);
        if (res != null) {
            setSchedules(res)
        } else {
            alert(error)
        }
    }

    const btnAccept = (data, index, mm) => {

        data.status = "Accepted";
        data["date"] = mm;
        alert(JSON.stringify(data) + "         " + mm)
        setSpinnerState(true);
        APIHandler.postData("handle", "POST", data, response)
    }
    const btnReject = (data, index) => {
        alert(index)
    }

    const openProfile = (data) => {
        if (Platform.OS == "android") {

        }
        Linking.openURL(data.candidate_profilelink)
    }

    const onCandidateSelect = (data) => {
        navigation.navigate("Feedbackform", { status: "Select", data: data, editMode:true })
    }

    const onCandidateReject = (data) => {
        navigation.navigate("Feedbackform", { status: "Reject", data: data, editMode:true })
    }

    const onCandidateNotAttended = (data) => {
        navigation.navigate("Feedbackform", { status: "NotAttended", data: data, editMode:true })
    }

    // Buttons
    const Item = ({ data, index, section, mm }) => {

        let swipeBtns = [
            {
                text: 'Accept',
                backgroundColor: 'green',
                underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                onPress: () => { btnAccept(data, index, mm) }
            },
            {
                text: 'Reject',
                backgroundColor: 'red',
                underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                onPress: () => { btnReject(data, index) }
            }
        ];
        let AcceptedBtns = [
            {
                text: 'Select',
                backgroundColor: 'green',
                underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                onPress: () => { onCandidateSelect(data, index) }
            },
            {
                text: 'Reject',
                backgroundColor: 'red',
                underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                onPress: () => { onCandidateReject(data, index) }
            },
            {
                text: 'Not Attended',
                backgroundColor: 'orange',
                underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                onPress: () => { onCandidateNotAttended(data, index) }
            }
        ];


        return (

            <View style={styles.item}>
                <View style={data.status == "New" ? styles.lineBlue : styles.lineGreen}></View>
                <View style={[styles.dataitemcontainer]}>
                    <Swipeout left={data.status == "New" ? swipeBtns : AcceptedBtns}
                        autoClose='true'
                        backgroundColor='transparent'>
                        <View style={{ padding: 10 }}>
                            <Text style={styles.textStyle80016}>Name : {data.candidate_name} </Text>
                            <Text style={styles.textStyle60014}>Exp in (yrs)   : {data.candidate_exp}</Text>
                            <Text style={styles.textStyle60014}>Skill set      : {data.candidate_skillset}</Text>
                            <Text style={styles.textStyle60014}>Scheduled at   : {data.scheduled_at}</Text>

                        </View>
                    </Swipeout>
                </View>
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
                renderSectionHeader={({ section: { date } }) => {
                    mm = date
                    return (

                        <Text style={styles.header}>{date || ""}</Text>
                    )
                }}
            />
        </View>
    )

}

export default ListOfSchedules;
