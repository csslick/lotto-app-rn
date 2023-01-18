import { StyleSheet, Text, View, Button } from 'react-native';
// 네비게이션 모듈
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// 서브페이지
import Home from './pages/Home'
import Recents from './pages/Recents'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    // 라우팅
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="홈" component={Home} />
        <Stack.Screen 
          name="지난회차보기" 
          component={Recents} 
        />
      </Stack.Navigator>
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
