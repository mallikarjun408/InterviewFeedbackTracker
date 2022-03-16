import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Modal, Alert } from "react-native";
import * as ImagePicker from 'react-native-image-picker';
import { addfeedbackStyle } from "./addfeedbackStyle";
import { Picker } from '@react-native-picker/picker';
import { evalutionStyle } from "./evaltionStyles";
import {
    NEEDSUPPORT_VAL,
    NEEDSUPPORT_IN,
    OUTCOME_VAL,
    DESIGNATIONRECMD_VAL,
    ADDITIONALREMARK_VAL,
    OVERALLRATING_VAL,
    RESOURCEPATH
} from "../../utils/const";
import { useSelector } from 'react-redux';

const needSuportoption = {
    "optionOne": "Candidate can be re-interviewed after improving in the following fields",
    "optionTwo": "NA"
}

const outcomeOptions = {
    "one": "Offer",
    "two": "Reject",
    "three": "Hold"
}

const DesigRecmnd = {
    "one": "A3: Software Associate",
    "two": "A4: Software Engineer",
    "three": "A5: Senior Software Engineer",
    "four": "B1: Associate Consultant",
    "five": "B2: Consultant",
    "six": "C1: Senior Consultant",
    "seven": "C2: Manager",
    "eight": "D1: Senior Manager",
    "nine": "D2: Portfolio Manager",
    "ten": "E1: Director",
    "eleven": "E2: Senior Director",
    "twelve": "F: Vice President"
}
const options = {
    title: 'Select Image',
    customButtons: [
        {
            name: 'customOptionKey',
            title: 'Choose file from Custom Option'
        },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

const AdditionalFeedback = ({ submitForm, data, editMode }) => {

    /* const feedbackReducer = useSelector(state => state.FeedbackReducer);
     const additionalFeedback = feedbackReducer.feedbackform4; */

    const additionalFeedback = data;

    const [resourcePath, setResourcePath] = useState(additionalFeedback?.RESOURCEPATH || null);

    const [needSupportValue, setneedSupportValue] = useState(additionalFeedback?.NEEDSUPPORT_VAL || "");
    const [needSupportIn, setneedSupportIn] = useState(additionalFeedback?.NEEDSUPPORT_IN || "");
    const [outcommValue, setOutcommValue] = useState(additionalFeedback?.OUTCOME_VAL || "");
    const [designRecmndValue, setDesignRecmndValue] = useState(additionalFeedback?.DESIGNATIONRECMD_VAL || "");
    const [addtnlRemarkValue, setAddtnlRemarkValue] = useState(additionalFeedback?.ADDITIONALREMARK_VAL || "");
    const [overallRatingVal, setOverallRatingVal] = useState(additionalFeedback?.OVERALLRATING_VAL || "");

    const [isModelVisible, setModelVisible] = useState(false);

    const browseGallery = () => {

        ImagePicker.launchImageLibrary(options, res => {
            console.log('Response = ', res);
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                // alert(JSON.stringify(source.assets[0].uri))
                setResourcePath(source.assets[0]);

            }
        });

    }
    // Need Support(If Decline)
    const capturePhoto = () => {


        ImagePicker.launchCamera(options, res => {
            console.log('Response = ', res);
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                // alert(JSON.stringify(source.assets[0].uri))
                setResourcePath(source.assets[0]);

            }
        });
    };

    const onFeedbackSubmit = () => {

        const data = {
            NEEDSUPPORT_VAL: needSupportValue,
            NEEDSUPPORT_IN: needSupportIn,
            OUTCOME_VAL: outcommValue,
            DESIGNATIONRECMD_VAL: designRecmndValue,
            ADDITIONALREMARK_VAL: addtnlRemarkValue,
            OVERALLRATING_VAL: overallRatingVal,
            RESOURCEPATH: resourcePath?.uri || ""
        };


        Alert.alert(
            "Submit Feedback",
            "are you sure ?",
            [
                {
                    text: "No",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Yes", onPress: () => submitForm(data) }
            ]
        );
    }

    /*  {"assets": 
    [{"fileName": "rn_image_picker_lib_temp_3c305131-1169-4c91-96f6-852e603297fe.jpg", 
    "fileSize": 198989, "height": 1280, "type": "image/jpeg", 
    "uri": "file:///data/user/0/com.interviewtracker/cache/rn_image_picker_lib_temp_3c305131-1169-4c91-96f6-852e603297fe.jpg", 
    "width": 960}]}
    */
    return (
        <View style={addfeedbackStyle.container}>
            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Need Support(If Decline)</Text>

                </View>
                <Picker
                    selectedValue={needSupportValue}
                    enabled={editMode}
                    style={addfeedbackStyle.picketStyle}
                    onValueChange={(itemValue, itemIndex) => setneedSupportValue(itemValue)}
                >
                    <Picker.Item label="-- Select --" value={"Select"} />
                    <Picker.Item label={needSuportoption.optionOne} value={needSuportoption.optionOne} />
                    <Picker.Item label={needSuportoption.optionTwo} value={needSuportoption.optionTwo} />

                </Picker>
            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Needs support in</Text>

                </View>
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={needSupportIn}
                    onChangeText={setneedSupportIn}
                    placeholder="Reason"
                    keyboardType="email" />
            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Outcome</Text>

                </View>
                <Picker
                    selectedValue={outcommValue}
                    enabled={editMode}
                    style={addfeedbackStyle.picketStyle}
                    onValueChange={(itemValue, itemIndex) => setOutcommValue(itemValue)}
                >
                    <Picker.Item label="-- Select --" value={"Select"} />
                    <Picker.Item label={outcomeOptions.one} value={outcomeOptions.one} />
                    <Picker.Item label={outcomeOptions.two} value={outcomeOptions.two} />
                    <Picker.Item label={outcomeOptions.three} value={outcomeOptions.three} />

                </Picker>
            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Designation Recommendation</Text>

                </View>
                <Picker
                    selectedValue={designRecmndValue}
                    enabled={editMode}
                    style={addfeedbackStyle.picketStyle}
                    onValueChange={(itemValue, itemIndex) => setDesignRecmndValue(itemValue)}
                >
                    <Picker.Item label="-- Select --" value={"Select"} />
                    <Picker.Item label={DesigRecmnd.one} value={DesigRecmnd.one} />
                    <Picker.Item label={DesigRecmnd.two} value={DesigRecmnd.two} />
                    <Picker.Item label={DesigRecmnd.three} value={DesigRecmnd.three} />
                    <Picker.Item label={DesigRecmnd.four} value={DesigRecmnd.four} />
                    <Picker.Item label={DesigRecmnd.five} value={DesigRecmnd.five} />
                    <Picker.Item label={DesigRecmnd.six} value={DesigRecmnd.six} />
                    <Picker.Item label={DesigRecmnd.seven} value={DesigRecmnd.seven} />
                    <Picker.Item label={DesigRecmnd.eight} value={DesigRecmnd.eight} />
                    <Picker.Item label={DesigRecmnd.nine} value={DesigRecmnd.nine} />
                    <Picker.Item label={DesigRecmnd.ten} value={DesigRecmnd.ten} />
                    <Picker.Item label={DesigRecmnd.eleven} value={DesigRecmnd.eleven} />
                    <Picker.Item label={DesigRecmnd.twelve} value={DesigRecmnd.twelve} />

                </Picker>
            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Additional Remarks (if any)</Text>

                </View>
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={addtnlRemarkValue}
                    onChangeText={setAddtnlRemarkValue}
                    placeholder="Additional Remarks (if any)"
                    keyboardType="email" />
            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Overall Rating</Text>

                </View>
                <Picker
                    selectedValue={overallRatingVal}
                    enabled={editMode}
                    style={addfeedbackStyle.picketStyle}
                    onValueChange={(itemValue, itemIndex) => setOverallRatingVal(itemValue)}
                >
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                    <Picker.Item label="10" value="10" />

                </Picker>
            </View>

            <View style={[evalutionStyle.columnContainer, { justifyContent: 'center', alignItems: 'center', marginBottom:20 }]}>
                <Text style={[evalutionStyle.column1, { color: 'red' }]}> ** Candidate Photo (Must)</Text>
                <Image
                    source={resourcePath?.uri ? { uri: resourcePath?.uri } : require("../../assets/images/sample_avatar.jpg")}
                    style={{ width: 200, height: 200, backgroundColor: 'red' }}
                />
                <Text style={{ alignItems: 'center' }}>
                    {resourcePath?.uri}
                </Text>
                {editMode && <TouchableOpacity onPress={() => { setModelVisible(true) }} style={addfeedbackStyle.button}  >
                    <Text style={addfeedbackStyle.buttonText}>{resourcePath?.uri ? "ReTake a Photo" : " Take a Photo"}</Text>
                </TouchableOpacity>}

                {resourcePath?.uri && <TouchableOpacity onPress={() => { onFeedbackSubmit() }} style={addfeedbackStyle.button}  >
                    {editMode && <Text style={addfeedbackStyle.buttonText}>{"Submit Feedback"}</Text>}
                </TouchableOpacity>}
            </View>

            {isModelVisible && <Modal animationType="slide"
                transparent={true}
            >
                <View style={[addfeedbackStyle.modelView]}>
                    <View style={{ width: '100%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <TouchableOpacity style={[addfeedbackStyle.pressableStyle, { height: 50, width: 50, borderColor: 'gray', borderWidth: 1, borderRadius: 25, padding: 0 }]}
                            onPress={() => { setModelVisible(!isModelVisible) }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{"X"}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={addfeedbackStyle.pressableStyle}
                        onPress={() => { capturePhoto(); setModelVisible(!isModelVisible) }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{"Take Photo"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={addfeedbackStyle.pressableStyle}
                        onPress={() => { browseGallery(); setModelVisible(!isModelVisible) }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{"Browse Gallery"}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>}


        </View>
    )
}

export default AdditionalFeedback;