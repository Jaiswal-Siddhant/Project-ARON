import {
	View,
	Text,
	StatusBar,
	ScrollView,
	TouchableOpacity,
	Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLOURS, Items } from '../database/database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({ navigation }) => {
	const [sofa, setSofa] = useState([]);
	const [chair, setChair] = useState([]);

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getDataFromDB();
		});
		return unsubscribe;
	}, [navigation]);

	//getting data from database
	const getDataFromDB = () => {
		let sofaList = [];
		let chairList = [];

		for (let index = 0; index < Items.length; index++) {
			if (Items[index].category == 'sofa') {
				sofaList.push(Items[index]);
			} else if (Items[index].category == 'chair') {
				chairList.push(Items[index]);
			}
		}

		setSofa(sofaList);
		setChair(chairList);
	};

	//Product card =>DRY
	const ProductCard = ({ data }) => {
		return (
			<TouchableOpacity
				//navigating to the product info page on press operation on card
				onPress={() =>
					navigation.navigate('ProductInfo', { productID: data.id })
				}
				style={{
					width: '45%',
					marginTop: 15,
					padding: 5,
				}}>
				<View
					style={{
						width: '100%',
						height: 250,
						borderRadius: 30,
						backgroundColor: COLOURS.backgroundLight,
						justifyContent: 'center',
						alignItems: 'center',
                        marginBottom: 6,
                        marginLeft: 10,
					}}>
					{/*rendering product Image*/}
					<Image
						source={data.productImage}
						style={{
							width: '100%',
							height: '80%',
							resizeMode: 'contain',
						}}
					/>
				</View>

				{/*rendering product name*/}
				<Text
					style={{
						color: COLOURS.black,
						fontWeight: '500',
						textAlign: 'center',
						marginBottom: 4,
					}}>
					{data.productName}
				</Text>

				{/*rendering product price*/}

				<Text
					style={{
						color: COLOURS.black,
						fontWeight: '500',
						textAlign: 'center',
						marginBottom: 2,
					}}>
					&#8377; {data.productPrice}
				</Text>
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
			<StatusBar
				backgroundColor={COLOURS.white}
				barStyle='dark-content'
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						width: '100%',
						flexDirection: 'row',
						justifyContent: 'space-between',
						padding: 10,
					}}>
					<TouchableOpacity>
						<Entypo
							name='shopping-bag'
							style={{
								fontSize: 18,
								color: COLOURS.backgroundMedium,
								padding: 12,
								borderRadius: 10,
								backgroundColor: COLOURS.backgroundLight,
							}}></Entypo>
					</TouchableOpacity>
					<TouchableOpacity>
						<MaterialCommunityIcons
							name='cart'
							style={{
								fontSize: 18,
								color: COLOURS.backgroundMedium,
								padding: 12,
								borderRadius: 10,
								backgroundColor: COLOURS.backgroundLight,
							}}></MaterialCommunityIcons>
					</TouchableOpacity>
				</View>
				<View
					style={{
						marginBottom: 10,
						padding: 16,
					}}>
					<Text
						style={{
							fontSize: 14,
							color: COLOURS.black,
							fontWeight: '500',
							letterSpacing: 1,
							marginBottom: 10,
						}}>
						Furniture Shop & Services
					</Text>
					<Text
						style={{
							fontSize: 14,
							color: COLOURS.black,
							fontWeight: '400',
							letterSpacing: 1,
							marginBottom: 10,
						}}>
						Looking for furniture{'\n'}
						We offer best services and products at best price.
					</Text>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						padding: 10,
						justifyContent: 'space-between',
					}}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}>
						<Text
							style={{
								fontSize: 19,
								color: COLOURS.black,
								fontWeight: '600',
								letterSpacing: 1,
							}}>
							Products
						</Text>
						<Text
							style={{
								fontSize: 15,
								color: COLOURS.black,
								fontWeight: '500',
								opacity: 0.4,
								marginLeft: 15,
								marginTop: 5,
							}}>
							20
						</Text>
					</View>
					<View>
						<Text
							style={{
								fontSize: 15,
								color: COLOURS.black,
								marginTop: 6,
								paddingLeft: 130,
							}}>
							EXPLORE
						</Text>
					</View>
                </View>
                
				{/*Product Loading */}
				<View
					style={{
						flexDirection: 'row',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
					}}>
					{sofa.map((data) => {
						return <ProductCard data={data} key={data.id} />;
					})}
				</View>

				{/*chair section */}
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						padding: 10,
						justifyContent: 'space-between',
					}}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}>
						<Text
							style={{
								fontSize: 19,
								color: COLOURS.black,
								fontWeight: '600',
								letterSpacing: 1,
							}}>
							Chair
						</Text>
						<Text
							style={{
								fontSize: 15,
								color: COLOURS.black,
								fontWeight: '500',
								opacity: 0.4,
								marginLeft: 15,
								marginTop: 5,
							}}>
							20
						</Text>
					</View>
					<View>
						<Text
							style={{
								fontSize: 15,
								color: COLOURS.black,
								marginTop: 6,
								paddingLeft: 130,
							}}>
							EXPLORE
						</Text>
					</View>
				</View>

				{/*Product Loading */}
				<View
					style={{
						flexDirection: 'row',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
					}}>
					{sofa.map((data) => {
						return <ProductCard data={data} key={data.id} />;
					})}
				</View>
			</ScrollView>
		</View>
	);
};

export default Home;
