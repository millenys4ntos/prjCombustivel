import { StatusBar } from 'expo-status-bar';
import { React, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
    const [gas, setgas] = useState();
    const [alc, setalc] = useState();
    const [resultado, setResultado] = useState(0);

    function dividir(){
      setResultado(parseFloat(alc) / parseFloat(gas));
    }

  return (
    <View style={styles.container}>
     
     <View style={styles.nav}>
      <Text style={styles.navtxt}>Cálculo do Combustível</Text>
      </View>

      <View style={styles.bloco}>
      <Text style={styles.textoB}>Preço do Álcool</Text>
        <TextInput 
          style={styles.input}
          keyboardType= "numeric"
          value={alc}
          onChangeText={(texto)=>setalc(texto)}
        />
      </View>
      <View style={styles.bloco}>
      <Text style={styles.textoB}>Preço da Gasolina</Text>
        <TextInput 
          style={styles.input}
          keyboardType= "numeric"
          value={gas}
          onChangeText={(texto)=>setgas(texto)}
        />
      </View>

      <View style={styles.bloco}>
        <TouchableOpacity 
         style={styles.botao}
          onPress = {dividir}>

          <Text style={styles.textoBotao}>Calcular</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.bloco}>
        <Text style={styles.textoB}>Resultado:{resultado}</Text>
      </View>
    </View>
   );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FDDDDE',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    navtxt: {
      fontSize: 20,
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
    },

    texto: {
      color: '#000',
      fontSize:30,
    },

    textoB: {
      fontSize: 20,
      marginTop: '10px',
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
    },

    input:{
      bordercolor: '#000',
      borderWidth: 2,
      fontSize: 30,
      width: '80%',
  
    },

    bloco: {
      width: '100%',
      alignItems: 'center',
      marginTop: 30,
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
    },

    botao: {
      backgroundColor: '#000',
      width: '80%',
      textAlign: 'center',
      marginTop: '12px'
    },

    textoBotao: {
      color: '#fff',
      fontSize:30,
      textAlign: 'center',
      alignItems: 'center'
    }
  });