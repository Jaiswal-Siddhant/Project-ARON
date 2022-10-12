import { View, Text, ScrollView, TouchableOpacity, StatusBar, Image, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLOURS } from '../database/database'
const Login = ({ navigation }) => {
    return (
        <ScrollView
            style={{
                paddingTop: 200,
                paddingHorizontal: 25,
                backgroundColor: COLOURS.black
            }}>


            <Text
                style={{
                    color: COLOURS.blue,
                    fontSize: 40,
                    fontWeight: 'bold',
                    paddingStart: 20,

                }}
            >Register</Text>
            <Text
                style={{
                    paddingStart: 20,
                    color: COLOURS.backgroundMedium,
                }}
            >Enter Registration Details</Text>
            <View
                style={{ paddingStart: 20, paddingTop: 10 }}
            >
                <Text
                    style={{
                        color: COLOURS.white
                    }}
                > Name</Text>
                <TextInput
                    placeholder='Name'
                    style={{
                        padding: 5,
                        height: 50,
                        borderRadius: 10,
                        backgroundColor: COLOURS.backgroundMedium
                    }}
                />
            </View>

            {/* Email field*/}

            <View
                style={{ paddingStart: 20, paddingTop: 10 }}
            >
                <Text
                    style={{
                        color: COLOURS.white
                    }}
                > Email</Text>
                <TextInput
                    placeholder='Email'
                    style={{
                        padding: 5,
                        height: 50,
                        borderRadius: 10,
                        backgroundColor: COLOURS.backgroundMedium
                    }}
                />
            </View>

            {/* number field*/}
            <View
                style={{ paddingStart: 20, paddingTop: 10 }}
            >
                <Text
                    style={{
                        color: COLOURS.white
                    }}
                > Password</Text>
                <TextInput
                    placeholder='password`'
                    style={{
                        padding: 5,
                        height: 50,
                        borderRadius: 10,
                        backgroundColor: COLOURS.backgroundMedium
                    }}
                />
            </View>
            <View
                style={{ paddingStart: 20, paddingTop: 10 }}
            >
                <Button
                    title='Sign Up'
                    onPress={() => navigation.navigate("Home")}
                ></Button>
            </View>
            <Text
                style={{
                    paddingTop: 20,
                    paddingStart: 80,
                    color: COLOURS.backgroundMedium,
                }}
            >Already regestered user?</Text>
            <View
                style={{ paddingStart: 20, paddingTop: 10 }}
            >
                <Button
                    title='Login'
                    onPress={() => navigation.navigate("Login")}
                ></Button>
            </View>
        </ScrollView>
    )
}

export default Login