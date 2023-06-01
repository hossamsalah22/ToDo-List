import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../src/features/todosSlice";

const addTodoForm = () => {
  const todos = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const save = () => {
    setError("");
    if (!title.length) {
      setError("title can't Be Empty.");
      return;
    }
    if (!description.length) {
      setError("Description can't Be Empty.");
      return;
    }
    if (todos.filter((el) => el.title == title).length) {
      setDescription("");
      setTitle("");
      setError("duplicated todo.");
      return;
    }
    const newTodos = { title, description, status: false };
    setTitle("");
    setDescription("");
    return dispatch(addTodo(newTodos));
    setTodos([...todos, newTodos]);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Enter the Title"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        placeholder="Enter the Description"
        keyboardType="numeric"
      />
      <Text
        style={{ color: "red", textAlign: "center", marginBottom: 3 }}
        View={error.length}>
        {error}
      </Text>
      <Button title="Save" onPress={save} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: '10px',
  },
});

export default addTodoForm;
