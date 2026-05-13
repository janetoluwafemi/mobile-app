import { Input } from '@/components/input';
import {useState} from "react";
import {Alert, Animated, StyleSheet} from "react-native";
import ScrollView = Animated.ScrollView;
import {Text} from "react-native";
import {Button} from "@/components/button";
import {HalfCircle} from "@/components/half-circle";
import axios from 'axios'
import {useRouter} from "expo-router";


export default function verifyEmail() {
    const router = useRouter();
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleVerifyEmail = async () => {
        try {
            const response = await
                axios.post("http://192.168.34.221:8080/api/v1/auth/verifyUser", data);
            Alert.alert(response.data.data.message)
            router.replace('/forgetPassword')
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }
    return (
        <ScrollView style={style.container}
        >
            <HalfCircle></HalfCircle>
            <Text style={style.loginContainer}>
                <Text
                    style={style.login}
                >
                    Enter Email To Change  Password
                </Text>
            </Text>
            <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                value={data.email}
                onChangeText={(text) => setData({...data, email: text})}
                // error={!email ? "Email is required" : ""}
            />
            <Button onPress={handleVerifyEmail} text="Submit"/>
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
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 35
    },
    login: {
        fontSize: 36,
        fontWeight: 'bold',
        color: "#300909",
        marginLeft: 15
    },
    textContainer: {
        marginTop: 10,
        alignSelf: 'flex-start',
        marginLeft: '28%'
    },
    text: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '200',
        textDecorationLine: "underline"
    }
});
