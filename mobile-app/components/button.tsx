import {Text, Pressable, View, StyleSheet} from "react-native";

type buttonProps = {
    text: string;
    onPress?: () => void;
}

export function Button({text, onPress, ...props}: buttonProps) {
    return (
        <Pressable
            onPress={onPress}
            style={styles.container}
            {...props}
        >
            <View>
                <Text style={styles.textContent}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4B1F0',
        paddingVertical: 18,
        paddingHorizontal: 4,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 40,
        justifyContent: 'center',
        width: 200,
        borderWidth: 1,
        borderColor: "#000",
    },
    textContent: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
    }
})