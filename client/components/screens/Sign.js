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
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [isInvalid, setIsInvalid] = useState(false);
	const [msgText, setMsgText] = useState('');

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
<<<<<<< HEAD
				'http://192.168.29.81:4000/api/v1/register',
=======
				'http://192.168.0.104:4000/api/v1/register',
>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
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

	return (
		<ScrollView style={styles.wrapper}>
			<Text style={styles.scrollStyle}>Register</Text>
			<Text style={styles.gap}></Text>
			<View style={styles.headingText}>
				<Text
					style={{
						color: COLOURS.white,
					}}>
					{' '}
					Name
				</Text>
				<TextInput
					placeholder='Name'
					style={styles.inputText}
					onChangeText={(name) => setName(name)}
				/>
			</View>

			{/* Email field*/}
			<View style={{ paddingStart: 20, paddingTop: 10 }}>
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
					onChangeText={(mail) => setEmail(mail)}
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
					placeholder='password`'
					style={styles.inputText}
					onChangeText={(pass) => setPass(pass)}
<<<<<<< HEAD
					// secureTextEntry={true}
=======
				// secureTextEntry={true}
>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
				/>
			</View>
			<View style={{ paddingStart: 20, paddingTop: 10 }}>
				<Text
					style={{
						color: COLOURS.red,
						display: isInvalid ? 'flex' : 'none',
					}}>
					{msgText}
				</Text>
			</View>
			<View style={{ marginTop: 60 }}>
				<View style={styles.footerView}>
					<TouchableOpacity
						onPress={() => validateUser(name, email, pass)}>
						<View>
							<Text style={styles.textBoxLogin.btn}>Signup</Text>
						</View>
					</TouchableOpacity>
				</View>
<<<<<<< HEAD
				<View style={styles.textBoxLogin.wrapper}>
					<Text
						style={{
							...styles.textBoxLogin.small,
						}}>
						Already have an acccount?
					</Text>
					<TouchableOpacity
						onPress={() => navigation.navigate('Login')}>
						<View>
							<Text
								style={{
									color: COLOURS.white,
									paddingTop: 20,
								}}>
								Login Here
							</Text>
=======
				<Text style={styles.textBoxLogin.small}>
					Already have an acccount?
				</Text>
				<View style={{ ...styles.footerView, marginTop: 0 }}>
					<TouchableOpacity
						onPress={() => navigation.navigate('Login')}>
						<View>
							<Text style={styles.textBoxLogin.btn}>Log In</Text>
>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		paddingTop: 150,
		paddingHorizontal: 25,
		backgroundColor: COLOURS.black,
	},
<<<<<<< HEAD

=======
>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
	scrollStyle: {
		color: COLOURS.blue,
		fontSize: 40,
		fontWeight: 'bold',
		paddingStart: 20,
	},
<<<<<<< HEAD

=======
>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
	gap: {
		paddingStart: 20,
		color: COLOURS.backgroundMedium,
	},
<<<<<<< HEAD

=======
>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
	headingText: {
		paddingStart: 20,
		paddingTop: 10,
	},
<<<<<<< HEAD

=======
>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
	inputText: {
		marginTop: 5,
		padding: 5,
		paddingLeft: 15,
		height: 50,
		borderRadius: 10,
		backgroundColor: COLOURS.backgroundMedium,
	},
<<<<<<< HEAD

=======
>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
	footerView: {
		paddingStart: 20,
		paddingTop: 10,
		marginTop: 10,
	},
<<<<<<< HEAD

	textBoxLogin: {
		wrapper: {
			flex: 1,
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginTop: 5,
		},
=======
	textBoxLogin: {
>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
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
<<<<<<< HEAD
			paddingStart: 70,
=======
			paddingStart: 90,
>>>>>>> c1b14e9723de4849f1c768c40927283256a48031
			color: COLOURS.backgroundMedium,
		},
	},
});
export default Login;
