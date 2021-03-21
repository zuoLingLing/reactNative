import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';


const Login = (props) => {
    const [value, onChangeText] = useState('请输入用户名');

    return (
        <ScrollView
        contentContainerStyle={{ flex: 1 }} // 非常重要，让ScrollView的子元素占满整个区域
        keyboardDismissMode="on-drag" // 拖动界面输入法退出
        keyboardShouldPersistTaps={false} // 点击输入法以外的区域，输入法退出 不加这两句也可以实现点击空白处收回键盘
        scrollEnabled={false} // 当值为false的时候，内容不能滚动，默认值为true
      ></ScrollView>
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </View>

    )
}

export default Login;
