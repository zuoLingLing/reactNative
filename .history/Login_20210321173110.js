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
            <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
            </View>
        </ScrollView>

    )
}

export default Login;
