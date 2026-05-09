import {StyleSheet, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

export function HalfCircle() {
    return (
        <View>
            <LinearGradient
                colors={['#E3D9DD', '#E0A3B9']}
                start={[0, 1]}
                end={[1, 1]}
                style={styles.quarter} />
        </View>
    )
}

const styles = StyleSheet.create({
    quarter: {
        width: 340,
        height: 340,
        borderBottomEndRadius: 160,
        borderRadius: 170,
        marginTop: -140,
        marginLeft: -140,
    }
});