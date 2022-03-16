import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
const ProfileView = ({ navigation }) => {

    const [response, setResponse] = useState(null);
    const IMG_URI = "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"
    const profileReducer = useSelector(state => state.ProfileReducer);
    const profileInfo = profileReducer.profileDetails;

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ backgroundColor: 'white', alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10, paddingHorizontal: 20, paddingVertical: 10, position: 'absolute', top: 5, right: 0, borderRadius: 10 }}
                    onPress={() => { navigation.navigate('LandingScreen');  }}>

                    <Text style={styles.flex1, styles.textstyleval}>{"NEXT >"}</Text>
                </TouchableOpacity>
                <Image style={styles.image} source={{ uri: IMG_URI }} />

                <View style={styles.subcontainer}>
                    <View style={styles.columnstyle}>
                        <Text style={[styles.flex1, styles.textstylekey]}>{"Name"}</Text>
                        <Text style={[styles.padding10, styles.textstylekey]}>{":"}</Text>
                        <Text style={[styles.flex2, styles.textstyleval]}>{profileInfo.name}</Text>
                    </View>
                    <View style={styles.columnstyle}>
                        <Text style={[styles.flex1, styles.textstylekey]}>{"Designation"}</Text>
                        <Text style={[styles.padding10, styles.textstylekey]}>{":"}</Text>
                        <Text style={[styles.flex2, styles.textstyleval]}>{profileInfo.designation}</Text>
                    </View>
                    <View style={styles.columnstyle}>
                        <Text style={[styles.flex1, styles.textstylekey]}>{"Email"}</Text>
                        <Text style={[styles.padding10, styles.textstylekey]}>{":"}</Text>
                        <Text style={[styles.flex2, styles.textstyleval]}>{profileInfo.email}</Text>
                    </View>
                    <View style={styles.columnstyle}>
                        <Text style={[styles.flex1, styles.textstylekey]}>{"Mobile"}</Text>
                        <Text style={[styles.padding10, styles.textstylekey]}>{":"}</Text>
                        <Text style={[styles.flex2, styles.textstyleval]}>{profileInfo.mobile}</Text>
                    </View>
                    <View style={styles.columnstyle}>
                        <Text style={[styles.flex1, styles.textstylekey]}>{"BU"}</Text>
                        <Text style={[styles.padding10, styles.textstylekey]}>{":"}</Text>
                        <Text style={[styles.flex2, styles.textstyleval]}>{profileInfo.bu}</Text>
                    </View>
                    <View style={styles.columnstyle}>
                        <Text style={[styles.flex1, styles.textstylekey]}>{"SBU"}</Text>
                        <Text style={[styles.padding10, styles.textstylekey]}>{":"}</Text>
                        <Text style={[styles.flex2, styles.textstyleval]}>{profileInfo.sbu}</Text>
                    </View>
                    <View style={[styles.columnstyle, { flex: 1 }]}>
                        <View style={{ flexDirection: 'column', width: '100%' }}>
                            <Text style={[styles.textstylekey]}>{"Available on"}</Text>
                            <View style={styles.columnstyle}>
                                <Text style={[styles.flex1, styles.textstylekey]}>{"WEEK DAY'S"}</Text>
                                <Text style={[styles.padding10, styles.textstylekey]}>{":"}</Text>
                                <Text style={[styles.flex2, styles.textstyleval]}>{profileInfo.weekday}</Text>
                                <Text style={[styles.textstyleval, { textAlign: 'right', color: 'red' }]}>{profileInfo.timezone}</Text>
                            </View>
                            <View style={styles.columnstyle}>
                                <Text style={[styles.flex1, styles.textstylekey]}>{"WEEKEND DAY'S"}</Text>
                                <Text style={[styles.padding10, styles.textstylekey]}>{":"}</Text>
                                <Text style={[styles.flex2, styles.textstyleval]}>{profileInfo.weekend}</Text>
                                <Text style={[styles.textstyleval, { textAlign: 'right', color: 'red' }]}>{profileInfo.timezone}</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        </ScrollView >
    )
}

export default ProfileView;