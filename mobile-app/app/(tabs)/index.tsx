import { Input } from '@/components/input';
import {useState} from "react";
import {Animated, StyleSheet, View} from "react-native";
import ScrollView = Animated.ScrollView;
import {Text} from "react-native";
import {ContinueWithGoogle} from "@/components/continue-with-google";
import {LineAndOr} from "@/components/line-and-or";
import {Button} from "@/components/button";
import {Texts} from "@/components/text"
import {HalfCircle} from "@/components/half-circle";
import axios from 'axios'


export default function HomeScreen() {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleSignUp = async () => {
        try {
            const response = await
                axios.post("http://localhost:8080/api/v1/auth/register", data)
            if (response.data.data.message === "User Registered Successfully") {
                alert(response.data.data.message)
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <ScrollView style={style.container}
        >
            <HalfCircle></HalfCircle>
            <View
                style={style.loginContainer}>
                <Text
                    style={style.login}
                >
                    Create Account
                </Text>
            </View>

            <ContinueWithGoogle text="Continue with Google"/>
            <LineAndOr text="OR"/>
            <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                value={data.email}
                onChangeText={(text) => setData({...data, email: text})}
                // error={!email ? "Email is required" : ""}
            />
            <Input
                label="Password: "
                placeholder="Enter your password"
                type="password"
                value={data.password}
                onChangeText={(password) => setData({...data, password})}
                error=""/>
            <Texts text="Already have an account?" text2="Sign-In"/>

            <Button onPress={handleSignUp} text="Sign-Up"/>
        </ScrollView>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    login: {
        fontSize: 36,
        fontWeight: 'bold',
        color: "#300909"
    }
});
