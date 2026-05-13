import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import { GoogleAuthProvider, signInWithCredential, AuthCredential, UserCredential }
    from "firebase/auth";
import { auth } from "@/firebase";

WebBrowser.maybeCompleteAuthSession();

type googleProps = {
    text: string;
};

export function ContinueWithGoogle({ text }: googleProps) {
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        webClientId: "698893194630-dsjc1haiojb5mf3ofiob39q3c4cs82sc.apps.googleusercontent.com",
        androidClientId: "698893194630-pptjv33l83dhoof2hn0kfv3q058inv6v.apps.googleusercontent.com",
        iosClientId: "698893194630-mr9met367fndfvjckk6rdbs4bce87i70.apps.googleusercontent.com",
        scopes: ["profile", "email"],
        redirectUri: AuthSession.makeRedirectUri({
            scheme: "mobileapp",
            preferLocalhost: true
        }),
    });
    const handleGoogleLogin = async () => {
        try {
            const result = await promptAsync();
            if (result?.type === "success" && result.authentication?.idToken) {
                const { idToken } = result.authentication;
                const credential: AuthCredential = GoogleAuthProvider.credential(idToken);
                const userCredential: UserCredential = await signInWithCredential(auth, credential);

                Alert.alert("Success", "Welcome Back " + (userCredential.user.displayName
                    || "User") + "!");
            } else if (result?.type === "cancel") {
                console.log("User cancelled the web login flow");
            }
        } catch (error: any) {
            console.error("Error logging in with Google Web Flow:", error);
            Alert.alert("Login Failed", error.message || "Something went wrong.");
        }
    };

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handleGoogleLogin}
            disabled={!request}
        >
            <View>
                <Text style={styles.textContent}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
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
    }
});