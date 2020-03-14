import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList  } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/Goalnput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode]= useState(false);



  const addGoalHandler = (enteredGoal) => {
    console.log(enteredGoal);
    // setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
    setIsAddMode(false)
  }

  const removeGoalhandler = goalId => {
    console.log("here we deleting")
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }
  const closeModal=()=>{
    setIsAddMode(false);
  }
  return (
    <View style={styles.screen}>
    <Button title="Add New Course" onPress={()=>setIsAddMode(true)}/>
      <GoalInput closeModal={closeModal} visible={isAddMode}  onAddGoal={addGoalHandler} />
      <FlatList data={courseGoals}
        keyExtractor={(item,index)=>item.id}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalhandler} title={itemData.item.value} />}
      />
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
  screen: {
    padding: 50
  },


});
