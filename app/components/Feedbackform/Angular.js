import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { evalutionStyle } from "./evaltionStyles";
import { useDispatch } from 'react-redux';
import {
    ANGULAR_BASICS_RATING, ANGULAR_BASICS_FEEDBACK, ANGULAR_BASICS_ADDINFO,
    TYPESCRIPT_RATING, TYPESCRIPT_FEEDBACK, TYPESCRIPT_ADDINFO,
    MODULES_RATING, MODULES_FEEDBACK, MODULES_ADDINFO,
    COMPONENTS_RATING, COMPONENTS_FEEDBACK, COMPONENTS_ADDINFO,
    SERVICES_RATING, SERVICES_FEEDBACK, SERVICES_ADDINFO,
    RXJS_RATING, RXJS_FEEDBACK, RXJS_ADDINFO,
    DIRECTIVES_RATING, DIRECTIVES_FEEDBACK, DIRECTIVES_ADDINFO,
    HTML_RATING, HTML_FEEDBACK, HTML_ADDINFO,
    CSS_RATING, CSS_FEEDBACK, CSS_ADDINFO,
    ROUTING_RATING, ROUTING_FEEDBACK, ROUTING_ADDINFO,
    THIRDPARTY_RATING, THIRDPARTY_FEEDBACK, THIRDPARTY_ADDINFO,
    UNITTEST_RATING, UNITTEST_FEEDBACK, UNITTEST_ADDINFO,
    JS_RATING, JS_FEEDBACK, JS_ADDINFO,
    SOLARC_RATING, SOLARC_FEEDBACK, SOLARC_ADDINFO,
    APPSEC_RATING, APPSEC_FEEDBACK, APPSEC_ADDINFO,
    ACCAASTND_RATING, ACCAASTND_FEEDBACK, ACCAASTND_ADDINFO
} from '../../utils/const';
import { useSelector } from 'react-redux';
const Angular = ({ submitForm, data, editMode }) => {

    /* const dispatch = useDispatch();
 
     const feedbackReducer = useSelector(state => state.FeedbackReducer);
     const angularFeedback = feedbackReducer.feedbackform2;
     console.log(JSON.stringify(angularFeedback)); */
    const angularFeedback = data;

    const [angularBasicsFeedback, setAngularBasicsFeedback] = useState(angularFeedback?.ANGULAR_BASICS_FEEDBACK || "");
    const [angularBasicsAddInfo, setAngularBasicsAddInfo] = useState(angularFeedback?.ANGULAR_BASICS_ADDINFO || "");
    const [angularBasicseRating, setAngularBasicsRating] = useState(angularFeedback?.ANGULAR_BASICS_RATING || "1");

    const [typeScriptFeedback, setTypeScriptFeedback] = useState(angularFeedback?.TYPESCRIPT_FEEDBACK || "");
    const [typeScriptAddInfo, setTypeScriptAddInfo] = useState(angularFeedback?.TYPESCRIPT_ADDINFO || "");
    const [typeScriptRating, setTypeScriptRating] = useState(angularFeedback?.TYPESCRIPT_RATING || "1");

    const [modulesFeedback, setModulesFeedback] = useState(angularFeedback?.MODULES_FEEDBACK || "");
    const [modulesAddInfo, setModulesAddInfo] = useState(angularFeedback?.MODULES_ADDINFO || "");
    const [modulesRating, setModulesRating] = useState(angularFeedback?.MODULES_RATING || "1");

    const [componentsFeedback, setComponentsFeedback] = useState(angularFeedback?.COMPONENTS_FEEDBACK || "");
    const [componentsAddInfo, setComponentsAddInfo] = useState(angularFeedback?.COMPONENTS_ADDINFO || "");
    const [componentsRating, setComponentsRating] = useState(angularFeedback?.COMPONENTS_RATING || "1");

    const [servicesFeedback, setServicesFeedback] = useState(angularFeedback?.SERVICES_FEEDBACK || "");
    const [servicesAddInfo, setServicesAddInfo] = useState(angularFeedback?.SERVICES_ADDINFO || "");
    const [servicesRating, setServicesRating] = useState(angularFeedback?.SERVICES_RATING || "1");

    const [rxjsFeedback, setRxjsFeedback] = useState(angularFeedback?.RXJS_FEEDBACK || "");
    const [rxjsAddInfo, setRxjsAddInfo] = useState(angularFeedback?.RXJS_ADDINFO || "");
    const [rxjsRating, setRxjsRating] = useState(angularFeedback?.RXJS_RATING || "1");

    const [directivesFeedback, setDirectivesFeedback] = useState(angularFeedback?.DIRECTIVES_FEEDBACK || "");
    const [directivesAddInfo, setDirectivesAddInfo] = useState(angularFeedback?.DIRECTIVES_ADDINFO || "");
    const [directivesRating, setDirectivesRating] = useState(angularFeedback?.DIRECTIVES_RATING || "1");

    const [htmlFeedback, setHtmlFeedback] = useState(angularFeedback?.HTML_FEEDBACK || "");
    const [htmlAddInfo, setHtmlAddInfo] = useState(angularFeedback?.HTML_ADDINFO || "");
    const [htmlRating, setHtmlRating] = useState(angularFeedback?.HTML_RATING || "1");

    const [cssFeedback, setCSSFeedback] = useState(angularFeedback?.CSS_FEEDBACK || "");
    const [cssAddInfo, setCSSAddInfo] = useState(angularFeedback?.CSS_ADDINFO || "");
    const [cssRating, setCSSRating] = useState(angularFeedback?.CSS_RATING || "1");

    const [routingFeedback, setRoutingFeedback] = useState(angularFeedback?.ROUTING_FEEDBACK || "");
    const [routingAddInfo, setRoutingAddInfo] = useState(angularFeedback?.ROUTING_ADDINFO || "");
    const [routingRating, setRoutingRating] = useState(angularFeedback?.ROUTING_RATING || "1");

    const [thirdPartyLibraryFeedback, setThirdPartyLibraryFeedback] = useState(angularFeedback?.THIRDPARTY_FEEDBACK || "");
    const [thirdPartyLibraryAddInfo, setThirdPartyLibraryAddInfo] = useState(angularFeedback?.THIRDPARTY_ADDINFO || "");
    const [thirdPartyLibraryRating, setThirdPartyLibraryRating] = useState(angularFeedback?.THIRDPARTY_RATING || "1");

    const [unitTestFeedback, setUnitTestFeedback] = useState(angularFeedback?.UNITTEST_FEEDBACK || "");
    const [unitTestAddInfo, setUnitTestAddInfo] = useState(angularFeedback?.UNITTEST_ADDINFO || "");
    const [unitTestRating, setUnitTestRating] = useState(angularFeedback?.UNITTEST_RATING || "1");

    const [jsFeedback, setJsFeedback] = useState(angularFeedback?.JS_FEEDBACK || "");
    const [jsAddInfo, setJsAddInfo] = useState(angularFeedback?.JS_ADDINFO || "");
    const [jsRating, setJsRating] = useState(angularFeedback?.JS_RATING || "1");

    const [solArcFeedback, setSolArcFeedback] = useState(angularFeedback?.SOLARC_FEEDBACK || "");
    const [solArcAddInfo, setSolArcAddInfo] = useState(angularFeedback?.SOLARC_ADDINFO || "");
    const [solArcRating, setSolArcRating] = useState(angularFeedback?.SOLARC_RATING || "1");

    const [appSecFeedback, setAppSecFeedback] = useState(angularFeedback?.APPSEC_FEEDBACK || "");
    const [appSecAddInfo, setAppSecAddInfo] = useState(angularFeedback?.APPSEC_ADDINFO || "");
    const [appSecRating, setAppSecRating] = useState(angularFeedback?.APPSEC_RATING || "1");

    const [accAAStndFeedback, setAccAAStndFeedback] = useState(angularFeedback?.ACCAASTND_FEEDBACK || "");
    const [accAAStndAddInfo, setAccAAStndAddInfo] = useState(angularFeedback?.ACCAASTND_ADDINFO || "");
    const [accAAStndRating, setAccAAStndRating] = useState(angularFeedback?.ACCAASTND_RATING || "1");

    const onAngularFeedbackSubmit = () => {
        const data = {
            ANGULAR_BASICS_RATING: angularBasicseRating,
            ANGULAR_BASICS_FEEDBACK: angularBasicsFeedback,
            ANGULAR_BASICS_ADDINFO: angularBasicsAddInfo,
            TYPESCRIPT_RATING: typeScriptRating,
            TYPESCRIPT_FEEDBACK: typeScriptFeedback,
            TYPESCRIPT_ADDINFO: typeScriptAddInfo,
            MODULES_RATING: modulesRating,
            MODULES_FEEDBACK: modulesFeedback,
            MODULES_ADDINFO: modulesAddInfo,
            COMPONENTS_RATING: componentsRating,
            COMPONENTS_FEEDBACK: componentsFeedback,
            COMPONENTS_ADDINFO: componentsAddInfo,
            SERVICES_RATING: servicesRating,
            SERVICES_FEEDBACK: servicesFeedback,
            SERVICES_ADDINFO: servicesAddInfo,
            RXJS_RATING: rxjsRating,
            RXJS_FEEDBACK: rxjsFeedback,
            RXJS_ADDINFO: rxjsAddInfo,
            DIRECTIVES_RATING: directivesRating,
            DIRECTIVES_FEEDBACK: directivesFeedback,
            DIRECTIVES_ADDINFO: directivesAddInfo,
            HTML_RATING: htmlRating,
            HTML_FEEDBACK: htmlFeedback,
            HTML_ADDINFO: htmlAddInfo,
            CSS_RATING: cssRating,
            CSS_FEEDBACK: cssFeedback,
            CSS_ADDINFO: cssAddInfo,
            ROUTING_RATING: routingRating,
            ROUTING_FEEDBACK: routingFeedback,
            ROUTING_ADDINFO: routingAddInfo,
            THIRDPARTY_RATING: thirdPartyLibraryRating,
            THIRDPARTY_FEEDBACK: thirdPartyLibraryFeedback,
            THIRDPARTY_ADDINFO: thirdPartyLibraryAddInfo,
            UNITTEST_RATING: unitTestRating,
            UNITTEST_FEEDBACK: unitTestFeedback,
            UNITTEST_ADDINFO: unitTestAddInfo,
            JS_RATING: jsRating,
            JS_FEEDBACK: jsFeedback,
            JS_ADDINFO: jsAddInfo,
            SOLARC_RATING: solArcRating,
            SOLARC_FEEDBACK: solArcFeedback,
            SOLARC_ADDINFO: solArcAddInfo,
            APPSEC_RATING: appSecRating,
            APPSEC_FEEDBACK: appSecFeedback,
            APPSEC_ADDINFO: appSecAddInfo,
            ACCAASTND_RATING: accAAStndRating,
            ACCAASTND_FEEDBACK: accAAStndFeedback,
            ACCAASTND_ADDINFO: accAAStndAddInfo
        }

        submitForm(data, 3)

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
                    <Text style={evalutionStyle.column1}>Angular Basics</Text>
                    <Picker
                        selectedValue={angularBasicseRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setAngularBasicsRating(itemValue)}
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
                    value={angularBasicsFeedback}
                    onChangeText={setAngularBasicsFeedback}
                    placeholder="Feedback"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={angularBasicsAddInfo}
                    onChangeText={setAngularBasicsAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>TypeScript</Text>
                    <Picker
                        selectedValue={typeScriptRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setTypeScriptRating(itemValue)}
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
                    value={typeScriptFeedback}
                    onChangeText={setTypeScriptFeedback}
                    placeholder="Feedback"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={typeScriptAddInfo}
                    onChangeText={setTypeScriptAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Modules</Text>
                    <Picker
                        selectedValue={modulesRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setModulesRating(itemValue)}
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
                    value={modulesFeedback}
                    onChangeText={setModulesFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={modulesAddInfo}
                    onChangeText={setModulesAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Components</Text>
                    <Picker
                        selectedValue={componentsRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setComponentsRating(itemValue)}
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
                    value={componentsFeedback}
                    onChangeText={setComponentsFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={componentsAddInfo}
                    onChangeText={setComponentsAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Services</Text>
                    <Picker
                        selectedValue={servicesRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setServicesRating(itemValue)}
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
                    value={servicesFeedback}
                    onChangeText={setServicesFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={servicesAddInfo}
                    onChangeText={setServicesAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>RxJs</Text>
                    <Picker
                        selectedValue={rxjsRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setRxjsRating(itemValue)}
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
                    value={rxjsFeedback}
                    onChangeText={setRxjsFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={rxjsAddInfo}
                    onChangeText={setRxjsAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Directives</Text>
                    <Picker
                        selectedValue={directivesRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setDirectivesRating(itemValue)}
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
                    value={directivesFeedback}
                    onChangeText={setDirectivesFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={directivesAddInfo}
                    onChangeText={setDirectivesAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>HTML</Text>
                    <Picker
                        selectedValue={htmlRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setHtmlRating(itemValue)}
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
                    value={htmlFeedback}
                    onChangeText={setHtmlFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={htmlAddInfo}
                    onChangeText={setHtmlAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>CSS</Text>
                    <Picker
                        selectedValue={cssRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setCSSRating(itemValue)}
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
                    value={cssFeedback}
                    onChangeText={setCSSFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={cssAddInfo}
                    onChangeText={setCSSAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Routing</Text>
                    <Picker
                        selectedValue={routingRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setRoutingRating(itemValue)}
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
                    value={routingFeedback}
                    onChangeText={setRoutingFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={routingAddInfo}
                    onChangeText={setRoutingAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>3rd Party Library (Data Grid/Charts/Analytics)</Text>
                    <Picker
                        selectedValue={thirdPartyLibraryRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setThirdPartyLibraryRating(itemValue)}
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
                    value={thirdPartyLibraryFeedback}
                    onChangeText={setThirdPartyLibraryFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={thirdPartyLibraryAddInfo}
                    onChangeText={setThirdPartyLibraryAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Unit Test(Karma/Jasmine/Testing Library) & Automation Testing</Text>
                    <Picker
                        selectedValue={unitTestRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setUnitTestRating(itemValue)}
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
                    value={unitTestFeedback}
                    onChangeText={setUnitTestFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={unitTestAddInfo}
                    onChangeText={setUnitTestAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>JavaScript</Text>
                    <Picker
                        selectedValue={jsRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setJsRating(itemValue)}
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
                    value={jsFeedback}
                    onChangeText={setJsFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={jsAddInfo}
                    onChangeText={setJsAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Solution Architecture</Text>
                    <Picker
                        selectedValue={solArcRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setSolArcRating(itemValue)}
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
                    value={solArcFeedback}
                    onChangeText={setSolArcFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={solArcAddInfo}
                    onChangeText={setSolArcAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Application Security</Text>
                    <Picker
                        selectedValue={appSecRating}
                        style={evalutionStyle.column3}
                        enabled={editMode}
                        onValueChange={(itemValue, itemIndex) => setAppSecRating(itemValue)}
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
                    value={appSecFeedback}
                    onChangeText={setAppSecFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={appSecAddInfo}
                    onChangeText={setAppSecAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>

            <View style={evalutionStyle.columnContainer}>
                <View style={evalutionStyle.rowContainer}>
                    <Text style={evalutionStyle.column1}>Accessibility AA standards</Text>
                    <Picker
                        selectedValue={accAAStndRating}
                        enabled={editMode}
                        style={evalutionStyle.column3}
                        onValueChange={(itemValue, itemIndex) => setAccAAStndRating(itemValue)}
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
                    value={accAAStndFeedback}
                    onChangeText={setAccAAStndFeedback}
                    placeholder="Reason"
                    keyboardType="email" />
                <TextInput
                    style={evalutionStyle.textInput}
                    multiline={true}
                    numberOfLines={3}
                    maxLength={50}
                    editable={editMode}
                    value={accAAStndAddInfo}
                    onChangeText={setAccAAStndAddInfo}
                    placeholder="Additional Interview Notes"
                    keyboardType="email" />

            </View>
            <TouchableOpacity
                style={[{ width: '100%', justifyContent: 'flex-end', alignItems: 'flex-end', marginVertical: 20 },]}
                onPress={() => onAngularFeedbackSubmit()}>
                <Text style={{ color: 'gray', fontSize: 15, borderBottomWidth: 1, borderColor: 'blue', textAlign: 'right' }}> {"Domain Knowledge   >>"}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Angular;