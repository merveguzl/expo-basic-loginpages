import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

const LoginFour = ({setIsOpen}) =>{

    const [moon, setMoon] = useState(false);

    return (
      <View style={styles.body}>
        <View
            style={[styles.styleLine,{
                width:'80%',
                height:2,
                top:80,
            }]}
        />
        <View 
            style={[styles.styleLine,{
                width:'60%',
                height:1.5,
                top:100,
            }]}
        />
        <View 
            style={[styles.styleLine,{
                width:'40%',
                height:1,
                top:120,
            }]}
        />
        <View 
            style={[styles.styleLine,{
                width:'20%',
                height:0.5,
                top:140,
            }]}
        />
        <View style={styles.loginC} >
            <View style={styles.loginContainer}>
                <TextInput 
                    placeholder="Şİfre"
                    style={styles.input}
                    placeholderTextColor="white"
                />
                <TextInput 
                    style={styles.input}
                    placeholder="E-Posta"
                    placeholderTextColor="white"
                />
            </View>
            <TouchableOpacity style={styles.sign} onPress={()=>setIsOpen(false)} >
                <Text style={{fontSize:20, color:'#00006A', fontWeight:"500"}} >
                    Giriş Yap
                </Text>
            </TouchableOpacity>
        </View>
        <View
            style={[styles.styleTwo,{
                width:'80%',
                height:2,
                bottom:80,
            }]}
        />
        <View 
            style={[styles.styleTwo,{
                width:'60%',
                height:1.5,
                bottom:100,
            }]}
        />
        <View 
            style={[styles.styleTwo,{
                width:'40%',
                height:1,
                bottom:120,
            }]}
        />
        <View 
            style={[styles.styleTwo,{
                width:'20%',
                height:0.5,
                bottom:140,
            }]}
        />
      </View>
    );
}

export default LoginFour

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:"#2B2B2B",
        alignItems:'center',
        justifyContent:'center'
    },
    loginC:{
        width:'90%',
        height:'60%',
        borderRadius:40,
        padding:2,
        alignItems:'center',
        justifyContent:'center'
    },
    loginContainer:{
        width:'100%',
        height:'50%',
        borderRadius:40,
        alignItems:'center',
        justifyContent:'space-around',
    },
    input:{
        height:50,
        width:'80%',
        borderBottomColor:"#AAAAAA",
        borderBottomWidth:1,
        padding:10
    },
    sign:{
        height:50,
        width:'90%',
        backgroundColor:'#646464',
        alignItems:'center',
        justifyContent:'center',
    },
    styleLine: {
        position: 'absolute',
        backgroundColor:'#00006A',
        left:0
    },
    styleTwo: {
        position: 'absolute',
        backgroundColor:'#00006A',
        right:0
    }
  });