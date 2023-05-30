import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

export default function filter({ todos, setFilteredTodos }) {

    const show = (mode) => {
        if (mode === 'all') {
            setFilteredTodos(todos);
        } else if (mode === 'active') {
            setFilteredTodos(todos.filter((todo) => todo.status === false));
        } else if (mode === 'done') {
            setFilteredTodos(todos.filter((todo) => todo.status === true));
        }
    }

    return (
        <View style={styles.buttons}>
            <Pressable style={styles.button} onPress={() => show("all")}>
                <Text style={styles.text}>All</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => show("active")}>
                <Text style={styles.text}>Active</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => show("done")}>
                <Text style={styles.text}>Done</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});