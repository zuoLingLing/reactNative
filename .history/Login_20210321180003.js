import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, Text, StyleSheet } from 'react-native';


const Login = (props) => {
    const [value, onChangeText] = useState();

    return (
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder="请输入用户名"
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder="请输入用户名"
            />
        </View>

    )
}
const styles = StyleSheet.create({
    
});


export default Login;
