import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoginFour from './component/LoginFour';
import LoginOne from './component/LoginOne';
import LoginThree from './component/LoginThree';
import LoginTwo from './component/LoginTwo';

export default function App() {

  const [page, setPage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const setComponent = () =>{
    switch (page) {
      case "one": return <LoginOne setIsOpen={setIsOpen} />
      case "two": return <LoginTwo setIsOpen={setIsOpen} />
      case "three": return <LoginThree setIsOpen={setIsOpen} />
      case "four": return <LoginFour setIsOpen={setIsOpen} />
    }
  }

  const onChangeFunc = (params) =>{
    setPage(params);
    setIsOpen(true);
  }

  const component = setComponent();

  return (
    <View style={styles.body}>
        {isOpen === false ? (
          <View style={styles.container} >
            <TouchableOpacity style={styles.button} onPress={()=>onChangeFunc("one")} >
              <Text style={styles.text} >
                  Login Page One
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>onChangeFunc("two")} >
              <Text style={styles.text}>
                  Login Page Two
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>onChangeFunc("three")} >
              <Text style={styles.text}>
                  Login Page Three
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>onChangeFunc("four")} >
              <Text style={styles.text}>
                  Login Page Four
              </Text>
            </TouchableOpacity>
          </View>
        ):(
          component
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    justifyContent:'center',

  },
  container: {
    height:'50%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:"space-around",

  },
  button:{
    height:50,
    width:'80%',
    alignItems:"center",
    borderColor:"#FF8B00",
    justifyContent:"center",
    borderRadius:5,
    borderWidth:1
  },
  text:{
    fontSize:16,
    color:"#AF5F00"
  }
});
