import {Text, View, StyleSheet} from "react-native";

type LineAndOrProps = {
    text: string;
}
export function LineAndOr({text, ...props}: LineAndOrProps) {
    return (
        <View style={styles.container}>
            <View style={styles.line}></View>
            <Text style={styles.text}>
                {text}
            </Text>
            <View style={styles.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        flex: 1,
        height: 1,
        width: '100%',
        backgroundColor: '#000000'
    },
    text: {
        marginHorizontal: 8,
        fontSize: 16,
        color: '#000000'
    },
})