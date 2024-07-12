import { Stack } from "expo-router"
import { Text } from "react-native";

const RootLayout = () =>{
    return(
        <Stack>
            <Stack.Screen name="(home)" options={{headerShown: false}} />
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="details" options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootLayout;