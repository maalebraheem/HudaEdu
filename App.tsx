import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MainApp from './app/components/MainApp';
import GameScreen from './app/components/GameScreen';
import colors from './app/utils/colors';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string = '';

            if (route.name === 'MainApp') {
              iconName = 'school-outline';
            } else if (route.name === 'Game') {
              iconName = 'game-controller-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.gray,
          tabBarStyle: {
            backgroundColor: colors.white,
            borderTopWidth: 0,
            elevation: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 5,
          },
        })}
      >
        <Tab.Screen name="MainApp" component={MainApp} options={{ title: 'Main App' }} />
        <Tab.Screen name="Game" component={GameScreen} options={{ title: 'Game' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
