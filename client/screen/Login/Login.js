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
import Entypo from 'react-native-vector-icons/Entypo';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { serverUrl } from '../../components/database/Database';

const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#87CEEB',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
    yellow: '#FFD700'
};

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
                serverUrl + 'login',
                data
            );
            if (re.status != 200) {
                setIsInvalid(true);
            } else {
                setIsInvalid(false);
                const user = await re.json();
                // 		// Do something with user
                // 		// use it for profile or save it in localstorage
                try {

                    await AsyncStorage.setItem('user', JSON.stringify(user));
                    console.log(await AsyncStorage.getItem('user'));
                } catch (error) {

                }
                navigation.navigate('Home');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.wrapper}>
            <ScrollView style={styles.scrollStyle}>
                <Image
                    source={require('../../assets/appIcons/app-icon.png')}
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
                </View>

                {/* password field*/}
                <View style={{ paddingStart: 20, paddingTop: 15 }}>
                    <Text
                        style={{
                            color: COLOURS.white,
                        }}>
                        {' '}
                    </Text>
                    <View style={styles.inputWrapper}>
                        <Entypo
                            name='lock'
                            size={15}
                            style={{
                                color: COLOURS.white,
                                padding: 10,
                            }}></Entypo>

                        <TextInput
                            placeholder='Password'
                            secureTextEntry={true}
                            placeholderTextColor='#fff'
                            onChangeText={(pass) => setPass
                                (pass)}
                            style={styles.inputText}
                        />
                    </View>
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
                <View style={{ marginTop: 50 }}>
                    <View style={styles.footerView}>
                        <TouchableOpacity
                            onPress={() => validateUser(email, pass)}>
                            {/* onPress={() => navigation.navigate('Home')}> */}
                            <View>
                                <Text style={{
                                    backgroundColor: '#2196F3',
                                    fontWeight: '500',
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    marginBottom: 2,
                                    borderRadius: 10,
                                    height: 50,
                                    color: COLOURS.white, fontSize: 17,
                                }}>
                                    Login
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textBoxSignup_wrapper}>
                        <Text
                            style={{
                                ...styles.textBoxSignup_small,
                            }}>
                            Not a regestered user?
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Signup')}>
                            <View>
                                <Text
                                    style={{
                                        color: COLOURS.white,
                                        paddingTop: 20, fontSize: 16,
                                    }}>
                                    Sign Up Here
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
        backgroundColor: '#112',
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
        color: '#fff', fontSize: 17
    },
    footerView: {
        paddingStart: 20,
        paddingTop: 10,
        marginTop: 10,
    },
    // textBoxSignup_btn: {
    //     backgroundColor: '#2196F3',
    //     color: COLOURS.white,
    //     fontWeight: '500',
    //     textAlign: 'center',
    //     textAlignVertical: 'center',
    //     marginBottom: 2,
    //     height: 40,
    //     borderRadius: 10,
    //     border: 0,
    // },
    textBoxSignup_small: {
        paddingTop: 20,
        paddingStart: 45,
        color: COLOURS.backgroundMedium,
        fontSize: 16,
    },
    textBoxSignup_wrapper: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    }
});

export default Login;