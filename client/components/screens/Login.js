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

const Login = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [isInvalid, setIsInvalid] = useState(false);

	const validateUser = async (email, password) => {
		try {
			let data = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email,
					password,
				}),
			};
			const re = await fetch(
				'http://192.168.29.81:4000/api/v1/login',
				data
			);
			if (re.status != 200) {
				setIsInvalid(true);
			} else {
				setIsInvalid(false);
				const user = await re.json();
				// Do something with user
				// use it for profile or save it in localstorage
				navigation.navigate('Home');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={styles.wrapper}>
			<ScrollView style={styles.scrollStyle}>
				<Text
					style={{
						color: COLOURS.blue,
						fontSize: 40,
						fontWeight: 'bold',
						paddingStart: 20,
					}}>
					Login
				</Text>
				<Text style={styles.gap}></Text>

				{/* Email field*/}
				<View style={styles.headingText}>
					<Text
						style={{
							color: COLOURS.white,
						}}>
						{' '}
						Email
					</Text>
					<TextInput
						placeholder='Email'
						style={styles.inputText}
						onChangeText={(email) => setEmail(email)}
					/>
				</View>

				{/* number field*/}
				<View style={{ paddingStart: 20, paddingTop: 10 }}>
					<Text
						style={{
							color: COLOURS.white,
						}}>
						{' '}
						Password
					</Text>
					<TextInput
						placeholder='Password'
						secureTextEntry={true}
						onChangeText={(pass) => setPass(pass)}
						style={styles.inputText}
					/>
				</View>
				<View style={{ paddingStart: 20, paddingTop: 10 }}>
					<Text
						style={{
							color: COLOURS.red,
							display: isInvalid ? 'flex' : 'none',
						}}>
						{' '}
						Invalid email or password
					</Text>
				</View>
				<View style={{ marginTop: 80 }}>
					<View style={styles.footerView}>
						<TouchableOpacity
							onPress={() => validateUser(email, pass)}>
							{/* onPress={() => navigation.navigate('Home')}> */}
							<View>
								<Text style={styles.textBoxLogin.btn}>
									Login
								</Text>
							</View>
						</TouchableOpacity>
					</View>
					<Text style={styles.textBoxLogin.small}>
						Not a regestered user?
					</Text>
					<View style={{ ...styles.footerView, marginTop: 0 }}>
						<TouchableOpacity
							onPress={() => navigation.navigate('Sign')}>
							<View>
								<Text style={styles.textBoxLogin.btn}>
									Sign Up
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
	inputText: {
		marginTop: 5,
		padding: 5,
		paddingLeft: 15,
		height: 50,
		borderRadius: 10,
		backgroundColor: COLOURS.backgroundMedium,
	},
	footerView: {
		paddingStart: 20,
		paddingTop: 10,
		marginTop: 10,
	},
	textBoxLogin: {
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
			paddingStart: 90,
			color: COLOURS.backgroundMedium,
		},
	},
});

export default Login;
