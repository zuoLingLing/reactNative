import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, Text } from 'react-native';


const Login = (props) => {
    const [value, onChangeText] = useState('请输入用户名');

    return (
        <ScrollView
            contentContainerStyle={{ flex: 1 }}
            keyboardDismissMode="on-drag"
            scrollEnabled={false}
        >
            <Text>111</Text>
        </ScrollView>

    )
}

export default Login;
