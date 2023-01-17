import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// 네비게이션 모듈
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// 서브페이지
import Home from './pages/Home'
import Recents from './pages/Recents'


const Stack = createNativeStackNavigator();

export default function App() {
  // const navigation = useNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Recents" component={Recents} />
      </Stack.Navigator>
      <Button
        onPress={()=>{
          // navigation.navigate('Recents')
        }} 
        title='지난회차보기' />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
