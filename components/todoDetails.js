import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function todoDetails({ route }) {
    const { todo } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{todo.title}</Text>
            <Text style={styles.description}>{todo.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: '10px',
    },
    title: {
        fontSize: 24
    },
    description: {
        fontSize: 18
    }
});