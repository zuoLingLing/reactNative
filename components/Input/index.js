import React, { useState, useEffect } from 'react';
import { ScrollView, Viedefaultw, TextInput, TouchableWithoutFeedback, StyleSheet, Image, Alert, Pressable, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';

const Input = (props) => {
    const { type, leftImg, isClear, value, onChangeText, title, inlineImagePadding, iconSize, multiline, numberOfLines, style, ViewStyle } = props;
    [isShow, ci] = useState(true);
    return (
        <View style={{ backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between', ...ViewStyle }}>
            <TextInput
                style={{ alignSelf: 'center', flex: 1, ...style }}
                onChangeText={text => onChangeText ?  onChangeText(text) : {}}
                value={value}
                placeholder={`请输入${title}`}
                textContentType={type ? type : 'username'}
                underlineColorAndroid="transparent"
                inlineImageLeft={leftImg ? leftImg : ''}
                secureTextEntry={type=='password' ? isShow : false}
                inlineImagePadding={inlineImagePadding ? inlineImagePadding : 15}
                multiline={multiline ? multiline : false}
                numberOfLines={numberOfLines ? numberOfLines : 1}
            />
            {
                isClear && <TouchableWithoutFeedback onPress={() => {
                    onChangeText('')
                }}>
                    <Icon size={iconSize ? iconSize : 20} name="closecircleo" style={{ alignSelf: 'center', marginRight: 10, }} />
                </TouchableWithoutFeedback>
            }
            {
                type == 'password' && <TouchableWithoutFeedback onPress={() => {
                    ci(!isShow)
                }}>
                    {isShow ? (
                        <Icons name="eye-with-line" size={iconSize ? iconSize : 20} style={{ alignSelf: 'center', marginRight: 10, }} />) :
                        (<Icons name="eye" size={iconSize ? iconSize : 20} style={{ alignSelf: 'center', marginRight: 10, }} />)
                    }
                </TouchableWithoutFeedback>
            }
        </View>
    )
}

export default Input;
