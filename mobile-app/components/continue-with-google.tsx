import {Text, View, StyleSheet, Pressable} from "react-native";

type googleProps = {
    text: string;
}

export function ContinueWithGoogle({text}: googleProps) {
    return (
        <Pressable style={styles.container}>
            <View>
                <Text style={styles.textContent}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        backgroundColor: '#D9D9D9',
        paddingVertical: 14,
        paddingHorizontal: 12,
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
        width: 350
    },
    textContent: {
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center'
    }
})