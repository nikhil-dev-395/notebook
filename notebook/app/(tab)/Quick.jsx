import { Pressable, FlatList, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from "../../components/ScreenWrapper.jsx";
import Icon from '../../assets/icons/index.jsx';
import { StatusBar } from 'expo-status-bar';
import { wp } from '../../helpers/common.js';

const Quick = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [showInput, setShowInput] = useState(false);  // State to toggle input visibility
    const [showButton, setShowButton] = useState(true)
    // Add Task Handler
    const addTaskHandler = () => {
        Keyboard.dismiss();

        if (newTask.trim()) {
            setTasks((prevTasks) => [...prevTasks, { id: Date.now().toString(), task: newTask }]);
            setNewTask('');
            setShowInput(false); // Hide input after adding the task
        }
        setShowButton(true)

    };

    // Delete Task Handler
    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    // Show Add Task Bar Handler
    const showAddTask = () => {
        setShowInput((prevState) => !prevState);  // Toggle the input visibility
        setShowButton(false)
    };

    return (
        <ScreenWrapper bg="white">
            <KeyboardAvoidingView
                style={styles.wrapper}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={80} // Adjust if you have headers
            >
                <StatusBar />

                <View style={{ paddingHorizontal: 29, paddingTop: 10 }}>
                    <Text style={{ fontSize: 20 }}>Add Task here ....</Text>
                </View>

                {/* Scrollable Task List */}
                <View style={styles.listWrapper}>
                    <FlatList
                        data={tasks}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.taskRow}>
                                {/* Task Icon */}
                                <Icon name="TaskIcon" width={20} height={40} color="pink" style={styles.icon} />

                                {/* Task Text */}
                                <Text style={styles.taskText}>{item.task}</Text>

                                {/* Action Button */}
                                <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(item.id)}>
                                    <View style={styles.deleteButtonContent} />
                                </TouchableOpacity>
                            </View>
                        )}
                        contentContainerStyle={styles.taskList}
                        showsVerticalScrollIndicator={false} // Hide scroll bar for modern look
                    />
                </View>

                {/* Conditionally show the Input Area at the Bottom */}
                {showInput && (
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter a new task"
                            placeholderTextColor="#999"
                            value={newTask}
                            onChangeText={setNewTask}
                        />
                        <Pressable style={styles.addButton} onPress={addTaskHandler}>
                            <Text style={styles.addButtonText}>+</Text>
                        </Pressable>
                    </View>
                )}

                {/* Floating Button to Show Add Task Input */}


                {showButton && <Pressable
                    onPress={showAddTask}
                    style={{
                        backgroundColor: "#d1d5db",
                        padding: 15,
                        width: 60,
                        height: 60,
                        borderRadius: 35,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: "absolute",
                        bottom: wp(24), // Position above the input area
                        right: 10  // Aligns it to the right side of the screen
                    }}
                >
                    <Icon name="AddIcon" color="black" />
                </Pressable>}
            </KeyboardAvoidingView>
        </ScreenWrapper>
    );
};

export default Quick;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff', // Soft background for a modern look
    },
    header: {
        paddingHorizontal: 29,
        paddingTop: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333', // Darker text for better readability
    },
    listWrapper: {
        flex: 1,
        paddingTop: 20, // Added padding to give space between tasks and header
    },
    taskList: {
        paddingVertical: 20,
    },
    taskRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff', // White background for each task
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 20,
        borderRadius: 12, // Rounded edges for a softer look
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5, // Subtle shadow for modern feel
        elevation: 3, // Android shadow support
    },
    taskText: {
        color: '#333', // Dark text for better readability
        fontSize: 18,
        flex: 1,
        paddingLeft: 15,
    },
    deleteButton: {
        width: 30,
        height: 30,
        backgroundColor: '#ff4d4f', // Bright red delete button
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20, // Rounded top corners for modern feel
        position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 8,
    },

    textInput: {
        flex: 1,
        height: 40,
        backgroundColor: 'whitesmoke',
        color: '#000',
        paddingHorizontal: 10,
        borderRadius: 15,
        marginRight: 10,
    },
    addButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 16,
        borderRadius: 15,
        paddingVertical: 10,
    },
    addButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
