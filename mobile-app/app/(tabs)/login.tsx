import { Input } from '@/components/input';
import {useState} from "react";
import {Alert, Animated, StyleSheet, TouchableOpacity} from "react-native";
import ScrollView = Animated.ScrollView;
import {Text} from "react-native";
import {ContinueWithGoogle} from "@/components/continue-with-google";
import {LineAndOr} from "@/components/line-and-or";
import {Button} from "@/components/button";
import {Texts} from "@/components/text"
import {HalfCircle} from "@/components/half-circle";
import axios from 'axios'
import {useRouter} from "expo-router";


export default function login() {
    const router = useRouter();
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleLogin = async () => {
        try {
            const response = await
                axios.post("http://192.168.167.221:8080/api/v1/auth/loginUser", data);
            Alert.alert(response.data.data.message)
            if (response.data.data.message === "User logged in successfully") {
                router.push("/jobs/hairProducts");
            }
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }
    const forgotPassword = () => {
        router.replace('/user/verifyEmail')
    }
    return (
      <ScrollView style={style.container}
        >
          <HalfCircle></HalfCircle>
      <Text style={style.loginContainer}>
        <Text
          style={style.login}
        >
          Login
        </Text>
      </Text>

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
          <Texts text="Doesn’t have an account" text2="Sign-Up"/>
          <TouchableOpacity style={style.textContainer} onPress={forgotPassword}>
              <Text style={style.text}>Forgot Password?</Text>
          </TouchableOpacity>
          <Button onPress={handleLogin} text="Login"/>
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
