import {Text, StyleSheet, View, Pressable} from "react-native";
import {router} from "expo-router";

type TextProps = {
    text: string;
    text2: "Sign-Up" | "Sign-In"
}
export function Texts({text, text2}: TextProps) {
    const routing = () => {
        if (text === "Sign-Up") {
            router.push("/")
        }
        if (text === "Sign-In") {
            router.push("/login")
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Pressable style={styles.pressable} onPress={routing}>
                <Text style={styles.text2}
                >{text2}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
    },
    pressable: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    text: {
        color: "#000000",
        fontSize: 14,
        fontWeight: '600',
        includeFontPadding: false,
        textAlignVertical: 'center'
    },
    text2: {
        color: "#92147B",
        fontSize: 14,
        fontWeight: 'semibold',
        textDecorationLine: "underline",
        includeFontPadding: false,
        textAlignVertical: 'center'
    }
})