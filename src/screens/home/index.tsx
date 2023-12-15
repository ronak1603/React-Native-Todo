import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const Home = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="My Todos"
          value={text}
          onChangeText={onChangeText}
          style={styles.input}></TextInput>
        <Button title="Add"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  inputView: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    padding: 2,
    borderRadius: 4,
  },
});

export default Home;
