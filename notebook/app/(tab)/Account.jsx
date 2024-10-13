import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { theme } from '../../constants/theme';
import { wp } from '../../helpers/common';
import Icon from '../../assets/icons';

const Account = () => {
    const email = "nikhilw395@gmail.com";

    // Helper function for truncating long emails
    const getTruncatedEmail = (email, maxLength = 18) => {
        return email.length > maxLength ? email.substring(0, maxLength) + "...." : email;
    };

    return (
        <ScreenWrapper bg="white">
            <StatusBar backgroundColor='white' />

            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.iconBox}>
                        <Icon name="User" width={40} height={40} />
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>nikhil wankhade</Text>
                            <Text style={styles.userEmail}>{getTruncatedEmail(email)}</Text>
                        </View>
                    </View>

                    <View style={styles.taskOverview}>
                        <Text style={styles.overviewTitle}>Task Overview</Text>

                        <View style={styles.taskContainer}>
                            <View style={styles.textContainer}>
                                <Text style={[styles.taskText, { fontWeight: "900", fontSize: 30 }]}>0</Text>
                                <Text style={styles.taskText}> completed task</Text>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={[styles.taskText, { fontWeight: "900", fontSize: 30 }]}>0</Text>
                                <Text style={styles.taskText}>tasks pending</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 14,
    },
    iconBox: {
        backgroundColor: "#f0f9ff",
        padding: 15,
        width: "90%",
        margin: "auto",
        justifyContent: "space-between",
        flexDirection: "row",
        borderRadius: theme.radius.xxl,
        alignSelf: "start",
        marginBottom: 30,
    },
    userInfo: {
        gap: 2,
        marginLeft: 50,
    },
    userName: {
        fontSize: 20,
    },
    userEmail: {
        color: '#6b7280',
    },
    taskOverview: {
        backgroundColor: "white",
        borderRadius: 30,
        margin: "auto",
        width: "90%",
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    overviewTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        width: '100%',
        color: '#6b7280',

    },
    taskContainer: {
        flex: 1,
        borderRadius: theme.radius.xl,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginBottom: 20,
        flexDirection: "row",
        margin: "auto",
        gap: 20, // Spacing between text containers
    },
    textContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f9ff",
        borderRadius: theme.radius.xxl,

        padding: 15, // Add padding inside the text container for inner spacing
    },
    taskText: {
        fontSize: 16,
        marginHorizontal: 5,
    },
});
