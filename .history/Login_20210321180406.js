import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, Text, StyleSheet } from 'react-native';


const Login = (props) => {
    const [value, onChangeText] = useState();

    return (
        <View style={styles.middle}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder="请输入用户名"
            />
            <TextInput
                style={}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder="请输入密码"
                textContentType="password"
            />
        </View>

    )
}
const styles = StyleSheet.create({
    middle: {
        flex: 1,
        padding: 30,
        backgroundColor: '#ffffff',
    },
    inputRent:{
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1
    }
});


export default Login;
