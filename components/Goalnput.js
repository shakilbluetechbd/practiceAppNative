import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Touchable, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (value) => {
    setEnteredGoal(value)
  }
  const addGoal = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');

  }
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput placeholder="course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
        <View style={styles.buttonContainer}>
          <Button onPress={props.closeModal} title="Cancel" color='red' />
          <Button onPress={addGoal} title="Add" />
        </View>

      </View>
    </Modal>

  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  input: {
    borderBottomColor: 'black',
    color: 'black',
    borderWidth: 1,
    width: '80%',
    height: 30,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  }
})

export default GoalInput;