import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { evalutionStyle } from "./evaltionStyles";
import {
    DOMAINKNOWLEDGE_FEEDBACK, DOMAINKNOWLEDGE_ADDINFO, DOMAINKNOWLEDGE_RATING,
    COMMUNICATIONSKILL_RATING, COMMUNICATIONSKILL_FEEDBACK, COMMUNICATIONSKILL_ADDINFO,
    CLIENTFACINGEXP_RATING, CLIENTFACINGEXP_FEEDBACK, CLIENTFACINGEXP_ADDINFO,
    AGILEDELEXP_RATING, AGILEDELEXP_FEEDBACK, AGILEDELEXP_ADDINFO,
    BUSINESSSOL_RATING, BUSINESSSOL_FEEDBACK, BUSINESSSOL_ADDINFO
} from "../../utils/const";
import { useSelector } from "react-redux";

const DomainFeedback = ({ submitForm, data, editMode }) => {

   /* const feedbackReducer = useSelector(state => state.FeedbackReducer);
    const domainFeedback = feedbackReducer.feedbackform3; */

    const domainFeedback = data;

    const [domainKnowledgeFeedback, setDomainKnowledgeFeedback] = useState(domainFeedback?.DOMAINKNOWLEDGE_FEEDBACK || "");
    const [domainKnowledgeAddInfo, setDomainKnowledgeAddInfo] = useState(domainFeedback?.DOMAINKNOWLEDGE_ADDINFO || "");
    const [domainKnowledgeRating, setDomainKnowledgeRating] = useState(domainFeedback?.DOMAINKNOWLEDGE_RATING|| "1");

    const [communicationSkillFeedback, setCommunicationSkillFeedback] = useState(domainFeedback?.COMMUNICATIONSKILL_FEEDBACK || "");
    const [communicationSkillAddInfo, setCommunicationSkillAddInfo] = useState(domainFeedback?.COMMUNICATIONSKILL_ADDINFO || "");
    const [communicationSkillRating, setCommunicationSkillRating] = useState(domainFeedback?.COMMUNICATIONSKILL_RATING || "1");

    const [clientFacingExpFeedback, setClientFacingExpFeedback] = useState(domainFeedback?.CLIENTFACINGEXP_FEEDBACK || "");
    const [clientFacingExpAddInfo, setClientFacingExpAddInfo] = useState(domainFeedback?.CLIENTFACINGEXP_ADDINFO || "");
    const [clientFacingExpRating, setClientFacingExpRating] = useState(domainFeedback?.CLIENTFACINGEXP_RATING || "1");

    const [agileDelExeExpFeedback, setAgileDelExeExpFeedback] = useState(domainFeedback?.AGILEDELEXP_FEEDBACK || "");
    const [agileDelExeExpAddInfo, setAgileDelExeExpAddInfo] = useState(domainFeedback?.AGILEDELEXP_ADDINFO || "");
    const [agileDelExeExpRating, setAgileDelExeExpRating] = useState(domainFeedback?.AGILEDELEXP_RATING || "1");

    const [businessSolvingFeedback, setBusinessSolvingFeedback] = useState(domainFeedback?.BUSINESSSOL_FEEDBACK || "");
    const [businessSolvingAddInfo, setBusinessSolvingAddInfo] = useState(domainFeedback?.BUSINESSSOL_ADDINFO || "");
    const [businessSolvingRating, setBusinessSolvingRating] = useState(domainFeedback?.BUSINESSSOL_RATING || "1");


    const feedbackForm3 = () => {
        const data = {
            DOMAINKNOWLEDGE_FEEDBACK: domainKnowledgeFeedback,
            DOMAINKNOWLEDGE_ADDINFO: domainKnowledgeAddInfo,
            DOMAINKNOWLEDGE_RATING: domainKnowledgeRating,
            COMMUNICATIONSKILL_FEEDBACK: communicationSkillFeedback,
            COMMUNICATIONSKILL_ADDINFO: communicationSkillAddInfo,
            COMMUNICATIONSKILL_RATING: communicationSkillRating,
            CLIENTFACINGEXP_FEEDBACK: clientFacingExpFeedback,
            CLIENTFACINGEXP_ADDINFO: clientFacingExpAddInfo,
            CLIENTFACINGEXP_RATING: clientFacingExpRating,
            AGILEDELEXP_FEEDBACK: agileDelExeExpFeedback,
            AGILEDELEXP_ADDINFO: agileDelExeExpAddInfo,
            AGILEDELEXP_RATING: agileDelExeExpRating,
            BUSINESSSOL_FEEDBACK: businessSolvingFeedback,
            BUSINESSSOL_ADDINFO: businessSolvingAddInfo,
            BUSINESSSOL_RATING: businessSolvingRating
        };
        submitForm(data)
    }
    return (
        <View style={evalutionStyle.container}>
            <View style={evalutionStyle.rowContainer}>
                <Text style={[evalutionStyle.column1, evalutionStyle.columntxtStyle]}>Eval Parameters</Text>
                {/*<Text style={[evalutionStyle.column2, evalutionStyle.columntxtStyle]}>Detiled Eval Parameters</Text>*/}
                <Text style={[evalutionStyle.column2, evalutionStyle.columntxtStyle, { width: 100 }]}>Rating</Text>
            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Domain Knowledge</Text>
                    <Picker
                        selectedValue={domainKnowledgeRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setDomainKnowledgeRating(itemValue)}
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
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={domainKnowledgeFeedback}
                    onChangeText={setDomainKnowledgeFeedback}
                    placeholder="Feedback"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={domainKnowledgeAddInfo}
                    onChangeText={setDomainKnowledgeAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Communication Skills</Text>
                    <Picker
                        selectedValue={communicationSkillRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setCommunicationSkillRating(itemValue)}
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
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={communicationSkillFeedback}
                    onChangeText={setCommunicationSkillFeedback}
                    placeholder="Feedback"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={communicationSkillAddInfo}
                    onChangeText={setCommunicationSkillAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Client Interfacing Experience</Text>
                    <Picker
                        selectedValue={clientFacingExpRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setClientFacingExpRating(itemValue)}
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
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={clientFacingExpFeedback}
                    onChangeText={setClientFacingExpFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={clientFacingExpAddInfo}
                    onChangeText={setClientFacingExpAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Agile Delivery Execution Experience</Text>
                    <Picker
                        selectedValue={agileDelExeExpRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setAgileDelExeExpRating(itemValue)}
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
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={agileDelExeExpFeedback}
                    onChangeText={setAgileDelExeExpFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={agileDelExeExpAddInfo}
                    onChangeText={setAgileDelExeExpAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Business Acumen/Problem Solving Skills</Text>
                    <Picker
                        selectedValue={businessSolvingRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setBusinessSolvingRating(itemValue)}
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
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={businessSolvingFeedback}
                    onChangeText={setBusinessSolvingFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={businessSolvingAddInfo}
                    onChangeText={setBusinessSolvingAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>
            <TouchableOpacity
                style={[{width:'100%', justifyContent: 'flex-end', alignItems: 'flex-end', marginVertical: 20}]}
                onPress={() => feedbackForm3()}>
                <Text style={{ color: 'gray', fontSize: 15, borderBottomWidth: 1, borderColor: 'blue', textAlign: 'right' }}> {"Additional >>"}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DomainFeedback;