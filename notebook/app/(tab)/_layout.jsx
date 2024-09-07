import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: 'Home',
                    // Customize your tab options here (e.g., add icons)
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    tabBarLabel: 'Profile',
                    // Add icon or other options here
                }}
            />
           
        </Tabs>
    )
}

export default _layout