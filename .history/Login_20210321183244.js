import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Login = (props) => {
    const [value, onChangeText] = useState();
    const onPress = () => {
        alert(111)
    }
    return (
        <View style={styles.middle}>
            <TextInput
                style={styles.inputRent}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder="请输入用户名"
            />
            <TextInput
                style={styles.inputRent}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder="请输入密码"
                textContentType="password"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text>登录</Text>
            </TouchableOpacity>
        </View>


    )
}
const styles = StyleSheet.create({
    middle: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding:30
    },
    inputRent: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding:30
    }
});


export default Login;
