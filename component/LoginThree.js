import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginThree = ({setIsOpen}) =>{

    const [moon, setMoon] = useState(false);

    return (
      <View style={styles.body}>
          <ImageBackground source={ moon === false ? require("../image/one.jpg") : require("../image/two.jpg") } resizeMode="cover"  style={{width:'100%', height:'100%'}} >
            <TouchableOpacity style={[styles.check, {alignItems:moon === false ? "flex-end" : "flex-start" }]} onPress={()=>setMoon(!moon)} >
                {moon === false ?(
                    <Image source={require("../image/moon.png")} resizeMode="contain" style={{width:28, height:28}} />
                ):(
                    <Image source={require("../image/sun.png")} resizeMode="contain" style={{width:28, height:28}} />
                )}
            </TouchableOpacity>
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
          </ImageBackground>
      </View>
    );
}

export default LoginThree

const styles = StyleSheet.create({
    body:{
        flex:1
    },
    loginC:{
        position:"absolute",
        width:'90%',
        height:'60%',
        borderRadius:40,
        left:'5%',
        top:'10%',
        padding:2,
        alignItems:'center',
        justifyContent:'center'
    },
    loginContainer:{
        width:'100%',
        height:'60%',
        borderRadius:40,
        alignItems:'center',
        justifyContent:'space-around',
        bottom:40
    },
    input:{
        height:50,
        width:'80%',
        borderBottomColor:"#E6E6E6",
        borderBottomWidth:1,
        padding:10
    },
    forget:{
        height:30,
        width:'60%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    sign:{
        height:50,
        width:'60%',
        backgroundColor:'#D8E8EA',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        top:100
    },
    check:{
        width:80,
        height:40,
        borderRadius:20,
        backgroundColor:'#ffff',
        position:'absolute',
        top:40,
        right: 10,
        padding:2,
        justifyContent:'center'
    },

  });