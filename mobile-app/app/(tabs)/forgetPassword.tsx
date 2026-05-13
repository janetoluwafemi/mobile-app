import { Input } from '@/components/input';
import {useState} from "react";
import {Alert, Animated, StyleSheet} from "react-native";
import ScrollView = Animated.ScrollView;
import {Text} from "react-native";
import {Button} from "@/components/button";
import {HalfCircle} from "@/components/half-circle";
import axios from 'axios'


export default function ForgetPassword() {
    const [forgetPasswordData, setForgetPasswordData] = useState({
        otp: "",
        newPassword: ""
    })
    const handleResetPassword = async () => {
        try {
            const response = await
                axios.post("http://192.168.34.221:8080/api/v1/auth/resetPassword", forgetPasswordData);
            Alert.alert(response.data.data.message)
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
                    Change Password
                </Text>
            </Text>
            <Input
                label="OTP: "
                placeholder="Enter your OTP"
                type="otp"
                value={forgetPasswordData.otp}
                onChangeText={(otp) => setForgetPasswordData({...forgetPasswordData, otp})}
                error=""/>
            <Input
                label="New Password: "
                placeholder="Enter your new password"
                type="password"
                value={forgetPasswordData.newPassword}
                onChangeText={(newPassword) => setForgetPasswordData({...forgetPasswordData, newPassword})}
                error=""/>
            <Input
                label="Confirm Password: "
                placeholder="Re-enter your new password"
                type="password"
                value={forgetPasswordData.newPassword}
                onChangeText={(newPassword) => setForgetPasswordData({...forgetPasswordData, newPassword})}
                error=""/>
            <Button onPress={handleResetPassword} text="Change Password"/>
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
