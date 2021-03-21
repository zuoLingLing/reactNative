import React,{useState,useEffect} from 'react';
import {View, TextInput,Text} from 'react-native';


const Login = (props)=>{
    const [value, onChangeText] = useState('请输入用户名');

    return(
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
