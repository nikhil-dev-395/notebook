import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from "../components/ScreenWrapper.jsx"
import Icon from "../assets/icons/index.jsx"
import { StatusBar } from 'expo-status-bar'
import { theme } from "../constants/theme.js"
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
const index = () => {
    const router = useRouter()
    return (
        <ScreenWrapper bg="white">
            <StatusBar style='dark' />
            <View style={styles.container} >
                <View style={styles.logo}>
                    <Icon name="BookIcon" width={50} height={90}
                        strokeWidth={1.9}
                        color={theme.colors.textDark}
                    />
                    <Text style={styles.title}> Notebook </Text>
                </View>

                <View style={styles.footer}>
                    <Text style={{fontSize:18}}>welcome</Text>
                    <Text style={styles.punchLine}>
                        Track Your Schedule & Work With Ease
                    </Text>
                    <Pressable style={styles.button} onPress={()=>router.push("SignUp")}>

                        <Text style={styles.buttonText}>Get Started</Text>

                    </Pressable>
                </View>



            </View>
        </ScreenWrapper>
    )
}

export default index

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
    title: {
        color: theme.colors.primary,
        fontWeight: theme.fonts.extrabold,
        fontSize: 33,
        marginLeft: 5,

    },
    logo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 3,
    }
    , footer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 0,

    },
    button: {
        backgroundColor: "#702fd4",
        padding: 15,
        borderRadius: 23,
        width: "80%",
        marginTop: 65,
        alignItems: "center",
        justifyContent: "center",

    }, buttonText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"

    },
    punchLine: {
        color: theme.colors.textDark,
        fontSize: 35,
        marginTop: 15,
        textAlign: "center",
        width: "75%",
        fontWeight: theme.fonts.extrabold,
        lineHeight: 40,

    }
})