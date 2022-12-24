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
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
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


const Signup = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setNumber] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [msgText, setMsgText] = useState('');
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
                    mobileNumber
                }),
            };
            const re = await fetch(
                serverUrl + 'register',
                data
            );
            if (re.status != 201) {
                let txt = await re.json();
                setMsgText(txt);
                setIsInvalid(true);
            } else {
                setIsInvalid(false);
                setMsgText('');

                const user = await re.json();
                // Do something with user
                // use it for profile or save it in localstorage
                try {
                    await AsyncStorage.setItem('user', JSON.stringify(user));
                } catch (error) {
                    console.log(error)
                }
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
                {/* set name */}
                <View style={styles.inputWrapper}>
                    <Entypo
                        size={16}
                        name='mobile'
                        style={{
                            color: COLOURS.white,
                            padding: 10,
                        }}></Entypo>
                    <TextInput
                        placeholder='Mobile Number'
                        placeholderTextColor='#fff'
                        style={styles.inputText}
                        keyboardType='numeric'
                        onChangeText={(no) => {
                            setNumber(no);
                        }}
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

            <View style={{ paddingStart: 20, paddingTop: 10 }}>
                <Text
                    style={{
                        color: COLOURS.red,
                        display: isInvalid ? 'flex' : 'none',
                    }}>
                    {msgText}
                </Text>
            </View>

            <View style={{ marginTop: 40 }}>
                <View style={styles.footerView}>
                    <TouchableOpacity
                        onPress={() => validateUser(name, email, pass)}>
                        {/* onPress={() => navigation.navigate('Home')}> */}
                        <View>
                            <Text style={styles.textBoxSignup_btn}>
                                Create account
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.textBoxSignup_wrapper}>
                    <Text
                        style={{
                            ...styles.textBoxSignup_small,
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
                                    fontSize: 15,
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
        paddingTop: 50,
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
        // fontSize: 20,
        borderBottomColor: '#a2b4ef',
        marginTop: 20,
        paddingTop: 10,
    },
    inputText: {
        padding: 5,
        paddingLeft: 0,
        paddingRight: 10,
        paddingBottom: 10,
        height: 50,
        borderRadius: 10,
        flex: 1,
        color: '#fff',
        // fontSize: 17,
    },
    footerView: {
        paddingStart: 20,
        paddingTop: 10,
        marginTop: 10,
    },
    textBoxSignup_wrapper: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    textBoxSignup_btn: {
        backgroundColor: '#2196F3',
        color: COLOURS.white,
        fontWeight: '500',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 2,
        height: 50,
        fontSize: 18,
        borderRadius: 10,
    },
    textBoxSignup_small: {
        paddingTop: 20,
        paddingStart: 50,
        color: COLOURS.backgroundMedium,
        fontSize: 16,
    },
});

export default Signup;