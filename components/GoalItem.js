import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
	const itemObj = props.item;
	const [courseGoals, setCourseGoals] = props.courseGoals;
	
	const deleteGoalHandler = (id) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter(
				goal => (goal.id !== id)
			)
		})
	}

	return (
		<View style={styles.goalItem}>
			<Pressable 
				android_ripple={{color:'#210644'}} 
				onPress={() => deleteGoalHandler(itemObj.item.id) }
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalText}>{itemObj.item.text}</Text>
			</Pressable>
		</View>
	)
}

export default GoalItem

const styles = StyleSheet.create({
	goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
	pressedItem: {
		opacity: 0.5
	},
  goalText: {
    color: 'white',
		padding: 8
  }
})