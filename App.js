import { StatusBar } from 'expo-status-bar';
import { React, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
    const [gas, setgas] = useState();
    const [alc, setalc] = useState();
    const [resultado, setResultado] = useState();

    function dividir(){
      let resultado = parseFloat(alc) / parseFloat(gas);
      if(resultado < 0.7){
        setResultado('Abasteça com Álcool.')
      }
      else{
        setResultado('Abasteça com Gasolina.')
      }
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
        <Text style={styles.textoB}>{resultado}</Text>
      </View>
    </View>
   );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#081D4A',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    navtxt: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 35,
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
    },

    texto: {
      color: '#FCF4ED',
      fontSize:30,
    },

    textoB: {
      color: '#fff',
      fontSize: 20,
      marginTop: '10px',
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
    },

    input:{
      backgroundColor: '#E9B486',
      borderColor: '#B85600',
      color: '#061637',
      borderWidth: 2,
      fontSize: 30,
      width: '15%',
      borderRadius: '12px',
    },

    bloco: {
      borderColor: '#fff',
      width: '100%',
      alignItems: 'center',
      marginTop: 30,
      display: 'flex', 
      justifyContent: 'center',
    },

    botao: {
      backgroundColor: '#E07529',
      width: '180px',
      height: '35px',
      alignItems: 'center',
      marginTop: '12px',
      borderRadius: '18px',
    },

    textoBotao: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
    }
  });