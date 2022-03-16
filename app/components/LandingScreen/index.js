import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import CategoryContainer from "./CategoryContainer";
import ListOfSchedules from "../ListOfSchedules";
import { LandingScreenStyles } from "./LandingStyles";
import HistoryList from "../HistoryList";

const LandingScreen = ({ navigation }) => {

    const [activeTab, setActiveTab] = useState(1);

    const onTabSelection = (tabId) => {
        setActiveTab(tabId)
    }
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={LandingScreenStyles.container}>
                <TouchableOpacity style={[LandingScreenStyles.tabs, { backgroundColor: activeTab == 1 ? 'rgb(20, 52, 164)' : 'rgb(167, 199, 231)' }]}
                    onPress={() => { onTabSelection(1) }}
                >
                    <Text style={LandingScreenStyles.btnText}>Schedules</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[LandingScreenStyles.tabs, { backgroundColor: activeTab == 2 ? 'rgb(20, 52, 164)' : 'rgb(167, 199, 231)' }]}
                    onPress={() => { onTabSelection(2) }} >
                    <Text style={LandingScreenStyles.btnText}>History</Text>
                </TouchableOpacity>
            </View>

           {/* <CategoryContainer
                activeTab={activeTab}
                navigation={navigation}
           /> */}
           { activeTab == 1 && <ListOfSchedules navigation={navigation} />}
           { activeTab == 2 && <HistoryList navigation={navigation} />}
        </View>
    )





}

export default LandingScreen;