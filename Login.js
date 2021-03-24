import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, TouchableWithoutFeedback, StyleSheet, Image, Alert, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
const Login = (props) => {
    const [userName, cn] = useState(),
        [psd, cp] = useState(),
        [isShow, ci] = useState(true);
    const onPress = () => {
        Alert.alert('111')
    }
    return (
        <View style={styles.middle}>
            <View style={styles.loginImg}>
                <Image
                    style={styles.tinyLogo}
                    source={require('./assets/image/person.jpg')}
                />
            </View>
            <TextInput
                style={styles.inputRent}
                onChangeText={text => cn(text)}
                value={userName}
                placeholder="请输入用户名"
                underlineColorAndroid="transparent"
                inlineImageLeft="user"
            />
            <View style={{backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextInput
                    style={{alignSelf: 'center',flex: 1}}
                    onChangeText={text => cp(text)}
                    value={psd}
                    placeholder="请输入密码"
                    textContentType="password"
                    underlineColorAndroid="transparent"
                    inlineImageLeft="user"
                    secureTextEntry={isShow}
                />
                <TouchableWithoutFeedback onPress={() => {
                    ci(!isShow)
                }}>
                    {isShow ? (
                        <Icons name="eye-with-line" size={30} style={{ alignSelf: 'center', marginRight: 10, }} />) :
                        (<Icons name="eye" size={30} style={{ alignSelf: 'center', marginRight: 10, }} />)
                    }
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.submitView}>
                <Pressable onPress={onPress} style={styles.submitPre}>
                    <Icon size={30} name="arrowright" style={styles.submitBtn} />
                </Pressable>
            </View>
        </View>



    )
}
const styles = StyleSheet.create({
    middle: {
        flex: 1,
        padding: 60,
        paddingTop: 100,
        backgroundColor: '#fff'
    },
    loginImg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    tinyLogo: {
        width: 100,
        height: 100
    },
    inputRent: {
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 20
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
        alignItems: 'center',
        width: '100%'

    },
    submitPre: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        backgroundColor: '#409EFF',
        borderRadius: 60
    },
    submitBtn: {
        color: '#fff',

    }
});


export default Login;
