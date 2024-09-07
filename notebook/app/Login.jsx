import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import { useRef } from 'react'
import ScreenWrapper from "../components/ScreenWrapper.jsx"
import Icon from "../assets/icons/index.jsx"
import BackButton from '../components/BackButton.jsx'
import { theme } from '../constants/theme.js'
import InputText from '../components/InputText.jsx'
import Button from '../components/Button.jsx'
const Login = () => {
    const router = useRouter()

    const emailRef = useRef("");
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const [loading, SetLoading] = useState(false);


    const onSubmit = () => {
        SetLoading(true);
        console.log("onSubmit");

        // add api here

        setTimeout(() => {
            SetLoading(false);
            console.log("success");
            // navigation.navigate('Home')
        }, 2000)

    }

    return (
        <ScreenWrapper bg="white">
            <StatusBar backgroundColor="white" />
            <View style={styles.container}>

                {/* this button is responsible for getting back page */}
                <BackButton />
                {/* starting text */}
                <View style={{ margin: 20 }}>
                    <Text style={styles.welcomeText}>Hey , </Text>
                    <Text style={styles.welcomeText}>Welcome Back</Text>
                </View>
                {/* form */}
                <View style={{ backgroundColor: "white" }}>

                    <InputText
                        icon={<Icon name="Mail" size={26} strokeWidth={1.7} />}
                        placeholder="enter your email"
                        onChangeText={value => { emailRef.current = value }}
                    />

                    <InputText
                        icon={<Icon name="Lock" size={26} strokeWidth={1.7} />}
                        placeholder="enter your password"
                        onChangeText={value => { passwordRef.current = value }}
                        secureTextEntry={true}
                    />

                  

                    <Button buttonTitle="Login" loading={loading} onPress={onSubmit} />
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>dont have an account !  </Text>
                    <Pressable onPress={() => router.push("SignUp")} >
                        <Text style={[styles.footerText, { fontWeight: theme.fonts.extrabold, color: theme.colors.background }]}>Sign Up</Text>
                    </Pressable>
                </View>

            </View>
        </ScreenWrapper>
    )
}

export default Login

const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 0,
        padding: 0,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: theme.fonts.extrabold,
        color: theme.colors.textDark,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 10,
    },
    footerText: { color: theme.colors.textDark, fontSize: theme.radius.sm, },
    
})