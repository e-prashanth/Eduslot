import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminDashboardScreen from "./Screens/AdminDashboardScreen";

const Stack = createNativeStackNavigator();

const AdminRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdminDashboard"
        component={AdminDashboardScreen}
        options={{ title: "Admin Dashboard" }}
      />
      {/* Add more screens for admin as needed */}
    </Stack.Navigator>
  );
};

export default AdminRoutes;
