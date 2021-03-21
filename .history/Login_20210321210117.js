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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                <Icon.Button size={30} name="arrowright" style={styles.submit}>
                </Icon.Button>
            </View>
        </ScrollView>



    )
}
const styles = StyleSheet.create({
    middle: {
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
    submit:{
        backgroundColor:'red',
        padding:10,
        color:'#fff',
        width:30,
        height:30,
        borderRadius:0.5
    }
});


export default Login;
