import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminDashboardScreen from "./Screens/AdminDashboardScreen";
import DepartmentFacilitiesScreen from "./Screens/DepartmentFacilitiesScreen";
import UserViewTimeTabelScreen from "./Screens/UserViewTimeTabelScreen";
import CreateTimeTableScreen from './Screens/CreateTimeTableScreen';

const Stack = createNativeStackNavigator();

const AdminRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdminDashboard"
        component={AdminDashboardScreen}
        options={{ title: "Admin Dashboard", headerShown:false }}
      />
      <Stack.Screen
        name="DepartmentFacilities"
        component={DepartmentFacilitiesScreen}
        options={{ title: "Department Facilities", headerShown:false }}
      />
      <Stack.Screen
        name="CreateTimeTable"
        component={CreateTimeTableScreen}
        options={{ title: "Create TimeTable", headerShown:false }}
      />
      <Stack.Screen
        name="ViewTimeTable"
        component={UserViewTimeTabelScreen}
        options={{ title: "View TimeTable", headerShown:false }}
      />
      {/* Add more screens for admin as needed */}
    </Stack.Navigator>
  );
};

export default AdminRoutes;
