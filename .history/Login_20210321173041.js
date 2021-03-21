import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, Text } from 'react-native';


const Login = (props) => {
    const [value, onChangeText] = useState('请输入用户名');

    return (
        <ScrollView
            contentContainerStyle={{ flex: 1 }} // 非常重要，让ScrollView的子元素占满整个区域
            keyboardDismissMode="on-drag" // 拖动界面输入法退出
            scrollEnabled={false} // 当值为false的时候，内容不能滚动，默认值为true
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
