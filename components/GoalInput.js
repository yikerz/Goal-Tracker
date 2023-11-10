import { useState } from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {
	const [goalInput, setGoalInput] = useState("");
	const [courseGoals, setCourseGoals] = props.courseGoals;
	const [visible, setVisible] = props.visible

	const goalInputHandler = (enteredText) => {
    setGoalInput(enteredText);
  }

	const submitGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, 
      {
        id: Math.random().toString(),
        text: goalInput,
      },
    ]);
		setGoalInput('');
		setVisible(false)
  }

	return (
		<Modal visible={visible} animationType='slide'>
			<View style={styles.inputContainter}>
				<Image source={require('../assets/images/goal.png')} style={styles.image}/>
				<TextInput
					style={styles.textInput}
					placeholder='Your new goal...'
					onChangeText={(enteredText) => goalInputHandler(enteredText)}
					value={goalInput}
					/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title='Add Goal'
							onPress={submitGoalHandler}
							color="#b180f0"
						/>
					</View>
					<View style={styles.button}>
						<Button
							title='Cancel'
							onPress={() => setVisible(false)}
							color="#f31282"
						/>
					</View>
					</View>
			</View>
		</Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
	inputContainter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor:'#e4d0ff',
		backgroundColor: '#e4d0ff',
		color: '#120438',
		borderRadius: 6,
    width: '80%',
    marginHorizontal: 8,
    padding: 8,
  },
	buttonContainer: {
		margin: 8,
		flexDirection: 'row',
	},
	button: {
		width: '40%',
		marginHorizontal: 8
	},
	image: {
		width: 100,
		height: 100,
		margin: 20
	}
});
