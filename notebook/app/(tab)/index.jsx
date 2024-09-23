import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import Icon from '../../assets/icons'
import { ScrollView } from 'react-native'
import { theme } from '../../constants/theme'
import { wp } from '../../helpers/common'
import RightArrow from '../../assets/icons/RightArrow'
import BackArrow from '../../assets/icons/BackArrow'
import AddIcon from '../../assets/icons/AddIcon'

const index = () => {
    let email = "nikhilw395@gmail.com"
    const emailLength = email.length;

    /*
        1. quick note //index
        2. task list // index
        3. ai tadka
        4. history
        5. account
    
    here i added all the files in (tab) folder - 19 september
    
    */

    return (
        <ScreenWrapper bg="white">
            <StatusBar backgroundColor='white' />

            <ScrollView >

                <View style={styles.container}>

                    <View style={styles.iconBox}>
                        <Icon name="User" width="40" height=" 40" />
                        <View style={{ gap: 2, marginLeft: 50 }}>
                            <Text style={{ fontSize: 20 }}>
                                nikhil wankhade
                            </Text>
                            {/* */}
                            <Text>
                                {
                                    // here we need to add dynamically email addresses
                                    emailLength > 18 ? email.substring(0, 18) + "...." : email
                                }
                            </Text>
                        </View>



                    </View>

                    <View style={{backgroundColor:"pink" , borderRadius:30, margin:"auto", width:"92%" , padding: 20 , height:"auto"}}>

                    <View style={styles.taskContainer}>
                        <View style={styles.textContainer}>
                            <RightArrow />
                            <Text style={styles.text}>Task List</Text>
                            <Text style={styles.text}>{"        " + "....."}</Text>
                            <AddIcon />
                        </View>

                    </View>

                    <View style={styles.taskContainer}>
                        <View style={styles.textContainer}>
                            <RightArrow />
                            <Text style={styles.text}> Quick Note  </Text>
                            <Text style={styles.text}>{"        " + "....."}</Text>
                            <AddIcon />
                        </View>

                    </View>
                    </View>



                    
                </View>
            </ScrollView>

        </ScreenWrapper>
    )
}

export default index

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop:14

    }
    ,
    iconBox: {
        backgroundColor: "#d1d5db",
        padding: 15,
        width: "90%",
        margin: "auto",
        justifyContent: "space-between",
        flexDirection: "row",
        borderRadius: theme.radius.xxl,
        alignSelf: "start",
        marginBottom: 30
    },

    taskContainer: {
        backgroundColor: "yellow",
        flex: 1,
        padding: 15,
        margin: "auto",
        borderRadius: theme.radius.xl,
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        width: "100%",
        marginBottom: 20
    }
    , textContainer: {
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center",
        marginVertical: 10, 
    },
    text: {
        fontSize: 16, 
        marginHorizontal: 5, 
    }

})