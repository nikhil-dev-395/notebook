import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {



    
    return (
        <Stack screenOptions={
            { headerShown: false, }

        }>
            <Stack.Screen name='(tab)' />
            <Stack.Screen name="Login" />
            <Stack.Screen name="SignUp" />
            <Stack.Screen name="index" />


        </Stack>
    )
}

export default _layout