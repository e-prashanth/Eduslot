import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserDashboardScreen from "./Screens/UserDashboardScreen";
import UserSlotBokkingScreen from './Screens/UserSlotBokkingScreen';
import UserViewTimeTabelScreen from './Screens/UserViewTimeTabelScreen';
import UserPreviousBokkingsScreen from './Screens/UserPreviousBokkingScreen';
const Stack = createNativeStackNavigator();

const UserRoutes = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="UserDashboard"
        component={UserDashboardScreen}
        options={{ title: "User Dashboard", headerShown:false }}
      />
      <Stack.Screen
        name="UserSlotBokking"
        component={UserSlotBokkingScreen}
        options={{ title: "User SlotBokking", headerShown:false }}
      />
      <Stack.Screen
        name="UserPreviousBokkings"
        component={UserPreviousBokkingsScreen}
        options={{ title: "User PreviousBokkings", headerShown:false }}
      />
      <Stack.Screen
        name="UserViewTimeTable"
        component={UserViewTimeTabelScreen}
        options={{ title: "User TimeTable", headerShown:false }}
      />
    </Stack.Navigator>
  );
};

export default UserRoutes;
