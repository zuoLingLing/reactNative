import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, Text, StyleSheet,Button } from 'react-native';


const Login = (props) => {
    const [value, onChangeText] = useState();

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
            <Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
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
        borderWidth: 1,
        marginBottom:20
    }
});


export default Login;
