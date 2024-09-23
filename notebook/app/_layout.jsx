import AsyncStorage from "@react-native-async-storage/async-storage"
import { Stack, } from "expo-router"
const _layout = () => {
    const auth = AsyncStorage.getItem("authToken");
    return (
        <Stack screenOptions={
            {
                headerShown: false
            }}>
            {
                (auth) ? <Stack.Screen name="(tab)" /> :
                    <Stack.Screen name="index" />
            }
        </Stack>
    )
}

export default _layout


