import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Alert, TouchableOpacity } from "react-native";
import { styles } from "../Feedbackform/styles";
import userProfile from "../../assets/data/userprofile.json"

import { useSelector, useDispatch } from 'react-redux';

import APIHandler from "../../network/APIHandler";
import Spinner from 'react-native-loading-spinner-overlay';

const NotAttended = ({ route, navigation }) => {
    const { status, data, date } = route.params;
    const profileReducer = useSelector(state => state.ProfileReducer);
    const profileInfo = profileReducer.profileDetails;

    const [reason, setReason] = useState("");
    const [reschedule, setReschedule] = useState(null);
    const [spinnerState, setSpinnerState] = useState(false);

    const saveStatus = () => {
        // alert(index)
        if (reschedule) {
            data.status = "Not Attended";
            data["re_schedule"] = reschedule;
            data["date"] = date;

            Alert.alert(
                "Do you want to save details",
                "",
                [
                    {
                        text: "OK",
                        onPress: () => {

                            setSpinnerState(true);
                            APIHandler.postData("handle", "POST", data, response)
                        },
                        style: "cancel"
                    }
                ]
            );
        } else {
            alert("Please select re-scheudle option")
        }
    }

    const response = (res, error) => {
        setSpinnerState(false);
        if (res != null) {
            navigation.navigate('LandingScreen');
        } else {
            alert(error)
        }
    }

    return (
        <View style={styles.container}>
            <Spinner
                visible={spinnerState}
                textContent={'Loading...'}
                textStyle={{ color: "white" }}
            />
            <ScrollView style={styles.containerBox}
            >
                <View>
                    {<View style={styles.containerBox}>
                        <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { flex: 3 }]}>Name</Text>
                            <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                            <Text style={[styles.txtStyle, { flex: 6 }]}>{data.candidate_name}</Text>
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { flex: 3 }]}>Interview Date</Text>
                            <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                            <Text style={[styles.txtStyle, { flex: 6 }]}>{data.scheduled_on}</Text>
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { flex: 3 }]}>Recruiter Name</Text>
                            <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                            <Text style={[styles.txtStyle, { flex: 6 }]}>{data.recruiter_name}</Text>
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { flex: 3 }]}>Job Interviewing for </Text>
                            <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                            <Text style={[styles.txtStyle, { flex: 6 }]}>{data.candidate_skillset}</Text>
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { flex: 3 }]}>Core Skill</Text>
                            <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                            <Text style={[styles.txtStyle, { flex: 6 }]}>{data.candidate_skillset}</Text>
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { fontWeight: 'bold', paddingTop: 10 }]}>Panel Details</Text>

                        </View>
                        <View style={styles.rectangleBox}>
                            <View style={styles.viewColumn}>
                                <Text style={[styles.txtStyle, { flex: 3 }]}>Panel Name</Text>
                                <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                                <Text style={[styles.txtStyle, { flex: 6 }]}>{userProfile.name}</Text>
                            </View>
                            <View style={styles.viewColumn}>
                                <Text style={[styles.txtStyle, { flex: 3 }]}>Panel Designation</Text>
                                <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                                <Text style={[styles.txtStyle, { flex: 6 }]}>{userProfile.designation}</Text>
                            </View>
                            <View style={styles.viewColumn}>
                                <Text style={[styles.txtStyle, { flex: 3 }]}>Panel BU</Text>
                                <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                                <Text style={[styles.txtStyle, { flex: 6 }]}>{userProfile.BU}</Text>
                            </View>
                            <View style={styles.viewColumn}>
                                <Text style={[styles.txtStyle, { flex: 3 }]}>Panel Practice</Text>
                                <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                                <Text style={[styles.txtStyle, { flex: 6 }]}>{userProfile.SBU}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column', marginVertical: 10 }}>
                            <Text style={[styles.txtStyle, { fontWeight: 'bold', paddingVertical: 10 }]}> Reason  for not attended</Text>
                            <TextInput
                                style={[styles.reasonTextInput]}
                                multiline={true}
                                numberOfLines={3}
                                maxLength={50}
                                onChangeText={setReason}
                                value={reason}
                                placeholder="Reason"
                                keyboardType="email" />
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { flex: 3 }]}>re-schudele required</Text>
                            <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                            <TouchableOpacity style={[styles.rectangleBox, { borderRadius: 0, borderColor: '#C9F5AD', backgroundColor: reschedule == true ? 'green' : '#C9F5AD' }]}
                                onPress={() => { setReschedule(true) }}>
                                <Text style={{ color: 'white', paddingHorizontal: 15, fontWeight: reschedule == true ? 'bold' : '500' }}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.rectangleBox, { borderRadius: 0, borderColor: '#F5ADAD', backgroundColor: reschedule == false ? 'red' : '#F5ADAD' }]}
                                onPress={() => { setReschedule(false) }}>
                                <Text style={{ color: 'white', paddingHorizontal: 15, fontWeight: reschedule == false ? 'bold' : '500' }}>No</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            disabled={!reschedule}
                            style={[styles.rectangleBox, { backgroundColor: reschedule ? 'orange' : 'gray', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }]}
                            onPress={() => { saveStatus() }}>
                            <Text style={{ color: 'white', fontWeight: '700' }}>SAVE</Text>
                        </TouchableOpacity>
                    </View>}
                </View>
            </ScrollView>
        </View>
    )
}

export default NotAttended;