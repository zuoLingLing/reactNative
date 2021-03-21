import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, Text, StyleSheet, TouchableOpacity,Alert } from 'react-native';


const Login = (props) => {
    const [name, cn] = useState(),
    [psd,cp]=useState();
    const onPress = () => {
        Alert.alert('111')
    }
    return (
        <View style={styles.middle}>
            <TextInput
                style={styles.inputRent}
                onChangeText={text => cn(text)}
                value={name}
                placeholder="请输入用户名"
            />
            <TextInput
                style={styles.inputRent}
                onChangeText={text => cp(text)}
                value={psd}
                placeholder="请输入密码"
                // textContentType="password"
            />
            {/* <TouchableOpacity onPress={onPress}>
                <Text>登录</Text>
            </TouchableOpacity> */}
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
    },
    btnText:{
        margin:10, 
        width:50, 
        height:30, 
        lineHeight:30, 
        backgroundColor:"#1E90FF", 
        textAlign:'center'
    }
});


export default Login;
