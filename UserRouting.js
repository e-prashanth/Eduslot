import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserDashboardScreen from "./Screens/UserDashboardScreen";
import UserSlotBookingScreen from './Screens/UserSlotBookingScreen';
import UserViewTimeTabelScreen from './Screens/UserViewTimeTabelScreen';
import UserPreviousBookingsScreen from './Screens/UserPreviousBookingScreen';
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
        name="UserSlotBooking"
        component={UserSlotBookingScreen}
        options={{ title: "User SlotBooking", headerShown:false }}
      />
      <Stack.Screen
        name="UserPreviousBookings"
        component={UserPreviousBookingsScreen}
        options={{ title: "User PreviousBookings", headerShown:false }}
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
