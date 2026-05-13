import {TextInput, View, Text, StyleSheet} from "react-native";
import {useRef} from "react";

export type inputProps = {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    label?: string;
    type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search" | "otp";
    error?: string;
    otpLength?: number;
}
export function Input({placeholder, value, onChangeText, label, type, error,
                          otpLength = 4, ...props}: inputProps) {
    const isPassword = type === "password";
    const isEmail = type === "email";
    const inputRefs = useRef<Array<TextInput | null>>([]);
    if (type === "otp") {
        const otpValues = value.split("").slice(0, otpLength);
        const handleChange = (text: string, index: number) => {
            const cleanText = text.replace(/[^0-9]/g, "");
            const updated = [...otpValues];
            updated[index] = cleanText;

            const finalValue = updated.join("");
            onChangeText?.(finalValue);
            if (cleanText && index < otpLength - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        };

        const handleKeyPress = (
            key: string,
            index: number
        ) => {
            if (key === "Backspace") {
                if (!otpValues[index] && index > 0) {
                    inputRefs.current[index - 1]?.focus();
                }
            }
        };
        return (
            <View style={styles.container}>
                {label && (
                    <Text style={styles.label}>{label}</Text>
                )}

                <View style={styles.otpContainer}>
                    {Array.from({ length: otpLength }).map(
                        (_, index) => (
                            <TextInput
                                key={index}
                                ref={(ref) => {
                                    inputRefs.current[index] = ref;
                                }}
                                style={styles.otpInput}
                                value={otpValues[index] || ""}
                                onChangeText={(text) =>
                                    handleChange(text, index)
                                }
                                onKeyPress={({ nativeEvent }) =>
                                    handleKeyPress(
                                        nativeEvent.key,
                                        index
                                    )
                                }
                                keyboardType="number-pad"
                                maxLength={1}
                                textAlign="center"
                            />
                        )
                    )}
                </View>

                {error ? (
                    <Text style={styles.error}>{error}</Text>
                ) : null}
            </View>
        );
    }

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
                keyboardType={
                type === "email"
                    ? "email-address"
                    : type === "number"
                        ? "numeric"
                        : "default"
                }
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
        marginLeft: 20
    },

    error: {
        fontSize: 12,
        color: "red",
        marginTop: 4,
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 35,
    },

    otpInput: {
        width: 60,
        height: 55,
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "#FBF5F5",
        borderRadius: 10,
        fontSize: 28,
        fontWeight: "bold",
        textAlign: 'center',
        textAlignVertical: 'center'
    },
});