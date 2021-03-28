import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Alert, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import Input from './components/Input/index.js';
const Login = ({navigation}) => {
    console.log(123);
    const [userName, cn] = useState(),
        [psd, cp] = useState();
    const onPress = () => {
        navigation.navigate('Home')
    }
    return (
        <View style={styles.middle}>
            <View style={styles.loginImg}>
                <Image
                    style={styles.tinyLogo}
                    source={require('./assets/image/person.jpg')}
                />
            </View>
            <Input
                title='用户名'
                leftImg='user'
                isClear={true}
                value={userName}
                onChangeText={(text) => {
                    cn(text)
                }}
                inlineImagePadding={15}
                ViewStyle={
                    {
                        borderWidth: 1,
                        borderRadius: 20,
                        marginBottom: 20
                    }
                }

            />
            <Input
                title={'密码'}
                type={'password'}
                leftImg={'password'}
                isClear={true}
                value={psd}
                onChangeText={(text) => {
                    cp(text)
                }}
                inlineImagePadding={18}
                ViewStyle={
                    {
                        borderWidth: 1,
                        borderRadius: 20,
                        marginBottom: 20
                    }
                }
            />
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
