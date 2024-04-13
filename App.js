import React, { useState ,useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./Screens/Login";
import ProfileScreen from './Screens/ProfileScreen';
import AdminRoutes from "./AdminRouting";
import UserRoutes from "./UserRouting";

const Stack = createNativeStackNavigator();

const App = () => {
  const [userType, setUserType] = useState(null);

  // Simulate fetching user data when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Make a request to the server to get user data
      // For demonstration, let's assume the server returns the user type as "admin" or "user"
      // const response = await fetch("your-api-endpoint");
      // const data = await response.json();
      setUserType('admin');
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle error if necessary
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="AdminRoutes"
          component={AdminRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserRoutes"
          component={UserRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
