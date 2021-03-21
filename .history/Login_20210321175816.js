import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, Text, StyleSheet } from 'react-native';


const Login = (props) => {
    const [value, onChangeText] = useState();

    return (
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder="请输入用户名"
            />
        </View>

    )
}
const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });


export default Login;
