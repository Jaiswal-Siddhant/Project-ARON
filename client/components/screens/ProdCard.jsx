import React from 'react';
import { COLOURS, Items } from '../database/database';
import {
	Image,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
} from 'react-native';

const ProdCard = ({ navigation, data }) => {
	return (
		<SafeAreaView style={styles.droidSafeArea}>
			<TouchableOpacity
				//navigating to the product info page on press operation on card
				onPress={() =>
					navigation.navigate('ProductInfo', {
						productID: data.item.id,
					})
				}
				style={productStyles.wrapper}>
				<View style={productStyles.imgWrapper}>
					{/*rendering product Image*/}
					<Image
						source={data.item.productImage}
						style={productStyles.img}
					/>
				</View>

				{/*rendering product name*/}
				<Text style={productStyles.prodName}>
					{data.item.productName}
				</Text>

				{/*rendering product price*/}
				<Text style={productStyles.prodPrice}>
					&#8377; {data.item.productPrice}
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	droidSafeArea: {
		flex: 1,
	},
});
const productStyles = StyleSheet.create({
	wrapper: {
		width: 200,
	},
	imgWrapper: {
		width: '100%',
		height: 200,
		backgroundColor: COLOURS.black,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
	},
	img: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	prodName: {
		color: COLOURS.black,
		fontWeight: '500',
		textAlign: 'center',
		marginBottom: 4,
		paddingTop: 10,
	},
	prodPrice: {
		color: COLOURS.black,
		fontWeight: '500',
		textAlign: 'center',
		marginBottom: 2,
	},
});

export default ProdCard;
