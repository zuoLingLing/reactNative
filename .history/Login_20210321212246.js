import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const Login = (props) => {
    const [userName, cn] = useState(),
        [psd, cp] = useState();
    const onPress = () => {
        Alert.alert('111')
    }
    return (
        <View style={styles.middle}>
            <TextInput
                style={styles.inputRent}
                onChangeText={text => cn(text)}
                value={userName}
                placeholder="请输入用户名"
            />
            <TextInput
                style={styles.inputRent}
                onChangeText={text => cp(text)}
                value={psd}
                placeholder="请输入密码"
                textContentType="password"
            />
            <View style={styles.submitView}>
                <Icon onPress={onPress} size={30} name="arrowright" style={styles.submitBtn} />
            </View>
        </View>



    )
}
const styles = StyleSheet.create({
    middle: {
        flex:1,
        justifyContent:'center',
        backgroundColor: '#fff'
    },
    inputRent: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20
    },
    button: {
        padding: 10,
        backgroundColor: '#f50000',
        width: 30,
        height: 30
    },
    submitView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitBtn: {
        backgroundColor: 'red',
        padding: 10,
        color: '#fff',
        width: 50,
        height: 50,
        borderRadius: 50
    }
});


export default Login;
