import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { home } from './components/home';
import todoDetails from './components/todoDetails';
import {Provider} from "react-redux"
import store from "./src/app/store"
const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={home}
                        options={{ title: 'TODO APP' }}
                    />
                    <Stack.Screen name="todoDetails" component={todoDetails} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}