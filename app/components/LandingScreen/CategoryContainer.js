import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ListOfSchedules from "../ListOfSchedules";

const CategoryContainer = ({ activeTab, navigation }) => {


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <Text> active tab is {activeTab}</Text>
            {activeTab == 1 ? <ListOfSchedules navigation={navigation} /> : null}
        </View>
    )

}

export default CategoryContainer;