import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from "react-native";
import {Input} from "@/components/input";
import {useEffect, useState} from "react";
import axios from "axios";
import {LinearGradient} from "expo-linear-gradient";
import {Image} from "expo-image";


interface HairProducts {
    id: number,
    productName: string,
    price: number,
    quantity: number,
    category: string,
    description: string,
    imageUrl: string
}
export default function JobsPage() {
    const [hairProducts, setHairProducts] = useState<HairProducts[]>([])
    const getHairProducts = async () => {
        const response = await axios.get("http://192.168.167.221:8080/api/v1/auth/getAllProducts")
        console.log(response.data)
        setHairProducts(response.data.data.products)
    }
    const [search, setSearch] = useState("")
    const handleSearch = hairProducts.filter((hairProduct) =>
        hairProduct.productName.toLowerCase().includes(search.toLowerCase())
    );
    useEffect(() => {
        getHairProducts();
    }, [])
    return (
        <View style={styles.view}>
            <Input placeholder="search" value={search}
                   onChangeText={(text) => setSearch(text)}
                   type="search"></Input>
            <View>
                <LinearGradient
                    colors={['#E0A3B9', '#E3D9DD']}
                    start={[0, 1]}
                    end={[0, 0]}
                    style={styles.productsView} >
                    <Text style={styles.text}>Get 50% Off Your First Order</Text>
                    <View style={styles.imageContainer}>
                        <view style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Order Now</Text>
                            </TouchableOpacity>
                        </view>
                        <Image source={require('../../assets/images/hair-image.svg')} style={styles.image}></Image>
                    </View>
                </LinearGradient>
            </View>
            <View style={styles.container}>
                <Text style={styles.category}>Category</Text>
                <TouchableOpacity style={styles.all}>
                    <Text style={styles.allText}>See all</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewImagesContainer}>
                <ScrollView horizontal contentContainerStyle={styles.viewImages}
                            showsVerticalScrollIndicator={false}
                >
                    <View style={styles.imageContainerOne}>
                        <Image source={require('../../assets/images/hair-image-one.svg')}
                               style={styles.imageOne}></Image>
                        <Text>Oil</Text>
                    </View>
                    <View style={styles.imageContainerTwo}>
                        <Image source={require('../../assets/images/hair-image-two.svg')}
                               style={styles.imageTwo}></Image>
                        <Text>Cream</Text>
                    </View>
                    <View style={styles.imageContainerThree}>
                        <Image source={require('../../assets/images/hair-image-three.svg')}
                               style={styles.imageThree}></Image>
                        <Text>Leaven-in</Text>
                    </View>
                    <View style={styles.imageContainerFour}>
                        <Image source={require('../../assets/images/hair-image-four.svg')}
                               style={styles.imageFour}></Image>
                        <Text>Conditioner</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                    {hairProducts.map((hairProduct) => (
                        <View key={hairProduct.id} style={styles.card}>
                            <View style={styles.topSection}>
                                <Image
                                    source={{ uri: hairProduct.imageUrl }}
                                    style={styles.productImage}
                                />
                                <View style={styles.infoSection}>
                                    <Text style={styles.title}>
                                        {hairProduct.category}
                                    </Text>
                                    <Text style={styles.price}>
                                        Price: ₦{hairProduct.price}
                                    </Text>
                                    <TouchableOpacity >
                                        <LinearGradient
                                            colors={['#DFCDE0', '#B888BD', '#C778CE', '#D247DF']}
                                            start={{ x: 1, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            style={styles.cartButton}
                                        >
                                            <Text style={styles.cartButtonText}>
                                                Add To Cart
                                            </Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.orderButton}>
                                <Text style={styles.orderButtonText}>
                                    Order Now
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>

            {/*{handleSearch.map((hairProduct) => (*/}
            {/*    <Text key={hairProduct.id}>*/}
            {/*        {hairProduct.productName}*/}
            {/*    </Text>*/}
            {/*))}*/}
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    productsView: {
        marginTop: 20,
        padding: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#FBF5F5",
        backgroundColor: '#FBF5F5',
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
        height: 183,
        width: 344
    },
    text: {
        fontSize: 24,
        fontWeight: 'medium',
        width: 218,
        alignSelf: "flex-start",
        paddingLeft: 8,
        paddingTop: 7,
        color: '#300909'
    },
    buttonContainer: {
        justifyContent: "flex-end",
    },
    button: {
        backgroundColor: '#FBF5F5',
        borderRadius: 50,
        width: 112,
        height: 47,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
        fontWeight: 'medium',
        color: "#300909"
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "flex-end",
        top: -33,
        gap: 55
    },
    image: {
        width: 114,
        height: 114
    },
    container: {
        marginTop: 10,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 200
    },
    category: {
        fontSize: 20,
        fontWeight: 'medium',
        color: "#300909"
    },
    all: {

    },
    allText: {
        fontSize: 16,
        fontWeight: 'medium',
        color: "#92147B"
    },
    viewImagesContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    viewImages: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        gap: 30
    },
    imageContainerOne: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainerTwo: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainerThree: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainerFour: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageOne: {
        width: 54,
        height: 68
    },
    imageTwo: {
        width: 58,
        height: 77
    },
    imageThree: {
        width: 68,
        height: 68
    },
    imageFour: {
        width: 51,
        height: 68
    },
    scrollContainer: {
        padding: 20,
        paddingBottom: 100
    },
    card: {
        backgroundColor: "#FBF6F6",
        borderRadius: 25,
        padding: 20,
        marginBottom: 25
    },
    topSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    productImage: {
        width: 182,
        height: 182,
        borderRadius: 25
    },
    infoSection: {
        flex: 1,
        marginLeft: 20,
        justifyContent: "space-between",
        height: 150
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#000"
    },
    price: {
        fontSize: 14,
        fontWeight: 'semibold',
        color: "#000"
    },
    cartButton: {
        backgroundColor: "#E8B7F0",
        paddingVertical: 18,
        borderRadius: 10,
        alignItems: "center"
    },
    cartButtonText: {
        fontSize: 15,
        fontWeight: 'semibold'
    },
    orderButton: {
        marginTop: 30,
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 50,
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E3A7E8",
        width: 307,
        height: 43
    },
    orderButtonText: {
        fontSize: 14,
        fontWeight: "700",
        textAlign: "center"
    },
    textContent: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center'
    }
})