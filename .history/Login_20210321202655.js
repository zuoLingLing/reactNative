import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Login = (props) => {
    const [userName, cn] = useState(),
        [psd, cp] = useState();
    const onPress = () => {
        Alert.alert('111')
    }
    return (
        <SafeAreaView style={styles.container}>
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
                <Icon name="login" size={30} color="#900" />
            </View>
        </SafeAreaView>



    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    middle: {
        backgroundColor: '#ffffff',
        padding: 30
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
    btnText: {
        margin: 10,
        width: 50,
        height: 30,
        lineHeight: 30,
        backgroundColor: "#1E90FF",
        textAlign: 'center'
    }
});


export default Login;
