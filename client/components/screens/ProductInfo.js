import { View, Text, ScrollView, TouchableOpacity, StatusBar, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Items } from '../database/database'
import { COLOURS } from '../database/database'
import Entypo from 'react-native-vector-icons/Entypo'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const arImage = require('../database/images/arImage/arImage.jpeg')
const ProductInfo = ({ route, navigation }) => {
    const { productID } = route.params;
    const [product, setProduct] = useState({})
    // console.log(route.params);

    //https://blog.logrocket.com/guide-to-react-useeffect-hook/
    //using useEffect to load async effects 
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDB();
        });
        return unsubscribe;
    }, [navigation])

    //gettting product by productId

    const getDataFromDB = async () => {
        for (let i = 0; i < Items.length; i++) {
            if (Items[i].id == productID) {
                await setProduct(Items[i])
                return;
            }
        }
    }
    console.log(product);
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLOURS.white,
            position: 'relative'
        }} >

            <StatusBar backgroundColor={COLOURS.backgroundDark} barStyle="dark-content" />
            <ScrollView>
                <View
                    style={{
                        width: '100%',
                        backgroundColor: COLOURS.white,
                        justifyContent: 'center',
                        position: 'relative',
                        alignItems: 'center'
                    }}>
                    <View
                        style={{
                            width: '15%',
                            alignSelf: 'flex-start',
                            borderColor: COLOURS.white,
                            borderWidth: 5,
                            borderRadius: 10,

                        }}>
                        <TouchableOpacity>
                            <Entypo name='arrow-left'
                                style={{
                                    backgroundColor: COLOURS.backgroundLight,
                                    color: COLOURS.black,
                                    padding: 10,
                                    borderRadius: 5,
                                    fontSize: 20,
                                }}>
                            </Entypo>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View>
                            <Image
                                source={product.productImage} />
                        </View>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: '500'
                            }}
                        >{product.productName}</Text>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '400',
                                color: COLOURS.yellow
                            }}
                        >{product.description}</Text>
                    </View>
                    <View>

                        <Text
                            style={{
                                paddingLeft: 20,
                                fontSize: 14,
                                fontWeight: '400',
                                color: COLOURS.backgroundDark
                            }}
                        >{product.subDes}</Text>
                    </View>

                    <View
                        style={{
                            width: '100%',
                            height: 50,
                            padding: 15,
                        }}
                    >
                        <TouchableOpacity>
                            <Image
                                source={arImage}
                                style={{
                                    width: 70,
                                    height: 30,
                                    padding: 5,
                                    backgroundColor: COLOURS.backgroundLight,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >

        </View >
    )
}

export default ProductInfo