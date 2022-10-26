import {
	View,
	Text,
	StatusBar,
	ScrollView,
	TouchableOpacity,
	Image,
	FlatList,
	StyleSheet,
	SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLOURS, Items } from '../database/database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProdCard from './ProdCard';

const Home = ({ navigation }) => {
	const [sofa, setSofa] = useState([]);

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getDataFromDB();
		});
		return unsubscribe;
	}, [navigation]);

	//getting data from database
	const getDataFromDB = () => {
		let sofaList = [];

		for (let index = 0; index < Items.length; index++) {
			if (Items[index].category == 'sofa') {
				sofaList.push(Items[index]);
			}
		}

		setSofa(sofaList);
	};
	// sofa.forEach((i) => console.log(i.productName));

	const renderProd = (data) => {
		return (
			<ProdCard
				navigation={navigation}
				data={data}
				style={{ width: '40%' }}></ProdCard>
		);
	};

	return (
		<View style={{ paddingTop: 40, backgroundColor: COLOURS.black, height: '100%' }}>
			<Text
				style={{
					fontSize: 14,
					color: COLOURS.white,
					fontWeight: '500',
					letterSpacing: 1,
					marginBottom: 10,
					paddingStart: 20,
				}}>
				Popular
			</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				snapToInterval={200}
				snapToAlignment={'start'}
				data={sofa}
				renderItem={renderProd}
				keyExtractor={(item) => item.id}
			/>
			<Text
				style={{
					fontSize: 14,
					color: COLOURS.white,
					fontWeight: '500',
					letterSpacing: 1,
					marginBottom: 10,
					paddingStart: 20,
				}}>
				Popular
			</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				snapToInterval={200}
				snapToAlignment={'start'}
				data={sofa}
				renderItem={renderProd}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default Home;
