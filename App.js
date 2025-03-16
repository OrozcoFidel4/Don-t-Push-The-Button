import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {

  const ButtonAlert = () =>
    Alert.alert('I told you', "Don't push again", [
      {text: 'OK'},
    ]);

  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>Don't push the button</Text>
      
      <TouchableOpacity style={styles.button} onPress={ButtonAlert}>
        <Text style={styles.buttonText}>Don't Push</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  descriptionText:{
    fontSize: 18,
    fontWeight: 'bold'
  },

  button:{
    margin: 20,
    backgroundColor: 'red',
    width: '25%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2
  },

  buttonText: {
    color: 'white'

  }

});
