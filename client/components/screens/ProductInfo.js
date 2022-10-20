<<<<<<< HEAD
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	StatusBar,
	Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Items } from '../database/database';
import { COLOURS } from '../database/database';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const arImage = require('../database/images/arImage/arImage.jpeg');
const ProductInfo = ({ route, navigation }) => {
	const { productID } = route.params;
	const [product, setProduct] = useState({});
	// console.log(route.params);

	//https://blog.logrocket.com/guide-to-react-useeffect-hook/
	//using useEffect to load async effects
=======
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
>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getDataFromDB();
		});
		return unsubscribe;
<<<<<<< HEAD
	}, [navigation]);
=======
	}, [navigation])
>>>>>>> c1b14e9723de4849f1c768c40927283256a48031

	//gettting product by productId

	const getDataFromDB = async () => {
		for (let i = 0; i < Items.length; i++) {
			if (Items[i].id == productID) {
<<<<<<< HEAD
				await setProduct(Items[i]);
				return;
			}
		}
	};
	// console.log(product);
	return (
		<View
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: COLOURS.white,
				position: 'relative',
			}}>
			<StatusBar
				backgroundColor={COLOURS.backgroundDark}
				barStyle='dark-content'
			/>
			<ScrollView>
=======
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

>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
				<View
					style={{
						width: '100%',
						backgroundColor: COLOURS.white,
						justifyContent: 'center',
						position: 'relative',
<<<<<<< HEAD
						alignItems: 'center',
					}}>
=======
						alignItems: 'center'
					}}>


>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							borderBottomColor: COLOURS.backgroundDark,
							borderBottomWidth: 1,
							shadowOpacity: 5,
<<<<<<< HEAD
						}}>
						<View
							style={{
								width: '100%',
								borderColor: COLOURS.white,
								borderWidth: 5,
								borderRadius: 10,
							}}>
							<TouchableOpacity
								onPress={() => navigation.navigate('Home')}>
								<Entypo
									name='chevron-left'
=======
						}}
					>

						<View
							style={{
								width: '25%',
								borderColor: COLOURS.white,
								borderWidth: 5,
								borderRadius: 10,

							}}>
							<TouchableOpacity onPress={() => navigation.navigate("Home")}
							>
								<Entypo name='chevron-left'
>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
									style={{
										color: COLOURS.black,
										padding: 10,
										borderRadius: 5,
										fontSize: 25,
<<<<<<< HEAD
									}}></Entypo>
							</TouchableOpacity>
							<Text
								style={{
									paddingTop: 10,
									position: 'absolute',
									fontSize: 20,
									fontWeight: '500',
									alignSelf: 'center',
								}}>
								{product.productName}
							</Text>
						</View>
					</View>
					{/*wrapping entypo and 360 in one view*/}

					<View>
						<View>
							<Image
								source={product.productImage}
								style={{ position: 'relative' }}
							/>
							<TouchableOpacity
								style={{
									width: '100%',
									position: 'absolute',
									alignItems: 'flex-end',
									justifyContent: 'center',
									paddingTop: 50,
								}}>
								<Image
									source={arImage}
									style={{
										width: 70,
										height: 30,
										backgroundColor:
											COLOURS.backgroundLight,
									}}
								/>
							</TouchableOpacity>
						</View>
					</View>
					<View style={{ width: '90%' }}>
						<Text
							style={{
								fontSize: 14,
								fontWeight: '400',
								color: COLOURS.yellow,
							}}>
							{product.description}
						</Text>
						<View>
							<Text
								style={{
									fontSize: 14,
									paddingTop: 10,
									fontWeight: '400',
									color: COLOURS.backgroundDark,
								}}>
								{product.subDes}
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
=======
									}}>
								</Entypo>
							</TouchableOpacity>
						</View>


						<TouchableOpacity
							style={{

								width: '75%',
								alignItems: 'flex-end',
								paddingRight: 30,
								paddingTop: 15,
							}}
						>
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
					{/*wrapping entypo and 360 in one view*/}




					<View>
						<View
						>
							<Image
								source={product.productImage}
							/>
						</View>
						<Text
							style={{
								paddingTop: 10,
								position: 'absolute',
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


				</View>
			</ScrollView >
>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
			<View
				style={{
					height: 50,
					width: '100%',
					backgroundColor: COLOURS.backgroundMedium,
					display: 'flex',
					flexDirection: 'row',
<<<<<<< HEAD
					padding: 10,
				}}>
				<Text
					style={{
						width: '30%',
						alignSelf: 'center',
						fontWeight: '400',
						fontSize: 15,
						textAlign: 'center',
=======
					borderRadius: 10,
					padding: 10,
				}}>

				<Text
					style={{
						width: "30%",
						alignSelf: 'center',
						fontWeight: '400',
						fontSize: 15,
>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
					}}>
					₹12233
				</Text>

				{/*buy now touchable opacity*/}
				<TouchableOpacity
					style={{
						width: '70%',
<<<<<<< HEAD
						textAlign: 'center',
						alignSelf: 'center',
=======

>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
						borderLeftWidth: 1,
						borderLeftColor: COLOURS.black,
					}}>
					<Text
						style={{
<<<<<<< HEAD
							width: '100%',
							textAlign: 'center',
							fontWeight: '400',
							fontSize: 20,
						}}>
						Buy Now
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ProductInfo;
=======
							width: '80%',
							textAlign: 'center',
							fontWeight: '400',
							fontSize: 20,
						}}
					>
						Buy Now
					</Text>
				</TouchableOpacity>

			</View>

		</View >
	)
}

export default ProductInfo
>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
