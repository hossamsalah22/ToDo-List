import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { home } from './components/home';
import todoDetails from './components/todoDetails';

const Stack = createNativeStackNavigator();


export default function App() {
    return (
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
    );
}