import { Tabs } from "expo-router"
import TabBar from "../../components/TabBar"


const _layout = () => {
    return (
        <Tabs
            tabBar={props => <TabBar {...props} />}
            screenOptions={
                {
                    headerShown: false
                }
            }>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="Quick" />
            <Tabs.Screen name="Search" />
            <Tabs.Screen name="AiChat" />
            <Tabs.Screen name="Account" />
        </Tabs>
    )
}

export default _layout