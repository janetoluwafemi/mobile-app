import {StyleSheet, View, Text} from "react-native";
import {Image} from "expo-image";
import {LinearGradient} from "expo-linear-gradient";
import {useEffect} from "react";
import {useRouter} from "expo-router"

export default function Fronter() {
    const router = useRouter();
    useEffect(() => {
        const timing = setTimeout(() => {
            router.push("/(tabs)");
        }, 5000)
        return () => clearTimeout(timing)
    }, [])

    return (
        <View style={{flex: 1}}>
            <LinearGradient
                colors={['#E3D9DD', '#E0A3B9']}
                start={[1, 1]}
                end={[0, 0]}
                style={styles.view} >
                <Image source={require('../assets/images/hair.svg')} style={styles.image}></Image>
                <Text style={styles.text}>Luma’s Hair</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: "column",
        gap: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 155.5,
        height: 210.5
    },
    text: {
        color: '#300909',
        fontWeight: 'bold',
        fontSize: 24
    }
});