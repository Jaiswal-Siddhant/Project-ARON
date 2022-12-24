import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLOURS } from '../../components/database/Database';

const ProductCard = ({ data, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                // console.log(data._id)
                navigation.navigate('ProductInfo', { productID: data._id })
            }}
            style={{
                width: '48%',
                marginVertical: 14,
            }}>
            <View
                style={{
                    width: '100%',
                    height: 100,
                    borderRadius: 10,
                    backgroundColor: COLOURS.backgroundLight,
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 8,
                }}>
                {data.isOff ? (
                    <View
                        style={{
                            position: 'absolute',
                            width: '20%',
                            height: '24%',
                            backgroundColor: COLOURS.green,
                            top: 0,
                            left: 0,
                            borderTopLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 12,
                                color: COLOURS.white,
                                fontWeight: 'bold',
                                letterSpacing: 1,
                            }}>
                            {data?.offPercentage || 0}%
                        </Text>
                    </View>
                ) : null}
                <Image
                    source={{ uri: data.images[0].url }}
                    style={{
                        width: '80%',
                        height: '80%',
                        resizeMode: 'contain',
                    }}
                />
            </View>
            <Text
                style={{
                    fontSize: 12,
                    color: COLOURS.black,
                    fontWeight: '600',
                    marginBottom: 2,
                }}>
                {data.name}
            </Text>
            {data.stock === 0 ? (
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <FontAwesome
                        name="circle"
                        style={{
                            fontSize: 12,
                            marginRight: 6,
                            color: COLOURS.red,
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 12,
                            color: COLOURS.red,
                        }}>
                        Unavailable
                    </Text>
                </View>
            ) : null}
            <Text>&#8377; {data.price}</Text>
        </TouchableOpacity>
    );
};

export default ProductCard;