import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const LoginOne = ({setIsOpen}) =>{
    return (
      <View style={styles.body}>
            <View style={styles.loginContainer}>
                <TextInput 
                    placeholder="Şİfre"
                    style={styles.input}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="E-Posta"
                />
                <TouchableOpacity style={styles.sign} onPress={()=>setIsOpen(false)} >
                    <Text style={{fontSize:20, color:'#ffff', fontWeight:"700"}} >
                        Giriş Yap
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.forget} >
                    <Text style={{fontSize:20, color:'#620000', fontWeight:"500"}} >
                        Şifremi Unuttum
                    </Text>
                </TouchableOpacity>
            </View>
          
            <View style={styles.bottomColor} />
            <View style={styles.bottomColor2} />
            <View style={styles.bottomColorFlow} />
            <View style={styles.bottomColor3} />
      </View>
    );
}

export default LoginOne

const styles = StyleSheet.create({
    body:{
        flex:1,
    },
    loginContainer:{
        alignItems:"center",
        height:300,
        justifyContent:'space-around',
        marginTop:100
    },
    input:{
        height:50,
        width:'80%',
        borderBottomColor:"#E6E6E6",
        borderBottomWidth:1,
        padding:10
    },
    sign:{
        height:50,
        width:'60%',
        backgroundColor:'#FF8B00',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    forget:{
        height:30,
        width:'60%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    bottomColor:{
        width:'100%',
        height:150,
        backgroundColor:"#FF8B00",
        position:"absolute",
        bottom:-50,
        borderRadius:100,
        opacity:0.33,
        zIndex: -10,
    },
    bottomColor2:{
        width:150,
        height:330,
        backgroundColor:"#FF8B00",
        position:"absolute",
        bottom:-100,
        left:50,
        borderRadius:150,
        transform: [{ rotateX: 0 }, { rotateZ: 4 }],
        opacity:0.63
    },
    bottomColorFlow:{
        width:150,
        height:330,
        backgroundColor:"#ffff",
        position:"absolute",
        bottom:-100,
        left:50,
        borderRadius:150,
        transform: [{ rotateX: 0 }, { rotateZ: 4 }],
        zIndex:-1
    },
    bottomColor3:{
        width:150,
        height:350,
        backgroundColor:"#FF8B00",
        position:"absolute",
        bottom:-100,
        borderRadius:150,
        left:-30,
        opacity:1,
    }
  
  });
  