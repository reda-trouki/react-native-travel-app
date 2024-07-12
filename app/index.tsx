import { Link, router } from "expo-router";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

export default function Home(){
    return (
        <ImageBackground style={styles.background} source={require('../assets/screen1.jpg')}>
            <View style={styles.textContainer}>
                <Text style={{color:"#000", fontWeight: "thin", fontSize: 20}}>Plan Your</Text>
                <Text style={{ color: "#fff", fontWeight: "thin", fontSize: 50 }}>Luxurios Vacations</Text>
            </View>
            <TouchableOpacity
                onPress={() => router.navigate("(home)")}
                style={styles.button}>
                    <Text style={styles.buttonText}>Explore</Text>
            </TouchableOpacity>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        resizeMode: 'contain',
        justifyContent:"flex-end",
        alignItems: "center",
        padding: 20,
    },
    button: {
        backgroundColor: "#478CCF",
        width: "90%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
    },
    textContainer: {
        marginBottom: 40,
    }
})