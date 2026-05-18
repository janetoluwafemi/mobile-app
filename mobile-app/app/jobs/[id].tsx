import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import {useGlobalSearchParams} from "expo-router";
import axios from "axios";
import { Dimensions } from 'react-native';
import {useRouter} from "expo-router";

interface ArchedShapeProps {
    children?: React.ReactNode;
}
interface HairProduct {
    id: number,
    productName: string,
    price: number,
    quantity: number,
    category: string,
    description: string,
    imageUrl: string
}
const { width, height } = Dimensions.get('window');

export default function PointedArchHeader({ children }: ArchedShapeProps) {
    const router = useRouter();
    const {id} = useGlobalSearchParams();
    console.log("Product Id oooo" + id)
    const [hairProduct, setHairProduct] = useState<HairProduct | null>(null);

    const getHairProduct = async () => {
        try {
            const response = await axios.get
            (`http://192.168.0.196:8080/api/v1/auth/getProduct?productId=${id}`)
            setHairProduct(response.data.data.product as HairProduct)
            console.log(response.data.data.product)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        if (id) {
            getHairProduct()
        }
    }, [id]);
    if (!hairProduct) {
        return (
            <View style={style.viewContainer}>
                <Text>Loading...</Text>
            </View>
        )
    }
    return (
        <View style={style.viewContainer}>
            <View
                style={[
                    style.cardBase,
                    {
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 83%, 82% 71%, 50% 60%, 18% 71%, 0% 83%)',
                        overflow: 'hidden'
                    } as any
                ]}
            >
                <LinearGradient
                    colors={['#E0A3B9', '#E3D9DD']}
                    start={[0, 1]}
                    end={[0, 0]}
                    style={StyleSheet.absoluteFillObject}
                >
                    <View style={style.searchContainer}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Text style={style.back}>Back</Text>
                        </TouchableOpacity>
                        <Image
                            style={style.loveImage}
                            source={require("../../assets/images/love-icon.svg")}></Image>
                    </View>
                </LinearGradient>
            </View>
            <View style={style.imageContainer}>
                <Image source={{uri: hairProduct.imageUrl}}
                       style={style.image}
                ></Image>
            </View>
                <View style={style.textContainer}>
                    <Text style={style.productName}>{hairProduct.productName}</Text>
                    <Text style={style.description}>{hairProduct.description}</Text>
                </View>
                <View style={{flexDirection: 'row', padding: 20, gap: 15}}>
                    <TouchableOpacity style={style.orderButton}>
                        <Text style={style.orderButtonText}>
                            Order
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText}>
                            Add To Cart
                        </Text>
                    </TouchableOpacity>
                </View>
        </View>

    );
}

const style = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
        padding: 10
    },
    back: {
        color: '#92147B',
        fontSize: 11,
        padding: 10,
        textDecorationLine: 'underline'
    },
    loveImage: {
        width: 24,
        height: 28
    },
    cardBase: {
        width: 393,
        height: 365,
        alignSelf: 'center',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ translateY: -height * 0.25 }],
    },
    image: {
        width: 352.78,
        height: 352.78,
        borderRadius: 200,
    },
    textContainer: {
        flex: 1,
        padding: 20,
        marginTop: -50,
        alignSelf: 'flex-start',
        position: 'relative',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        gap: 20
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 36,
        color: '#300909'
    },
    description: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#300909',
        padding:10
    },
    orderButton: {
        width: 129,
        height: 45,
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#000"
    },
    orderButtonText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    button: {
        width: 200,
        height: 45,
        backgroundColor: '#F4B1F0',
        borderRadius: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#000"
    },
    buttonText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});