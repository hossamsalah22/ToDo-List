import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import ToDos from "./todos";
import Divider from "./divider";
import Filter from "./filter";
import AddTodoForm from "./addTodoForm";
import { useSelector, useDispatch } from "react-redux";
import { changeStatus } from "../src/features/todosSlice";

export function home(navigation) {
    const [filteredTodos, setFilteredTodos] = useState([]);
    const todos = useSelector((state) => state.todos.value);
    const dispatch = useDispatch();
    const handleTodoSelect = (index, todo, isSelected) => {
        return dispatch(changeStatus(todo.title));
        const updatedItem = [...todos];
        updatedItem[index].status = isSelected;
        setFilteredTodos(updatedItem);
    };

    const readData = async () => {
        try {
            const value = await AsyncStorage.getItem("todos");
            if (value) {
                setFilteredTodos(JSON.parse(value));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const saveData = async () => {
        try {
            await AsyncStorage.setItem("todos", JSON.stringify(todos));
            setFilteredTodos(todos);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        readData();
    }, []);
    useEffect(() => {
        saveData();
    }, [todos]);

    return (
        <View style={styles.container}>
            <AddTodoForm />
            <Divider />
            <View>
                <Filter todos={todos} setFilteredTodos={setFilteredTodos}></Filter>
            </View>
            <Divider />

            <View>
                <ToDos
                    todos={filteredTodos}
                    navigation={navigation.navigation}
                    handleTodoSelect={handleTodoSelect}
                    setTodos={() => {}}></ToDos>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: '10px',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: '10px',
    },

});
