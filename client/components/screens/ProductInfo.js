import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	StatusBar,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Items } from '../database/database';
import { COLOURS } from '../database/database';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ProductInfo = ({ route, navigation }) => {
	const { productID } = route.params;
	const [product, setProduct] = useState({});
	// console.log(route.params);

	//https://blog.logrocket.com/guide-to-react-useeffect-hook/
	//using useEffect to load async effects
	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getDataFromDB();
		});
		return unsubscribe;
	}, [navigation]);

	//gettting product by productId

	const getDataFromDB = async () => {
		for (let i = 0; i < Items.length; i++) {
			if (Items[i].id == productID) {
				await setProduct(Items[i]);
				return;
			}
		}
	};
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
				<View
					style={{
						width: '100%',
						backgroundColor: COLOURS.white,
						justifyContent: 'center',
						position: 'relative',
						alignItems: 'center',
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
							<Entypo
								name='arrow-left'
								style={{
									backgroundColor: COLOURS.backgroundLight,
									color: COLOURS.black,
									padding: 10,
									borderRadius: 5,
									fontSize: 20,
								}}
								onPress={() =>
									navigation.navigate('Home')
								}></Entypo>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default ProductInfo;
