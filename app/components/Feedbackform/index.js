import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Alert } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { styles } from "./styles";
import userProfile from "../../assets/data/userprofile.json"
import Pagination from "../Pagination";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { feedbackActions } from '../../redux/actions/feedbackActions';
import { SAVE_FEEDBACK_DETAILS_FOUR, SAVE_FEEDBACK_DETAILS_ONE, SAVE_FEEDBACK_DETAILS_THREE, SAVE_FEEDBACK_DETAILS_TWO, SAVE_FEEDBACK_DETAILS_SUBMITTED } from "../../redux/types";
import { TYPE_OF_INTERVIEW, VIDEO_QUALITY, INTERVIEW_ROUND, IS_POSSIBLE_FAKE, FAKE_REASON } from "../../utils/const";


import Angular from "./Angular";
import DomainFeedback from "./DomainFeedback";
import AdditionalFeedback from "./AdditionalFeedback";
import APIHandler from "../../network/APIHandler";
import Utils from "../../utils/Utils";

const Feedbackform = ({ route, navigation }) => {

    const { status, data, editMode } = route.params;
    // alert(editMode);
    const candidateInfo = data;
    const feedbackReducer = useSelector(state => state.FeedbackReducer);
    const profileReducer = useSelector(state => state.ProfileReducer);
    const profileInfo = profileReducer.profileDetails;
    const feedbackForm1Data = feedbackReducer.feedbackform1;
    const feedbackForm2Data = editMode ? feedbackReducer.feedbackform2 : data?.skillEval || [];
    const domainKnowledgeFeedback = editMode ? feedbackReducer.feedbackform3 : data?.domainEval || [];
    const additionalFeedback = editMode ? feedbackReducer.feedbackform4 : data?.overallEval || [];
    const [interviewType, setInterviewType] = useState(editMode ? (feedbackForm1Data?.TYPE_OF_INTERVIEW || "Audio") : data.technicalEval.TYPE_OF_INTERVIEW);
    const [videoQuality, setVideoQuality] = useState(editMode ? feedbackForm1Data?.VIDEO_QUALITY || "Average" : data.technicalEval.VIDEO_QUALITY);
    const [interviewRound, setInterviewRound] = useState(editMode ? feedbackForm1Data?.INTERVIEW_ROUND || "L1" : data.technicalEval.INTERVIEW_ROUND);
    const [isPossibleFake, setIsPossibleFake] = useState(editMode ? feedbackForm1Data?.IS_POSSIBLE_FAKE || "No" : data.technicalEval.IS_POSSIBLE_FAKE);
    const [fakeReason, setFakeReason] = useState(editMode ? feedbackForm1Data?.FAKE_REASON || "" : data.technicalEval.FAKE_REASON);
    const [activeIndex, setActiveIndex] = useState(1);

    // const [isFeedbackSubmitted, setFeedbackSubmission] = useState(false);


    const dispatch = useDispatch();

    const statusColor = status == "Select" ? { backgroundColor: 'green' } : status == "Reject" ? { backgroundColor: 'red' } : { backgroundColor: 'orange' };
    const navigateBack = () => {
        navigation.pop();
    }

    const tapOnCircle = (index) => {
        if (activeIndex > index)
            setActiveIndex(index);

    }

    const feedbackForm1 = () => {

        setActiveIndex(2);

        if (editMode) {
            dispatch(feedbackActions(SAVE_FEEDBACK_DETAILS_ONE, {
                TYPE_OF_INTERVIEW: interviewType,
                VIDEO_QUALITY: videoQuality,
                INTERVIEW_ROUND: interviewRound,
                IS_POSSIBLE_FAKE: isPossibleFake,
                FAKE_REASON: fakeReason

            }))
        }
    }
    const feedbackForm2 = (data) => {

        setActiveIndex(3);

        if (editMode) {
            dispatch(feedbackActions(SAVE_FEEDBACK_DETAILS_TWO, data));
        }
    }
    const feedbackForm3 = (data) => {

        setActiveIndex(4);

        if (editMode) {

            dispatch(feedbackActions(SAVE_FEEDBACK_DETAILS_THREE, data));
        }
    }
    const feedbackForm4 = (data) => {

        //  alert("  status  " + status + "    editMode    " + editMode);
        if (editMode) {
alert('submited')
            dispatch(feedbackActions(SAVE_FEEDBACK_DETAILS_FOUR, data));

            const finalFeedback = {
                scheduled_on: candidateInfo.scheduled_on,
                data: [{
                    userID: profileInfo.userId,
                    userName: profileInfo.name,
                    candidateInfo: candidateInfo,
                    finalStatus: status,
                    interviewHeldOn: new Utils().getFormattedDate(),
                    interviewTime: new Utils().getFormattedTime(),
                    technicalEval: feedbackForm1Data,
                    skillEval: feedbackForm2Data,
                    domainEval: domainKnowledgeFeedback,
                    overallEval: data
                }]
            }

            APIHandler.postData("postFeedback", "POST", finalFeedback, response);
        }

    }

    const response = (res, error) => {
        if (res != null) {
            Alert.alert(
                "Feedback Submitted Successfully",
                "",
                [
                    {
                        text: "OK",
                        onPress: () => {
                            dispatch(feedbackActions(SAVE_FEEDBACK_DETAILS_SUBMITTED, null));
                            navigation.navigate('LandingScreen');
                        },
                        style: "cancel"
                    }
                ]
            );
        } else {
            alert(error);
        }
    }


    return (

        <View style={styles.container}>
            <View style={[styles.headerView, statusColor]}>
                <TouchableOpacity
                    onPress={() => { navigateBack() }}>
                    <Image
                        style={{ height: 25, width: 25 }}
                        source={require("../../assets/images/backbtnblack.png")}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>{"Feedbackform"}</Text>
            </View>
            <Pagination activeIndex={activeIndex} tapOnCircle={tapOnCircle} statusColor={statusColor} />
            <ScrollView style={styles.containerBox}>
                <View>
                    {activeIndex == 1 && <View style={styles.containerBox}>
                        <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { flex: 3 }]}>Name</Text>
                            <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                            <Text style={[styles.txtStyle, { flex: 6 }]}>{editMode ? data.candidate_name : data.candidateInfo.candidate_name}</Text>
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { flex: 3 }]}>Interview Date</Text>
                            <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                            <Text style={[styles.txtStyle, { flex: 6 }]}>{editMode ? data.scheduled_on : data.candidateInfo.scheduled_on}</Text>
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { flex: 3 }]}>Recruiter Name</Text>
                            <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                            <Text style={[styles.txtStyle, { flex: 6 }]}>{editMode ? data.recruiter_name : data.userName}</Text>
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { flex: 3 }]}>Job Interviewing for </Text>
                            <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                            <Text style={[styles.txtStyle, { flex: 6 }]}>{editMode ? data.candidate_skillset : data.candidateInfo.candidate_skillset}</Text>
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { flex: 3 }]}>Core Skill</Text>
                            <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                            <Text style={[styles.txtStyle, { flex: 6 }]}>{editMode ? data.candidate_skillset : data.candidateInfo.candidate_skillset}</Text>
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
                        <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { flex: 3 }]}>Type of Interview</Text>
                            <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                            <View style={[styles.txtStyle, { flex: 6, justifyContent: 'center', alignItems: 'center' }]}>
                                <Picker
                                    selectedValue={interviewType}
                                    enabled={editMode}
                                    style={{ height: 50, width: 150, borderWidth: 0, color: 'blue', fontWeight: 'bold' }}
                                    onValueChange={(itemValue, itemIndex) => setInterviewType(itemValue)}
                                >
                                    <Picker.Item label="Video" value="Video" />
                                    <Picker.Item label="Audio" value="Audio" />
                                </Picker>
                            </View>
                        </View>
                        {interviewType == "Video" && <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { flex: 3 }]}>Video Quality</Text>
                            <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                            <View style={[styles.txtStyle, { flex: 6, justifyContent: 'center', alignItems: 'center' }]}>
                                <Picker
                                    selectedValue={videoQuality}
                                    enabled={editMode}
                                    style={{ height: 50, width: 150, borderWidth: 0, color: 'blue', fontWeight: 'bold' }}
                                    onValueChange={(itemValue, itemIndex) => setVideoQuality(itemValue)}
                                >
                                    <Picker.Item label="Great" value="great" />
                                    <Picker.Item label="Average" value="average" />
                                    <Picker.Item label="Poor" value="poor" />
                                </Picker>
                            </View>
                        </View>}
                        <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { flex: 3 }]}>Interview round</Text>
                            <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                            <View style={[styles.txtStyle, { flex: 6, justifyContent: 'center', alignItems: 'center' }]}>
                                <Picker
                                    selectedValue={interviewRound}
                                    enabled={editMode}
                                    style={{ height: 50, width: 150, borderWidth: 0, color: 'blue', fontWeight: 'bold' }}
                                    onValueChange={(itemValue, itemIndex) => setInterviewRound(itemValue)}
                                >
                                    <Picker.Item label="L1" value="L1" />
                                    <Picker.Item label="L2" value="L2" />
                                    <Picker.Item label="L3" value="L3" />
                                    <Picker.Item label="L4" value="L4" />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { flex: 3 }]}>Possible Fake candidate</Text>
                            <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                            <View style={[styles.txtStyle, { flex: 6, justifyContent: 'center', alignItems: 'center' }]}>
                                <Picker
                                    selectedValue={isPossibleFake}
                                    enabled={editMode}
                                    style={{ height: 50, width: 150, borderWidth: 0, color: 'blue', fontWeight: 'bold' }}
                                    onValueChange={(itemValue, itemIndex) => setIsPossibleFake(itemValue)}
                                >
                                    <Picker.Item label="Yes" value="Yes" />
                                    <Picker.Item label="No" value="No" />
                                </Picker>
                            </View>
                        </View>
                        {isPossibleFake == "Yes" && <View style={styles.viewColumn}>
                            <Text style={[styles.txtStyle, { flex: 3 }]}>Reason</Text>
                            <Text style={[styles.txtStyle, { flex: 1 }]}>:</Text>
                            <View style={[styles.txtStyle, { flex: 6, justifyContent: 'center', alignItems: 'center' }]}>
                                <TextInput
                                    style={styles.reasonTextInput}
                                    multiline={true}
                                    numberOfLines={3}
                                    maxLength={50}
                                    onChangeText={setFakeReason}
                                    value={fakeReason}
                                    placeholder="Reason"
                                    keyboardType="email"
                                    editable={editMode} />
                            </View>
                        </View>}
                        <TouchableOpacity
                            style={[{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 20 },]}
                            onPress={() => feedbackForm1()}>
                            <Text style={{ color: 'gray', fontSize: 15, borderBottomWidth: 1, borderColor: 'blue' }}> {"Technical Eval   >>"}</Text>
                        </TouchableOpacity>
                    </View>}
                    <View>
                        {activeIndex == 2 && (<View style={{ flexDirection: 'column' }}><Text style={{ fontWeight: 'bold', fontSize: 18, paddingBottom: 10 }}>Technical Params</Text><Angular submitForm={feedbackForm2} data={feedbackForm2Data} editMode={editMode}></Angular></View>)}
                        {activeIndex == 3 && <DomainFeedback submitForm={feedbackForm3} data={domainKnowledgeFeedback} editMode={editMode} ></DomainFeedback>}
                        {activeIndex == 4 && <AdditionalFeedback submitForm={feedbackForm4} data={additionalFeedback} editMode={editMode} ></AdditionalFeedback>}
                    </View>
                </View>
            </ScrollView>

        </View>

    )

}

export default Feedbackform;