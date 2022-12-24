import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLOURS, API_KEY } from '../database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RazorpayCheckout from 'react-native-razorpay';

const MyCart = ({ navigation }) => {
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [prod, setProd] = useState([]);

  const getDataFromDB = async (isInitial = true) => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = await JSON.parse(itemArray);
    if (itemArray && !isInitial) {
      setProd(itemArray);
    } else if (itemArray && isInitial) {
      // count number of times product occures and set quantity of product 
      let itemArray = await AsyncStorage.getItem('cartItems');
      itemArray = await JSON.parse(itemArray);
      if (itemArray) {
        // count number of times product occures and set quantity of product 
        let productIds = [];
        let nonRepeatingProducts = [];
        for (let i = 0; i < itemArray.length; i++) {
          if (!productIds.includes(itemArray[i]._id)) {
            productIds.push(itemArray[i]._id);
            itemArray[i].quantity = 1;
            nonRepeatingProducts.push(itemArray[i]);
          } else {
            // find index of product with given id and increment its quantity
            let index = -1;
            for (let j = 0; j < i; j++) {
              if (itemArray[j]._id === itemArray[i]._id) {
                // console.log('itemArray: ' + j)
                index = j;
                break;
              }
            }
            itemArray[index].quantity += 1;
          }
        }
        setProductIds(nonRepeatingProducts);
        setProd(nonRepeatingProducts);
      }
      await getTotal();
    } else {
      setProd([])
      setTotal(false)
    }
  };

  useEffect(async () => {
    // getDataFromDB();
    await getDataFromDB();
    await getTotal();
  }, []);

  const setProductIds = async (array) => {
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(array));
    } catch (error) {
      console.log(error)
    }
  }

  const getTotal = async () => {
    // get total of products in cart
    try {
      let array = await AsyncStorage.getItem('cartItems');
      array = await JSON.parse(array);
      let totalHere = 0
      if (array) {
        for (let i = 0; i < array.length; i++) {
          totalHere += parseInt(array[i].price) * parseInt(array[i].quantity);
          // console.log(array[i], array[i].quantity);
        }
        setSubTotal(totalHere / 20);
        setTotal(totalHere);
      }
    } catch (err) {
      console.log(err)
    }
  };

  //remove data from Cart
  const removeItemFromCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    // await AsyncStorage.removeItem('cartItems');
    // console.log('removed prod successfully');
    itemArray = await JSON.parse(itemArray);
    if (itemArray) {
      for (let index = 0; index < itemArray.length; index++) {
        if (itemArray[index]._id === id) {
          itemArray.splice(index, 1);
          break;
        }
      }
      try {
        await AsyncStorage.setItem('cartItems', await JSON.stringify(itemArray));
        getDataFromDB(false);
      } catch (error) {
        console.log(error)
      }
    }
  };

  //checkout
  const checkOut = async () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.postimg.cc/bNPxDNh3/icon-removebg-preview.png',
      currency: 'INR',
      key: API_KEY,//'rzp_test_8ZU0Z1yuTL3ANk',
      amount: (total + subTotal) * 100,
      name: 'ARON Purchase',

      theme: { color: '#528FF0' }
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
      purchaseSuccess();
    }).catch((error) => {
      // handle failure
      console.log(`Error: ${error.code} | ${error.description}`);
      ToastAndroid.show('Payment Failed', ToastAndroid.SHORT);
    });
  };

  const purchaseSuccess = async () => {
    try {
      await AsyncStorage.removeItem('cartItems');
    } catch (error) {
      return error;
    }

    ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);
    navigation.navigate('Home');
  }

  const handleProduct = async (index, event) => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = await JSON.parse(itemArray);
    if (event === 'increment') {
      itemArray[index].quantity = itemArray[index].quantity + 1;
    } else if (event === 'decrement' && itemArray[index].quantity > 1) {
      itemArray[index].quantity = itemArray[index].quantity - 1;
    } else if (event === 'decrement' && itemArray[index].quantity === 1) {
      itemArray.splice(index, 1);
    }
    try {
      await AsyncStorage.setItem('cartItems', await JSON.stringify(itemArray));
      getDataFromDB(false);
      getTotal();
    } catch (error) {
      console.log(error)
    }
  }

  const renderProducts = (data, index) => {
    return (
      <TouchableOpacity
        key={data._id}
        onPress={() => navigation.navigate('ProductInfo', { productID: data._id })}
        style={{
          width: '100%',
          height: 100,
          marginVertical: 6,
          flexDirection: 'row',
          alignItems: 'center',
        }}>

        <View
          style={{
            width: '30%',
            height: 100,
            padding: 14,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLOURS.backgroundLight,
            borderRadius: 10,
            marginRight: 22,
          }}>
          <Image
            source={{ uri: data.images[0].url }}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            justifyContent: 'space-around',
          }}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 14,
                maxWidth: '100%',
                color: COLOURS.black,
                fontWeight: '600',
                letterSpacing: 1,
              }}>
              {data.name}
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: 'row',
                alignItems: 'center',
                opacity: 0.6,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  maxWidth: '85%',
                  marginRight: 4,
                }}>
                &#8377;{data.price}
              </Text>
              <Text>
                (~&#8377;
                {data.price + data.price / 20})
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  borderRadius: 100,
                  marginRight: 20,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: COLOURS.backgroundMedium,
                  opacity: 0.5,
                }}
                onPress={async () => {
                  await handleProduct(index, 'decrement');
                }}
              >
                <MaterialCommunityIcons
                  name="minus"
                  style={{
                    fontSize: 16,
                    color: COLOURS.backgroundDark,
                  }}
                />
              </TouchableOpacity>
              <Text>{data.quantity}</Text>
              <TouchableOpacity
                style={{
                  borderRadius: 100,
                  marginLeft: 20,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: COLOURS.backgroundMedium,
                  opacity: 0.5,
                }}
                onPress={async () => {
                  // increment product count 
                  await handleProduct(index, 'increment');
                }}
              >
                <MaterialCommunityIcons
                  name="plus"
                  style={{
                    fontSize: 16,
                    color: COLOURS.backgroundDark,
                  }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => removeItemFromCart(data._id)}>
              <MaterialCommunityIcons
                name="delete-outline"
                style={{
                  fontSize: 16,
                  color: COLOURS.backgroundDark,
                  backgroundColor: COLOURS.backgroundLight,
                  padding: 8,
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
      }}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingTop: 16,
            paddingHorizontal: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundDark,
                padding: 12,
                backgroundColor: COLOURS.backgroundLight,
                borderRadius: 12,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: '400',
            }}>
            Order Details
          </Text>
          <View></View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: COLOURS.black,
            fontWeight: '500',
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}>
          My Cart
        </Text>
        <View style={{ paddingHorizontal: 16 }}>
          {prod ? prod.map((v, i) => renderProducts(v, i)) : null}
        </View>
        <View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Delivery Location
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    color: COLOURS.blue,
                    backgroundColor: COLOURS.backgroundLight,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    style={{
                      fontSize: 18,
                      color: COLOURS.blue,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLOURS.black,
                      fontWeight: '500',
                    }}>
                    2 Petre Melikishvili St.
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLOURS.black,
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                    }}>
                    0162, Tbilisi
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{ fontSize: 22, color: COLOURS.black }}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Payment Method
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    color: COLOURS.blue,
                    backgroundColor: COLOURS.backgroundLight,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '900',
                      color: COLOURS.blue,
                      letterSpacing: 1,
                    }}>
                    VISA
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLOURS.black,
                      fontWeight: '500',
                    }}>
                    Visa Classic
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLOURS.black,
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                    }}>
                    ****-9092
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{ fontSize: 22, color: COLOURS.black }}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Order Info
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
                &#8377;{total}.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
                Shipping Tax
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
                &#8377;{subTotal}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: COLOURS.black,
                }}>
                &#8377;{total + subTotal}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            if (prod.length > 0) {
              checkOut()
            } else {
              ToastAndroid.show('Add Products to checkout', ToastAndroid.SHORT)
            }
          }}
          style={{
            width: '86%',
            height: '90%',
            backgroundColor: COLOURS.blue,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              letterSpacing: 1,
              color: COLOURS.white,
              textTransform: 'uppercase',
            }}>
            CHECKOUT ( ₹{total + subTotal} )
          </Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};

export default MyCart;