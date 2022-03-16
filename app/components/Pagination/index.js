import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Pagination = ({ activeIndex, tapOnCircle, statusColor }) => {

    return (
        <View style={styles.container}>
            <View style={styles.viewContainer}>
                <TouchableOpacity style={[styles.circle_fill,statusColor]}
                    onPress={() => { tapOnCircle(1) }}>
                    <Text style={styles.txtStyle}>1</Text>
                </TouchableOpacity>
                <View style={[styles.lineblue,statusColor]}>
                </View>
            </View>
            <View style={styles.viewContainer}>
                <TouchableOpacity style={2 <= activeIndex ? [styles.circle_fill,statusColor] : styles.circle}
                    onPress={() => { tapOnCircle(2) }}>
                    <Text style={2 <= activeIndex ? styles.txtStyle : styles.txtStyleBlack}>2</Text>
                </TouchableOpacity>
                <View style={2 <= activeIndex ? [styles.lineblue,statusColor] : styles.line}>
                </View>
            </View>
            <View style={styles.viewContainer}>
                <TouchableOpacity style={3 <= activeIndex ? [styles.circle_fill,statusColor] : styles.circle}
                    onPress={() => { tapOnCircle(3) }}>
                    <Text style={3 <= activeIndex ? styles.txtStyle : styles.txtStyleBlack}>3</Text>
                </TouchableOpacity>
                <View style={3 <= activeIndex ? [styles.lineblue,statusColor] : styles.line}>
                </View>
            </View>
            <TouchableOpacity style={4 <= activeIndex ? [styles.circle_fill,statusColor] : styles.circle}
                onPress={() => { tapOnCircle(4) }}>
                <Text style={4 <= activeIndex ? styles.txtStyle : styles.txtStyleBlack}>4</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Pagination;