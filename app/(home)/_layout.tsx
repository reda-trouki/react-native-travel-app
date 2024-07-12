import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import Icon from "../../components/Icon";
import { Ionicons } from '@expo/vector-icons';

export default function HomeRoot(){
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {...styles.tabBar},
            tabBarActiveTintColor: "#478CCF",
            tabBarInactiveTintColor: "#636363"
        }} >
            <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({color, size}) => <Icon name="home" size={size} color={color} /> }} />
            <Tabs.Screen name="map" options={{ title: "map", tabBarIcon: ({ color, size}) => <Icon name="map-pin" size={size} color={color} /> }} />
            <Tabs.Screen name="favorite" options={{ title: "favorite", tabBarIcon: ({ color, size }) => <Icon name="heart" size={size} color={color} /> }} />
            <Tabs.Screen name="profile" options={{ title: "profile", tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} /> }} />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "#F8F9FA",
        borderRadius: 30,
        height: 60,
        width: "95%",
        alignSelf: "center",
        bottom: 10,
    }
})