import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

import Home from './assets/components/Home'
import HostGame from './assets/components/HostGame'
import JoinGame from './assets/components/JoinGame'

import Login from './assets/components/auth/Login'

const Stack = createNativeStackNavigator();

export default function App() {

  const [userToken, setUserToken] = useState('')
  const [usernamesList, setUsernamesList] = useState([])

  const [fontsLoaded] = useFonts({
    'XanhMono': require('./assets/fonts/XanhMono.ttf'),
  });

  const MyTheme = {
    colors: {
      primary: '#E1CDFF',
      background:'#000'
    },
  };

  const MyOptions = {
    headerTitle: (props) => (<MafiaHeader {...props} />),
    headerBackButtonMenuEnabled: false, 
    headerBackVisible: false, 
    headerBackTitleVisible: false, 
    headerStyle:{backgroundColor:'#000'}
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      left:-16,
      alignSelf: 'stretch',
      textAlign:'center',
      paddingTop: 50
    },
    purpleHeader: {
      flex: 1,
      color: '#E1CDFF',
      fontSize: 50,
      fontFamily: 'XanhMono',
      textAlign:'center'
    }
  });

  if (!fontsLoaded) {
    return null;
  }

  function MafiaHeader() {
    return (
      <View style={styles.container}>
        <Text style={styles.purpleHeader}>MAFIA</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <NavigationContainer theme={MyTheme}>
        {userToken ? 
        <Stack.Navigator
          initialRouteName='Home'
          options={MyOptions}>
          <Stack.Screen 
            name="Home" 
            component={Home}
            options={MyOptions} />
          <Stack.Screen 
            name="HostGame" 
            component={HostGame}
            options={MyOptions} />
          <Stack.Screen 
            name="JoinGame" 
            component={JoinGame}
            options={MyOptions} />
        </Stack.Navigator>
        : 
        <Stack.Navigator
          initialRouteName='Login'
          options={MyOptions}>
          <Stack.Screen 
            name="Login" 
            component={Login}
            options={MyOptions}
            initialParams={{ userToken: userToken }}
             />
        </Stack.Navigator>
        }
      </NavigationContainer>
    </View>
  );
}
