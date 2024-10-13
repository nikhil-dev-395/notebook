import { Pressable, FlatList, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from "../../components/ScreenWrapper.jsx";
import { StatusBar } from 'expo-status-bar';
import Icon from '../../assets/icons';
import { wp } from '../../helpers/common.js';

const Chat = () => {
    const [messages, setMessages] = useState([
        { id: '1', text: 'Hello! How can I help you today?', sender: 'ai' },
    ]);
    const [newMessage, setNewMessage] = useState('');
    const [showInput, setShowInput] = useState(false);  // State to toggle input visibility

    // Send Message Handler
    const sendMessage = () => {
        Keyboard.dismiss();
        if (newMessage.trim()) {
            // Add user message
            const userMessage = { id: Date.now().toString(), text: newMessage, sender: 'user' };
            setMessages((prevMessages) => [...prevMessages, userMessage]);

            // Simulate AI Response (You can replace this with actual AI logic)
            const aiResponse = { id: Date.now() + 1, text: 'This is a simulated AI response.', sender: 'ai' };
            setMessages((prevMessages) => [...prevMessages, aiResponse]);

            // Clear the input
            setNewMessage('');
        }
    };

    const showMessageInput = () => {
        setShowInput((prevState) => !prevState);
    };

    return (
        <ScreenWrapper bg="white">
            <KeyboardAvoidingView
                style={styles.wrapper}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={80}
            >
                <StatusBar />

                {/* Chat Messages List */}
                <FlatList
                    data={messages}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.aiMessage]}>
                            <Text style={[styles.messageText, item.sender === 'ai' ? styles.aiMessageText : null]}>{item.text}</Text>
                        </View>
                    )}
                    contentContainerStyle={styles.chatList}
                    showsVerticalScrollIndicator={false}
                />

                {/* Input Area at the Bottom */}
                {showInput && (
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Type your message..."
                            placeholderTextColor="#B0B0B0"
                            value={newMessage}
                            onChangeText={setNewMessage}
                        />
                        <Pressable style={styles.sendButton} onPress={sendMessage}>
                            <Icon name="SendArrowIcon" color="black" strokeWidth={4} />
                        </Pressable>
                    </View>
                )}

                {!showInput && (
                    <Pressable
                        onPress={showMessageInput}
                        style={styles.floatingButton}
                        accessibilityLabel="Show message input"
                    >
                        <Icon name="AddIcon" color="black" />
                    </Pressable>
                )}
            </KeyboardAvoidingView>
        </ScreenWrapper>
    );
};

export default Chat;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#F9F9F9',
    },
    chatList: {
        padding: 16,
        paddingBottom: 70, // Additional padding for the input area
    },
    messageContainer: {
        marginVertical: 5,
        borderRadius: 15,
        padding: 10,
        maxWidth: '80%', // Limit message width
    },
    userMessage: {
        backgroundColor: '#007AFF', // User message background color
        alignSelf: 'flex-end', // Align user messages to the right
    },
    aiMessage: {
        backgroundColor: '#E1E1E1', // AI message background color
        alignSelf: 'flex-start', // Align AI messages to the left
    },
    messageText: {
        color: '#FFFFFF', // White text for user messages
        fontSize: 16,
    },
    aiMessageText: {
        color: '#000000', // Black text for AI messages
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
    },
    textInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#F2F2F2',
        color: '#4A4A4A',
        paddingHorizontal: 10,
        borderRadius: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#cffafe',
        padding: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    floatingButton: {
        backgroundColor: "#d1d5db",
        padding: 15,
        width: 60,
        height: 60,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        bottom: 100, // Position above the input area
        right: 10,  // Aligns it to the right side of the screen
    },
});
