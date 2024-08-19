import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <Image
        style={styles.logo}
        source={require('./components/urso1.png')}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#62D1C0',
    padding: 8,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  button: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#0215c4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  linkText: {
    marginHorizontal: 10,
    color: '#0000EE',
    textDecorationLine: 'underline',
  },
});

