/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
enableScreens(true);

import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';

import HomeView from './src/view/HomeView';
import EssayListView from './src/view/EssayListView';
import WorshipView from './src/view/WorshipView';
import InformationView from './src/view/InformationView';
import FloatingTabBar from './src/navigation/FloatingTabBar';

export type RootTabParamList = {
  HomeView: undefined;
  WorshipView: undefined;
  EssayListView: undefined;
  InformationView: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="HomeView"
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { display: 'none' }, // 기본 탭바 숨기고 커스텀 탭바 사용
          }}
          tabBar={(props: BottomTabBarProps) => <FloatingTabBar {...props} />}
        >
          <Tab.Screen name="HomeView" component={HomeView} />
          <Tab.Screen name="WorshipView" component={WorshipView} />
          <Tab.Screen name="EssayListView" component={EssayListView} />
          <Tab.Screen name="InformationView" component={InformationView} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}