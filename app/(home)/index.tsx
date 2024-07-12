import { View, Text, StyleSheet, Platform, StatusBar, TextInput, FlatList, TouchableOpacity, ImageBackground, Pressable, ScrollView, SafeAreaView, Image } from "react-native";
import Icon from "../../components/Icon";
import { useState } from "react";
import {data, images} from '../../constants/items'

export default function HomePage(){
    const [selected, setSelected] = useState(1);
    return (
        <SafeAreaView style={styles.container} >
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 30}}>
                <View>
                    <Text style={{fontSize:10, fontWeight: "thin"}} >Explore</Text>
                    <Text style={{fontWeight: "semibold"}}>The World</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", gap: 4}}>
                    <Icon name="map-pin" size={15} color="#478CCF" />
                    <Text>Safi, Morocco</Text>
                </View>
            </View>
            <View style={[styles.searchContainer, {marginBottom: 30}]}>
                <Icon name="search" size={24} color="black" />
                <TextInput style={{width: "90%"}} placeholder="Finds Thingd to do" />
            </View>
            <View style={{ marginBottom: 30 }}>
                <FlatList
                    horizontal={true}
                    data={data}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => setSelected(item.id)}
                            style={styles.linkItem}
                        >
                            <Text style={item.id === selected ?{ color:'#478CCF' }:{}}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={{ marginBottom: 30 }}>
                <View style={styles.titleHeader}>
                    <Text style={styles.title}>Popular</Text>
                    <Text style={{fontSize: 10, color: "#478CCF"}} >See all</Text>
                </View>
                <FlatList
                    horizontal={true}
                    data={images}
                    renderItem={({item}) =>(
                        <Pressable>
                            <View style={styles.popularItem}>
                                <ImageBackground source={item.link} style={{ flex:1, justifyContent: "flex-end"}}>
                                    <View style={{ width:150, padding: 10 }}>
                                        <View style={{ backgroundColor:"#758694",alignItems: "center", justifyContent:"center",padding:2, borderRadius:20 }}>
                                             <Text numberOfLines={1} style={{ fontSize: 13, color:"#fff" }}>{item.title}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                                        <View style={{ flexDirection: "row", gap: 4,width:60, height: 30, justifyContent:"center", alignItems:"center", backgroundColor: "#758694", borderRadius: 50 }}>
                                            <Icon name="star" size={20} color="gold" />
                                            <Text style={{ fontSize: 15, color:"#fff" }}>{item.stars}</Text>
                                        </View>
                                        <View style={{backgroundColor: "#fff", width: 30, height: 30, alignItems:"center", justifyContent: "center", borderRadius: 50}}>
                                            <TouchableOpacity>
                                                <Icon name="heart" size={20} color="red" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </Pressable>
                    )}
                />
            </View>
            <View>
                <View style={styles.titleHeader}>
                    <Text style={styles.title}>Recommended</Text>
                    <Text style={{ fontSize: 10, color: "#478CCF" }} >See all</Text>
                </View>
                <FlatList
                    horizontal={true}
                    data={images}
                    renderItem={({ item }) => (
                        <Pressable>
                            <View style={styles.recommended}>
                              <Image
                                style={{ height: 130, width: '100%', resizeMode: "stretch", borderRadius: 10  }}
                                source={item.link}
                              />
                                <View style={styles.price}>
                                <Text style={{color: "#fff"}}>$500</Text>
                              </View>
                              <View style={{padding:3}}>
                                <Text style={{fontWeight: "bold"}}>Hello</Text>
                                <Text numberOfLines={3} style={{fontSize: 10}}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi doloribus culpa assumenda facilis ipsa unde aliquid odit eius sint, rem et magni vel id fugit ullam quae asperiores dolor totam.
                                </Text>
                              </View>
                            </View>
                        </Pressable>
                    )}
                />
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#f5f5f5",
        padding: 20 ,
        paddingTop: Platform.OS === "android"? StatusBar.currentHeight: 0,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#EEEDEB",
        borderRadius: 20,
        padding: 10,
        height: 50,
        gap: 4,
        overflow: "hidden",
    },
    linkItem: {
        marginLeft: 10,
        backgroundColor: '#EEEDEB',
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 20
    },
    popularItem: {
        width: 180,
        height: 200,
        borderRadius: 10,
        marginRight: 10,
        overflow: 'hidden',
    },
    titleHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    title: {
        fontSize: 20,
         fontWeight: "bold"
    },
    recommended: {
        width: 180,
        height: 220,
        marginRight: 10,
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: '#EEEDEB',
        padding: 5,
    },
    price: {
        backgroundColor: "#176B87",
        width: 50,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        position: "absolute",
        top: "60%",
        right: 10,
        borderColor: "#EEEDEB",
        borderWidth: 2
    }
})