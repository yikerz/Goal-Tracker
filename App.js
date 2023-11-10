import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  View
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addNewGoalHandler = () => {
    setModalIsVisible(true);
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer} >
        <Button 
          color='#a065ec'
          title='Add New Goal'
          onPress={() => addNewGoalHandler()}
          />
        <GoalInput visible={[modalIsVisible, setModalIsVisible]} courseGoals={[courseGoals, setCourseGoals]} />
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemObj => (
              <GoalItem 
              item={itemObj} 
              courseGoals={[courseGoals, setCourseGoals]}
              />
              )}
              keyExtractor={(item, index) => {
                return item.id;
              }}
            alwaysBounceVertical='false'
            />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 5,
  },
});
