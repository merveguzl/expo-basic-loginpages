import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, TextInput, TouchableOpacity } from 'react-native';

const LoginTwo = ({setIsOpen}) =>{
    const sizeOne = useRef(new Animated.Value(100)).current;
    const [temp, setTemp] = useState(100);

    if(temp === 100){
        Animated.timing(sizeOne, {
            toValue: 30,
            duration: 3000,
            useNativeDriver:false
        }).start(); 
        setTimeout(() => {
            setTemp(30)
        }, 3000);  
    }

    if(temp === 30){
        Animated.timing(sizeOne, {
            toValue: 100,
            duration: 3000,
            useNativeDriver:false
        }).start();
        setTimeout(() => {
            setTemp(100)
        }, 3000);   
    }

    return (
      <View style={styles.body}>
          <Animated.View 
            style={{
                width:sizeOne,
                height:sizeOne,
                borderRadius:100,
                backgroundColor:'#86F5F5',
                position:'absolute',
                top:200
            }}
          />
            <Animated.View 
                style={{
                    width:sizeOne,
                    height:sizeOne,
                    borderRadius:100,
                    backgroundColor:'#62FFFF',
                    position:'absolute',
                    bottom:40,
                    right:5
                }}
            />
            <Animated.View 
                style={{
                    width:sizeOne,
                    height:sizeOne,
                    borderRadius:100,
                    backgroundColor:'#25E1FA',
                    position:'absolute',
                    left:300,
                    bottom:300
                }}
            />
            <Animated.View 
                style={{
                    width:sizeOne,
                    height:sizeOne,
                    borderRadius:100,
                    backgroundColor:'#3DD3E6',
                    position:'absolute',
                    right:20
                }}
            />
            <Animated.View 
                style={{
                    width:sizeOne,
                    height:sizeOne,
                    borderRadius:100,
                    backgroundColor:'#62FFFF',
                    position:'absolute',
                    left:50,
                    bottom:0
                }}
            />
            <View style={styles.loginC} >
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
                        <Text style={{fontSize:20, color:'#003B43', fontWeight:"500"}} >
                            Giriş Yap
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.forget} >
                        <Text style={{fontSize:20, color:'#3DD3E6', fontWeight:"500"}} >
                            Şifremi Unuttum
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
      </View>
    );
}

export default LoginTwo

const styles = StyleSheet.create({
    body:{
        flex:1
    },
    loginC:{
        position:"absolute",
        width:'90%',
        height:'70%',
        borderRadius:40,
        left:'5%',
        top:'15%',
        padding:2
    },
    loginContainer:{
        flex:1,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'space-around'
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
        borderRadius:5
    }
  
  });