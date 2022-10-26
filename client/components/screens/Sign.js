import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	StatusBar,
	Image,
	TextInput,
	StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLOURS } from '../database/database';
import Entypo from 'react-native-vector-icons/Entypo';

const Login = ({ navigation }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('');
	const [pass, setPass] = useState('');


	const validateUser = async (name, email, password) => {
		try {
			let data = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name,
					email,
					password,
				}),
			};
			const re = await fetch(
				'http://192.168.29.81:4000/api/v1/register',
				data
			);
			if (re.status != 201) {
				let txt = await re.json();
				setMsgText(txt);
				setIsInvalid(true);
			} else {
				setIsInvalid(false);
				setMsgText('');

				// const user2 = await re.json();
				// Do something with user
				// use it for profile or save it in localstorage
				navigation.navigate('Home');
			}
		} catch (error) {
			// setMsgText(error)
			console.log(error.message);
		}
	};

	return (<View style={styles.wrapper}>
		<ScrollView style={styles.scrollStyle}>
			<Image
				source={require('../../assets/app-icon.png')}
				style={{
					width: 200,
					height: 100,
					alignSelf: 'center',
				}}
			/>
			<Text style={styles.gap}></Text>

			{/* User field*/}
			<View style={styles.headingText}>
				<Text
					style={{
						color: COLOURS.white,
					}}>
					{' '}
				</Text>
				{/* set email */}
				<View style={styles.inputWrapper}>
					<Entypo
						size={16}
						name='mail'
						style={{
							color: COLOURS.white,
							padding: 10,
						}}></Entypo>
					<TextInput
						placeholder='Email'
						placeholderTextColor='#fff'
						style={styles.inputText}
						onChangeText={(email) => setEmail(email)}
					/>
				</View>
				{/* set name */}
				<View style={styles.inputWrapper}>
					<Entypo
						size={16}
						name='user'
						style={{
							color: COLOURS.white,
							padding: 10,
						}}></Entypo>
					<TextInput
						placeholder='Name'
						placeholderTextColor='#fff'
						style={styles.inputText}
						onChangeText={(name) => setName(name)}
					/>
				</View>
				{/* set number */}
				<View style={styles.inputWrapper}>
					<Entypo
						size={16}
						name='mobile'
						style={{
							color: COLOURS.white,
							padding: 10,
						}}></Entypo>
					<TextInput
						placeholder='Number'
						placeholderTextColor='#fff'
						style={styles.inputText}
						onChangeText={(number) => setNumber(number)}
					/>
				</View>
				{/* set pass */}
				<View style={styles.inputWrapper}>
					<Entypo
						size={16}
						name='lock'
						style={{
							color: COLOURS.white,
							padding: 10,
						}}></Entypo>
					<TextInput
						placeholder='Password'
						placeholderTextColor='#fff'
						style={styles.inputText}
						onChangeText={(pass) => setPass(pass)}
					/>
				</View>
			</View>



			<View style={{ marginTop: 40 }}>
				<View style={styles.footerView}>
					<TouchableOpacity
						onPress={() => registerUser(email, name, number, pass)}>
						{/* onPress={() => navigation.navigate('Home')}> */}
						<View>
							<Text style={styles.textBoxSignup.btn}>
								Sign UP
							</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.textBoxSignup.wrapper}>
					<Text
						style={{
							...styles.textBoxSignup.small,
						}}>
						Already registered user?
					</Text>
					<TouchableOpacity
						onPress={() => navigation.navigate('Login')}>
						<View>
							<Text
								style={{
									color: COLOURS.white,
									paddingTop: 20,
									paddingRight: 10,
								}}>
								Login Here
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	</View>

	);
};

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: COLOURS.black,
	},
	scrollStyle: {
		height: '100%',
		paddingTop: 200,
		paddingHorizontal: 25,
		backgroundColor: COLOURS.black,
	},
	gap: {
		paddingStart: 20,
		color: COLOURS.backgroundMedium,
	},
	headingText: {
		paddingStart: 20,
		paddingTop: 10,
	},
	inputWrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		color: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: '#a2b4ef',
	},
	inputText: {
		marginTop: 5,
		padding: 5,
		paddingLeft: 0,
		paddingRight: 10,
		paddingBottom: 10,
		height: 50,
		borderRadius: 10,
		flex: 1,
		color: '#fff',
	},
	footerView: {
		paddingStart: 20,
		paddingTop: 10,
		marginTop: 10,
	},
	textBoxSignup: {
		wrapper: {
			flex: 1,
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginTop: 5,
		},
		btn: {
			backgroundColor: '#2196F3',
			color: COLOURS.white,
			fontWeight: '500',
			textAlign: 'center',
			textAlignVertical: 'center',
			marginBottom: 2,
			height: 40,
			borderRadius: 10,
			border: 0,
		},
		small: {
			paddingTop: 20,
			paddingStart: 80,
			color: COLOURS.backgroundMedium,
		},
	},
});

export default Login;
