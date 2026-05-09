import {TextInput, View, Text, StyleSheet} from "react-native";

export type inputProps = {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    label?: string;
    type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search" | "none";
    error?: string;
}
export function Input({placeholder, value, onChangeText, label, type, error,
                                  ...props}: inputProps) {
    const isPassword = type === "password";
    const isEmail = type === "email";
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#000"
                value={value}
                onChangeText={onChangeText}
                autoCapitalize="none"
            />
            {error ? <Text style={styles.error}>{error}</Text> :null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 20,
        flexDirection: 'column',
        gap: 10
    },

    input: {
        padding: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: '#FBF5F5',
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
        width: 350
    },

    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 6,
        marginLeft: 20
    },

    error: {
        fontSize: 12,
        color: "red",
        marginTop: 4,
    },
});