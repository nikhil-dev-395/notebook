import { Pressable, FlatList, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from "../../components/ScreenWrapper.jsx";
import Icon from '../../assets/icons/index.jsx';
import { StatusBar } from 'expo-status-bar';

const Search = () => {
    const [tasks, setTasks] = useState([
    ]);
    const [newTask, setNewTask] = useState('');

    // Add Task Handler
    const addTaskHandler = () => {
        Keyboard.dismiss()

        if (newTask.trim()) {
            setTasks((prevTasks) => [...prevTasks, { id: Date.now().toString(), task: newTask }]);
            setNewTask('');
        }
    };

    // Delete Task Handler
    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return (
        <ScreenWrapper>
            <KeyboardAvoidingView
                style={styles.wrapper}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={80} // Adjust if you have headers
            >
                <StatusBar />

                <View style={{ paddingHorizontal: 29, paddingTop: 10 }}><Text style={{ fontSize: 20 }}>Add Task here ....</Text></View>


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

                {/* Input Area at the Bottom */}
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
            </KeyboardAvoidingView>
        </ScreenWrapper>
    );
};

export default Search;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff', // Light theme background
    },
    listWrapper: {
        flex: 1, // Ensure the list occupies all available space above the input
    },
    taskList: {
        paddingVertical: 20,
    },
    taskRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'gray',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    taskText: {
        color: '#fff',
        fontSize: 18,
        flex: 1,
        paddingLeft: 15,
    },
    icon: {
        tintColor: '#fff',
    },
    deleteButton: {
        width: 23,
        height: 23,
        backgroundColor: 'red',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteButtonContent: {
        width: 20,
        height: 20,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14,
        backgroundColor: '#fff',

        position: 'absolute',
        bottom: "2%", // Stays fixed at the bottom
        left: 0,
        right: 0,
    },
    textInput: {
        flex: 1,
        height: 40,
        backgroundColor: 'whitesmoke',
        color: '#000',
        paddingHorizontal: 10,
        borderRadius: 15,
        marginRight: 10,
        // paddingVertical: 14,

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
