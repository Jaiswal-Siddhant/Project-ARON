import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { COLOURS, serverUrl } from '../../components/database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const fetchProducts = async () => {
  let data = await fetch(serverUrl + 'allproducts');
  let data2 = await data.json();
  return data2;
}

const AllProducts = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [productCount, setProductsCount] = useState(0);

  useEffect(async () => {
    const data = await fetchProducts();
    setProducts(data.products);
    setProductsCount(data.productsCount);
  }, []);

  const ProductCard = ({ data }) => {
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
          {/* 'https://i.ibb.co/DRST11n/1.webp' */}
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
        {data.stock > 0 ? (
          null
          // <View
          //   style={{
          //     flexDirection: 'row',
          //     alignItems: 'center',
          //   }}>
          //   <FontAwesome
          //     name="circle"
          //     style={{
          //       fontSize: 12,
          //       marginRight: 6,
          //       color: COLOURS.green,
          //     }}
          //   />
          //   <Text
          //     style={{
          //       fontSize: 12,
          //       color: COLOURS.green,
          //     }}>
          //     Available
          //   </Text>
          // </View>
        ) : (
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
        )}
        <Text>&#8377; {data.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
      }}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={true}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home')
            }}>
            <Entypo
              name="chevron-left"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                backgroundColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
            <MaterialCommunityIcons
              name="cart"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Products
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                {productCount}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {products.map((data, i) => {
              // console.log(data);
              return <ProductCard data={data} key={i} />
            })}
          </View>
        </View>

        {/* <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Accessories
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                78
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: '400',
              }}>
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {fetchedProducts.map((data, i) => {
              return <ProductCard data={data} key={i} />;
            })}
          </View>
        </View> */}
      </ScrollView>
    </View>
  )
}

export default AllProducts